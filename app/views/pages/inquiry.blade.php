@extends('layouts.master')


@section('title')
Inquiry
@stop


@section('content')


	<div class="inquiry-banner top-banner">

		<div class="inquiry-form-container">


			{{ Form::open(['class' => 'inquiry-form']) }}

				<h2 class="form-title"><span class="bold">Hello,</span><br>Thank you for your interest in One Degree. To start the process, please fill out the form below.</h2>
				<h3 class="form-secondary-title">We will then contact you to schedule a 15 min phone call to get acquainted and determine if we are a good fit for your needs.</h3>


				<div>

					<p>{{ Form::text('name') }}</p>
					<p>{{ Form::label('name', 'NAME') }}</p>

				</div>
				
				<div>

					<p>{{ Form::text('email') }}</p>
					<p>{{ Form::label('email', 'EMAIL') }}</p>

				</div>
				
				<div>

					<p>{{ Form::text('business-name') }}</p>
					<p>{{ Form::label('business-name', 'BUSINESS NAME') }}</p>

				</div>
				
				<div>

					<p>{{ Form::text('phone') }}</p>
					<p>{{ Form::label('phone', 'PHONE NUMBER') }}</p>

				</div>
				
				<div>

					<p>{{ Form::text('location') }}</p>
					<p>{{ Form::label('location', 'CITY, STATE') }}</p>

				</div>
				
				<div>

					<p>{{ Form::textarea('description') }}</p>
					<p>{{ Form::label('description', 'TELL US ABOUT YOURSELF (140 CHARACTERS OR LESS)') }}</p>

				</div>
				

				<!-- <div class="inquiry-form-button">

					<p>CANCEL</p>

				</div> -->
				<div class="inquiry-form-button ">

					<p>SEND INQUIRY</p>

				</div>

			{{ Form::close() }}

		</div>


	</div>
	

@stop
