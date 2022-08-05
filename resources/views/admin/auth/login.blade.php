@extends('layouts.header')
@section('title','Login')
@section('styles')
<link rel="stylesheet" href="{{asset("css/style.css")}}">
@endsection
@section('body')
<div id="content" class="img js-fullheight" style="background-image:url(images/xbg.jpg.pagespeed.ic.tiVxeakBSd.webp)">
    <section class="ftco-section">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-6 text-center mb-5">
                    <h2 class="heading-section">Login to News CMS</h2>
                </div>
            </div>
           
            <div class="row justify-content-center">
                <div class="col-md-6 col-lg-4">
                    @if(Session::has('error'))
                    <div class="alert  border-danger text-danger text-center p-2">
                      {{ Session::get('error')}}
                    </div>
                    @endif
                    <div class="login-wrap p-0">
                        <h3 class="mb-4 text-center">Have an account?</h3>
                        <form action="{{url('login')}}" method="post" class="signin-form" >
                            @csrf
                            <div class="form-group">
                                <input type="email" class="form-control" placeholder="Email" name="email" required>
                            </div>
                            <div class="form-group my-2">
                                <input id="password-field" type="password" class="form-control" name="password" placeholder="Password" required>
                                <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password"></span>
                            </div>
                            <div class="form-group mt-2">
                                <button id="loginbtn" type="submit" class="form-control btn btn-primary submit px-3">Sign In</button>
                            </div>
                            <div class="form-group d-md-flex ">
                                <div class="w-50">
                                    <label class="checkbox-wrap checkbox-primary">Remember Me
                                        <input type="checkbox" checked>
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                                <div class="w-50 text-md-right">
                                    <a href="#" style="color: #fff">Forgot Password</a>
                                </div>
                            </div>
                            <div class="font-weight-bold text-md-right">
                                <a href="{{url('/dashboard')}}" style="color: rgb(255, 247, 0)">Continue as a guest >></a>
                            </div>
                        </form>
                        <p class="w-100 text-center">&mdash; Or Sign Up &mdash;</p>
                        <div class="social d-flex text-center">
                            <a href="{{url('/signup')}}" class="px-2 py-2 mr-md-1 rounded"><span class="ion-logo-facebook mr-2"></span> Sign Up</a>
                            {{-- <a href="#" class="px-2 py-2 ml-md-1 rounded"><span class="ion-logo-twitter mr-2"></span> Twitter</a> --}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
<script src="{{asset('js/jquery.min.js')}}"></script>
<script src="{{asset('js/bootstrap.js')}}"></script>
<script src="{{asset('js/main.js')}}"></script>
<script src="{{asset('js/popper.js')}}"></script>

@endsection
