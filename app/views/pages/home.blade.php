@extends('layouts.master')


@section('title')
Menu
@stop



@section('content')


<div class="home-banner top-banner">

    <div id="skippr-targer">

        
        <div style="background-image:url({{ asset('img/tiles-large-1.jpg') }})">

            <div class="photo-content-container">

                <p class="photo-content-title">Thinking for Tomorrow, <br><span class='bold'>Today.</span></p>
                <p class="photo-content-text"><span class="bold">What is important to you?</span><br>
                One Degree Advisors are experienced
                in providing personalized wealth solutions
                for select families and organizations.
                We offer guidance, clarity and wisdom...
                </p>

                <a href="{{ route('services') }}"><div class="photo-content-button">
                
                                    <p>Learn More</p>
                
                                </div></a>

            </div>

        </div>
        <div style="background-image:url({{ asset('img/slide-test-5.jpg') }})">

            <div class="photo-content-container">

                <p class="photo-content-title"><span class='bold'>We are here to help you answer</span><br>These kinds of questions.</p>
                <p class="photo-content-text">Do you have a financial plan that accomplishes your goals?
                <br>Are you using tax savings strategies?
                <br>Are you on track for retirement?
                </p>

                <div class="photo-content-button">

                    <p>Learn More</p>

                </div>

            </div>

        </div>
        <div style="background-image:url({{ asset('img/gray-slide.jpg') }})">

            <div class="photo-content-container">

                <p class="photo-content-title"><span class='bold'>What is a</span><br>CERTIFIED FINANCIAL PLANNER</p>
                <p class="photo-content-text">View this video and many <br>other tutorial videos <br> in our video section.
                </p>

                <a href="{{ route('videos') }}"><div class="photo-content-button">
                
                                    <p>Watch Video</p>
                
                                </div></a>

            </div>

        </div>
        <div style="background-image:url({{ asset('img/slide-test-6.jpg') }})">

            <div class="photo-content-container">

                <p class="photo-content-title"><span class='bold'>A Game Plan for 2015</span><br>By Janice Thompson</p>
                <p class="photo-content-text">While I cannot predict the economic events
                    ahead, without question your preparedness for
                    the ups and down of uncertainty will play a major
                    role in...
                </p>

                <a href="https://medium.com/@janicethompson/a-game-plan-for-2015-4827ec319f97"><div class="photo-content-button">
                
                    <p>Read Column</p>
                
                </div></a>

            </div>

        </div>
        <div style="background-image:url({{ asset('img/slide-test-7.jpg') }})">

           <div class="photo-content-container">

               <p class="photo-content-title">Details Matter, <br><span class='bold'>even to the smallest degree.</span></p>
               <p class="photo-content-text">Erica called me several months after her husband’s
                tragic death in a work-related accident. Within minutes...
               </p>

               <a href="{{ route('blog') }}"><div class="photo-content-button">
               
                   <p>Read More</p>
               
               </div></a>

           </div>

        </div>
       
    </div>

</div>

<a class="inquire-link" href="{{ route('inquiry') }}">INQUIRE</a>

<div class="container content">

    <div class="intro-blurb-container">
       
        <div class="intro-blurb-column">

            <p class="section-title">FINANCIAL PLANNING</p>
            <p class="text">We take a comprehensive approach to
                managing your wealth. By incorporating
                the <span class="green-text">six-step Financial Planning process</span>
                recognized by the CFP® Board, your initial
                plan is developed over the course of
                several meetings. We also coordinate with
                your other professionals, such as estate
                planning attorneys, CPAs, and insurance
                specialists as needed. If you don’t have
                this team in place, we can provide
                recommendations. <a href="{{ route('services') }}"><span class="green-text bold">Read more...</span></a>
            </p>

        </div>
        <div class="intro-blurb-column">

            <p class="section-title">INVESTMENT MANAGEMENT</p>

            <p class="text">
                We use a purpose allocation approach to 
                determine the proper asset allocation of your 
                investments. What is important to you? Are you 
                trying to save for retirement? Do you need an 
                income distribution strategy? Would you like to 
                buy a second home? Do you want to be able to 
                give more money to charity now? Would you like 
                to focus on leaving a legacy? Once we 
                understand your values, we then work on 
                building an all-weather portfolio designed to 
                accomplish these goals. <a href="{{ route('services') }}"><span class="green-text bold">Read more... </span></a>
            </p>

        </div>

    </div>


    <div class="divider"></div>

    <div class="medium-container">

        <p class="section-title">Recent Columns:</p><br>
        
        <script async src="https://static.medium.com/embed.js"></script><a class="m-story" data-collapsed="true" href="https://medium.com/@janicethompson/87709bfc4d0b">A Spending Plan</a>
        <script async src="https://static.medium.com/embed.js"></script><a class="m-story" data-collapsed="true" href="https://medium.com/@janicethompson/4827ec319f97">A Game Plan for 2015</a>
        <script async src="https://static.medium.com/embed.js"></script><a class="m-story" data-collapsed="true" href="https://medium.com/@janicethompson/ed143692496c">Conquer the Clutter</a>
       
        <a href="{{ route('blog') }}"><p class="section-title">All Columns <i class="fa fa-angle-right"></i></p></a>

    </div>
   
    <div class="divider"></div>

    <div class="twitter-container">

        <div class="twitter-block">

            <p class="tweet-text">We love helping our clients reach their long and short term goals!</p>
            <p class="tweet-time">November 17, 2014</p>

            <div class="tweet-handle-container">
                <i class="fa fa-twitter"></i>
                <p>@onedegreetweets</p>
            </div>

        </div>

        <div class="twitter-block">

            <p class="tweet-text">New Post on Medium called "The Power of Planning" written by our own Jonathan Doe. www.t.co/rh8s3yr</p>
            <p class="tweet-time">November 17, 2014</p>

            <div class="tweet-handle-container">
                <i class="fa fa-twitter"></i>
                <p>@onedegreetweets</p>
            </div>

        </div>

        <div class="twitter-see-more">

            <div class="twitter-circle">
                <i class="fa fa-angle-right"></i>
            </div>

        </div>


    </div>

</div> 

<div class="banner footer-banner">

    <div class="container">

        <p class="banner-quote">The Longer you Travel off Course,<br> The Further you Will Be from your Intended Destination. <br> <span class="bold">Every Degree Counts</span></p>
        <p class="banner-quote-source">One Degree Advisors</p>

    </div>

</div>

@stop