@extends('layouts.master')

@section('tab')
Process - One Degree Advisors - Our path to success
@stop

@section('title')
Process
@stop

@section('content')

<div class="container" style="min-height:3140px;">

	<svg viewBox="-15, 0, 1000, 3140" width="915" height="3140" class="process-line" preserveAspectRatio="xMinYMin slice">
		<g transform="translate(15,2030)">
			<path style="fill:none;stroke:#dddddd;stroke-width:40px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" d="m 0.49974197,-2087.2678 0,715.0925 914.21027803,0 0,502.12312 -854.149178,493.1433 -55.8828,32.2639 0,452.8671 473.704298,0 0,943.64508"/>
			<path style="fill:none;stroke:#6bbb6f;stroke-width:40px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" d="m 0.49974197,-2087.2678 0,715.0925 914.21027803,0 0,502.12312 -854.149178,493.1433 -55.8828,32.2639 0,452.8671 473.704298,0 0,943.64508"	class="animated-process-line"/>
		</g>
	</svg>


	<div class="process-module process-module-left process-discover">

		<div class="process-module-icon">
			<i class="fa fa-search" id="discover-icon"></i>
		</div>

		<div class="process-module-text indicator-parent" data-indicator="Discover" id="discover">
			<div class="section-title" id="discover-title">Discover</div>
			<p class="text align-left">Our process starts with getting to know you. We begin with a brief phone call to get acquainted with your financial needs and answer any questions you have. If it appears our services can provide value to you, the next steps are a Complimentary Introductory Meeting in our office, followed by an in-depth Discovery Meeting if you choose to engage our services. During these meetings we discuss your life goals and gather information that relates to all major aspects of your finances. </p>
		</div>

	</div>


	<div class="process-module process-module-right process-analyze">

		
		<div class="process-module-icon">
			<i class="fa fa-bar-chart" id="analyze-icon"></i>
		</div>

		<div class="process-module-text align-right indicator-parent" data-indicator="Analyze" id="analyze">
			<div class="section-title" id="analyze-title">Analyze</div>
			<p class="text">Next we evaluate your current financial picture. Welook at where you are now and compare it with where you want to go identifying adjustments that need to be made and ways to utilize what you have to the fullest.</p>
		</div>

	</div>

	<div class="process-module process-module-left process-strategize">

		<div class="process-module-icon">
			<i class="fa fa-wrench" id="strategize-icon"></i>
		</div>

		<div class="process-module-text align-left indicator-parent" data-indicator="Strategize" id="strategize">
			<div class="section-title" id="strategize-title">Strategize</div>
			<p class="text">We will then review various strategies for your wealth to ensure that your goals and your finances are aligned. In our Strategy meeting, we review your initial plan and our recommendations with you. We also prioritize the items that need to be addressed.</p>
		</div>

	</div>

	<div class="process-module process-module-center process-implement">

		<div class="process-module-icon">
			<i class="fa fa-flash" id="implement-icon"></i>
		</div>

		<div class="process-module-text indicator-parent" data-indicator="Implement" id="implement">
			<div class="section-title" id="implement-title"><p>Implement</p></div>
			<p class="text">After working together to decide how our recommendations willbe carried out, we put the plan into practice. Depending on the complexity of your plan, this often requires several meetings and can incorporate the services of other professionals.</p>
		</div>

	</div>

	<div class="process-module-end process-module-center process-monitor">

		<div class="process-module-icon">
			<i class="fa fa-dashboard" id="monitor-icon"></i>
		</div>

		<div class="process-module-text indicator-parent" data-indicator="Monitor" id="monitor">
			<div class="section-title" id="monitor-title">Monitor</div>
			<p class="text">Financial planning is not a one-time event. We monitor your plan and investments regularly. Our ongoing meetings help ensure your plan remains accurate and relevant as life changes.</p>
		</div>

	</div>

</div>

<div class="banner footer-banner">

	<div class="container">

		<p class="banner-quote">To Be Smart, <span class="bold">Spend Carefully.</span> To Be Wise, Save Regularly. <br>To Be Genius, <span class="bold">Give Extravagantly.</span></span></p>
		<p class="banner-quote-source">CHIP INGRAM</p>

	</div>

</div>


@stop