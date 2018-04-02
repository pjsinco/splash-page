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
      handler: function handler() {
        this.element.classList.add('on');
      },
      offset: '100%'
    });
  }

  // Animated fx
  for (var _i = 0, _l = animations.length; _i < _l; _i++) {
    new Waypoint({
      element: animations[_i],
      handler: function handler() {
        //this.element.querySelector('h2').classList.remove('hidden')
        this.element.classList.add('pulse');
      }
    });
  }

  var fan = new Waypoint({
    element: document.querySelector('.fan'),
    handler: function handler(direction) {
      this.element.classList.add('fan-out');
    },
    //offset: '-150%',
    offset: '25%'
  });

  $('.titlebar').each(function (i, item) {
    new Waypoint.Sticky({
      element: $(item)
    });
  });

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
});

},{}]},{},[1])

//# sourceMappingURL=pilot.bundle.js.map
