//require('./../../node_modules/waypoints/lib/noframework.waypoints.min.js')

$(document).ready(function() {

  const reveals = document.querySelectorAll('.reveal')
  const mainBody = document.querySelector('.main-body')
  const animations = document.querySelectorAll('.animated')

  for (let i = 0, l = reveals.length; i < l; i++) {
    new Waypoint({
      element: reveals[i],
      handler: function() {

        this.element.classList.add('on')
      },
      offset: '100%',
    })
  }

  // Animated fx
  for (let i = 0, l = animations.length; i < l; i++) {
    new Waypoint({
      element: animations[i],
      handler: function() {
        this.element.classList.add('pulse')
      },
    })
  }
  

  const fan = new Waypoint({
    element: document.querySelector('.fan'),
    handler: function(direction) {
      this.element.classList.add('fan-out')
    },
    //offset: '-150%',
    offset: '25%',
  })

  $('.titlescreen').each(function(i, item) {
    new Waypoint.Sticky({
      element: $(item),
    })
  })

  new Waypoint({
    element: document.querySelector('#myAoa'),
    handler: function(direction) {
      if (direction === 'down') {
        const innerScreen = document.querySelector('#myAoa .feature-inner-screen')
        innerScreen.classList.add('demo')
        window.setTimeout(function() {
          innerScreen.classList.remove('demo')
        }, 15000)
      }
    },
    offset: '25%',
  })
})
