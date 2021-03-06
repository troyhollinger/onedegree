@extends('layouts.master')

@section('title')
Videos
@stop

@section('content')

<div class="container" ng-controller="VideoController">
	<div class="active-video-container">
		<iframe ng-src="@{{ activeVideo.link }}" frameborder="0" allowfullscreen></iframe>
	</div>
	<h2 class="active-video-title">@{{ activeVideo.title }}</h2>
	<p class="active-video-description">@{{ activeVideo.description }}</p>
	<div class="video-thumbnail-container">
		<div class="video-thumbnail square" ng-repeat="video in videos" ng-click="setActiveVideo($index)" >
			<img src="http://img.youtube.com/vi/@{{video.youtube_id}}/0.jpg" alt="@{{ video.title }}">
			<i class="fa fa-play"></i>
			<div class="video-thumbnail-info-container">
				<h4 class="video-thumbnail-title">@{{ video.title }}</h4>
				<p class="video-thumbnail-description">@{{ video.description | limitTo : 50 }}</p>
			</div>		
		</div>		
	</div>
</div>
<div class="banner footer-banner">
	<div class="container">
		<p class="banner-quote">Plans Fail for Lack of Counsel, <br><span class="bold">But with Many Advisors they Succeed.</span></p>
		<p class="banner-quote-source">PROVERBS</p>
	</div>
</div>

@stop