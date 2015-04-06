@extends('layouts.email')


@section('content')


<h1>You have received a new Speaker Request!</h1>

<p><strong>Requestor Name</strong> : {{ $form['name'] }}</p>
<p><strong>Phone Number</strong> : {{ $form['phone'] }}</p>
<p><strong>Organization</strong> : {{ $form['organization'] }}</p>
<p><strong>Email</strong> : {{ $form['email'] }}</p>
<p><strong>Requested Date</strong> : {{ $form['date'] }}</p>
<p><strong>Requested Time</strong> : {{ $form['time'] }}</p>
<p><strong>Alloted Time</strong> : {{ $form['allottedTime'] }}</p>
<p><strong>Subject</strong> : {{ $form['subject'] }}</p>
<p><strong>Target Audience</strong> : {{ $form['audience'] }}</p>
<p><strong>Expected Attendance</strong> : {{ $form['attendance'] }}</p>
<p><strong>Comments</strong> : {{ $form['comments'] }}</p>




@stop