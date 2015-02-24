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

					<p>{{ Form::label('name', 'NAME') }}</p>
					<p>{{ Form::text('name', '', ['placeholder' => 'Name']) }}</p>
					

				</div>
				
				<div>

					<p>{{ Form::label('reffered', 'Reffered By') }}</p>
					<p>{{ Form::text('referred', '', ['placeholder' => 'Referred By']) }}</p>
					

				</div>

				<div>

					<p>{{ Form::label('location', 'Area you live in') }}</p>
					<p>{{ Form::text('location', '', ['placeholder' => 'Area you live in']) }}</p>					

				</div>

				<div>

					<p>{{ Form::label('phone', 'Phone number') }}</p>
					<p>{{ Form::text('phone', '', ['placeholder' => 'Phone number']) }}</p>					

				</div>

				<div>

					<p>{{ Form::label('email', 'Email Address') }}</p>
					<p>{{ Form::text('email', '', ['placeholder' => 'Email Address (Optional)']) }}</p>
					
				</div>
				
					
				<div>
					<p>{{ Form::label('reason', 'Brief reason for inquiry') }}</p>
					<p>{{ Form::textarea('reason', '', ['placeholder' => 'Brief reason for inquiry']) }}</p>

				</div>
				
				<div class="inquiry-form-button ">

					<p>SEND INQUIRY</p>

				</div>

			{{ Form::close() }}

		</div>


	</div>
	

@stop
