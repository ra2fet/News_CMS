@extends('layouts.header')
@section('title','Dashboard')
@section('body')
@include('layouts.navbar')
<div class="d-flex justify-content-center align-items-center vh-100 ">
    <div class="text-center">
        <i class="fa fa-home fa-2x mb-3"></i>
        <p>Welcome to News CMS</p> 
    
    </div>
</div>
@include('layouts.footer')
@endsection
