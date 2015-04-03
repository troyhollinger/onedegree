@extends('layouts.email')


@section('content')


<h1>You have received a new Speaker Request!</h1>

<p>Requestor Name : {{ $form['name'] }}</p>
<p>Phone Number : {{ $form['phone'] }}</p>
<p>Organization : {{ $form['organization'] }}</p>
<p>Email : {{ $form['email'] }}</p>
<p>Requested Date : {{ $form['date'] }}</p>
<p>Requested Time : {{ $form['time'] }}</p>
<p>Alloted Time : {{ $form['allottedTime'] }}</p>
<p>Subject : {{ $form['subject'] }}</p>
<p>Target Audience : {{ $form['audience'] }}</p>
<p>Expected Attendance : {{ $form['attendance'] }}</p>
<p>Comments : {{ $form['comments'] }}</p>




@stop