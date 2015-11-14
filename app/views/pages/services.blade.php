@extends('layouts.master')

@section('tab')
Services - One Degree Advisors | Your help in navigating finances with a kingdom mindset
@stop

@section('title')
Services
@stop


@section('content')


<div class="container">

	<div class="service-section indicator-parent" data-indicator="What We Do" id="whatwedo">
		
		<p class="section-title">Financial Planning</p>
		<p class="text">Our focus is on what’s important to you. The overarching goal of our financial planning process is to coordinate the many unique aspects of your financial situation to provide a clear context for making sound financial decisions today. The truth is, we don’t know what the future will hold. We will all be impacted by uncertain factors. Financial planning is not a one-time event; it’s a process that adapts as your life changes. We help you evaluate your goals, analyze your situation and options, develop strategies, and then implement decisions in coordination with your other trusted advisors. Financial planning is most successful when these areas are realigned to help you stay on course. Every degree counts.</p><br>
		
		<div class="iframe-container">
			<iframe width="560" height="315" src="https://www.youtube.com/embed/OF9plHU_zVc?rel=0" frameborder="0" allowfullscreen></iframe>
		</div>
		

	</div>

	<div class="service-section" id="investment-management">

		<p class="section-title">Investment Management</p>
		<p class="text">
			Before determining an investment strategy, we must understand what is important to 
			you. 
		</p>
		<br>
		<p class="text">
			Are you saving for a goal such as retirement or college? <br>
			Are you looking for ways to turn your assets into income? <br>
			Is providing for future generations a priority? <br>
			Is giving more to charity important to you? 
		</p>
		<br>
		<p class="text">
			Questions such as these help us determine a “Purpose Allocation.” Once we 
			understand your values, we then strive to build an all-weather portfolio designed to accomplish these goals. In this complex and noisy world we believe it is important to build a 
			portfolio using timeless principles. 
		</p>
		<br>
		<p class="text">
			Keys to success include a disciplined and diversified strategy. These principles have 
			served us and our clients well over time and various market conditions.
		</p>
		<br>
		<a href="https://pro.riskalyze.com/embed/f3d96123615c2ab80d6e" target="_blank"><p class="text green-text bold">What's Your Risk Score?</p></a>
		<br>
		<p class="text faded smaller">Diversification does not guarantee a profit or protection from losses in a declining market</p>

		<div class="iframe-container">
			<iframe width="560" height="315" src="https://www.youtube.com/embed/gVHKI0sBpB0?rel=0" frameborder="0" allowfullscreen></iframe>
		</div>

	</div>

		
	<div class="service-section" id="stewardship-coaching">
		<p class="section-title">Stewardship Advising</p>
		<p class="text">Many people race through life without giving careful consideration to finding and 
			fulfilling their unique purpose in life. Even with help from competent advisors, many 
			financially blessed families end up with results that may not reflect their values or 
			unique calling. And, by the time they discover it, it may be too late to do anything 
			about it. How you handle the blessings God has given you—your time, talent, treasure, 
			and relationships--influences generations to come.
		</p>
		<br>
		<p class="text">This advanced planning process is designed to help financially blessed families gain 
			clarity and a renewed passion for aligning your life with your purpose. It’s not just 
			about money—it’s your family, your life, and your legacy that matter!</a>
		</p>

		<div class="iframe-container">
			<iframe width="560" height="315" src="https://www.youtube.com/embed/KPDtiJRy6-4?rel=0" frameborder="0" allowfullscreen></iframe>
		</div>

		

	</div>

	<div class="service-section">

		<p class="section-title">Speaking and Media</p>
		<p class="text">Are you looking for a speaker for your community group, church, classroom, charity, 
			or civic organization? Do you need insight on relevant financial planning or investing 
			topics? One Degree Advisors is committed to educating people through speaking, 
			writing and supporting media who have a similar objective. We have expertise in a 
			variety of financial planning, investment management, family and business wealth 
			transfer, and life stewardship topics. All presenters are Certified Financial Planners&trade;, 
			and enjoy the challenge of making complex topics easy to understand. 
		</p>
		<br>
		<p class="text">For more information, to schedule a speaker, or request an interview on a topic of 
			interest, <a href="{{ route('speaker') }}" class="green-text">complete this form</a> or contact our office at 619-282-3288.
		</p>
		<br>
		<p class="text faded">For speaking engagements, advanced notice of 45 days or more is appreciated.
			Please note that we may not be able to fulfill all requests. 
		</p>

	</div>


	<div class="service-section indicator-parent" data-indicator="Why One Degree" id="why-one-degree">

		<p class="section-title">Choose Us Because</p>

		<p class="text">Our name, One Degree Advisors, reflects the idea that small changes can have a big 
			impact. Think about that 20 foot putt that’s just off the mark and lips out of the cup, 
			or a plane just slightly off course and missing its intended destination. Your 
			destination may be getting to and through retirement, selling a business, maximizing 
			giving strategies, or tackling college expenses. These things inevitably require time 
			and expertise. That is why we’re here, to help you chart your course and reach your 
			destination one important degree at a time.</p>

	</div>


	<div class="service-section">

		<p class="section-title">Affiliations</p>
		

		<p class="text">
			<a href="http://www.letsmakeaplan.org" target="_blank"><span class="bold">CFP®</span></a> - CERTIFIED FINANCIAL PLANNER <br>
			{{-- The <a href="http://www.letsmakeaplan.org" target="_blank"><span class="green-text">CFP®</span></a> certification mark identifies professionals who have met and maintained the 
			high standards of competency and ethics established and enforced by the Certified 
			Financial Planner Board of Standards.  --}}

			The mission of the <a href="http://www.letsmakeaplan.org" target="_blank" class="green-text">Certified Financial Planner Board of Standards Inc. (CFP® Board)</a> is to benefit the public by granting the CFP® certification and upholding it as the recognized standard of excellence for competent and ethical personal financial planning.

		</p>
		<br>
		<p class="text">
			<a href="http://www.plannersearch.org" target="_blank"><span class="bold">FPA</span></a> - FINANCIAL PLANNING ASSOCIATION <br>
			The <a href="http://www.plannersearch.org" target="_blank"><span class="green-text">FPA</span></a> is the largest member organization of Certified Financial Planner (CFP® Board) 
			practitioners, educators, and financial services professionals all of whom support high 
			standards of competency and ethics in the financial services industry.

		</p>
		<br>
		<p class="text">
			<span class="bold">Kingdom Advisors</span> - This membership organization is dedicated to expanding the 
			knowledge and understanding of biblical financial wisdom so that Christian financial 
			professionals are prepared to integrate these principles into their practices and client 
			counsel.  
		</p>

	</div>


	<div class="service-section">

		<p class="section-title">Code of Ethics</p>

		<div class="ethics-slideshow">

			<p class="ethics-slide ethics-slide-visible">Integrity.</p>
			<p class="ethics-slide">Objectivity.</p>
			<p class="ethics-slide">Competence.</p>
			<p class="ethics-slide">Fairness.</p>
			<p class="ethics-slide">Confidentiality.</p>
			<p class="ethics-slide">Professionalism.</p>
			<p class="ethics-slide">Diligence.</p>

		</div>

		<p class="ethics-slideshow-title">Principles we operate by</p>

		<p class="text">Abiding by the <a href="http://www.plannersearch.org" target="_blank"><span class="green-text">Financial Planning Association</span></a>’s and the <a href="http://www.letsmakeaplan.org"><span class="green-text">Certified Financial Planner</span></a> 
		Board’s Code of Ethics standards are a top priority at One Degree Advisors. Here is 
		what you can expect from us:</p>

	</div>


	<div class="service-section indicator-parent" data-indicator="About Us" id="about">

		<p class="section-title">We Love What We Do</p>

		<p class="text">We love working with people who are good at what they do and passionate about 
			sharing their gifts. That describes each of us at One Degree Advisors as well. We 
			derive great satisfaction in freeing you up to focus your time and resources on what’s 
			important to you. </p>
		<br>
		<a href="{{ route('team') }}"><p class="text green-text">Meet our <span class="bold">Team</span></p></a>

	</div>

	<div class="service-section indicator-parent" data-indicator="What To Expect" id="expect">

		<p class="section-title">Compelling Value</p>

		<p class="text">We understand the importance of asking the right questions to help ensure we draw 
			the right conclusions before we offer any advice. Every client engagement begins by 
			exploring your “why” before we determine your “how” solutions. One Degree Advisors 
			is committed to helping our clients and their families make meaningful and purposeful 
			decisions–ones that keep them on course for generations to come. 
		</p>

		<br>
		
		<a href="{{ route('process') }}"><p class="text green-text">See our <span class="bold">Process</span></p></a>

	</div>

	<div class="service-section" id="faq">

		<p class="section-title">Frequently Asked Questions</p>
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
			Income in excess of $150,000/year<br>
			Investable assets of $350,000 or greater<br>
			A net worth of $1M or greater
		</p>
		<br>
		<br>
		
		<p class="text">

			<span class="bold">What is a CERTIFIED FINANCIAL PLANNER&trade; professional?</span><br>
			When selecting a financial planner, how do you know you have 
			chosen someone who is qualified, competent and ethical in helping you plan your 
			future? {{-- You may assume anyone offering a financial service or product who calls 
			themselves a financial planner is "certified," but this isn’t true. Only those who have 
			fulfilled the rigorous certification and renewal requirements of the CFP® Board can 
			display the CFP® certification marks. The CFP® certification helps ensure that you 
			are working with someone who meets the strict education, examination, experience 
			and ethical requirements necessary to maintain the right to use the CFP® certification 
			marks. 
 --}}
			Most people think that all financial planners are 'certified', but this isn't true. Only those who meet strict education, examination, experience, and ethics requirements are allowed the right to use the CFP® certification marks.
			When selecting a financial planner, you can have added confidence that the person you choose to help you plan for your future is competent and ethical if you choose a CFP® professional.

		</p>
		<br>
		<br>
		<p class="text">

			<span class="bold">How are you paid?</span><br>
			We are a fee-based firm, meaning most of our revenue comes from the fees paid for 
			financial planning and/or investment management services. On occasion, when we 
			feel it is in the best interest of our client, we may use a commissionable product. All 
			fees are clearly disclosed. <a href="mailto:admin@onedegreeadvisors.com" class="green-text">For more information, please contact our office</a>.

		</p>
		<br>
		<br>
		<p class="text">
			<span class="bold">Who is TD Ameritrade?</span><br>
			TD Ameritrade serves as our primary custodian for our clients’ accounts. TD 
			Ameritrade provides investing and trading services for nearly six million accounts that 
			total more than $600 billion in assets, and custodial services for more than 4,000 
			independent registered investment advisors. They place, on average, approximately 
			400,000 trades each day. They are a leader among custodians and were founded in 
			Omaha, NE in 1975.
		</p>

		<br>
		<br>

		<p class="text">
			<span class="bold">Who is Securities America, Inc.?</span><br>
			Founded in 1984 and based in Omaha, Nebraska, Securities America, Inc. is a national independent broker-dealer that facilitates the buying and selling of securities on behalf of the clients of its registered representatives.  Think of them as our behind-the-scenes support. Through their extensive technology, compliance and operational support, we can more readily provide comprehensive and professional service to you, our client.  Securities America, Inc. serves more than 2,000 registered representatives and financial advisors across the United States.
		</p>
		
		

	</div>

	<div class="service-section faded" id="info">

		<p class="section-title">
			Disclosures
		</p>

		<p class="text">

			Advisory services offered through One Degree 
			Advisors, Inc.SM Securities offered through Securities 
			America, Inc., Member <a href="http://www.finra.org/" target="_blank">FINRA</a>/<a href="http://www.sipc.org/" target="_blank">SIPC</a>. One Degree 
			Advisors and Securities America are separate 
			companies. We are registered to sell Securities in the 
			following states: AE, AP, AR, AZ, CA, CO, FL, GA, HI, ID, IN, MD, ME, 
			MO, NC, NJ, NV, OR, SC, SD, UT, VA, WA.		
		</p>

		<br>
		<p class="text">AIF - The Accredited Fiduciary Standard of Care applies to advisory services only.</p>
		<br>
		<table class="text">
			<tr>
				<td>Audrey Coleman</td>
				<td>&nbsp;CA Life Insurance License #0690605</td>
			</tr>
			<tr>
				<td>Janice Thompson</td>
				<td>&nbsp;CA Life Insurance License #0B67613</td>
			</tr>
			<tr>
				<td>Blake Gallion</td>
				<td>&nbsp;CA Life Insurance License #0E88557</td>
			</tr>
			<tr>
				<td>Anthony Saffer</td>
				<td>&nbsp;CA Life Insurance License #0C43243</td>
			</tr>
		</table>
		<br>
		<p class="text">Diversification does not guarantee a profit or protection from losses in a declining market.</p>
		<br>
		<p class="text">Certified Financial Planner Board of Standards Inc. owns the certification marks CFP®, Certified
			Financial Planner&trade; and CFP® in the U.S., which it awards to individuals who successfully
			complete CFP Board’s initial and ongoing certification requirements.</p>

	</div>

</div>	

<div class="banner footer-banner services-banner">

	<div class="container">

		<p class="banner-quote"><span class="bold">Everyone</span> ends up somewhere,<br> <span class="bold">but few</span> people end up somewhere on purpose.</p>
		<p class="banner-quote-source">Craig Groeschel</p>

	</div>

</div>


@stop