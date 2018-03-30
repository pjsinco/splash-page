//require('./../../node_modules/waypoints/lib/noframework.waypoints.min.js')

$(document).ready(function() {

  const reveals = document.querySelectorAll('.reveal')
  const mainBody = document.querySelector('.main-body')

  for (let i = 0, l = reveals.length; i < l; i++) {
    new Waypoint({
      element: reveals[i],
      handler: function() {
        this.element.classList.add('on')
      },
      offset: '100%',
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
      handler: function() {
        //titleScreenText = $(this.element).html()
      }
    })
  })

  new Waypoint({
    element: document.querySelector('.wave'),
    handler: function(direction) {
      if (direction === 'down') {
        //$('.sticky-wrapper .titlescreen').html('<h2>We\'ve expanded our news</h2>')
        $('.sticky-wrapper .titlescreen').toggleClass('stuck')
      } else {
//console.log(titleScreenText);
        //$('.sticky-wrapper .titlescreen').html(titleScreenText)
      }
    }
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
