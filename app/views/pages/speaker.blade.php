@extends('layouts.master')


@section('tab')
Request Us To Speak - One Degree Advisors
@stop


@section('content')

	@section('content')


		<div class="inquiry-banner top-banner">

			<div class="inquiry-form-container" ng-controller="SpeakerFormController">


				{{ Form::open(['class' => 'inquiry-form']) }}

					<h2 class="form-title"><span class="bold">Hello,</span><br>Thank you for your interest in our program. Fill out the form below to proceed:</h2>

					<div>
						<p>{{ Form::label('name', 'Name') }}</p>
						<p>{{ Form::text('name', '', ['placeholder' => 'Name']) }}</p>		
					</div>
					
					<div>
						<p>{{ Form::label('phone', 'Phone Number') }}</p>
						<p>{{ Form::text('phone', '', ['placeholder' => 'Phone Number']) }}</p>
					</div>

					<div>
						<p>{{ Form::label('organization', 'Organization') }}</p>
						<p>{{ Form::text('organization', '', ['placeholder' => 'Organization Name']) }}</p>						
					</div>

					<div>
						<p>{{ Form::label('email', 'Email') }}</p>
						<p>{{ Form::text('email', '', ['placeholder' => 'Email']) }}</p>						
					</div>
					
					<div>
						<!-- <label for="date">Presentation Date</label> -->
						<datepicker date-format="longDate">					
							<input ng-model="date" class="tabbed-input" type="text" name="date" placeholder="Presentation Date">
						</datepicker>
						<label for="date" class="input-tab"><i class="fa fa-calendar"></i></label>

						<div class="clear"></div>
					</div>


					<div>
						<!-- <label for="time">Presentation Time</label> -->
						<input type="text" class="tabbed-input" name="time" dn-timepicker="h:mm a" ng-model="time" placeholder="Presentation Time">
						<label for="time" class="input-tab"><i class="fa fa-clock-o"></i><div class="clear"></div></label>

						<div class="clear"></div>
					</div>
												

					<div>

						<p>{{ Form::label('alotted-time', 'Allotted time for speaker') }}</p>
						<p>{{ Form::text('alotted-time', '', ['placeholder' => 'Allotted time for speaker']) }}</p>	

					</div>


					<div>

						<p>{{ Form::label('subject', 'Subject') }}</p>
						<p>{{ Form::text('subject', '', ['placeholder' => 'Subject']) }}</p>	

					</div>

					<div>

						<p>{{ Form::label('target', 'Target Audience') }}</p>
						<p>{{ Form::text('target', '', ['placeholder' => 'Target Audience']) }}</p>	

					</div>
					
					<div>
						<p>{{ Form::label('attendance', 'Expected attendance amount') }}</p>
						<p>{{ Form::text('attendance', '', ['placeholder' => 'Expected attendance amount']) }}</p>	
					</div>

					<div>
						<p>{{ Form::label('comments', 'Comments') }}</p>
						<p>{{ Form::textarea('comments', '', ['placeholder' => 'Comments']) }}</p>						
					</div>
					
					<h3 class="form-secondary-title">Please note that we may not be able to fulfill all requests.</h3>
					
					<div class="inquiry-form-button ">

						<p>SUBMIT</p>

					</div>

				{{ Form::close() }}

			</div>


		</div>
		

	@stop

@stop