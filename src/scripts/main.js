//require('./../../node_modules/waypoints/lib/noframework.waypoints.min.js')

$(document).ready(function() {

  const reveals = document.querySelectorAll('.reveal')
  const firstFeature = document.querySelector('#firstFeature')

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
    offset: '-25%',
  })

  new Waypoint({
    element: document.querySelector('.super'),
    handler: function(direction) {
      if (direction === 'down') {
        firstFeature.classList.remove('fixed')
        firstFeature.style.paddingTop = '50px'
        firstFeature.scrollIntoView()
      } 
    },
    offset: '-100%',
  })

  new Waypoint({
    element: document.querySelector('#fixedFlag'),
    handler: function(direction) {
      document.querySelector('.super').style.marginBottom
      if (direction === 'up') {
        firstFeature.classList.add('fixed') 
        firstFeature.style.paddingTop = '0'
        //window.scrollBy(0, -window.innerHeight) 
        window.scrollBy(0, -856) 
      }
    },
    //offset: '50px',
  })

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
})

