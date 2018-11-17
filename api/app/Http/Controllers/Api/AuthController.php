<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\LoginUser;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(LoginUser $request) {
        $auth_result = Auth::attempt(['email' => $request->email, 'password' => $request->password]);

        if ($auth_result) {
            $user = Auth::user();
        } else {

        }
    }
}
