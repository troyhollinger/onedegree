@extends('layouts.master')


@section('tab')
Request Us To Speak - One Degree Advisors
@stop

@section('title')
Speaker
@stop

@section('content')

	<div class="inquiry-banner top-banner">

		<div class="inquiry-form-container" ng-controller="SpeakerFormController">



			{{ Form::open(['class' => 'inquiry-form']) }}

				<img class="form-x" src="{{ asset('img/form-x.jpg') }}" onclick="history.go(-1);">

				<h2 class="form-title"><span class="bold bigger">Hello,</span><br>Thank you for your interest. Fill out the form below to proceed:</h2>

				<div>
					<p>{{ Form::label('name', 'Name') }}</p>
					<p>{{ Form::text('name', '', ['placeholder' => 'Requestor Name', 'ng-model' => 'form.name']) }}</p>		
				</div>
				
				<div>
					<p>{{ Form::label('phone', 'Phone Number') }}</p>
					<p><input type="tel" name="phone" id="phone" placeholder="Phone Number" ng-model="form.phone"></p>
				</div>

				<div>
					<p>{{ Form::label('organization', 'Organization') }}</p>
					<p>{{ Form::text('organization', '', ['placeholder' => 'Organization Name', 'ng-model' => 'form.organization']) }}</p>						
				</div>

				<div>
					<p>{{ Form::label('email', 'Email') }}</p>
					<p>{{ Form::text('email', '', ['placeholder' => 'Email', 'ng-model' => 'form.email']) }}</p>						
				</div>
				
				<div>
					<label for="date">Presentation Date</label>
					<datepicker date-format="longDate">					
						<input ng-model="form.date" focus-on="date" class="tabbed-input" type="text" name="date" placeholder="Presentation Date">
					</datepicker>
					<label for="date" class="input-tab" ng-click="focusDate($event)"><i class="fa fa-calendar"></i></label>

					<div class="clear"></div>
				</div>


				<div>
					<label for="time">Presentation Time</label>
					<input type="text" class="tabbed-input" focus-on="time" name="time" ng-model="form.time" placeholder="Presentation Time">
					<label for="time" ng-click="focusTime($event)" class="input-tab"><i class="fa fa-clock-o"></i><div class="clear"></div></label>

					<div class="clear"></div>
				</div>
											

				<div>

					<p>{{ Form::label('alotted-time', 'Allotted time for speaker') }}</p>
					<p>{{ Form::text('alotted-time', '', ['placeholder' => 'Allotted time for speaker', 'ng-model' => 'form.allottedTime']) }}</p>	

				</div>


				<div>

					<p>{{ Form::label('subject', 'Subject') }}</p>
					<p>{{ Form::text('subject', '', ['placeholder' => 'Subject', 'ng-model' => 'form.subject']) }}</p>	

				</div>

				<div>

					<p>{{ Form::label('target', 'Target Audience') }}</p>
					<p>{{ Form::text('target', '', ['placeholder' => 'Target Audience', 'ng-model' => 'form.audience']) }}</p>	

				</div>
				
				<div>
					<p>{{ Form::label('attendance', 'Expected attendance') }}</p>
					<p>{{ Form::text('attendance', '', ['placeholder' => 'Expected attendance amount', 'ng-model' => 'form.attendance']) }}</p>	
				</div>

				<div>
					<p>{{ Form::label('comments', 'Comments') }}</p>
					<p>{{ Form::textarea('comments', '', ['placeholder' => 'Comments', 'ng-model' => 'form.comments']) }}</p>						
				</div>
				
				<div class="inquiry-form-button" ng-click="submitForm()">

					<p ng-bind="buttonText"></p>

				</div>

			{{ Form::close() }}

		</div>

	</div>

	<div class="banner footer-banner form-page-banner">

		<div class="container">

			<p class="banner-quote">Thinking for Tomorrow, <br><span class="bold">Today</span></p>
			<p class="banner-quote-source">One Degree Advisors</p>

		</div>

	</div>
		
@stop