require('./../../node_modules/waypoints/lib/noframework.waypoints.min.js')

window.onload =function() {
  const reveals = document.querySelectorAll('.reveal')

  reveals.forEach(function(revealElement) {
    const waypoint = new Waypoint({
      element: revealElement,
      handler: function() {
        this.element.classList.add('on')
      },
      offset: '100%',
    })
  })

  const waypoint = new Waypoint({
    element: document.querySelector('.fan'),
    handler: function(direction) {
      this.element.classList.add('fan-out')
    },
    offset: '25%',
  })

}

