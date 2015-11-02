@extends('layouts.master')

@section('tab')
Team - One Degree Advisors - Experienced financial planners based in San Diego
@stop

@section('title')
Team
@stop


@section('content')

<div class="container">


	<div class="team-member">

		<div class="team-member-image-container">
			<div class="team-member-image" style="background-image:url({{ asset('img/audrey-1.jpg') }})"></div>
		</div>

		<div class="team-member-info-container">

			<p class="team-member-name"><span>Audrey Coleman, CFP<i class="smaller">&reg;</i>, AIF<i class="smaller">&reg;</i></span><span>President</span></p>
			<p class="team-member-description">
				Audrey began a career in financial services in the mid 80’s when the industry was developing new services to keep pace with a rapidly changing 
				economy. She helped clients at Bank of America understand changes in the tax law and banking options for retirement savings. With an 
				emphasis on client needs and objectives, she developed tools that were familiar to clients and a roadmap for financial concerns. Audrey 
				continued her career with John Hancock Companies and CIGNA Financial Services.  Both organizations provided extensive training in complex 
				issues for business owners and estate planning strategies. In 2001, she formed Coleman &amp; Johnson Financial Advisors with Roy Johnson 
				providing financial planning and wealth management for retirees. 
				<br><br>
				In 2014, she merged her practice with Janice Thompson and jointly they formed One Degree Advisors. Audrey earned the CERTIFIED 
				FINANCIAL PLANNER&trade; certification from the College for Financial Planning in Denver, Colorado. She is also an Accredited Investment 
				Fiduciary®. Audrey is an active Rotarian, member of the San Diego Women’s Foundation and San Diego Chapter of the Financial Planning 
				Association. Audrey is married to Ron and has one son, Matthew.
				<br><br>
				<a href="https://www.linkedin.com/pub/audrey-coleman-cfp%C2%AE/4/83a/369">Connect with me on LinkedIn</a>
			</p>
			<p class="text faded smaller">AIF – The Accredited Fiduciary Standard of Care applies to advisory services only</p>

		</div>

	</div>


	<div class="team-member">

		<div class="team-member-image-container">
			<div class="team-member-image" style="background-image:url({{ asset('img/janice-2.jpg') }})"></div>
		</div>

		<div class="team-member-info-container">

			<p class="team-member-name"><span>Janice Thompson, CFP<i class="smaller">&reg;</i>, MSFS</span><span>CEO</span></p>
			<p class="team-member-description">
				Janice can actually trace her interest in all things financial to an early childhood memory. After years of teaching financial basics, she began to 
				focus on a professional career in the industry in 1993. During the next decade she earned a Master’s Degree in financial services, the CFP® 
				certification, and launched Strategic Financial Solutions, Inc. In 2014 she merged her practice with Audrey Coleman of Coleman and Johnson 
				and together they formed One Degree Advisors, Inc. 
				<br><br>
				Janice is passionate about assisting financially blessed families with holistic life coaching and wealth transfer planning, working with business 
				owners, and addressing the unique needs of women going through transitions. Speaking and writing on various financial topics as well as 
				mentoring other financial professionals is also important to her. Janice and her husband, Tom, live in San Diego, California, have two married 
				children and are actively involved with several ministries. Janice also serves on the Board of Directors for Kingdom Advisors.  
				<br><br>
				<a href="https://www.linkedin.com/pub/janice-thompson-cfp%C2%AE/37/109/570">Connect with me on LinkedIn</a> / <a href="https://medium.com/@janicethompson">Read my writings on Medium</a>
			</p>

		</div>

	</div>


	<div class="team-member">

		<div class="team-member-image-container">
			<div class="team-member-image" style="background-image:url({{ asset('img/blake-1.jpg') }})"></div>
		</div>

		<div class="team-member-info-container">

			<p class="team-member-name"><span>Blake Gallion, CFP<i class="smaller">&reg;</i></span><span>Financial Advisor</span></p>
			<p class="team-member-description">
				At an early age Blake’s parents helped him create and manage his own budget, incorporating the principles of saving and giving. This was a 
				valuable learning lesson and was the spark to opening his first mutual fund in high school and ultimately led to his career in financial planning. 
				Though everyone’s situation is unique, his overriding goal for his clients is to attain contentment in their financial life.
				<br><br>
				Blake earned a Management Science Degree from UCSD and holds the CFP® certification. After several years in the business he set out to find 
				people who shared his same passion for helping others and through Kingdom Advisors he found Janice Thompson. They have been working 
				together since 2007 at Strategic Financial Solutions and in 2014 merged with other like-minded planners forming One Degree Advisors, Inc. He 
				has served as a board member and treasurer for non-profit organizations{{-- , and currently serves on the local board of Kingdom Advisors --}}. Blake 
				loves spending time with his high-school sweetheart, Rachael, and their kids Avery and Tanner.
				<br><br>
				<a href="https://www.linkedin.com/pub/blake-gallion-cfp%C2%AE/9/976/16a">Connect with me on LinkedIn</a>
			</p>

		</div>

	</div>


	<div class="team-member">

		<div class="team-member-image-container">
			<div class="team-member-image" style="background-image:url( {{ asset('img/anthony-2.jpg') }} )"></div>
		</div>

		<div class="team-member-info-container">

			<p class="team-member-name"><span>Anthony Saffer, CFP<i class="smaller">&reg;</i></span><span>Financial Advisor</span></p>

			<p class="team-member-description">
				Before graduating high school, Anthony knew that he wanted to work in the financial world once he had a taste of investing and working toward 
				personal goals. His passion for helping families to address their most important priorities hasn't changed. In 1999, Anthony began his career 
				with a focus on simplifying complex matters through the planning process. He teamed with Audrey Coleman in 2006 and then the One Degree 
				team in 2014. 
				<br><br>
				Anthony holds a Business Economics degree from the University of San Diego and the CFP® certification. {{-- He is also a director with Kingdom 
				Advisors in San Diego. --}} He authors the Principles of Prosperity newspaper column. In addition to financial education, Anthony serves at his 
				church and coaches competitive youth soccer. Along with his wife, Robin, Anthony enjoys spending time with their three children, Jake, Gianna, 
				and Henry.
				<br><br>
				<a href="https://www.linkedin.com/in/anthonysaffer">Connect with me on LinkedIn</a> / <a href="https://medium.com/@onedegreesaffer">Read my writings on Medium</a>
			</p>

		</div>

	</div>





	<div class="secondary-team">

		<div class="secondary-team-title">Our Staff, Ready to Serve You</div>

		<div class="secondary-team-member square" style="background-image:url({{ asset('img/jill-1.jpg') }})">
			<div class="overlay">
				<div class="secondary-team-member-info">
					<p class="secondary-team-member-name">Jill Schiller</p>
				<p class="secondary-team-member-position">Office Manager</p>
				</div>
			</div>
		</div>
		
		<div class="secondary-team-member square" style="background-image:url({{ asset('img/alex-1.jpg') }})">
			<div class="overlay">
				<div class="secondary-team-member-info">
					<p class="secondary-team-member-name">Alex Okugawa</p>
					<p class="secondary-team-member-position">Advisor Support Specialist</p>
				</div>
			</div>
		</div>

		<div class="secondary-team-member square" style="background-image:url({{ asset('img/angela-1.jpg') }})">
			<div class="overlay">
				<div class="secondary-team-member-info">
					<p class="secondary-team-member-name">Angela De Palo</p>
					<p class="secondary-team-member-position">Client Services Admin.</p>
				</div>
			</div>
			
		</div>

		

	</div>




</div>

<div class="banner footer-banner">

	<div class="container">

		<p class="banner-quote">Plans Fail for Lack of Counsel, <br><span class="bold">But with Many Advisors they Succeed.</span></p>
		<p class="banner-quote-source">PROVERBS</p>

	</div>

</div>

@stop

























