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

                <a href="{{ route('home') }}"><img class="mast-logo" src="{{ asset('img/logo-green.svg') }}"></a>

                <p class="title">
                    @yield('title')
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

        <div class="spacer"></div>


        @yield('content')


        <div class="footer">

            <div class="container">

                <img class="footer-logo" src="{{ asset('img/footer-logo.svg') }}">

                <div class="footer-details">
                    <p>One Degeee Advisors</p>
                    <p>3131 Camino Del Rio N #1010</p>
                    <p>San Diego, CA 92108</p>
                    <br>
                    <p>Phone : 619.282.3288</p>
                    <p>Fax : 619.280.9553</p>
                    <p>Email : <a href="mailto:admin@onedegreeadvisors.com">admin@onedegreeadivsors.com</a> </p>

                </div>

                <div class="footer-nav">
                    <ul>
                        <li>Home</li>
                        <li>Services</li>
                        <li>Team</li>
                        <li>Process</li>
                        <li>Resources</li>
                        <li>FAQ's</li>
                    </ul>
                </div>

            </div>

        </div>

        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="{{ asset('js/vendor/jquery-1.10.2.min.js')}}"><\/script>')</script>
        
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