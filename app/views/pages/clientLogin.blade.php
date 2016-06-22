@extends('layouts.master', ['custom_cls' => 'login-page'])

@section('tab')
One Degree Advisors - San Diego based financial planning and investment services
@stop

@section('title')
login
@stop

@section('content')

<div class="container content indicator-parent home-services-module-wrapper" data-indicator="Cleint Login" id="client-login">
    <div class="home-service-modules-container">
        <div class="service-module">
            <button class="login-btn one-view"  onclick="window.open('https://wealth.emaplan.com/ema/SignIn?ema%2fsecuritiesamerica%2fonedegree', '_blank');">One View</button><br><br>
            <p class="text login-text">This provides information on your
            financial plan and net worth and access
            to the secure online vault for document
            storage and transfer.
            </p><br>
            <p class="text login-text">
                <span class="bold">Helpful hints on navigating website:</span>
                From the <span class="bold">Home</span> tab you can access the Tour Guide video in the bottom right tile. This will give a brief overview of website and access abilities.
            </p><br>
            <p class="text login-text">
                From the <span class="bold">Organizer</span> tab accounts can be connected to the plan.
            </p><br>
            <p class="text login-text light">
                Please contact your advisor when you link an account. Your accounts under our management will be linked.
            </p><br>
            <p class="text login-text">
                <span class="bold">
                    Is this secure? :
                </span>
            </p>
            <div class="iframe-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/vruAo__5hMU" frameborder="0" allowfullscreen></iframe></div>
        </div>
        <div class="service-module">
            <button class="login-btn performance-reports"  onclick="window.open('https://advisor.envestnet.com/secure/login/envest.jsp', '_blank');">Performance Reports</button><br><br>
            <p class="text login-text">This illustrates Quarterly and Daily account performance and asset allocation.</p><br>
            <p class="text login-text login-helpful-cont-middle"><span class="bold">Helpful hints on navigating website:</span> The initial page, Market Summary, shows recent market related information.</p>
            <br>
            <p class="text login-text investment-reports-text-middle">The Investment Reports section is where you will find many different reports.</p>
            <br><br>
            <p class="text login-text login-text-info">
                <span class="bold">Forgot log-in information?</span><br>
                Email <a href="mailto:admin@onedegreeadvisors.com?Subject=Forgot%20login" target="_top">admin@onedegreeadvisors.com</a> Or Call 619 282-3288    
            </p>                
        </div>
        <div class="service-module">
            <button class="login-btn td-ameritrade"  onclick="window.open('https://advisorclient.com/advisorclient/p/gridLogin', '_blank');">TD Ameritrade</button><br><br>
            <p class="text text-login">
                This provides access to formal account statements, trade confirmations and tax forms for accounts held at TD Ameritrade.
            </p><br>
            <p class="text text-login login-helpful-cont-last"><span class="bold">Helpful hints on navigating website:</span> From the top of any site page, you can access a <span class="bold">site map</span> for an overview of how the site is organized.</p>
            <br>
            <p class="text text-login">In <span class="bold">Accounts</span>, you'll find the <span class="bold">Account Center</span> which displays account information for a single account, including balances, positions, and history.</p>    
        </div>
    </div>
</div> 
<div class="banner footer-banner">
    <div class="container">
        <p class="banner-quote">  Plans Fails for Lack of Counsel,<br> <span class="bold">But with Many Advisors they Succeed.</span></p>
        <p class="banner-quote-source">PROVERBS</p>
    </div>
</div>

@stop