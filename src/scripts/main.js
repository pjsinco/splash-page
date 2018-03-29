//require('./../../node_modules/waypoints/lib/noframework.waypoints.min.js')

$(document).ready(function() {

  const reveals = document.querySelectorAll('.reveal')
  const mainBody = document.querySelector('.main-body')

  reveals.forEach(function(revealElement) {
    new Waypoint({
      element: revealElement,
      handler: function() {
        this.element.classList.add('on')
      },
      offset: '100%',
    })
  })

  const fan = new Waypoint({
    element: document.querySelector('.fan'),
    handler: function(direction) {
      this.element.classList.add('fan-out')
    },
    //offset: '-150%',
    offset: '25%',
  })

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

})

