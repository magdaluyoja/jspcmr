<?php

Route::get('/', 'PagesController@getIndex');
Route::get('/outline', 'PagesController@getOutline');
// Route::middleware(['auth'])->group(function () {
// 	Route::prefix('admin')->group(function () {
// 	    Route::resource('contents','NewContentController');
// 	    Route::post('/contents/delete-attachment', 'NewContentController@deleteAttachment')->name('deleteAttach');
// 	});
//     Route::get('/admin', 'AdminController@getDashboard')->name('admin');
// 	Route::get('/test', 'AdminController@getTestPage');
// });
Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
