@extends('layouts.master')


@section('title')
Inquiry
@stop


@section('content')


	<div class="inquiry-banner top-banner">

		<div class="inquiry-form-container" ng-controller="InquireFormController">


			{{ Form::open(['class' => 'inquiry-form']) }}

				<img class="form-x" src="{{ asset('img/form-x.jpg') }}" onclick="history.go(-1);">

				<h2 class="form-title"><span class="bold bigger">Hello,</span><br>Thank you for your interest in One Degree. To start the process, please fill out the form below.</h2>
				<h3 class="form-secondary-title">We will then contact you to schedule a 15 min phone call to get acquainted and determine if we are a good fit for your needs.</h3>


				<div>

					<p>{{ Form::label('name', 'NAME') }}</p>
					<p>{{ Form::text('name', '', ['placeholder' => 'Name', 'ng-model' => 'form.name']) }}</p>
					

				</div>
				
				<div>

					<p>{{ Form::label('reffered', 'Reffered By') }}</p>
					<p>{{ Form::text('referred', '', ['placeholder' => 'Referred By', 'ng-model' => 'form.referred']) }}</p>
					

				</div>

				<div>

					<p>{{ Form::label('location', 'Area you live in') }}</p>
					<p>{{ Form::text('location', '', ['placeholder' => 'Area you live in', 'ng-model' => 'form.location']) }}</p>					

				</div>

				<div>

					<p>{{ Form::label('phone', 'Phone number') }}</p>
					<p>{{ Form::text('phone', '', ['placeholder' => 'Phone number', 'ng-model' => 'form.phone']) }}</p>					

				</div>

				<div>

					<p>{{ Form::label('email', 'Email Address') }}</p>
					<p>{{ Form::text('email', '', ['placeholder' => 'Email Address (Optional)', 'ng-model' => 'form.email']) }}</p>
					
				</div>
				
					
				<div>
					<p>{{ Form::label('reason', 'Brief reason for inquiry') }}</p>
					<p>{{ Form::textarea('reason', '', ['placeholder' => 'Brief reason for inquiry', 'ng-model' => 'form.reason']) }}</p>

				</div>
				
				<div class="inquiry-form-button" ng-click="submitForm()">

					<p ng-bind="buttonText"></p>

				</div>

			{{ Form::close() }}

		</div>


	</div>
	
	<div class="banner footer-banner form-page-banner">

		<div class="container">

			<p class="banner-quote">Details Matter <br><span class="bold">Even to the Smallest Degree</span></p>
			<p class="banner-quote-source">One Degree Advisors</p>

		</div>

	</div>

@stop
