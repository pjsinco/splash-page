(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
'use strict';

//require('./../../node_modules/waypoints/lib/noframework.waypoints.min.js')

$(document).ready(function () {

  var reveals = document.querySelectorAll('.reveal');
  var firstFeature = document.querySelector('#firstFeature');

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
    offset: '-25%'
  });

  new Waypoint({
    element: document.querySelector('.super'),
    handler: function handler(direction) {
      if (direction === 'down') {
        firstFeature.classList.remove('fixed');
        firstFeature.style.paddingTop = '50px';
        firstFeature.scrollIntoView();
      }
    },
    offset: '-100%'
  });

  new Waypoint({
    element: document.querySelector('#fixedFlag'),
    handler: function handler(direction) {
      document.querySelector('.super').style.marginBottom;
      if (direction === 'up') {
        firstFeature.classList.add('fixed');
        firstFeature.style.paddingTop = '0';
        //window.scrollBy(0, -window.innerHeight) 
        window.scrollBy(0, -856);
      }
    }
    //offset: '50px',
  });

  //  const fixedItemWaypoint = new Waypoint({
  //    element: fixedItem,
  //    handler: function(direction) {
  //console.log(direction);
  //      if (direction === 'up') {
  //console.log('fixeditemgoingup');
  //        this.element.classList.add('fixed')
  //      }
  //    }
  //  })
});

},{}]},{},[1])

//# sourceMappingURL=pilot.bundle.js.map
