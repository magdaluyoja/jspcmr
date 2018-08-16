<?php



Route::middleware(['auth'])->group(function () {
	Route::group(['middleware'  => 'App\Http\Middleware\AdminMiddleware' ], function(){
		Route::prefix('cms')->group(function () {
		    Route::resource('content','Admin\ContentController');
		    Route::post('/content/delete-attachment', 'Admin\ContentController@deleteAttachment')->name('deleteAttach');
		});
	    Route::get('/cms', 'Admin\DashboardController@getDashboard')->name('cms');
	});
	Route::get('/member', 'MemberController@getMembers')->name('member_page');
	Route::get('/member/post/{id}', 'MemberController@getMemberPost')->name('get_member_post');
});
Auth::routes();


Route::get('/', 'PagesController@getIndex');
Route::get('/outline', 'PagesController@getOutline');
Route::get('/bureau', 'PagesController@getBureau');
Route::get('/training', 'PagesController@getTraining');
Route::get('/conference', 'PagesController@getConference');
Route::get('/posts', 'PagesController@getPosts');
Route::get('/post/{id}', 'PagesController@getPost')->name('get_post');

Route::get('/contact-us', 'PagesController@getContactUs')->name('contact_us');

Route::post('/contact-us/validate', 'PagesController@validateMail')->name('validate_mail');
Route::post('/contact-us/send', 'PagesController@sendMail')->name('send_mail');

// // Route::group(['middleware' => 'App\Http\Middleware\MemberMiddleware'], function(){
// Route::middleware(['member'])->group(function () {
// 	Route::get('/member', 'PagesController@getMembers');
// });