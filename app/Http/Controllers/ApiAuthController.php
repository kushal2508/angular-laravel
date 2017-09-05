<?php

namespace App\Http\Controllers;

use JWTAuth;
use App\User;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\JWTException;

class ApiAuthController extends Controller
{
    public function authenticate () {
    	$credentials = request()->only('email', 'password');

    	try {
    		$token = JWTAuth::attempt($credentials);

    		if(!$token) {
    			return response()->json(['error' => 'invalid credentials'], 401);
    		}
    	} catch (JWTException $e) {
    		return response()->json(['error' => 'something went wrong'], 401);
    	}

    	return response()->json(['token' => $token], 200);
    }

    public function register () {
    	$user = User::create([
			'name' => request()->name,
			'email' => request()->email,
			'password' => bcrypt(request()->password)
    	]);

    	$token = JWTAuth::fromUser($user);
    	return response()->json(['token' => $token], 200);
    }

    public function user () {
    	$token = JWTAuth::getToken();
    	$user = JWTAuth::toUser($token);
    	return $user;
    }
}