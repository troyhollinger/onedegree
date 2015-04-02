'use strict';


var requestAnimationFrame = window.requestAnimationFrame || 
                            window.mozRequestAnimationFrame || 
                            window.webkitRequestAnimationFrame ||
                            window.msRequestAnimationFrame;


var app = angular.module(['onedegree'], ['angularLoad', '720kb.datepicker', 'dnTimepicker', 'focusOn']);

app.factory('Video', function($http) {

	return {

		get : function() {

			return $http.get(base + '/api/videos');

		}

	}

});

app.controller('SpeakerFormController', ['$scope', 'focus', function($scope, focus) {


	$scope.focusDate = function($event) {

		$event.preventDefault();
		focus('date');

	}

	$scope.focusTime = function($event) {

		$event.preventDefault();
		focus('time');

	}


}]);


app.controller('VideoController', function($scope, Video, $sce) {

	$scope.videos = [];

	$scope.activeVideo = {};

	$scope.setActiveVideo = function(index) {

		var embedToBeTrusted = String($scope.videos[index].link);

		$scope.activeVideo = $scope.videos[index];
		$scope.activeVideo.link = $sce.trustAsResourceUrl(embedToBeTrusted);

		document.body.scrollTop = document.documentElement.scrollTop = 0;

	}

	$scope.getVideos = function() {

		Video.get().success(function(response) {

			$scope.videos = response.data;
			squarify();
			ResponsiveVideo.init();
			$scope.setActiveVideo(0);	

			console.log($scope.videos);
			

		}).error(function(response) {


		});
	}

	$scope.getVideos();

});


app.controller('MediumController', ['$scope', 'angularLoad', function($scope, angularLoad) {

	var embeds = [
		'<a class="m-story" data-collapsed="true" href="https://medium.com/@janicethompson/87709bfc4d0b">A Spending Plan</a>',
		'<a class="m-story" data-collapsed="true" href="https://medium.com/@janicethompson/4827ec319f97">A Game Plan for 2015</a>',
		'<a class="m-story" data-collapsed="true" href="https://medium.com/@janicethompson/ed143692496c">Conquer the Clutter</a>',
		'<a class="m-story" data-collapsed="true" href="https://medium.com/@onedegreesaffer/ac7af39debac">Step Back to Go Forward</a>',
		'<a class="m-story" data-collapsed="true" href="https://medium.com/@janicethompson/1de1f5b6a748">Keep the Woe, Woe, Woe Out of your Ho, Ho, Ho</a>',
		'<a class="m-story" data-collapsed="true" href="https://medium.com/@onedegreesaffer/f73d6aed4802">Is it Time for Another Recession?</a>',
		'<a class="m-story" data-collapsed="true" href="https://medium.com/@janicethompson/c8ec0bfe26e0">Radical Generosity</a>',
		'<a class="m-story" data-collapsed="true" href="https://medium.com/@onedegreesaffer/23e3b4e3d321">Don’t Let These Years Casually Pass…</a>',
		'<a class="m-story" data-collapsed="true" href="https://medium.com/@janicethompson/cc3bbd2d10e1">Leaving a Legacy of Love</a>',
		'<a class="m-story" data-collapsed="true" href="https://medium.com/@onedegreesaffer/4c6eb613654">The Education of Money</a>',
		'<a class="m-story" data-collapsed="true" href="https://medium.com/@janicethompson/1064fa00a1fb">Selecting a Financial Professional</a>',
		'<a class="m-story" data-collapsed="true" href="https://medium.com/@onedegreesaffer/73ecded7d503">What is the Real Treasure?</a>',
		'<a class="m-story" data-collapsed="true" href="https://medium.com/@janicethompson/ff3d62bd92e7">The Power of Possessions</a>',
		'<a class="m-story" data-collapsed="true" href="https://medium.com/@onedegreesaffer/7367503e7775">Thinking for Tomorrow, Today.</a>',
		'<a class="m-story" data-collapsed="true" href="https://medium.com/@janicethompson/79cb346e490d">Empowering Women</a>',
		'<a class="m-story" data-collapsed="true" href="https://medium.com/@onedegreesaffer/6add96b70ba7">The Beginning &amp; End of Wisdom</a>',
		'<a class="m-story" data-collapsed="true" href="https://medium.com/@janicethompson/ec5f0be58320">The Power of ONE</a>',
		'<a class="m-story" data-collapsed="true" href="https://medium.com/@onedegreesaffer/4a0ce3f113f1">Generosity Shows Leadership</a>',
		'<a class="m-story" data-collapsed="true" href="https://medium.com/@janicethompson/d50da548a211">Avoid the Use of Debt</a>',
		'<a class="m-story" data-collapsed="true" href="https://medium.com/@onedegreesaffer/5a38fdd9e74">Redefining Retirement</a>',
		'<a class="m-story" data-collapsed="true" href="https://medium.com/@janicethompson/806d8c85774a">The Power of Contentment</a>',
		'<a class="m-story" data-collapsed="true" href="https://medium.com/@onedegreesaffer/2c27372d62bd">Taking Steps of Faith</a>',
		'<a class="m-story" data-collapsed="true" href="https://medium.com/@janicethompson/468491f571f0">The Power of a Paradigm Shift</a>',
		'<a class="m-story" data-collapsed="true" href="https://medium.com/@onedegreesaffer/80b56580d42b">The Plans of the Diligent</a>',
		'<a class="m-story" data-collapsed="true" href="https://medium.com/@janicethompson/b8402db02446">The Power of Planning</a>'

	];

	$scope.offsetIndex = 0;
	$scope.offsetAmount = 6;
	$scope.ready

	$scope.init = function() {

		angularLoad.loadScript('https://static.medium.com/embed.js').then(function() {
		    
			$scope.loadPosts();

		}).catch(function() {
		   
			console.log("there was an error loading the script");

		});
	}

	$scope.loadPosts = function() {

		var tempArray = [];
		var html;
		var mediumContainer = document.getElementById('medium-container');

		for(var i = 0; i < $scope.offsetAmount; i++) {

			var skipIndex = $scope.offsetIndex * $scope.offsetAmount;
			var pushIndex = i + skipIndex;

			// If appropriate, insert closing tag to first row.
			if (i === 3) {

				tempArray.push('</div>');

			}

			// intert opening row tag if this article is the first of a row.
			if (i === 0 || i === 3) {

				tempArray.push('<div class="medium-row">');

			}

			tempArray.push(embeds[pushIndex]);

			// insert closing div tag 
			if (i === $scope.offsetAmount - 1) {

				tempArray.push('</div>');

			}

		}

		html = tempArray.join('');
    
		mediumContainer.innerHTML += html;

		MediumPosts.init();

		$scope.offsetIndex++;

	}



	function watchScrollPosition() {

		var distance = $(document).scrollTop();

	}

	$scope.init();

}]);

