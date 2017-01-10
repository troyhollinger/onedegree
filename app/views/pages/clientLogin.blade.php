@extends('layouts.master', ['custom_cls' => 'login-page'])

@section('tab')
One Degree Advisors - San Diego based financial planning and investment services
@stop

@section('title')
login
@stop

@section('content')


<div class="container content indicator-parent home-services-module-wrapper" data-indicator="Cleint Login" id="client-login">
    
    <div class="single_page_container">

        <div class="service-module">
            
            <button class="login-btn one-view hvr-grow" onclick="window.open('https://wealth.emaplan.com/ema/SignIn?ema/securitiesamerica/onedegree', '_blank');">One View</button> 

            <p class="text login-text">This provides information on your financial plan and net worth and access to the secure online vault for document storage and transfer.</p></br> 
             
            <span class="bold helpful-link">Helpful hints on navigating website:</span>

            <p class="text login-text">From the <span class="bold">Home</span>  tab you can access the Tour Guide video in the bottom right tile. This will give a brief overview of website and access abilities.</p></br> 

            <p class="text login-text">From the <span class="bold">Organizer</span> tab accounts can be connected to the plan.</p><br>

            <p class="text shadow">Please contact your advisor when you link an account. Your accounts under our management will be linked.</p></br>

            <span class="bold is_secure">Is this secure? :</span> <br> <br>

            <div class="iframe-container"><iframe src="https://www.youtube.com/embed/vruAo__5hMU" allowfullscreen="" width="360" height="200" frameborder="0"></iframe></div>             
        </div>  


        <div class="sub_module">
            <div class="service-module">
                <button class="login-btn td-ameritrade hvr-grow" onclick="window.open('https://advisorclient.com/advisorclient/p/gridLogin', '_blank');">TD Ameritrade</button><br>
                <p class="text login-text">This provides access to formal account statements, trade confirmations and tax forms for accounts held at TD Ameritrade.</p><br>                

                <p class="text login-text">
                    <span class="bold helpful-link">Helpful hints on navigating website:</span>

                    From the top of any site page, you can access a <span class="bold">site map</span> for an overview of how the site is organized.
                </p><br>

                <p class="text login-text">
                    In <span class="bold">Accounts</span>, you'll find the <span class="bold">Account Center</span> which displays account information for a single account, including balances, positions, and history.
                </p><br><br>
                 
                <p class="text login-text">
                    <span class="bold">Forgot log-in information?</span><br>
                    Email <a href="mailto:admin@onedegreeadvisors.com?Subject=Forgot%20login" target="_top">admin@onedegreeadvisors.com</a> Or Call 619 282-3288    
                </p> 

            </div>

            <div class="service-module">
                <button class="login-btn performance-reports hvr-grow" onclick="window.open('https://login.orionadvisor.com/login.html?g=8b306e94-6c6a-4af6-8080-1a3892bf0b1e', '_blank');">Orion</button><br>
                <p class="text login-text">This provides access to detailed account performance.</p><br>
                <p class="text login-text"><span class="bold">To request access :</span> <a href="mailto:admin@onedegreeadvisors.com?Subject=Forgot%20login" target="_top">admin@onedegreeadvisors.com</a></p>              
                                 
            </div>

            <div class="clear"></div>
            <a href="{{asset('QMR_Q4_2016_Landscape.pdf')}}" target="_blank" class="quarterly_market">Quarterly Market Review…</a>
        </div>      
    </div>

    



    <div class="home-service-modules-container">
      
         
    </div>
</div> 
<div class="banner footer-banner">
    <div class="container">
        <p class="banner-quote">  Plans Fails for Lack of Counsel,<br> <span class="bold">But with Many Advisors they Succeed.</span></p>
        <p class="banner-quote-source">PROVERBS</p>
    </div>
</div>

@stop