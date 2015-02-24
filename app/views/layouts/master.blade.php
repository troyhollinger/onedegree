<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>
            @yield('tab')
        </title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">

        <!-- <link rel="stylesheet" href="{{ asset('css/reset.css') }}"> -->
        <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
        <link rel="stylesheet" href="{{ asset('production/app.css') }}">
        <script src="{{ asset('js/vendor/modernizr-2.6.2.min.js') }}"></script>
        <script src="{{ asset('js/vendor/angular.min.js') }}"></script>

        <script> var thisPage = '{{ Route::currentRouteName() }}'</script>
    </head>
    <body ng-app="onedegree">

        <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

        <i class="fa fa-bars" id="nav-button">
            <p class="title">
                 @yield('title')
            </p>
        </i>

        @if(Route::currentRouteName() !== 'inquiry' && Route::currentRouteName() !== 'home')
        <a href="{{ route('inquiry') }}"><div class="inquire-link" id="inquire-link">Inquire</div></a>
        @elseif(Route::currentRouteName() !== 'inquiry' && Route::currentRouteName() === 'home')
        <a href="{{ route('inquiry') }}"><div class="inquire-link" id="inquire-link"></div></a>
        @endif

        @include('partials.nav')

        @include('partials.mast')



        <div class="outer-container" id="outer-container">

            @if(Route::currentRouteName() != 'home' && Route::currentRouteName() != 'process' && Route::currentRouteName() != 'inquiry' && Route::currentRouteName() != 'speaker')
            <div class="spacer"></div>
            @endif
            
            @yield('content')


            @include('partials.footer')

        </div>

        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="{{ asset('js/vendor/jquery-1.10.2.min.js')}}"><\/script>')</script>
        <script>

        var base = '{{ URL::to("/") }}';

        </script>
        <script src="{{ asset('bower_components/angular-load/angular-load.js') }}"></script>
        <script src="{{ asset('bower_components/angularjs-datepicker/dist/angular-datepicker.min.js') }}"></script>
        <script src="{{ asset('bower_components/angular-ui-bootstrap/src/position/position.js') }}"></script>
        <script src="{{ asset('bower_components/angular-dateparser/dist/angular-dateparser.js') }}"></script>
        <script src="{{ asset('bower_components/angular-timepicker/dist/angular-timepicker.js') }}"></script>
        <script src="{{ asset('bower_components/ng-focus-on/ng-focus-on.js') }}"></script>
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