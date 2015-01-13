@extends('layouts.master')

@section('title')
Services
@stop


@section('content')


<div class="container">


	<div class="service-modules-container">

		<div class="service-module">
			<p class="section-title">Financial Planning</p>
			<p class="text">We take a comprehensive approach to managing your wealth. By incorporating the <span class="green-text">six-step Financial Planning process</span> recognized by the CFP® Board, your initial plan is developed over the course of several meetings. We also coordinate with your other professionals, such as estate planning attorneys, CPAs, and insurance specialists as needed. If you don’t have this team in place, we can provide recommendations.</p><br>
			<p class="text">Financial plans are monitored and updated on a regular basis to ensure that as your life changes, your plan stays current. For affluent families and complex issues, we offer advanced planning to help address estate tax issues, charitable giving, business planning and legacy topics that often require special attention. <span class="green-text">Wealth Management Video Explainer</span> or  <a href="{{ route('inquiry') }}">INQUIRE</a></p>
		</div>

		<div class="service-module">
			<p class="section-title">Investment Management</p>
			<p class="text">We use a purpose allocation approach to determine the proper asset allocation of your investments. What is important to you? Are you trying to save for retirement? Do you need an income distribution strategy? Would you like to buy a second home? Do you want to be able to give more money to charity now? Would you like to focus on leaving a legacy?  Once we understand your values, we then work on building an all-weather portfolio designed to accomplish these goals. </p><br>
			<p class="text">Our research incorporates a variety of asset management strategies. We select and monitor premier money managers that are incorporated into your customized portfolio. In this ever-changing world it is important to build a broadly diversified portfolio using sound principles with the flexibility to capture opportunity and/or reduce risk. <a href="{{ route('inquiry') }}">INQUIRE</a></p>

		</div>

		<div class="service-module">

			<p class="section-title">Stewardship Coaching</p>
			<p class="text">Many families and business owners are experienced 
				stewards and they have a vision to go over the top. They 
				know that generosity is really the key to success and 
				brings great joy with it. We encourage families to build 
				plans inspired by their life’s purpose and passion. It 
				involves a purposeful desire to take conflict and 
				confusion so typical in life and replace it with clarity. 
				Financial wealth, planning and confidence can make it 
				happen. 
			</p>

			<p class="text">Let’s add another paragraph here about this topic so we
				achieve symmetry and more importantly supply a more
				expanded scope of information on this lovely topic. 
				Perhaps we can even aim to make it as long as the other 
				two topics as viewed to the left. And it would be cool to 
				do <span class="green-text">Video Explanations of all three Services</span> listed.
				 <a href="{{ route('inquiry') }}">INQUIRE</a>
			</p>

		</div>

	</div>

	<div class="info-modules-container">

		<div class="info-module">

			<p class="section-title">
				Compliance
			</p>

			<p class="text">

				Advisory services offered through One Degree 
				Advisors, Inc.SM Securities offered through Securities 
				America, Inc., Member FINRA/SIPC. One Degree 
				Advisors and Securities America are separate 
				companies. We are registered to sell Securities in the 
				following states: AZ, CA, CO, FL, GA, HI, ID, IN, ME, 
				MO, MT, NC, NJ, OR, SC, SD, UT, VA, WA.

			</p>

		</div>

		<div class="info-module">

			<p class="section-title">Frequently Asked Questions</p>

			<div class="faq-column">
				<p class="text">
					<span class="bold">What types of clients do you work with?</span><br>
					Our clients have many different backgrounds but there 
					are a number of common traits among them. They 
					have the ability to become or already are financially 
					independent. They prefer to free up their time and use 
					our experience, expertise and tools to delegate some 
					of the responsibility of managing their wealth. Though 
					we do not follow strict guidelines for client 
					qualification, those who receive the most value 
					typically meet some or all of the following:
				</p>
				<br>
				<p class="text">
					Income in excess of $150,000/year
					Investable assets of $350,000 or greater
					A net worth of $1M or greater
				</p>
				<br>
				<br>
				<p class="text">
					<span class="bold">Who is Securities America, Inc.?</span><br>
					Securities America is our broker/dealer. Think of them 
					as behind-the-scenes support to us. They provide 
					technology, compliance and operational services to 
					help us provide comprehensive and professional 
					services. They were established in 1984, are 
					headquartered in Omaha, NE, and serve over 1,700 
					financial advisors across the United States.
				</p>
			</div>
			
			<div class="faq-column">

				<p class="text">

					<span class="bold">What is a Certified Financial Planner?</span><br>
					Most people think that all financial planners are 
					"certified," but this isn’t true. Only those who have 
					fulfilled the certification and renewal requirements of 
					the CFP Board can display the CFP® certification 
					marks. When selecting a financial planner, you need 
					to feel confident that the person you choose to help 
					you plan for your future is competent and ethical. The 
					CFP® certification provides that sense of security by 
					allowing only those who meet strict education, 
					examination, experience and ethics requirements the 
					right to use the CFP® certification marks.

				</p>
				<br>
				<br>
				<p class="text">

					<span class="bold">How are you paid? </span><br>
					We are fee-based, meaning most of our revenue 
					comes from the fees paid for either financial planning 
					and/or investment management services. Some fees 
					are paid directly while others are paid from your 
					investment accounts. On occasion, we may use a 
					commissionable product if we feel it is in the best 
					interest of the client. All fees are clearly disclosed. For 
					more information or to request a fee schedule, please 
					contact our office.

				</p>

			</div>

		</div>

	</div>


</div>	

<div class="banner footer-banner">

	<div class="container">

		<p class="banner-quote"><span class="bold">Everyone</span> ends up somewhere,<br> <span class="bold">but few</span> people end up somewhere on purpose.</p>
		<p class="banner-quote-source">Craig Groeschel</p>

	</div>

</div>


@stop