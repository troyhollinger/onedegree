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

Route::get('videos', ['as' => 'videos', function() {

	return View::make('pages.videos');

}]);


Route::get('inquiry', ['as' => 'inquiry', function() {

	return View::make('pages.inquiry');

}]);


Route::get('api/videos', ['as' => 'getVideos', function() {


	try {
	
		$videos = Video::all();

	} catch (Exception $e) {

		return Response::json(['message' => 'Sorry, videos could not be retrived'], 404);
		
	}

	Log::info($videos);

	return Response::json(['data' => $videos], 200);


}]);
