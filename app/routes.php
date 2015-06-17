<?php


Route::get('/',['as' => 'home', function() {

	$columns = Column::orderBy('id', 'desc')->take(3)->get();

	$tweets = Twitter::getUserTimeline(['screen_name' => 'onedegreetweets', 'count' => 2]);

	return View::make('pages.home', ['tweets' => $tweets, 'columns' => $columns]);
	
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

	$columns = Column::orderBy('id', 'desc')->paginate(6);

	return View::make('pages.blog', ['columns' => $columns]);

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

Route::get('login', ['as' => 'login', function() {

	return View::make('pages.login');

}]);

Route::post('login', ['as' => 'login.post', function() {

	$email = Input::get('email');
	$password = Input::get('password');

	if (Auth::attempt(['email' => $email, 'password' => $password])) {

		return Redirect::intended('admin.columns');

	}

}]);

Route::get('admin', ['as' => 'admin.columns', 'before' => 'auth', function() {

	return View::make('pages.addColumns');

}]);

Route::post('column', ['as' => 'column.store', 'before' => 'auth', function() {

	$link = Input::get('link');

	$column = new Column;
	$column->link = $link;
	$column->save();

	return Redirect::route('blog');

}]);

Route::get('api/tweets', ['as' => 'getTweets', function() {

	$tweets = Twitter::getUserTimeline(['screen_name' => 'onedegreetweets', 'count' => 2, 'format' => 'json']);

	return $tweets;

}]);

Route::get('speaker', ['as' => 'speaker', function() {

	return View::make('pages.speaker');

}]);

Route::post('email/speaker', ['as' => 'email.speaker', 'uses' => 'EmailController@speaker']);
Route::post('email/inquire', ['as' => 'email.inquire', 'uses' => 'EmailController@inquire']);


