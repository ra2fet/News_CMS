<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\AuthController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\ArticleController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });
Route::get('/', [AuthController::class, 'index']);

// Auth
Route::get('/login',[AuthController::class, 'index']);
Route::post('login', [AuthController::class, 'login'])->name('login');
Route::get('/signup',[AuthController::class, 'create']);
Route::post('signup', [AuthController::class, 'store'])->name('signup');
Route::get('logout', [AuthController::class, 'logout'])->name('logout');


// Public
Route::get('/dashboard',[ArticleController::class, 'index'])->name('dashboard.index');
Route::get('/articles',[ArticleController::class, 'allArticles'])->name('articles.index');
Route::get('/article/view/{slug}',[ArticleController::class, 'getArticle'])->name('article.view');

// Private
Route::middleware(['auth'])->group(function () {
    Route::get('/article/create',[DashboardController::class, 'createArticle'])->name('article.create');
    Route::post('/article/store',[DashboardController::class, 'storeArticle'])->name('article.store');
    Route::delete('/article/delete/{id}',[DashboardController::class, 'deleteArticle'])->name('article.delete');
});