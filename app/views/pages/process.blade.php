@extends('layouts.master')

@section('title')
Process
@stop

@section('content')

<div class="container">

	<svg viewBox="-15, 0, 1000, 3140" width="915" height="3140" class="process-line">
		<g transform="translate(15,2030)">
			<path style="fill:none;stroke:#dddddd;stroke-width:40px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" d="m 0.49974197,-2087.2678 0,715.0925 914.21027803,0 0,502.12312 -854.149178,493.1433 -55.8828,32.2639 0,452.8671 473.704298,0 0,943.64508"/>
			<path style="fill:none;stroke:#6bbb6f;stroke-width:40px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" d="m 0.49974197,-2087.2678 0,715.0925 914.21027803,0 0,502.12312 -854.149178,493.1433 -55.8828,32.2639 0,452.8671 473.704298,0 0,943.64508"	class="animated-process-line"/>
		</g>
	</svg>


	<div class="process-module process-module-left process-discover">

		<div class="process-module-icon">
			<i class="fa fa-search" id="discover-icon"></i>
		</div>

		<div class="process-module-text">
			<div class="section-title" id="discover-title">Discover</div>
			<p class="text align-left">Our financial planners are experienced in providing personalized wealth solutions for select families and organizations. We offer guidance, clarity and wisdom to help our clients gain confidence in their financial future. We are independent, fee-based financial professionals who build long term, trusted relationships focused on solutions, not products. As fiduciaries, we make sure that our clients' interests always come first. </p>
		</div>

	</div>


	<div class="process-module process-module-right process-analyze">

		<div class="process-module-text align-right">
			<div class="section-title" id="analyze-title">Analyze</div>
			<p class="text">Our financial planners are experienced in providing personalized wealth solutions for select families and organizations. We offer guidance, clarity and wisdom to help our clients gain confidence in their financial future. We are independent, fee-based financial professionals who build long term, trusted relationships focused on solutions, not products. As fiduciaries, we make sure that our clients' interests always come first. </p>
		</div>

		<div class="process-module-icon">
			<i class="fa fa-bar-chart" id="analyze-icon"></i>
		</div>

	</div>

	<div class="process-module process-module-left process-develop">

		<div class="process-module-icon">
			<i class="fa fa-wrench" id="develop-icon"></i>
		</div>

		<div class="process-module-text align-left">
			<div class="section-title" id="develop-title">Develop</div>
			<p class="text">Our financial planners are experienced in providing personalized wealth solutions for select families and organizations. We offer guidance, clarity and wisdom to help our clients gain confidence in their financial future. We are independent, fee-based financial professionals who build long term, trusted relationships focused on solutions, not products. As fiduciaries, we make sure that our clients' interests always come first. </p>
		</div>

	</div>

	<div class="process-module process-module-center process-implement">

		<div class="process-module-icon">
			<i class="fa fa-flash" id="implement-icon"></i>
		</div>

		<div class="process-module-text ">
			<div class="section-title" id="implement-title"><p>Implement</p></div>
			<p class="text">Our financial planners are experienced in providing personalized wealth solutions for select families and organizations. We offer guidance, clarity and wisdom to help our clients gain confidence in their financial future. We are independent, fee-based financial professionals who build long term, trusted relationships focused on solutions, not products. As fiduciaries, we make sure that our clients' interests always come first. </p>
		</div>

	</div>

	<div class="process-module-end process-module-center process-monitor">

		<div class="process-module-icon">
			<i class="fa fa-dashboard" id="monitor-icon"></i>
		</div>

		<div class="process-module-text ">
			<div class="section-title" id="monitor-title">Monitor</div>
			<p class="text">Our financial planners are experienced in providing personalized wealth solutions for select families and organizations. We offer guidance, clarity and wisdom to help our clients gain confidence in their financial future. We are independent, fee-based financial professionals who build long term, trusted relationships focused on solutions, not products. As fiduciaries, we make sure that our clients' interests always come first. </p>
		</div>

	</div>

</div>

<div class="banner footer-banner"></div>


@stop