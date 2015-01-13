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

    <p class="intro-blurb">
        Our financial planners are experienced in providing personalized wealth solutions for select 
        families and organizations. We offer <span class="bold">guidance, clarity</span>, and <span class="bold">wisdom</span> to help our clients gain <span class="bold">confidence</span> in their financial future.<br>
        We are independent, fee based professionals who build long term, trusted relationships focused on solutions, not products. As fiduciaries, we make sure that <span class="bold">our clients' interests always come first.</span>
    </p>


    <div class="divider"></div>

    <div class="medium-container">

        <p class="section-title">Latest Posts</p><br>
        
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
                <p>@onedegreeadvisors</p>
            </div>

        </div>

        <div class="twitter-block">

            <p class="tweet-text">New Post on Medium called "The Power of Planning" written by our own Jonathan Doe. www.t.co/rh8s3yr</p>
            <p class="tweet-time">November 17, 2014</p>

            <div class="tweet-handle-container">
                <i class="fa fa-twitter"></i>
                <p>@onedegreeadvisors</p>
            </div>

        </div>

        <div class="twitter-block">

            <p class="tweet-text">The best offence is a good defence.</p>
            <p class="tweet-time">November 17, 2014</p>

            <div class="tweet-handle-container">
                <i class="fa fa-twitter"></i>
                <p>@onedegreeadvisors</p>
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