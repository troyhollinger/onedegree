@extends('layouts.master')

@section('title')
Team
@stop


@section('content')

<div class="container">


	<div class="team-member">

		<div class="team-member-image-container">
			<div class="team-member-image" style="background-image:url({{ asset('img/person3.jpg') }})"></div>
		</div>

		<div class="team-member-info-container">

			<p class="team-member-name"><span>Audrey Coleman, CFP, AIF</span><span>President</span></p>
			<p class="team-member-description">
				A native of New York and a longtime resident of California, Audrey began her career in financial services with Bank of America before starting her financial planning practice with John Hancock Financial Services in 1985. She also gained experience in advanced estate planning at CIGNA (now Sagemark) Financial Advisors. She formed Coleman &amp; Johnson Financial Advisors with Roy Johnson in 2001. In 2014 she merged her practice with Janice Thompson and jointly they formed One Degree Advisors. Audrey earned the CERTIFIED FINANCIAL PLANNER® designation from the College for Financial Planning in Denver, Colorado. . Away from the office, Audrey enjoys hiking, canoeing and golfing. The Accredited Fiduciary Standard of Care applies to advisory services only. CA Life Insurance License # 0690605. Connect with me on <a href="https://www.linkedin.com/pub/audrey-coleman-cfp%C2%AE/4/83a/369">LinkedIn</a>
			</p>

		</div>

	</div>


	<div class="team-member">

		<div class="team-member-image-container">
			<div class="team-member-image" style="background-image:url({{ asset('img/person4.jpg') }})"></div>
		</div>

		<div class="team-member-info-container">

			<p class="team-member-name"><span>Janice Thompson, CFP, MSFS</span><span>CEO</span></p>
			<p class="team-member-description">
				Janice’s interest in all things financial go back to her earliest childhood memory. After years of counseling people in financial basics, she began to focus on a career in the industry in 1993. During the next decade she earned a Master’s Degree in Financial Services, the CFP® designation, and launched Strategic Financial Solutions, Inc. In 2014 she merged her practice with Audrey Coleman and jointly they formed One Degree Advisors.She is passionate about assisting affluent families with meaningful gift planning and legacy wealth transfer as well as working with women going through transitions. Janice enjoys speaking on various financial topics as well as mentoring other financial professionals. She and her husband, Tom, have two grown children and are actively involved with several non-profit organizations. Janice also currently serves on the Board of Directors for Kingdom Advisors. CA Life Insurance License # 0B67613. Connect with me on <a href="https://www.linkedin.com/pub/janice-thompson-cfp%C2%AE/37/109/570">LinkedIn</a> / Read my writings on <a href="https://medium.com/@janicethompson">Medium</a>
			</p>

		</div>

	</div>


	<div class="team-member">

		<div class="team-member-image-container">
			<div class="team-member-image" style="background-image:url({{ asset('img/person2.jpg') }})"></div>
		</div>

		<div class="team-member-info-container">

			<p class="team-member-name"><span>Blake Gallion, CFP</span><span>Financial Advisor</span></p>
			<p class="team-member-description">
				Blake’s interest in personal finance began at a young age. He specifically remembers being taught the principals of saving and giving. This sparked a desire to learn more. He attended UCSD where he received a Bachelor of Science in Management Science from the Economics Department. He also holds the CFP® designation and heads the firm’s Investment Committee. Blake thoroughly enjoys helping clients realize their potential by creating and utilizing wealth. Blake enjoys football, mountain biking, relaxing with friends, and most of all spending time with his wife, Rachael, and daughter, Avery. He is involved in a local church, where he serves on the Board of Elders and as Treasurer. He also serves on the San Diego Board of Kingdom Advisors. CA Life Insurance License # 0E88557. Connect with me on <a href="https://www.linkedin.com/pub/blake-gallion-cfp%C2%AE/9/976/16a">LinkedIn</a>
			</p>

		</div>

	</div>


	<div class="team-member">

		<div class="team-member-image-container">
			<div class="team-member-image" style="background-image:url( {{ asset('img/person1.jpg') }} )"></div>
		</div>

		<div class="team-member-info-container">

			<p class="team-member-name"><span>Anthony Saffer, CFP</span><span>Financial Advisor</span></p>

			<p class="team-member-description">
				Anthony earned his degree in Business Economics from the University of San Diego. He received his CERTIFIED FINANCIAL PLANNER™ designation from the Certified Financial Planner Board of Standards. After beginning his financial planning career with Waddell &amp; Reed, Inc. in 1999, Anthony developed a successful personalized financial planning process designed to address clients’ most-valued priorities. Anthony is a director with Kingdom Advisors in San Diego. He authors the Principles of Prosperity newspaper column. In addition to financial education, Anthony has a passion for training and coaching children. He serves kids and teens in his church and also coaches soccer. Along with his wife, Robin, Anthony enjoys spending time with their three children, Jake, Gianna &amp; Henry. He also enjoys sports and traveling. CA Life Insurance License # 0C43243. Connect with me on <a href="https://www.linkedin.com/in/anthonysaffer">LinkedIn</a> / Read my writings on <a href="https://medium.com/@onedegreesaffer">Medium</a>
			</p>

		</div>

	</div>





	<div class="secondary-team">

		<div class="secondary-team-member square"></div>

		<div class="secondary-team-member square" style="background-image:url({{ asset('img/person1.jpg') }})">
			<div class="overlay">
				<div class="secondary-team-member-info">
					<p class="secondary-team-member-name">Linda Jillson</p>
				<p class="secondary-team-member-position">Administration</p>
				</div>
			</div>
			
		</div>
		
		<div class="secondary-team-member square" style="background-image:url({{ asset('img/person2.jpg') }})">
			<div class="overlay">
				<div class="secondary-team-member-info">
					<p class="secondary-team-member-name">Courtney Daus</p>
					<p class="secondary-team-member-position">Administration</p>
				</div>
			</div>
			
		</div>

		<div class="secondary-team-member square" style="background-image:url({{ asset('img/person3.jpg') }})">
			<div class="overlay">
				<div class="secondary-team-member-info">
					<p class="secondary-team-member-name">Jane Smith</p>
					<p class="secondary-team-member-position">Accounting</p>
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

























