//require('./../../node_modules/waypoints/lib/noframework.waypoints.min.js')

$(document).ready(function() {

  const reveals = document.querySelectorAll('.reveal')
  const mainBody = document.querySelector('.main-body')
  const animations = document.querySelectorAll('.animated')

  // Reveals
  for (let i = 0, l = reveals.length; i < l; i++) {
    new Waypoint({
      element: reveals[i],
      handler: function(direction) {
        if (direction === 'down') {
          this.element.classList.add('on')
        }
      },
      offset: '100%',
    })
  }

  // Animated fx
  for (let i = 0, l = animations.length; i < l; i++) {
    new Waypoint({
      element: animations[i],
      handler: function(direction) {
        //this.element.querySelector('h2').classList.remove('hidden')
        if (direction === 'down') {
          if (! this.element.classList.contains('pulse')) {
            this.element.classList.add('pulse')
          }
        } else if (direction === 'up') {
          this.element.classList.remove('pulse')
        }
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

  $('.titlebar').each(function(i, item) {
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

  $('.scroll-down').on('click', function(evt) {
    event.preventDefault()
    smoothScroll($('#audienceStudents'))
  })

  function smoothScroll(target) {
    $('body, html').animate({
      'scrollTop': target.offset().top,
    }, 600)
  }
})
