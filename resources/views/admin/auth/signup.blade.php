@extends('layouts.header')
@section('title','Signup')
@section('styles')
<link rel="stylesheet" href="{{asset("css/style.css")}}">
@endsection
@section('body')
<div id="content" class="img js-fullheight" style="background-image:url(images/xbg.jpg.pagespeed.ic.tiVxeakBSd.webp)">
    <section class="ftco-section">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-6 text-center mb-5">
                    <h2 class="heading-section">Register to News CMS</h2>
                </div>
            </div>
           
            <div class="row justify-content-center">
                <div class="col-md-6 col-lg-4">
                    @if($errors->any())
                    <div class="alert  border-danger text-danger text-center p-2"> 
                    @foreach ($errors->all() as $error)
                    <li >{{ $error }}</li>
                    @endforeach
                     </div>
                  @endif 
                    @if(Session::has('error'))
                    <div class="alert  border-danger text-danger text-center p-2">
                      {{ Session::get('error')}}
                    </div>
                    @endif
                    <div class="login-wrap p-0">
                        <form action="{{url('signup')}}" method="post" class="signin-form" >
                            @csrf
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Name" name="name" value="{{old('name')}}" required>
                            </div>
                            <div class="form-group mt-2">
                                <input type="email" class="form-control" placeholder="Email" name="email" value="{{old('email')}}" required>
                            </div>
                            <div class="form-group my-2">
                                <input id="password-field" type="password" class="form-control" name="password" value="{{old('password')}}" placeholder="Password" required>
                                <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password"></span>
                            </div>
                            <div class="form-group my-2">
                                <input id="confirm-password-field" type="password" class="form-control" name="confirm_password" value="{{old('confirm_password')}}" placeholder="Confirm Password" required>
                                <span toggle="#confirm-password-field" class="fa fa-fw fa-eye field-icon toggle-password"></span>
                            </div>
                            <div class="form-group mt-2">
                                <button id="loginbtn" type="submit" class="form-control btn btn-primary submit px-3">Sign Up</button>
                            </div>
                         
                        </form>
                        <p class="w-100 text-center">&mdash; Or Login &mdash;</p>
                        <div class="social d-flex text-center">
                            <a href="{{url()->previous()}}" class="px-2 py-2 mr-md-1 rounded"><span class="ion-logo-facebook mr-2"></span> Go to Login </a>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
@endsection
