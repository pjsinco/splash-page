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

},{}]},{},[1])

//# sourceMappingURL=pilot.bundle.js.map
