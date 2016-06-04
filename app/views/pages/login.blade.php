<html>
<head>
	<title></title>
</head>
<body>


	{{ Form::open(['route' => 'login.post']) }}
		
		<p>
			{{ Form::label('email', 'Email') }}
			{{ Form::text('email') }}
		</p>

	
		<p>
			{{ Form::label('password', 'Password') }}
			{{ Form::password('password') }}
		</p>
		

		<p>{{ Form::submit('Login') }}</p>


	{{ Form::close() }}

</body>
</html>

