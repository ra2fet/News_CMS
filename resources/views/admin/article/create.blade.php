@extends('layouts.header')
@section('title','Create Article')
@section('body')
<script src="https://cdn.jsdelivr.net/npm/@editorjs/editorjs@latest"></script> 
{{-- <script src="https://cdn.jsdelivr.net/npm/@editorjs/list@latest"></script> --}}
{{-- <script src="https://cdn.jsdelivr.net/npm/editorjs-html@3.4.0/build/edjsHTML.browser.js"></script>  --}}
<script src="https://cdn.jsdelivr.net/npm/editorjs-parser@1/build/Parser.browser.min.js"></script> 
<script src="{{asset("js/gif-image/gif-image.js")}}"></script>
<script src="{{asset("js/gif-image/gif-image2.js")}}"></script>

<div class="card border-0 ">
    <div class="card-header d-flex align-items-center bg-dark text-light rounded-0">
        <a href="{{url()->previous()}}"><i class="fa-solid fa-arrow-left"></i></a>
        <h2 class="mx-4">Create a new article</h2>
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
              <form id="form" action="{{ route('article.store') }}" method="post" enctype="multipart/form-data">
                  @csrf
                  <div class="mb-1 row col-12 mt-2 text-dark">
           
  
                      <div class="col-12">
                          <label class="form-label" for="article_title">Article Title</label>
                          <input
                              type="text"
                              id="article_title"
                              class="form-control" value="{{ old('article_title') }}"
                              placeholder="Article Title"
                              name="article_title"
                              aria-label="Article Title"
                              aria-describedby="basic-addon-name"
                              required
                          />
                      </div>
                
               
  
                       <div class="mt-3 row col-12">
                          <div class="col-12">
                              <label class="form-label" for="article_content">Article Content</label>
                              <div id="article_content" class="border border-dark"></div>
                              {{-- <button type="button" id="save-button" class="btn btn-primary px-5">Save</button> --}}

                              {{-- <textarea
                                  type="text"
                                  id="article_content" 
                                  class="form-control justify-content-center"
                                  placeholder="Article Content"
                                  name="article_content"
                                  aria-label="Article Content"
                                  aria-describedby="basic-addon-name"
                                  
                              >{{ old('article_content') }}</textarea> --}}
                          </div>
                       
                      </div>
  
                  </div>
                  <input type="hidden" id="myContent" name="article_content" />

                  <div class="text-center p-2">
                    <button id="save-button" type="submit" class="btn btn-primary px-5">Save</button>

                  </div>
              </form>
            </div>
    <!-- /Vertical Wizard -->
        </div>
      </div>
    </div>
  </div>  </div>
</div>
 <script src="{{asset('js/editorjs.js')}}"></script>

@include('layouts.footer')
<script src="{{asset('js/ajax/ajaxcalls.js')}}"></script>
@endsection
