(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
'use strict';

//require('./../../node_modules/waypoints/lib/noframework.waypoints.min.js')

$(document).ready(function () {

	var reveals = document.querySelectorAll('.reveal');
	var mainBody = document.querySelector('.main-body');

	reveals.forEach(function (revealElement) {
		new Waypoint({
			element: revealElement,
			handler: function handler() {
				this.element.classList.add('on');
			},
			offset: '100%'
		});
	});

	var fan = new Waypoint({
		element: document.querySelector('.fan'),
		handler: function handler(direction) {
			this.element.classList.add('fan-out');
		},
		//offset: '-150%',
		offset: '25%'
	});

	//  new Waypoint({
	//    element: document.querySelector('.super'),
	//    handler: function(direction) {
	//      if (direction === 'down') {
	//        mainBody.classList.remove('fixed')
	//        mainBody.style.paddingTop = '50px'
	//        mainBody.scrollIntoView()
	//      } 
	//    },
	//    offset: '-100%',
	//  })
	//
	//  new Waypoint({
	//    element: document.querySelector('#fixedFlag'),
	//    handler: function(direction) {
	//      if (direction === 'up') {
	//        mainBody.classList.add('fixed') 
	//        mainBody.style.paddingTop = '0'
	//        //window.scrollBy(0, window.innerHeight) 
	//        //window.scrollBy(0, -300) 
	//      }
	//    },
	//    //offset: '50px',
	//  })
});

jQuery(document).ready(function ($) {
	var animating = false;

	//update arrows visibility and detect which section is visible in the viewport
	setSlider();

	$(window).on('scroll resize', function () {
		!window.requestAnimationFrame ? setSlider() : window.requestAnimationFrame(setSlider);
	});

	//move to next/previous section clicking on arrows
	$('.cd-vertical-nav .cd-prev').on('click', function () {
		prevSection();
	});
	$('.cd-vertical-nav .cd-next').on('click', function () {
		nextSection();
	});

	//move to next/previous using the keyboards
	$(document).keydown(function (event) {
		if (event.which == '38') {
			prevSection();
			event.preventDefault();
		} else if (event.which == '40') {
			nextSection();
			event.preventDefault();
		}
	});

	//go to next section
	function nextSection() {
		if (!animating) {
			if ($('.is-visible[data-type="slider-item"]').next().length > 0) smoothScroll($('.is-visible[data-type="slider-item"]').next());
		}
	}

	//go to previous section
	function prevSection() {
		if (!animating) {
			var prevSection = $('.is-visible[data-type="slider-item"]');
			if (prevSection.length > 0 && $(window).scrollTop() != prevSection.offset().top) {
				smoothScroll(prevSection);
			} else if (prevSection.prev().length > 0 && $(window).scrollTop() == prevSection.offset().top) {
				smoothScroll(prevSection.prev('[data-type="slider-item"]'));
			}
		}
	}

	function setSlider() {
		checkNavigation();
		checkVisibleSection();
	}

	//update the visibility of the navigation arrows
	function checkNavigation() {
		$(window).scrollTop() < $(window).height() / 2 ? $('.cd-vertical-nav .cd-prev').addClass('inactive') : $('.cd-vertical-nav .cd-prev').removeClass('inactive');
		$(window).scrollTop() > $(document).height() - 3 * $(window).height() / 2 ? $('.cd-vertical-nav .cd-next').addClass('inactive') : $('.cd-vertical-nav .cd-next').removeClass('inactive');
	}

	//detect which section is visible in the viewport
	function checkVisibleSection() {
		var scrollTop = $(window).scrollTop(),
		    windowHeight = $(window).height();

		$('[data-type="slider-item"]').each(function () {
			var actualBlock = $(this),
			    offset = scrollTop - actualBlock.offset().top;
			//add/remove .is-visible class if the section is in the viewport - it is used to navigate through the sections
			offset >= 0 && offset < windowHeight ? actualBlock.addClass('is-visible') : actualBlock.removeClass('is-visible');
		});
	}

	function smoothScroll(target) {
		animating = true;
		$('body,html').animate({ 'scrollTop': target.offset().top }, 500, function () {
			animating = false;
		});
	}
});

},{}]},{},[1])

//# sourceMappingURL=pilot.bundle.js.map
