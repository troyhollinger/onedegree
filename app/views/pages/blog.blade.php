@extends('layouts.master')

@section('tab')
Columns - One Degree Advisors - View our medium columns
@stop

@section('title')
Columns
@stop

@section('content')

	<div class="container content" ng-controller="MediumController">

		<div class="medium-container" id="medium-container">

			<!-- Medium Posts are injected here -->
			
		</div>

		<!-- <p ng-click="loadPosts()">Load More</p> -->
		

	</div>

	<div class="banner footer-banner">

		<div class="container">

			<p class="banner-quote">360 Degrees <span class="bold">and Every One of them Counts.</span></p>
			<p class="banner-quote-source">ONE DEGREE ADVISORS</p>

		</div>

	</div>

@stop