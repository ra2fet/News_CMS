<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\article;
use Illuminate\Support\Str;

class DashboardController extends Controller
{
   

    public function createArticle()
    {
       
        return view('admin.article.create');
    }

    public function storeArticle(Request $request)
    {
       
        $this->validate($request, [
            'article_title' => 'required',
            'article_content' => 'nullable|min:5',
        ]);

        $article = new article();
        $article->article_title = $request->article_title;
        $article->article_content = $request->article_content;
        $article->article_slug = Str::slug($request->article_title);
        
        $article->save();
        return redirect()->route('articles.index')->with('message','Article created successfully');
    }

    public function deleteArticle($id)
    {
        $items = article::find($id);
        $items->delete();
        return redirect()->route('articles.index');
    }
}