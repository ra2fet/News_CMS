@extends('layouts.header')
@section('title','All Article')
@include('layouts.navbar')
@section('styles')
<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.12.1/css/jquery.dataTables.css">
@endsection
@section('body')
<div class="card border-0 ">
    <div class="card-header   d-flex justify-content-between align-items-center bg-light text-dark rounded-0">
        <div class="d-flex align-items-center"><a href="{{route('dashboard.index')}}">
            <i class="fa-solid fa-list text-dark"></i></a>
            <h2 class="mx-4">All articles</h2></div>

    </div>
    <div class="card-body ">
        <section id="responsive-datatable">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        @if(Auth::check())
                        <div class="card-header safe-margin border-bottom">
                            {{-- <h4 class="card-title">{{ trans('locale.Users') }}</h4> --}}
                 <a href="{{route('article.create')}}"><button type="button" class="btn btn-primary">Add a new article</button></a> 
                        </div>@endif
                        @if (Session::has('message'))
                            <div class="alert alert-success">{{Session::get('message')}}</div>
                        @endif
      
                        <div class="card-datatable px-1 pt-3">
                            <table class="display" id="default">
                                <thead>
                                  <tr>
                                    <th></th>
                                    <th>{{__('Article Title')}}</th>
                                    <th>{{__('Article Content')}}</th>
                                    <th>{{__('Action')}}</th>
                                  </tr>
                                </thead>
                                  <body>
                                      @foreach ($articles as $item)
                                      <tr>
                                          <td></td>
                                          <td>{{$item->article_title}}</td>
                                          <td>{{ \Illuminate\Support\Str::limit(strip_tags($item->article_content), $limit = 40, $end = '...') }}</td>
                                      
                                          <td>
                                            <div class="d-inline-flex text-center">
                           
                                                <a href="{{route('article.view',$item->article_slug)}}" >
                                                  <i class="fa-solid fa-list-alt text-secondary border-0 mx-2"></i>
                                                  </a> 
                                                 @if(Auth::check() && Auth::user()->user_type == 1)   
                                                <a href="javascript:;" class="will-delete">
                                                  <form method="post" 
                                                  action="{{route('article.delete',$item->article_id)}}">
                                                  @csrf
                                                  @method('DELETE')
                                                  <i class="fa fa-trash text-danger border-0 mx-3"></i>
                                                </form>
                                                </a> 
                                                @endif
                                             
                                          </td>
                                
                                      </tr>
                                      @endforeach
                                  

                              </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  </div>  </div>
@include('layouts.footer')

@endsection
