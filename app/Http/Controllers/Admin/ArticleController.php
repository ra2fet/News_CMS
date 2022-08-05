<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\article;

class ArticleController extends Controller
{
    public function index()
    {
       
        return view('admin.dashboard');
    }

    public function allArticles()
    {
       $articles= article::get();
        return view('admin.article.index',compact('articles'));
    }
    
    public function getArticle($slug)
    {

        $article= article::where('article_slug',$slug)->first();
        if(!$article){

            return 'Article Not Found';
        }

        return view('admin.article.view',compact('article'));
    }


}