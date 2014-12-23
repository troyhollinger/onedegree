@extends('layouts.master')

@section('title')
Team
@stop


@section('content')

<div class="container">

	<div class="team-member">

		<div class="team-member-image-container">
			<div class="team-member-image" style="background-image:url( {{ asset('img/person1.jpg') }} )"></div>
		</div>

		<div class="team-member-info-container">

			<p class="team-member-name"><span>Anthony Saffer, CFP</span><span>Financial Advisor</span></p>

			<p class="team-member-description">
				Anthony earned his degree in Business Economics from the University of San Diego. He received his CERTIFIED FINANCIAL PLANNER™ designation from the Certified Financial Planner Board of Standards. After beginning his financial planning career with Waddell &amp; Reed, Inc. in 1999, Anthony developed a successful personalized financial planning process designed to address clients’ most-valued priorities. Anthony is a director with Kingdom Advisors in San Diego. He authors the Principles of Prosperity newspaper column. In addition to financial education, Anthony has a passion for training and coaching children. He serves kids and teens in his church and also coaches soccer. Along with his wife, Robin, Anthony enjoys spending time with their three children, Jake, Gianna &amp; Henry. He also enjoys sports and traveling. CA Life Insurance License # 0C43243
			</p>

		</div>

	</div>


	<div class="team-member">

		<div class="team-member-image-container">
			<div class="team-member-image" style="background-image:url({{ asset('img/person3.jpg') }})"></div>
		</div>

		<div class="team-member-info-container">

			<p class="team-member-name"><span>Audrey Coleman, CFP, AIF</span><span>President</span></p>
			<p class="team-member-description">
				A native of New York and a longtime resident of California, Audrey began her career in financial services with Bank of America before starting her financial planning practice with John Hancock Financial Services in 1985. She also gained experience in advanced estate planning at CIGNA (now Sagemark) Financial Advisors. She formed Coleman &amp; Johnson Financial Advisors with Roy Johnson in 2001. In 2014 she merged her practice with Janice Thompson and jointly they formed One Degree Advisors. Audrey earned the CERTIFIED FINANCIAL PLANNER® designation from the College for Financial Planning in Denver, Colorado. . Away from the office, Audrey enjoys hiking, canoeing and golfing. The Accredited Fiduciary Standard of Care applies to advisory services only. CA Life Insurance License # 0690605
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
				Blake’s interest in personal finance began at a young age. He specifically remembers being taught the principals of saving and giving. This sparked a desire to learn more. He attended UCSD where he received a Bachelor of Science in Management Science from the Economics Department. He also holds the CFP® designation and heads the firm’s Investment Committee. Blake thoroughly enjoys helping clients realize their potential by creating and utilizing wealth. Blake enjoys football, mountain biking, relaxing with friends, and most of all spending time with his wife, Rachael, and daughter, Avery. He is involved in a local church, where he serves on the Board of Elders and as Treasurer. He also serves on the San Diego Board of Kingdom Advisors. CA Life Insurance License # 0E88557
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
				Janice’s interest in all things financial go back to her earliest childhood memory. After years of counseling people in financial basics, she began to focus on a career in the industry in 1993. During the next decade she earned a Master’s Degree in Financial Services, the CFP® designation, and launched Strategic Financial Solutions, Inc. In 2014 she merged her practice with Audrey Coleman and jointly they formed One Degree Advisors.She is passionate about assisting affluent families with meaningful gift planning and legacy wealth transfer as well as working with women going through transitions. Janice enjoys speaking on various financial topics as well as mentoring other financial professionals. She and her husband, Tom, have two grown children and are actively involved with several non-profit organizations. Janice also currently serves on the Board of Directors for Kingdom Advisors. CA Life Insurance License # 0B67613
			</p>

		</div>

	</div>



	<div class="secondary-team">

		<div class="secondary-team-member square" style="background-image:url({{ asset('img/person1.jpg') }})">
			<div class="overlay">
				<div class="secondary-team-member-info">
					<p class="secondary-team-member-name">Jonathan Doe</p>
					<p class="secondary-team-member-position">Call Support</p>
				</div>
			</div>
			
		</div>
		
		<div class="secondary-team-member square" style="background-image:url({{ asset('img/person2.jpg') }})">
			<div class="overlay">
				<div class="secondary-team-member-info">
					<p class="secondary-team-member-name">Marcy Baker</p>
					<p class="secondary-team-member-position">Administration</p>
				</div>
			</div>
			
		</div>

		<div class="secondary-team-member square" style="background-image:url({{ asset('img/person3.jpg') }})">
			<div class="overlay">
				<div class="secondary-team-member-info">
					<p class="secondary-team-member-name">Bill Harper</p>
					<p class="secondary-team-member-position">Accounting</p>
				</div>
			</div>
			
		</div>

		<div class="secondary-team-member square" style="background-image:url({{ asset('img/person1.jpg') }})">
			<div class="overlay">
				<div class="secondary-team-member-info">
					<p class="secondary-team-member-name">Srirda Volsum</p>
					<p class="secondary-team-member-position">Assistant</p>
				</div>
			</div>
			
		</div>

		<div class="secondary-team-member square" style="background-image:url({{ asset('img/person4.jpg') }})">
			<div class="overlay">
				<div class="secondary-team-member-info">
					<p class="secondary-team-member-name">Stacey Banes</p>
					<p class="secondary-team-member-position">Intern</p>
				</div>
			</div>
			
		</div>

	</div>


	<div class="affiliations">
		<p class="section-title">Affiliations</p>
		<p class="text"><span class="bold">Certified Financial Planner Board of Standards, Inc. (CFP®)</span> - are experienced in providing personalized wealth solutions for select families and organizations. We offer guidance, clarity and wisdom to help our clients gain confidence in their financial future.
		We are independent, fee-based financial professionals who build long term, trusted relationships focused on solutions, not products. As fiduciaries, we make sure that our clients' interests always come first. </p>
		<br>
		<p class="text"><span class="bold">Financial Planning Association (FPA)</span> - are experienced in providing personalized wealth solutions for select families and organizations. We offer guidance, clarity and wisdom to help our clients gain confidence in their financial future.
		We are independent, fee-based financial professionals who build long term, trusted relationships focused on solutions, not products. As fiduciaries, we make sure that our clients' interests always come first. </p>
		<br>
		<p class="text"><span class="bold">Kingdom Advisors </span>- are experienced in providing personalized wealth solutions for select families and organizations. We offer guidance, clarity and wisdom to help our clients gain confidence in their financial future.
		We are independent, fee-based financial professionals who build long term, trusted relationships focused on solutions, not products. As fiduciaries, we make sure that our clients' interests always come first. </p>
	</div>

	<div class="ethics">

		<p class="section-title">Code Of Ethics</p>

		<p class="text">We adhere to a Code of Ethics that reflects our cimmitment to help clients acheive their life goals. This code of ethics is mandated by the Financial Planning Association (FPA) and adopted by the Certified Financial Planner Board (CFP).</p>

		<ul>
			<li>Principle 1 - <span>Integrity</span></li><br>
			<li>Principle 2 - <span>Objectivity</span></li><br>
			<li>Principle 3 - <span>Competence</span></li><br>
			<li>Principle 4 - <span>Fairness</span></li><br>
			<li>Pricinple 5 - <span>Confidentiality</span></li><br>
			<li>Principle 6 - <span>Professionalism</span></li><br>
			<li>Principle 7 - <span>Diligence</span></li><br>
		</ul>

	</div>




</div>

<div class="banner footer-banner"></div>

@stop

























