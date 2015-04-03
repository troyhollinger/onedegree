@extends('layouts.email')


@section('content')

<h1>New Inquiry received from the website.</h1>

<p>Requestor Name : {{ $form['name'] }}</p>
<p>Reffered By : {{ $form['referred'] }}</p>
<p>Location : {{ $form['location'] }}</p>
<p>Phone Number : {{ $form['phone'] }}</p>
<p>Email Address : {{ $form['email'] }}</p>
<p>Reason for inquiry : {{ $form['reason'] }}</p>

@stop