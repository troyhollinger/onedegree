@extends('layouts.master')

@section('tab')
Columns - One Degree Advisors - View our medium columns
@stop

@section('title')
Columns
@stop

@section('content')

	<div class="container content">

		<div class="medium-container" id="medium-container">

			@for($i = 0; $i < count($columns); $i++)

				@if($i === 0 || $i === 3)
				<div class="medium-row">
				@endif

				{{ $columns[$i]->link }}

				@if($i === 2 || $i === 5 )
				</div>
				@endif

			@endfor
			
		</div>


		{{ $columns->links('pagination.custom') }}

		<div class="clear"></div>
	
	</div>

	<div class="banner footer-banner">

		<div class="container">

			<p class="banner-quote">360 Degrees <span class="bold">and Every One of them Counts.</span></p>
			<p class="banner-quote-source">ONE DEGREE ADVISORS</p>

		</div>

	</div>

	<script async src="https://static.medium.com/embed.js"></script>

@stop