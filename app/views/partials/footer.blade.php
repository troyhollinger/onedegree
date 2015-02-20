<div class="footer">

    <div class="container">

        <img class="footer-logo" src="{{ asset('img/footer-logo.svg') }}">

        <div class="footer-details">
            <a href="https://www.google.com/maps/place/3131+Camino+Del+Rio+N+%231010,+San+Diego,+CA+92108/@32.7751506,-117.1270346,17z/data=!3m1!4b1!4m2!3m1!1s0x80d955a7fe9ffd0b:0x4a6d5c2f86006b14" target="_blank">
                <p>3131 Camino Del Rio N #1010</p>
                <p>San Diego, CA 92108</p>
            </a>
            <br>
            <p>Phone : 619.282.3288</p>
            <p>Fax : 619.280.9553</p>
            <p>Email : <a href="mailto:admin@onedegreeadvisors.com" class="green-text bold">admin@onedegreeadvisors.com</a> </p>

        </div>

        <!-- <div class="footer-links footer-module">
            <ul>

                <li><span class="bold">FINRA</span> : Financial Industry Regulatory Authority</li>
                <li><span class="bold">SIPC</span> : Securities Investor Protection Corporation</li>
                <li><span class="bold">Market</span> : MarketWatch | Yahoo Finance | Bloomberg</li>
                <li><span class="bold">Savings</span> / Load Rate Calculators: Bankrate</li>
                <li><span class="bold">Government</span>: IRS | Social Security | Medicare</li>
                <li><span class="bold">Credit Report</span>: AnnualCreditReport.com</li>

            </ul>

        </div>
 -->
        <div class="portal-links footer-module">

            <ul>
                <li class="footer-title">CLIENT PORTAL</li>
                <li>TD Ameritrade - Custodian</li>
                <li>Evestnet - Report</li>
                <li>eMoney - Plan</li>
                <li><span class="bold">Financial Resources</span>: Dave Ramsey |<br> Crown Financial | Christian Credit Counselors</li>
                 
            </ul>

        </div>

        

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
            <a href="{{ route('home') }}">
            @endif

                <i class="fa fa-angle-right"></i>

            </a>

        </div>

        <div class="footer-nav footer-module">
            <ul>
                 <a href="{{ route('home') }}"><li class="{{ Route::currentRouteName() == 'home' ? 'bold': ''}}" >Home</li></a>
                 <a href="{{ route('services') }}"><li class="{{ Route::currentRouteName() == 'services' ? 'bold': ''}}" >Services</li></a>
                 <a href="{{ route('team') }}"><li class="{{ Route::currentRouteName() == 'team' ? 'bold': ''}}" >Team</li></a>
                 <a href="{{ route('process') }}"><li class="{{ Route::currentRouteName() == 'process' ? 'bold': ''}}" >Process</li></a>
                 <a href="{{ route('blog') }}"><li class="{{ Route::currentRouteName() == 'blog' ? 'bold': ''}}" >Columns</li></a>
                 <li class="faded {{ Route::currentRouteName() == 'videos' ? 'bold': ''}}" >Videos</li>
            </ul>
        </div>

        <div class="footer-nav footer-module">
            <ul>
                <a href="https://twitter.com/onedegreetweets" target="_blank"><li>Twitter</li></a>
                <a href="https://www.facebook.com/pages/ONE%C2%BA/652730311451932" target="_blank"><li>Facebook</li></a>
                <a href="{{ route('services') }}/#info"><li>Compliance</li></a>
                <a href="http://www.letsmakeaplan.org/home" target="_blank"><li>CFP&reg;</li></a>
                <a href="http://www.plannersearch.org/Pages/Home.aspx" target="_blank"><li>FPA&reg;</li></a>
                <a href="{{ route('services') }}/#info"><li>FAQ</li></a>
            </ul>
        </div>

    </div>

</div>