function isTouchDevice() {

    return true == ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);

}


function mobile() {
	
	if ($(window) < 1100) {

		return true;

	} else {

		return false;

	}

}


function squarify() {
	$('.square').each(function() {
		$(this).height($(this).width());
	});

	requestAnimationFrame(squarify);
}



var Navigation = {

	init : function() {

		var _ = this;

		if (isTouchDevice()) {

			_.navButton.on('touchstart', function() {

				if (_.element.hasClass('open')) {

					_.close();

				} else {

					_.open();

				}

				return false;
			});

			_.outerContainer.on('touchstart', function() {

				if (_.element.hasClass('open')) {

					_.close();

				} 

			});
			
		} else {

			_.navButton.click(function() {

				if (_.element.hasClass('open')) {

					_.close();

				} else {

					_.open();

				}

			});

			_.outerContainer.click(function() {

				if (_.element.hasClass('open')) {

					_.close();

				} 

			});
		}

	},

	navButton : $("#nav-button"),
	element : $(".nav-container"),
	outerContainer : $('#outer-container'),
	mast : $(".mast"),
	title : $(".title"),
	logo : $("#logo"),

	open : function() {

		var _ = this;

		_.element.removeClass('closed').addClass('open');
		_.navButton.removeClass('fa-bars').addClass('fa-close');
		_.outerContainer.addClass('shifted');
		_.mast.addClass('shifted');
		_.title.hide();
		_.logo.addClass('shifted');

		setTimeout(function() {

			_.navButton.css('color', 'white');

		}, 50);
		

	},

	close : function() {

		var _ = this;

		_.navButton.removeClass('fa-close').addClass('fa-bars');
		_.outerContainer.removeClass('shifted');
		_.mast.removeClass('shifted');
		_.logo.removeClass('shifted');


		setTimeout(function() {

			_.title.show();

		}, 100);

		setTimeout(function() {

			_.navButton.attr('style', '');


		}, 150);

		setTimeout(function(){

			_.element.removeClass('open').addClass('closed');
			
		}, 300);
		

	}

}



