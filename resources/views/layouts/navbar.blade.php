@section('nav')
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand px-2 mx-2" href="#">NEWS CMS</a>
  
    <div class="collapse navbar-collapse " id="navbarToggler">
      <ul class="navbar-nav me-auto  mt-2 mt-lg-0">
        <li class="nav-item active text-center">
          <a class="nav-link" href="{{route('dashboard.index')}}">Home</a>
        </li>
        <hr class="undertxt d-block d-md-none">
        <li class="nav-item text-center">
          <a class="nav-link" href="{{route('articles.index')}}">Articles</a>
        </li>
        <hr class="undertxt d-block d-md-none">
        <li class="nav-item d-block d-md-none text-center">
          <a class="nav-link" href="{{route(Auth::check()?'logout':'login')}}">{{Auth::check()?"Logout":"Login"}}</a>
        </li>
    
      </ul>
      <div class="pe-5  d-none d-md-block">
        @if (Auth::check())
        <div class="d-flex align-items-center">
          <p class="text-light my-auto me-3">Welcome {{Auth::user()->name}}</p> 
          <a href="{{route('logout')}}"><i class="fa fa-sign-out text-light" aria-hidden="true"></i></a>   
        </div>
        @else
        <div class="d-flex align-items-center">
          <p class="text-light my-auto me-3">Welcome Guest</p> 
          <a href="{{route('login')}}"><i class="fa fa-sign-in" aria-hidden="true"></i></a>   
        </div>
        @endif   
      </div>
    </div>
  </nav>
  @endsection
