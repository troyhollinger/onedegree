@extends('layouts.master')

@section('tab')
One Degree Advisors - San Diego based financial planning and investment services
@stop

@section('title')
Menu
@stop



@section('content')


<div class="home-banner top-banner">
    <div id="skippr-target">
        <div style="background-image:url({{ asset('img/building-2.jpg') }})">
            <div class="photo-content-container">
                <p class="photo-content-title">Why One Degree</p>
                <p class="photo-content-text">Our name, One Degree Advisors, reflects the idea that small changes can have a big impact. Think about that 20 foot putt...</p>            
                <a href="{{ route('services') }}#why-one-degree"><div class="photo-content-button">
                    <p>See More</p>
                </div></a>
            </div>
        </div>
        <div style="background-image:url({{ asset('img/city.jpg') }})">
            <div class="photo-content-container">
                <p class="photo-content-title">What We Do</p>
                <p class="photo-content-text">Financial concerns in a large context for business, retirement, family security, charitable inclinations...</p>            
                <a href="{{ route('services') }}">
                    <div class="photo-content-button">            
                        <p>Services</p>
                    </div>
                </a>
            </div>
        </div>
        <div style="background-image:url({{ asset('img/team-2.jpg') }})">
            <div class="photo-content-container">
                <p class="photo-content-title">Who we are</p>
                <p class="photo-content-text">We derive great satisfaction in freeing you up to focus your time and resources on what’s important to you.</p>            
                <a href="{{ route('team') }}"><div class="photo-content-button">
                    <p>Our Team</p>
                </div></a>
            </div>
        </div>
        {{-- <div style="background-image:url({{ asset('img/group.jpg') }})" id="group-mobile-fix">
           <div class="photo-content-container">
                <p class="photo-content-title">We Love What We Do</p>
                <p class="photo-content-text">We love working with people who are good at what they do and passionate about sharing their gifts...</p>
               <a href="{{ route('services') }}#about"><div class="photo-content-button">            
                   <p>About Us</p>               
               </div></a>
           </div>
        </div>--}}
        <div style="background-image:url({{ asset('img/meeting.jpg') }})">
            <div class="photo-content-container">
                <p class="photo-content-title">Expect From Us</p>
                <p class="photo-content-text">Multiple Solutions with a plan that is flexible as life changes. Use our knowledge to meet your...</p>                
                <a href="{{ route('process') }}"><div class="photo-content-button">            
                    <p>Our Process</p>            
                </div></a>
            </div>
        </div>
        {{-- <div style="background-image:url({{ asset('img/tiles-green.jpg') }})">

            <div class="photo-content-container">

                <p class="photo-content-title">Our Ideal Client</p>
                <p class="photo-content-text">Affluent clients that know the importance of evaluating financial strategy, who desire...</p>

                

                <a href="{{ route('services') }}#ideal-client"><div class="photo-content-button">
                
                    <p>Ideal Client</p>
                
                </div></a>

            </div>

        </div>
         --}}
       
    </div>

</div>



<div class="container content indicator-parent home-services-module-wrapper" data-indicator="Login" id="client-login">

    <div class="home-service-modules-container">

        <div class="service-module">
            <p class="section-title uppercase">Financial Planning</p>
            <p class="text">Our focus is on what’s important to you. The overarching goal of our financial planning process is to coordinate the many unique aspects of your financial situation to provide a clear context for making sound financial decisions today. The truth is, we don’t know what the future will hold. We will all be impacted by uncertain factors. Financial planning is not a one-time event; it’s a process that adapts as your life changes. <a href="{{ route('services') }}#whatwedo"><span class="green-text bold">Read more... </span></a></p>
            
            <div class="iframe-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/785xsrLfXp4" frameborder="0" allowfullscreen></iframe></div>

        </div>

        <div class="service-module">
            <p class="section-title uppercase">Investment Management</p>
            <p class="text">Before determining an investment strategy, we must understand what is important to you. Are you saving for a goal such as retirement or college? Are you looking for ways to turn your assets into income? Is providing for future generations a priority? Is giving more to charity important to you? <br><br>Questions such as these help us determine a “Purpose Allocation.” <a href="{{ route('services') }}#investment-management"><span class="green-text bold">Read more... </span></a> or <a href="https://pro.riskalyze.com/embed/f3d96123615c2ab80d6e" target="_blank" class="green-text bold">What's Your Risk Score?</a></p>
        
            <div class="iframe-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/hteERZ-jZo0" frameborder="0" allowfullscreen></iframe></div>

        </div>

        <div class="service-module">

            <p class="section-title uppercase">Stewardship Advising</p>
            <p class="text">Many people race through life without giving careful consideration to finding and fulfilling their unique purpose in life. Even with help from competent advisors, many financially blessed families end up with results that may not reflect their values or unique calling. And, by the time they discover it, it may be too late to do anything about it. How you handle the blessings God has given you—your time, talent, treasure, and...<a href="{{ route('services') }}#stewardship-coaching"><span class="green-text bold">Read more... </span></a></p>

            <div class="iframe-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/KPDtiJRy6-4?rel=0" frameborder="0" allowfullscreen></iframe></div>

        </div>

    </div>


    <div class="divider"></div>

    <div class="home-medium-container">

        <p class="section-title">Recent Columns:</p><br>
        
        <script async src="https://static.medium.com/embed.js"></script>
        {{-- <a class="m-story" data-collapsed="true" href="https://medium.com/@janicethompson/87709bfc4d0b">A Spending Plan</a>
        <a class="m-story" data-collapsed="true" href="https://medium.com/@janicethompson/4827ec319f97">A Game Plan for 2015</a>
        <a class="m-story" data-collapsed="true" href="https://medium.com/@janicethompson/ed143692496c">Conquer the Clutter</a>
        --}}

        @foreach($columns as $column)

        {{ $column->link }}

        @endforeach

        <a href="{{ route('blog') }}"><p class="section-title">All Columns <i class="fa fa-angle-right"></i></p></a>

    </div>
   
    <div class="divider"></div>

    <div class="twitter-container">

        @foreach($tweets as $tweet)

        <div class="twitter-block">

            <a href="http://twitter.com/onedegreetweets" target="_blank"><p class="tweet-text">{{ $tweet->text }}</p></a>
            <p class="tweet-time">{{ Twitter::ago($tweet->created_at) }}</p>

            <a href="http://twitter.com/onedegreetweets" target="_blank">
                <div class="tweet-handle-container">
                    <i class="fa fa-twitter"></i>
                    <p><a href="http://twitter.com/onedegreetweets">@onedegreetweets</a></p>
                </div>
            </a>

        </div>
        @endforeach

        <a href="https://twitter.com/onedegreetweets" target="_blank">
            <div class="twitter-see-more">
    
                <div class="twitter-circle">
                    <i class="fa fa-angle-right"></i>
                </div>
    
            </div>
    
            <div class="clear"></div>
        </a>

        <twitter></twitter>

    </div>

</div> 

<div class="banner footer-banner">

    <div class="container">

        <p class="banner-quote">The Longer you Travel off Course,<br> The Further you Will Be from your Intended Destination. <br> <span class="bold">Every Degree Counts</span></p>
        <p class="banner-quote-source">One Degree Advisors</p>

    </div>

</div>

@stop