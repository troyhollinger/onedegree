
var requestAnimationFrame = window.requestAnimationFrame || 
                            window.mozRequestAnimationFrame || 
                            window.webkitRequestAnimationFrame ||
                            window.msRequestAnimationFrame;

var app = angular.module(['onedegree'], []);

app.factory('Video', function($http) {

	return {

		get : function() {

			return $http.get(base + '/api/videos');

		}

	}

});


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






function mobile() {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
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







var Mast = {

	init : function() {

		var _ = this;

		if (mobile()) {

			_.navButton.on('touchstart', function() {

				if (_.element.hasClass('opened')) {

					_.close();

				} else {

					_.open();

				}
			});
			
		} else {

			_.navButton.click(function() {

				if (_.element.hasClass('opened')) {

					_.close();

				} else {

					_.open();

				}

			});
		}
	},

	element : $(".mast"),
	logo : $('.mast-logo'),
	navButton : $("#nav-button"),
	topContainer : $(".mast").children('.top-container'),
	bottomContainer : $(".mast").children('.bottom-container'),
	title : $('.title'),

	open : function() {

		var _ = this;
		var containerOffset = 36;

		
		$(".mast-logo-letters").attr('class', 'mast-logo-letters above-fold');
		_.navButton.css('color', 'white').removeClass('fa-bars').addClass('fa-close');
		_.element.addClass('full-height opened green');
		_.title.hide();

		if (mobile()) {

			_.topContainer.css({ top : '18px', transform : 'translate(-50%, 0%)' });

		} else {

			_.topContainer.css({ top : containerOffset + 'px', transform : 'translate(-50%, 0%)' });
			
		}
		
		_.bottomContainer.fadeIn();

	},

	close : function() {

		var _ = this;

		$(".mast-logo-letters").attr('class', 'mast-logo-letters');
		_.navButton.attr('style', '').removeClass('fa-close').addClass('fa-bars');
		_.element.removeClass('full-height opened green');
		_.bottomContainer.fadeOut(100);
		_.title.fadeIn('fast');

		setTimeout(function(){

			_.topContainer.attr('style', '').removeClass('quick-transition')

		}, 100);
	
	},

	coloring : function() {

		var _ = this;

		var bannerHeight = $('.top-banner').height();

		if ($(window).scrollTop() > (bannerHeight - 60)) {

			$(".mast-logo-letters").attr('class', 'mast-logo-letters');
			$(".title").removeClass('above-fold');
			$("#nav-button").removeClass("above-fold");
			Mast.element.attr('style', '');

			if ($(window).width() < 1000) {

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
		var distance = $(window).scrollTop();

		for(i = 0; i < ProcessLine.colorTransitionPoints.length; i++) {

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

		this.setWidth();

	},

	initialElements : $(".m-story"),

	setWidth : function() {

		var loadedElements = $(".medium-container iframe");

		if ($(window).width() > 1000) {

			this.initialElements.each(function() {

				$(this).attr('data-width', "33%");

			})
			loadedElements.each(function() {

				$(this).attr('width', "33%");

			});

		} else {

			this.initialElements.each(function() {

				$(this).attr('data-width', "100%");

			});

			loadedElements.each(function() {

				$(this).attr('width', "100%");

			});
		}
	}
}

var HomeBanner = {

	init : function() {

		// this.sizing();

		if (!mobile() && $(window).width() > 1000) {

			this.slideshow();

		}
		

	},

	element : $(".home-banner"),

	sizing : function() {

		var windowHeight = $(window).height();
		var mastHeight = 160;
		var bannerHeight = windowHeight - mastHeight - ( mastHeight * 0.666);

		this.element.css('height', bannerHeight + 'px' );

	},

	slideshow : function() {

		$("#skippr-target").skippr({

			transition : 'fade',
			arrows : false,
			autoPlay : false

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

		}, 3000);

	}



}




$(document).ready(function() {

	Mast.init();
	squarify();

	if (thisPage === '/') {

		HomeBanner.init();
		Mast.coloring();

	}

	if (thisPage === 'inquiry') {

		Mast.coloring();

	}

	if (thisPage === '/' || thisPage === 'blog') {

		MediumPosts.init();

	}

	if (thisPage === 'services') {

		EthicsSlideshow.init();

	}

	if (thisPage === 'team') {

		SecondaryTeamMemberOverlay.init();

	}

	if (thisPage === 'process' && $(window).width() > 1000) {

		ProcessLine.init();

	}

	if (thisPage === 'videos') {

		// Video.init();

	}

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







