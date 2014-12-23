
var requestAnimationFrame = window.requestAnimationFrame || 
                            window.mozRequestAnimationFrame || 
                            window.webkitRequestAnimationFrame ||
                            window.msRequestAnimationFrame;


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
}


var Mast = {

	init : function() {

		var _ = this;

		Mast.loop = requestAnimationFrame(Mast.sizing);

		_.navButton.click(function() {

			if (_.element.hasClass('opened')) {

				_.close();

			} else {

				_.open();

			}

		});

	},

	element : $(".mast"),
	logo : $('.mast-logo'),
	navButton : $("#nav-button"),
	topContainer : $(".mast").children('.top-container'),
	bottomContainer : $(".mast").children('.bottom-container'),
	title : $('.title'),

	sizing : function() {

		var _ = this;
		var distance = $(window).scrollTop();
		var mastHeight = 160;
		var logoWidth = 130;


		if (distance > mastHeight) {

			Mast.getThinner(distance, mastHeight,logoWidth);
			Mast.title.css('font-size', '1.5rem');

		} else {

			Mast.getThicker();
			Mast.title.attr('style', '');

		}

		Mast.loop = requestAnimationFrame(Mast.sizing);

	},

	getThinner : function(distance, mastHeight, logoWidth) {

		Mast.element.height(mastHeight - ((distance - mastHeight) / 2));
		Mast.logo.width(logoWidth - ((distance - logoWidth) / 3));

	},

	getThicker : function() {

		Mast.element.attr('style', '');
		Mast.logo.attr('style', '');

	},

	open : function() {

		var _ = this;
		var containerOffset = 45.5;

		_.topContainer.css({ top : containerOffset + 'px', transform : 'translate(-50%, 0%)' });
		_.logo.attr('src', 'img/logo-white.svg');
		_.navButton.css('color', 'white').removeClass('fa-bars').addClass('fa-close');
		_.element.addClass('full-height opened green');
		_.title.hide();
		cancelAnimationFrame(Mast.loop);
		_.bottomContainer.fadeIn();
		_.getThicker();

		
		

	},

	close : function() {

		var _ = this;
		_.logo.attr('src', 'img/logo-green.svg');
		_.navButton.css('color', 'black').removeClass('fa-close').addClass('fa-bars');
		_.element.removeClass('full-height opened green');
		_.topContainer.addClass('quick-transition');
		_.bottomContainer.fadeOut(100);
		_.title.fadeIn('fast');
		setTimeout(function(){_.topContainer.attr('style', '').removeClass('quick-transition')}, 100);
		// _.container.attr('style', '').removeClass('quick-transition');

		Mast.loop = requestAnimationFrame(Mast.sizing);
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

		path.style.strokeDashoffset = (length - (distance * 2.1));
		ProcessLine.loop = requestAnimationFrame(ProcessLine.draw)

	} 
}



var MediumStory = {

	init : function() {

		this.setWidth();

	},

	initialElements : $(".m-story"),

	setWidth : function() {

		var loadedElements = $(".medium-container > iframe");

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



$(document).ready(function() {

	Mast.init();
	MediumStory.init();
	squarify();


	if (thisPage === 'team') {

		SecondaryTeamMemberOverlay.init();

	}

	if (thisPage === 'process') {

		ProcessLine.init();

	}

});

$(window).resize(function() {

	squarify();
	MediumStory.init();

});







