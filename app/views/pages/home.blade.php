@extends('layouts.master')


@section('title')

@stop



@section('content')


<div class="home-banner top-banner">

    <div id="skippr-targer">

        <div style="background-image:url({{ asset('img/tiles-large.jpg') }})"></div>
        <div style="background-image:url({{ asset('img/slide-test-5.jpg') }})"></div>
        <div style="background-image:url({{ asset('img/slide-test-6.jpg') }})"></div>
        <div style="background-image:url({{ asset('img/slide-test-7.jpg') }})"></div>
        <div style="background-image:url({{ asset('img/slide-test-4.jpg') }})"></div>
       
    </div>

</div>

<div class="container content">

    <div class="intro-blurb-container">
       
        <div class="intro-blurb-column">

            <p class="section-title">FINANCIAL PLANNING</p>
            <p class="text">We take a comprehensive approach to
                managing your wealth. By incorporating
                the six-step Financial Planning process
                recognized by the CFP® Board, your initial
                plan is developed over the course of
                several meetings. We also coordinate with
                your other professionals, such as estate
                planning attorneys, CPAs, and insurance
                specialists as needed. If you don’t have
                this team in place, we can provide
                recommendations. Read more...
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
                accomplish these goals. Read more... 
            </p>

        </div>

    </div>


    <div class="divider"></div>

    <div class="medium-container">

        <p class="section-title">Recent Columns:</p><br>
        
        <script async src="https://static.medium.com/embed.js"></script><a class="m-story" data-collapsed="true" href="https://medium.com/@janicethompson/87709bfc4d0b">A Spending Plan</a>
        <script async src="https://static.medium.com/embed.js"></script><a class="m-story" data-collapsed="true" href="https://medium.com/@janicethompson/4827ec319f97">A Game Plan for 2015</a>
        <script async src="https://static.medium.com/embed.js"></script><a class="m-story" data-collapsed="true" href="https://medium.com/@janicethompson/ed143692496c">Conquer the Clutter</a>
       
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