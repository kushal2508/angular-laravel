<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('app');
});

// Templates
Route::group(array('prefix'=>'/templates/'),function(){
    Route::get('{template}', array( function($template)
    {
        $template = str_replace(".html","",$template);
        View::addExtension('html','php');
        return View::make('templates.'.$template);
    }));
});

// Route::get('/api/employees', 'EmployeeController@showall');
// Route::post('/api/employees', 'EmployeeController@store');
// Route::get('/api/employees/{id}', 'EmployeeController@show');
// Route::put('/api/employees/{id}', 'EmployeeController@update');
// Route::delete('/api/employees/{id}', 'EmployeeController@destroy');