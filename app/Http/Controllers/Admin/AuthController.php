<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
use App\Models\User;

class AuthController extends Controller
{
    
    public function index()
    {
       
        return view('admin.auth.login');
    }
    public function create()
    {
        $items = null;
        return view('admin.auth.signup', compact('items'));
    }
    

    public function store(Request $request)
    {
        // return $request;

        $this->validate($request, [
            'name' => 'required|min:3|max:100',
            'email' => 'email',
            'password' => 'min:6|required_with:confirm_password|same:confirm_password',
            'confirm_password' => 'min:6'
        ]);

        $user = new User();
        $user->name = $request->name;
        $user->email  = $request->email ;
        $user->user_type  = 2 ;
        $user->password = bcrypt($request->password);

        $checkemail = User::where('email',$request->email)->count();
      
        if($checkemail > 0){


            return redirect()->back()->with('error','Sorry, this email is already exist')->withInput();
        }


        // if ($request->hasFile('profile_image')) {

        //     $profile_image = $request->profile_image;		
        //     $ext = '.'.$profile_image->getClientOriginalExtension();	
        //     $filename = str_replace($ext, date('d-m-Y-H-i') . $ext, $profile_image->getClientOriginalName());
        //     $destination = 'uploads/users';		
        //     $profile_image->move($destination, $filename);
        //     $user['profile_image'] = strtolower($filename); 
        //  }

        $user->save();
        return redirect('/login');
    }

    public function login(Request $request)
    {
        
        $credentials =['email' => $request->email, 'password' => $request->password];
        error_log('Hi');
        error_log($request->email);
        error_log($request->password);


        //  dd($credentials);
        if (Auth::attempt($credentials)) {
            if (Auth::user()->banned == 1) {
                Auth::logout();
                return redirect()->route('login');
            }
 
            error_log('Some message here.');
            error_log(Auth::user()->user_type);
            if (Auth::user()->user_type == 1) {
                
                return redirect('/dashboard');
            }

            // return Auth::user()->hasRole('Admin');
                 return redirect('/login');
         }
        return redirect()->route('login')->with(['error' => 'Incorrect email or password']);
    }

    public function logout()
    {
         
        Auth::logout();
    
        return redirect('/login');
    }
}