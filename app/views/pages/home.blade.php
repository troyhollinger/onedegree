@extends('layouts.master')

@section('tab')
One Degree Advisors - San Diego based financial planning and investment services
@stop

@section('title')
Menu
@stop



@section('content')


<div class="home-banner top-banner">

    <div class="mobile-home-banner" style="background-image:url({{ asset('img/tiles-large-1.jpg') }})">

        <div class="photo-content-container">

            <p class="photo-content-title">Our Purpose</p>
            <p class="photo-content-text">Timeless financial wisdom. We educate, equip, and empower our clients to be all they are...</p>

            <a href="{{ route('services') }}#purpose"><div class="photo-content-button">
            
                <p>Learn More</p>
            
            </div></a>

        </div>

    </div>



    <div id="skippr-target">

        
        <div style="background-image:url({{ asset('img/city.jpg') }})">

            <div class="photo-content-container">

                <p class="photo-content-title">Our Purpose</p>
                <p class="photo-content-text">Timeless financial wisdom. We educate, equip, and empower our clients to be all they are...</p>
                

                <a href="{{ route('services') }}#purpose">
                    <div class="photo-content-button">
                
                        <p>Read More</p>
                
                    </div>
                </a>

            </div>

        </div>
        <div style="background-image:url({{ asset('img/building.jpg') }})">

            <div class="photo-content-container">

                <p class="photo-content-title">Why One Degree</p>
                <p class="photo-content-text">Navigating life’s transitions: widowhood, business sale, sound investments, preserving wealth and/or...</p>
                

                <a href="{{ route('services') }}#why-one-degree"><div class="photo-content-button">

                    <p>See More</p>

                </div></a>

            </div>

        </div>
        <div style="background-image:url({{ asset('img/meeting.jpg') }})">

            <div class="photo-content-container">

                <p class="photo-content-title">Expect From Us</p>
                <p class="photo-content-text">Multiple Solutions with a plan that is flexible as life changes. Use our knowledge to meet your...</p>

                

                <a href="{{ route('services') }}#expect"><div class="photo-content-button">
                
                    <p>Expect More</p>
                
                </div></a>

            </div>

        </div>
        <div style="background-image:url({{ asset('img/tiles-green.jpg') }})">

            <div class="photo-content-container">

                <p class="photo-content-title">Our Ideal Client</p>
                <p class="photo-content-text">Affluent clients that know the importance of evaluating financial strategy, who desire...</p>

                

                <a href="{{ route('services') }}#ideal-client"><div class="photo-content-button">
                
                    <p>Ideal Client</p>
                
                </div></a>

            </div>

        </div>
        <div style="background-image:url({{ asset('img/group.jpg') }})">

           <div class="photo-content-container">

                <p class="photo-content-title">We Love To!</p>
                <p class="photo-content-text">Financial concerns in a large context for business, retirement, family security, charitable inclinations...</p>

               <a href="{{ route('services') }}"><div class="photo-content-button">
               
                   <p>Services</p>
               
               </div></a>

           </div>

        </div>
       
    </div>

</div>



<div class="container content">

    <div class="home-service-modules-container indicator-parent" data-indicator="Inquire" id="inquiry">

        <div class="service-module">
            <p class="section-title uppercase">Financial Planning</p>
            <p class="text">We take a comprehensive approach to managing your wealth. By incorporating the <span class="green-text">six-step Financial Planning process</span> recognized by the CFP® Board, your initial plan is developed over the course of several meetings. We also coordinate with your other professionals, such as estate planning attorneys, CPAs, and insurance specialists as needed. If you don’t have this team in place, we can provide recommendations. <a href="{{ route('services') }}"><span class="green-text bold">Read more... </span></a></p><br>
           
        </div>

        <div class="service-module">
            <p class="section-title uppercase">Investment Management</p>
            <p class="text">We use a purpose allocation approach to determine the proper asset allocation of your investments. What is important to you? Are you trying to save for retirement? Do you need an income distribution strategy? Would you like to buy a second home? Do you want to be able to give more money to charity now? Would you like to focus on leaving a legacy?  Once we understand your values, we then work on building an all-weather portfolio designed to accomplish these goals. <a href="{{ route('services') }}"><span class="green-text bold">Read more... </span></a></p><br>
    
        </div>

        <div class="service-module">

            <p class="section-title uppercase">Stewardship Coaching</p>
            <p class="text">Many families and business owners are experienced stewards and they have a vision to go over the top. They know that generosity is really the key to success and brings great joy with it. We encourage families to build plans inspired by their life’s purpose and passion. It involves a purposeful desire to take conflict and confusion so typical in life and replace it with clarity. Financial wealth, planning and confidence can make it happen. <a href="{{ route('services') }}"><span class="green-text bold">Read more... </span></a></p>

        </div>

    </div>


    <div class="divider"></div>

    <div class="home-medium-container">

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

        <div class="clear"></div>


    </div>

</div> 

<div class="banner footer-banner">

    <div class="container">

        <p class="banner-quote">The Longer you Travel off Course,<br> The Further you Will Be from your Intended Destination. <br> <span class="bold">Every Degree Counts</span></p>
        <p class="banner-quote-source">One Degree Advisors</p>

    </div>

</div>

@stop