<?php

use Illuminate\Http\Request;

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

/*Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/

Route::middleware('jwt.auth')->get('/user', 'ApiAuthController@user');

Route::post('/authenticate', 'ApiAuthController@authenticate');
Route::post('/register', 'ApiAuthController@register');

Route::middleware('jwt.auth')->get('/employees', 'EmployeeController@showall');
Route::middleware('jwt.auth')->post('/employees', 'EmployeeController@store');
Route::middleware('jwt.auth')->get('/employees/{id}', 'EmployeeController@show');
Route::middleware('jwt.auth')->put('/employees/{id}', 'EmployeeController@update');
Route::middleware('jwt.auth')->delete('/employees/{id}', 'EmployeeController@destroy');