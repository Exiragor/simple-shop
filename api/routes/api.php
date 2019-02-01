<?php

use App\Http\Controllers\Api\ProductsController;
use App\Http\Controllers\Api\CommentsController;
use App\Http\Controllers\Api\OrdersController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\UsersController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('products', [ProductsController::class, 'index']);
Route::get('products/{id}', [ProductsController::class, 'get']);
Route::get('comments', [CommentsController::class, 'index']);
Route::post('comments', [CommentsController::class, 'store']);
Route::post('orders', [OrdersController::class, 'store']);

Route::post('auth/login', [AuthController::class, 'login']);

Route::middleware('jwt.auth')->group(function () {
    Route::get('users/me', [UsersController::class, 'me']);
});
