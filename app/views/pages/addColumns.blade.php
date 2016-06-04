<html>
<head>
	<title></title>
</head>
<body>


	{{ Form::open(['route' => 'column.store']) }}	

		{{ Form::label('link', 'Link') }}
		{{ Form::text('link') }}

		{{ Form::submit('Add') }}


	{{ Form::close() }}


</body>
</html>