var Mast = {

	init : function() {

		
	},

	element : $(".mast"),
	logo : $('#logo'),
	navButton : $("#nav-button"),
	topContainer : $(".mast").children('.top-container'),
	bottomContainer : $(".mast").children('.bottom-container'),
	title : $('.title'),

	coloring : function() {

		var _ = this;

		var bannerHeight = $('.top-banner').height();

		if ($(window).scrollTop() > (bannerHeight - 60)) {

			$(".mast-logo-letters").attr('class', 'mast-logo-letters');
			$(".title").removeClass('above-fold');
			$("#nav-button").removeClass("above-fold");
			Mast.element.attr('style', '');

			if ($(window).width() < 1100) {

				Mast.element.addClass('white');

			}

		} else {

			$(".mast-logo-letters").attr('class', 'mast-logo-letters above-fold');
			$("#nav-button").addClass('above-fold');
			$(".title").addClass('above-fold');
			Mast.element.css('background-color', 'transparent')
			Mast.element.removeClass('white');

		}

		Mast.loop = requestAnimationFrame(Mast.coloring);

	}

}

var SecondaryTeamMemberOverlay = {

	init : function() {
		_ = this;

		$('.secondary-team-member').hover(function() {

			_.slideIn($(this));

		}, function() {

			_.slideOut($(this));

		});

	},

	slideIn : function(element) {

		var overlay = element.find('.overlay');

		overlay.css({top : '0%', right : '0%'});

	},

	slideOut : function(element) {

		var overlay = element.find('.overlay');

		overlay.attr('style', '');

	}

}


var ProcessLine = {

	init : function() {

		var _ = this;

		_.setPathLength();
		_.draw();

	},

	element : document.querySelector('.process-line .animated-process-line'),

	colorTransitionPoints : [4777, 3242, 1715, 709, 163],

	colorTransitionElements : [
		{ icon : '#discover-icon', title : '#discover-title' },
		{ icon : '#analyze-icon', title : '#analyze-title' },
		{ icon : '#develop-icon', title : '#develop-title' },
		{ icon : '#implement-icon', title : '#implement-title' },
		{ icon : '#monitor-icon', title : '#monitor-title' }
	],

	setPathLength : function() {

		var path = ProcessLine.element;
		var length = path.getTotalLength();

		path.style.strokeDasharray = length + ' ' + length;
		path.style.strokeDashoffset = length;

	},

	draw : function() {

		var path = ProcessLine.element;
		var length = path.getTotalLength();
		var distance = $(document).scrollTop();

		for(var i = 0; i < ProcessLine.colorTransitionPoints.length; i++) {

			if (parseInt(path.style.strokeDashoffset) < ProcessLine.colorTransitionPoints[i]) {

				$(ProcessLine.colorTransitionElements[i].icon).css({color: '#6bbb6f', fontSize : '7rem'});
				$(ProcessLine.colorTransitionElements[i].title).css('width','150px');

			} else {

				$(ProcessLine.colorTransitionElements[i].icon).attr('style', '');
				$(ProcessLine.colorTransitionElements[i].title).attr('style', '');

			}

		}

		path.style.strokeDashoffset = (length - (distance * 2.65));
			
		ProcessLine.loop = requestAnimationFrame(ProcessLine.draw)

	} 
}



var MediumPosts = {

	init : function() {

		requestAnimationFrame(MediumPosts.setWidth);

	},

	initialElements : $(".m-story"),

	setWidth : function() {

		var loadedElements = $(".medium-container iframe");

		if ($(window).width() > 1100) {

			MediumPosts.initialElements.each(function() {

				$(this).attr('data-width', "33%");

			});
			loadedElements.each(function() {

				$(this).attr('width', "33%");

			});

		} else {

			MediumPosts.initialElements.each(function() {

				$(this).attr('data-width', "100%");

			});

			loadedElements.each(function() {

				$(this).attr('width', "100%");

			});
		}

		requestAnimationFrame(MediumPosts.setWidth);
	}
}

var HomeBanner = {

	init : function() {
	
		this.slideshow();

	},

	element : $(".home-banner"),

	sizing : function() {

		var windowHeight = $(window).height();
		var mastHeight = 160;
		var bannerHeight = windowHeight - mastHeight - (mastHeight * 0.666);

		this.element.css('height', bannerHeight + 'px' );

	},

	slideshow : function() {

		$("#skippr-target").skippr({

			transition : 'fade',
			arrows : false,
			autoPlay : true,
			autoPlayDuration : 6000,
			navHover : true

		});

	}

}

