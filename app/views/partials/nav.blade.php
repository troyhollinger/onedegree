<div class="nav-container closed">

	<div class="nav-positioner">

		<ul class="nav">
		    <a href="{{ route('home') }}"><li>Home{{ Route::currentRouteName() == 'home' ? '<div class="nav-indicator"></div>': ''}}</li></a><br>
		    <a href="{{ route('services') }}"><li>Services{{ Route::currentRouteName() == 'services' ? '<div class="nav-indicator"></div>': ''}}</li></a><br>
		    <a href="{{ route('team') }}"><li>Team{{ Route::currentRouteName() == 'team' ? '<div class="nav-indicator"></div>': ''}}</li></a><br>
		    <a href="{{ route('process') }}"><li>Process{{ Route::currentRouteName() == 'process' ? '<div class="nav-indicator"></div>': ''}}</li></a><br>
		    <a href="{{ route('blog') }}"><li>Columns{{ Route::currentRouteName() == 'blog' ? '<div class="nav-indicator"></div>': ''}}</li></a><br>
		    <a href="{{ route('videos') }}"><li >Videos{{ Route::currentRouteName() == 'videos' ? '<div class="nav-indicator"></div>': ''}}</li><br>
		 	<a href="{{ route('client-login') }}"><li >Login{{ Route::currentRouteName() == 'client-login' ? '<div class="nav-indicator"></div>': ''}}</li><br>
		    <a id="mobile-inquire-link" href="{{ route('inquiry') }}"><li>Inquire{{ Route::currentRouteName() == 'inquiry' ? '<div class="nav-indicator"></div>': ''}}</li></a>
		</ul>

		<div class="nav-details">
		    <a href="https://www.google.com/maps/place/3131+Camino+Del+Rio+N+%231010,+San+Diego,+CA+92108/@32.7751506,-117.1270346,17z/data=!3m1!4b1!4m2!3m1!1s0x80d955a7fe9ffd0b:0x4a6d5c2f86006b14" target="_blank">
		    	<p class="bold">One Degree Advisors</p>
		    	<p>8880 Rio San Diego Drive, 1000</p>
		    	<p>San Diego, CA {{ Route::currentRouteName() == 'client-login' ? '9210': '92108'}}</p>
		    </a>
		    <br>
		    <p>Phone : <span class="bold">619.282.3288</span></p>
		    <p>Fax : <span class="bold">619.280.9553</span></p>
		    <p>Email : <a href="mailto:admin@onedegreeadvisors.com" class="bold">admin@onedegreeadivsors.com</a> </p>
		    <br>
		    <br>
		    <p class="smaller"><a href="http://www.troyhollinger.com">{{ Route::currentRouteName() == 'client-login' ? 'Made By Troy': 'WEBSITE MADE BY TROY'}}</a></p>
		</div>

	</div>
	

</div>