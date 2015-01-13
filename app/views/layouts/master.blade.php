<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="stylesheet" href="{{ asset('css/reset.css') }}">
        <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
        <link rel="stylesheet" href="{{ asset('css/style.css') }}">
        <script src="{{ asset('js/vendor/modernizr-2.6.2.min.js') }}"></script>
        <script src="{{ asset('js/vendor/angular.min.js') }}"></script>

        <script> var thisPage = '{{ Request::path() }}'</script>
    </head>
    <body ng-app="onedegree">

        <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

        <div class="mast">

           <div class="container top-container">

                <!-- <img class="mast-logo" src="{{ asset('img/logo-green.svg') }}"></a> -->

                <a href="{{ route('home') }}">
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" class="mast-logo" viewBox="0 0 293 92.75" style="enable-background:new 0 0 293 92.75;" xml:space="preserve">
                        <g>
                            <path class="mast-logo-letters" d="M82.466,44.373c0,6.29-1.181,12.361-3.539,18.211c-2.358,5.847-5.667,10.938-9.929,15.269
                                c-4.364,4.436-9.498,7.949-15.403,10.535c-5.901,2.58-12.589,3.871-20.065,3.871c-9.78,0-17.813-2.817-24.101-8.461
                                C3.143,78.16,0,70.781,0,61.663c0-6.636,1.274-12.879,3.823-18.727c2.551-5.851,6.079-10.959,10.583-15.328
                                c4.401-4.297,9.564-7.666,15.482-10.112c5.92-2.445,12.163-3.666,18.731-3.666c9.846,0,17.952,2.757,24.311,8.278
                                C79.287,27.625,82.466,35.048,82.466,44.373 M55.064,71.826c2.375-4.82,4.138-10.064,5.291-15.742
                                c1.151-5.675,1.728-11.272,1.728-16.79c0-6.391-1.221-11.424-3.666-15.089c-2.448-3.67-6.097-5.502-10.95-5.502
                                c-4.263,0-8.078,1.434-11.449,4.297c-3.371,2.862-6.209,6.581-8.513,11.156c-2.305,4.579-4.068,9.745-5.291,15.51
                                c-1.224,5.762-1.836,11.493-1.836,17.188c0,6.18,1.225,11.151,3.669,14.902c2.444,3.752,6.111,5.629,11.001,5.629
                                c4.225,0,8.06-1.462,11.499-4.399C49.99,80.055,52.829,76.335,55.064,71.826"/>
                            <path class="mast-logo-letters" d="M175.053,15.873l-0.89,3.825c-0.979,0.103-2.402,0.292-4.269,0.551c-1.87,0.262-3.695,0.951-5.475,2.07
                                c-1.506,0.94-2.789,2.564-3.854,4.873c-1.063,2.305-2.121,5.675-3.17,10.112l-12.324,53.335h-8.82L104.19,31.085l-8.499,37.181
                                c-0.456,1.956-0.804,3.789-1.049,5.498c-0.244,1.715-0.367,3.077-0.367,4.091c0,1.432,0.14,2.539,0.419,3.325
                                c0.278,0.786,0.681,1.443,1.206,1.963c0.804,0.805,2.21,1.502,4.216,2.096c2.008,0.595,3.502,0.981,4.479,1.154l-0.891,3.828
                                H71.736l0.89-3.828c0.944-0.138,2.436-0.382,4.481-0.731c2.043-0.349,3.799-0.981,5.266-1.886c1.535-0.981,2.83-2.58,3.877-4.799
                                c1.049-2.216,2.078-5.598,3.094-10.137l8.088-34.998c0.174-0.803,0.322-1.561,0.444-2.278c0.123-0.716,0.184-1.37,0.184-1.962
                                c0-1.049-0.122-2.052-0.364-3.014c-0.248-0.962-0.701-1.842-1.368-2.646c-0.98-1.188-2.188-2.104-3.623-2.752
                                c-1.438-0.644-3.117-1.146-5.043-1.494l0.944-3.825h27.469l28.043,52.418l6.971-30.466c0.488-2.235,0.848-4.061,1.074-5.475
                                c0.225-1.414,0.34-2.73,0.34-3.957c0-1.363-0.148-2.466-0.443-3.323c-0.296-0.861-0.724-1.566-1.28-2.125
                                c-0.768-0.767-2.122-1.456-4.055-2.069c-1.937-0.613-3.427-1.003-4.473-1.18l0.89-3.825H175.053z"/>
                            <path class="mast-logo-letters" d="M242.048,15.873L237.7,34.841h-3.933c-0.488-3.309-1.669-6.344-3.541-9.11
                                c-1.872-2.768-3.838-4.374-5.901-4.829c-0.979-0.242-2.396-0.392-4.254-0.441c-1.851-0.057-3.393-0.082-4.613-0.082h-10.285
                                l-6.71,29.027h7.138c2.626,0,4.684-0.292,6.171-0.866c1.488-0.578,2.878-1.388,4.172-2.434c0.979-0.804,2.127-2.249,3.438-4.325
                                c1.315-2.079,2.249-3.85,2.812-5.316h3.927l-7.175,31.013h-3.931v-1.934c0-1.576-0.167-3.19-0.5-4.851
                                c-0.333-1.655-0.725-2.819-1.183-3.483c-0.909-1.325-2.117-2.209-3.622-2.646c-1.506-0.434-3.221-0.652-5.146-0.652h-7.144
                                l-4.783,20.696c-0.241,1.048-0.47,2.18-0.681,3.405c-0.208,1.219-0.312,2.096-0.312,2.616c0,2.237,0.735,3.644,2.199,4.221
                                c1.468,0.576,4.176,0.861,8.121,0.861c5.029,0,8.699-0.219,11.004-0.652c2.307-0.436,4.036-1.11,5.188-2.018
                                c2.094-1.746,4.609-4.42,7.542-8.017c2.936-3.599,4.929-6.251,5.976-7.962h3.823l-6.758,23.159h-69.21l0.891-3.828
                                c0.873-0.033,2.176-0.146,3.902-0.343c1.731-0.191,3.017-0.428,3.853-0.707c1.36-0.452,2.401-1.15,3.116-2.094
                                c0.717-0.942,1.215-2.023,1.492-3.251l12.016-51.971c0.175-0.73,0.296-1.346,0.369-1.834c0.069-0.491,0.104-0.853,0.104-1.099
                                c0-1.467-0.742-2.613-2.228-3.434c-1.483-0.82-3.9-1.474-7.255-1.964l0.892-3.825H242.048z"/>
                            <path class="mast-logo-letters" d="M292.521,16.09c-0.489,6.172-3.189,11.205-8.099,15.107c-4.906,3.9-11.026,5.559-18.357,4.976
                                c-5.086-0.4-9.072-2.055-11.949-4.954c-2.88-2.902-4.139-6.62-3.777-11.157c0.494-6.231,3.164-11.254,8.007-15.074
                                c4.846-3.821,10.845-5.445,18.006-4.878c5.774,0.461,10.001,2.165,12.674,5.102C291.698,8.158,292.863,11.782,292.521,16.09
                                 M276.597,25.957c1.01-2.169,1.814-4.533,2.405-7.084c0.592-2.551,0.989-5.063,1.184-7.533c0.197-2.466-0.085-4.39-0.844-5.766
                                c-0.758-1.374-2.084-2.133-3.983-2.289c-1.896-0.15-3.65,0.441-5.259,1.774c-1.611,1.329-2.961,3.207-4.048,5.632
                                c-0.94,2.005-1.696,4.395-2.267,7.167c-0.564,2.771-0.922,5.104-1.07,6.996c-0.225,2.815,0.075,4.847,0.903,6.096
                                c0.826,1.25,2.146,1.945,3.951,2.09c1.984,0.161,3.741-0.46,5.271-1.859C274.366,29.789,275.619,28.044,276.597,25.957"/>
                        </g>
                    </svg>
                </a>

                <p class="title">
                   {{-- @yield('title') --}} 
                </p>
                        
                <i class="fa fa-bars" id="nav-button"></i>

           </div>

           <div class="container bottom-container">

                <ul class="nav">
                    <a href="{{ route('home') }}"><li>Home{{ Route::currentRouteName() == 'home' ? '<div class="nav-indicator"></div>': ''}}</li></a><br>
                    <a href="{{ route('services') }}"><li>Services{{ Route::currentRouteName() == 'services' ? '<div class="nav-indicator"></div>': ''}}</li></a><br>
                    <a href="{{ route('team') }}"><li>Team{{ Route::currentRouteName() == 'team' ? '<div class="nav-indicator"></div>': ''}}</li></a><br>
                    <a href="{{ route('process') }}"><li>Process{{ Route::currentRouteName() == 'process' ? '<div class="nav-indicator"></div>': ''}}</li></a><br>
                    <a href="{{ route('blog') }}"><li>Columns{{ Route::currentRouteName() == 'blog' ? '<div class="nav-indicator"></div>': ''}}</li></a><br>
                    <a href="{{ route('videos') }}"><li>Videos{{ Route::currentRouteName() == 'videos' ? '<div class="nav-indicator"></div>': ''}}</li></a><br>
                </ul>

                <div class="nav-details">
                    <p>One Degeee Advisors</p>
                    <p>3131 Camino Del Rio N #1010</p>
                    <p>San Diego, CA 92108</p>
                    <br>
                    <p>Phone : 619.282.3288</p>
                    <p>Fax : 619.280.9553</p>
                    <p>Email : <a href="mailto:admin@onedegreeadvisors.com">admin@onedegreeadivsors.com</a> </p>
                </div>

           </div>

        </div>

        @if(Route::currentRouteName() != 'home' && Route::currentRouteName() != 'process' && Route::currentRouteName() != 'inquiry')
        <div class="spacer"></div>
        @endif


        @yield('content')


        <div class="footer">

            <div class="container">

                <img class="footer-logo" src="{{ asset('img/footer-logo.svg') }}">

                <div class="footer-details">
                    <p>3131 Camino Del Rio N #1010</p>
                    <p>San Diego, CA 92108</p>
                    <br>
                    <p>Phone : 619.282.3288</p>
                    <p>Fax : 619.280.9553</p>
                    <p>Email : <a href="mailto:admin@onedegreeadvisors.com" class="green-text">admin@onedegreeadvisors.com</a> </p>

                </div>

                <div class="footer-links footer-module">
                    <ul>

                        <li><span class="bold">FINRA</span> : Financial Industry Regulatory Authority</li>
                        <li><span class="bold">SIPC</span> : Securities Investor Protection Corporation</li>
                        <li><span class="bold">Market</span> : MarketWatch | Yahoo Finance | Bloomberg</li>
                        <li><span class="bold">Savings</span> / Load Rate Calculators: Bankrate</li>
                        <li><span class="bold">Government</span>: IRS | Social Security | Medicare</li>
                        <li><span class="bold">Credit Report</span>: AnnualCreditReport.com</li>

                    </ul>

                </div>

                <div class="portal-links footer-module">

                    <ul>
                        <li class="footer-title">CLIENT PORTAL</li>
                        <li>TD Ameritrade - Custodian</li>
                        <li>Evestnet - Report</li>
                        <li>eMoney - Plan</li>
                        <li><span class="bold">Financial Help / Resources</span>: Dave Ramsey | Crown Financial |<br> Christian Credit Counselors</li>
                        
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
                    <a href="{{ route('videos') }}">
                    @elseif(Route::currentRouteName() == 'videos')
                    <a href="{{ route('home') }}">
                    @endif

                        <i class="fa fa-angle-right"></i>

                    </a>

                </div>

                <div class="footer-nav footer-module">
                    <ul>
                        <a href="{{ route('home') }}"><li>Home</li></a>
                        <a href="{{ route('services') }}"><li>Services</li></a>
                        <a href="{{ route('team') }}"><li>Team</li></a>
                        <a href="{{ route('process') }}"><li>Process</li></a>
                        <a href="{{ route('blog') }}"><li>Columns</li></a>
                        <a href="{{ route('videos') }}"><li>Videos</li></a>
                    </ul>
                </div>

                <div class="footer-nav footer-module">
                    <ul>
                        <li>Twitter</li>
                        <li>Facebook</li>
                        <li>Compliance</li>
                        <li>CFP&reg;</li>
                        <li>FPA&reg;</li>
                        <li>FAQ</li>
                    </ul>
                </div>

            </div>

        </div>

        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="{{ asset('js/vendor/jquery-1.10.2.min.js')}}"><\/script>')</script>
        <script>

        var base = '{{ URL::to("/") }}';

        </script>
        <script src="{{ asset('js/plugins.js') }}"></script>
        <script src="{{ asset('js/main.js') }}"></script>
        <script>
            (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
            function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
            e=o.createElement(i);r=o.getElementsByTagName(i)[0];
            e.src='//www.google-analytics.com/analytics.js';
            r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
            ga('create','UA-XXXXX-X');ga('send','pageview');
        </script>
    </body>
</html>