var ResponsiveVideo = {

	init : function() {

		this.responsive();

	},

	responsive : function() {

		$(".active-video-container").fitVids();

		requestAnimationFrame(ResponsiveVideo.responsive);

	}

}


var EthicsSlideshow  = {

	init : function() {

		this.slideshow();

	},

	elements : $(".ethics-slide"),

	slideshow : function() {

		var i = 0;

		setInterval(function() {

			if (i >= EthicsSlideshow.elements.length) {

				i = 0;

			}

			for(var e = 0; e < EthicsSlideshow.elements.length; e++) {

				if (e === i) {

					EthicsSlideshow.elements.eq(e).addClass('ethics-slide-visible');

				} else {

					EthicsSlideshow.elements.eq(e).removeClass('ethics-slide-visible');

				}

			}

			i++;

		}, 1000);

	}

}

var SectionIndicators = {

	init : function() {

		SectionIndicators.setIndicators();

		SectionIndicators.loop = requestAnimationFrame(SectionIndicators.track);

	},

	elements : $(".indicator-parent"),

	indicatorElements : $(".indicator-element"),

	inquireLink : $("#inquire-link"),

	setIndicators : function() {

		var html = '';

		SectionIndicators.elements.each(function() {

			var text = $(this).attr('data-indicator');
			var anchor = $(this).attr('id');

			// in order to be able to use this code snippet for the single inquiry link
			// on the home page, this conditional checks for that one instance, else
			// assigns normal behavior

			if (anchor === 'inquiry') {

				html += '<a href="/inquiry"class="indicator-element">' + text + '</a>';

			} else {

				html += '<a href="#' + anchor + '"class="indicator-element">' + text + '</a>';

			}
		
		});

		// For some reason, the code directly below causes errors galore. WHY?
		// document.getElementById('outer-container').innerHTML += html;

		$("#outer-container").append(html);

		SectionIndicators.indicatorElements = $(".indicator-element");

	},

	track : function() {

		var distance = $(document).scrollTop();

		$(".indicator-parent").each(function(index) {

			var position = $(this).offset().top + parseInt($(this).css('padding-top'));
			var indicatorLockPosition = parseInt(SectionIndicators.inquireLink.css('top')) + (SectionIndicators.inquireLink.height() * (index + 1));
			var lockPoint = position - indicatorLockPosition;

			if (distance > lockPoint) {

				SectionIndicators.indicatorElements.eq(index).css({'position' : 'fixed', 'top': indicatorLockPosition + 'px'});

			} else {

				SectionIndicators.indicatorElements.eq(index).css({'position' : 'absolute', 'top': position + 'px'});	

			}

		});

		SectionIndicators.loop = requestAnimationFrame(SectionIndicators.track);

	}

}



$(document).ready(function() {
	
	Mast.init();
	squarify();
	Navigation.init();

	if (thisPage === 'home') {

		HomeBanner.init();
		Mast.coloring();
		MediumPosts.init();

		if ($(window).width() > 1100) {

			SectionIndicators.init();

		}

	}

	if (thisPage === 'services') {

		EthicsSlideshow.init();
		

		if ($(window).width() > 1100) {

			SectionIndicators.init();

		}

	}

	if (thisPage === 'team') {

		SecondaryTeamMemberOverlay.init();

	}

	if (thisPage === 'process' && $(window).width() > 1100) {

		ProcessLine.init();
		SectionIndicators.init();

	}

	if (thisPage === 'videos') {

		// Video.init();

	}

	if (thisPage === 'blog') {

		MediumPosts.init();

	}

	

	if (thisPage === 'speaker' || thisPage === 'inquiry') {

		if (Modernizr.input.placeholder) {

			$("label:not(.input-tab)").hide();

		}

	}


	// Smooth scrolling to anchor tag
	$('a[href*=#]:not([href=#])').on('click', function() {

	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

			var target = $(this.hash);

			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

			if (target.length) {

				$('html,body').animate({ scrollTop: target.offset().top }, 1000);

	        	return false;

			}

	    }

	});

});

$(window).resize(function() {

	squarify();

	if (thisPage === '/') {

		HomeBanner.init();

	}

	if (thisPage === '/' || thisPage === 'blog') {

		MediumPosts.init();

	}

});







