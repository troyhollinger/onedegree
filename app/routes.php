<?php


Route::get('/',['as' => 'home', function() {

	return View::make('pages.home');
	
}]);



Route::get('team',['as' => 'team', function() {

	return View::make('pages.team');

}]);

Route::get('process', ['as' => 'process', function() {

	return View::make('pages.process');

}]);

Route::get('services', ['as' => 'services', function() {

	return View::make('pages.services');

}]);


Route::get('blog', ['as' => 'blog', function() {

	return View::make('pages.blog');

}]);

