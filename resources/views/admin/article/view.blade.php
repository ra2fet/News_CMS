@extends('layouts.header')
@section('title','View Article')
@section('body')
<script src="https://cdn.jsdelivr.net/npm/@editorjs/editorjs@latest"></script> 
<script src="https://cdn.jsdelivr.net/npm/@editorjs/list@latest"></script>
{{-- <script src="https://cdn.jsdelivr.net/npm/editorjs-html@3.4.0/build/edjsHTML.browser.js"></script>  --}}
<script src="https://cdn.jsdelivr.net/npm/editorjs-parser@1/build/Parser.browser.min.js"></script> 
<script src="https://cdn.jsdelivr.net/npm/@editorjs/raw"></script> 
<script src="{{asset("js/gif-image/gif-image.js")}}"></script>
<script src="{{asset("js/gif-image/gif-image2.js")}}"></script>

<div class="card border-0 ">
    <div class="card-header d-flex align-items-center bg-dark text-light rounded-0">
        <a href="{{route('articles.index')}}"><i class="fa-solid fa-arrow-left"></i></a>
        <h2 class="mx-4">View article</h2>
    </div>
    <div class="card-body">
<div class="row">
    <div class="col-12">
      <div class="alert text-dark" role="alert">
        <div class="alert-body">
          <!-- Vertical Wizard -->
          <div class="card-body">
              @if(session()->has('message'))
                <div class="alert alert-danger p-2">
                    {{ session()->get('message') }}
                </div>
             @endif
  
  @foreach ($errors->all() as $error)
  <li>{{ $error }}</li>
  @endforeach
            
                  <div class="mb-1 row col-12 mt-2 text-dark">
           
                    <div class="col-12">
                        <label class="form-label" >Article Title</label>
                        <h2>
                          {{$article->article_title}}                           
                        </h2>
                   
                      <h2>
                       <h5>{{ $article->created_at}} </h5>                           
                      </h2>
                  
                    </div>
                     
                
               
                    <hr>
                       <div class="mt-3 row col-12">
                          <div class="col-12">
                              <label class="form-label" >Article Content</label>
                            
                          <p>{!! $article->article_content !!}</p>   
                       
                       
                      </div>
  
                  </div>
                
                  {{-- <div class="text-center p-2">
                    <button id="save-button" type="submit" class="btn btn-primary px-5">Save</button>

                  </div> --}}
             
            </div>
    <!-- /Vertical Wizard -->
        </div>
      </div>
    </div>
  </div>  </div>
</div>

@include('layouts.footer')

@endsection
