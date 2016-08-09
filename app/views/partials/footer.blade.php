<div class="footer">

    <div class="footer-social-media">
        <ul>
            <li><a target="_blank" href="https://www.facebook.com/pages/ONE%C2%BA/652730311451932"><i class="fa fa-facebook"></i></a></li>
            <li><a target="_blank" href="https://twitter.com/onedegreetweets"><i class="fa fa-twitter"></i></a></li>
            <li><a target="_blank" href="https://www.linkedin.com/company/one-degree-advisors-inc"><i class="fa fa-linkedin"></i></a></li>
        </ul>
    </div>

    <div class="container">
        <img class="footer-logo" src="{{ asset('img/footer-logo.svg') }}">
        <div class="footer-details">
          <a href="https://www.google.com/maps/place/8880+Rio+San+Diego+Dr,+San+Diego,+CA+92108/@32.7767083,-117.1410224,17z/data=!3m1!4b1!4m5!3m4!1s0x80d95511e5a8cc5d:0x3a6bfd03e790bc0!8m2!3d32.7767083!4d-117.1388284" target="_blank"> 
          
                <p>8880 Rio San Diego Drive, 1000</p>
                <p>San Diego, CA 92108</p>
            </a>
            <br>
            <p>Phone : 619.282.3288</p>
            <p>Fax : 619.280.9553</p>
            <p>Email : <a href="mailto:admin@onedegreeadvisors.com" class="green-text bold">admin@onedegreeadvisors.com</a> </p>
        </div>
        <div class="portal-links footer-module">
            <ul>
                <li class="footer-title"><a href="{{ route('client-login') }}">CLIENT LOGIN</a></li>                    
                <a href="https://wealth.emaplan.com/ema/SignIn?ema/securitiesamerica/onedegree" target="_blank"><li>One View</li></a>
                <a href="https://advisorclient.com/advisorclient/p/gridLogin" target="_blank"><li>TD Ameritrade</li></a>                
                <a href="https://advisor.envestnet.com/secure/login/envest.jsp" target="_blank"><li>Performance Reports</li></a>
                <br>
                {{-- <a href="https://pro.riskalyze.com/embed/f3d96123615c2ab80d6e" target="_blank"><li class="bold">Free, Instant Portfolio Analysis</li></a> --}}
                 
            </ul>

        </div>
        @if (Route::currentRouteName() !== 'client-login') 
        <div class="footer-next-page">

            @if (Route::currentRouteName() == 'home') 
            <a href="{{ route('services') }}">
            @elseif(Route::currentRouteName() == 'services')
            <a href="{{ route('team') }}">
            @elseif(Route::currentRouteName() == 'team')
            <a href="{{ route('process') }}">
            @elseif(Route::currentRouteName() == 'process')
            <a href="{{ route('blog') }}">
            @elseif(Route::currentRouteName() == 'blog')
            <a href="{{ route('videos') }}">
            @elseif(Route::currentRouteName() == 'videos')
            <a href="{{ route('home') }}">
            @endif

                <i class="fa fa-angle-right"></i>

            </a>

        </div>
         @endif
         <?php 
            if ( Agent::isMobile() ) {?>
             @include('partials.footer-nav')
         <?php }
         ?>
        <div class="footer-nav footer-module">
            <ul>
                <a href="{{ route('home') }}"><li class="{{ Route::currentRouteName() == 'home' ? 'bold': ''}}" >Home</li></a>
                <a href="{{ route('services') }}"><li class="{{ Route::currentRouteName() == 'services' ? 'bold': ''}}" >Services</li></a>
                <a href="{{ route('team') }}"><li class="{{ Route::currentRouteName() == 'team' ? 'bold': ''}}" >Team</li></a>
                <a href="{{ route('process') }}"><li class="{{ Route::currentRouteName() == 'process' ? 'bold': ''}}" >Process</li></a>
                <a href="{{ route('blog') }}"><li class="{{ Route::currentRouteName() == 'blog' ? 'bold': ''}}" >Columns</li></a>
                <a href="{{ route('videos') }}"><li class="{{ Route::currentRouteName() == 'videos' ? 'bold': ''}}" >Videos</li>
                <a href="http://www.adviserinfo.sec.gov/IAPD/IAPDFirmSummary.aspx?ORG_PK=170392" target="_blank" class="show-mobile">Broker Check</a>
            </ul>
        </div>
      
       <?php 
            if ( Agent::isDesktop() ) {?>
             @include('partials.footer-nav')
         <?php }
         ?>

    </div>

</div>