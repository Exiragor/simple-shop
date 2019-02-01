<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\LoginUser;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\Http\Controllers\Controller;

class AuthController extends Controller
{
    public function login(LoginUser $request) {
        $credentials = $request->only('email', 'password');

        if (! $user = User::where('email', $credentials['email'])->first()) {
            return response()->json(['error' => 'user not found'], 401);
        }
        $id = $user['id'];
        $pass = $user['password'];

        if (!Hash::check($credentials['password'], $pass)) {
            return response()->json(['error' => 'password is incorrect'], 401);
        }

        try {
            $token = JWTAuth::fromUser($user);
        } catch (JWTException $e) {
            // something went wrong whilst attempting to encode the token
            return response()->json(['error' => 'could_not_create_token'], 500);
        }

        // all good so return the token
        return response()->json(compact(['id', 'token']));
    }
}
