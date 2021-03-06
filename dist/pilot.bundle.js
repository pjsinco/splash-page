(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
'use strict';

//require('./../../node_modules/waypoints/lib/noframework.waypoints.min.js')

$(document).ready(function () {

  var reveals = document.querySelectorAll('.reveal');
  var mainBody = document.querySelector('.main-body');
  var animations = document.querySelectorAll('.animated');

  // Reveals
  for (var i = 0, l = reveals.length; i < l; i++) {
    new Waypoint({
      element: reveals[i],
      handler: function handler(direction) {
        if (direction === 'down') {
          this.element.classList.add('on');
        }
      },
      offset: '100%'
    });
  }

  // Titlebars
  for (var _i = 0, _l = animations.length; _i < _l; _i++) {
    new Waypoint({
      element: animations[_i],
      handler: function handler(direction) {
        //this.element.querySelector('h2').classList.remove('hidden')
        if (direction === 'down') {
          if (!this.element.classList.contains('pulse')) {
            this.element.classList.add('pulse');
          }
        } else if (direction === 'up') {
          this.element.classList.remove('pulse');
        }
      }
      //offset: 64, 
    });
  }

  $('.titlebar').each(function (i, item) {
    new Waypoint.Sticky({
      element: $(item),
      offset: 68
    });
  });

  // Expanded news 
  var fan = new Waypoint({
    element: document.querySelector('.fan'),
    handler: function handler(direction) {
      this.element.classList.add('fan-out');
    },
    //offset: '-150%',
    offset: '25%'
  });

  // My AOA screen animation
  new Waypoint({
    element: document.querySelector('#myAoa'),
    handler: function handler(direction) {
      if (direction === 'down') {
        var innerScreen = document.querySelector('#myAoa .feature-inner-screen');
        innerScreen.classList.add('demo');
        window.setTimeout(function () {
          innerScreen.classList.remove('demo');
        }, 15000);
      }
    },
    offset: '25%'
  });

  // Scroll-down icon
  $('.scroll-down').on('click', function (evt) {
    event.preventDefault();
    smoothScroll($('#audienceStudents'));
  });

  function smoothScroll(target) {
    $('body, html').animate({
      'scrollTop': target.offset().top
    }, 600);
  }
});

},{}]},{},[1])

//# sourceMappingURL=pilot.bundle.js.map
