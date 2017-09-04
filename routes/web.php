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

Route::post('/employee/create', 'EmployeeController@store');

Route::get('/employee/getallemployees', 'EmployeeController@showall');
/*Route::get('/employee/getallemployees', function() {
    return Employee::all();
});*/

/*Route::get('/', function () {
    return view('welcome')->with('title', 'AngularJS + Laravel');
});*/

/*Route::get('/dashboard', function () {
	return view('pages.create')->with('heading', 'New Employee');
});*/

/*Route::post('/employee/create', function () {
	// Employee::create(Input::all());
	return Employee::all();
});*/

/*Route::get('/', function () {
    return view('pages.create')->with('title', 'Laravel CRUD Demo');
});*/