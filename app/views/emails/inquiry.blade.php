@extends('layouts.email')


@section('content')

<h1>New Inquiry received from the website.</h1>

<p><strong>Requestor Name</strong> : {{ $form['name'] }}</p>
<p><strong>Reffered By</strong> : {{ $form['referred'] }}</p>
<p><strong>Location</strong> : {{ $form['location'] }}</p>
<p><strong>Phone Number</strong> : {{ $form['phone'] }}</p>
<p><strong>Email Address</strong> : {{ $form['email'] }}</p>
<p><strong>Reason for inquiry</strong> : {{ $form['reason'] }}</p>

@stop