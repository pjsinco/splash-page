require('./../../node_modules/waypoints/lib/noframework.waypoints.min.js')

const waypoint = new Waypoint({
  element: document.querySelector('.fan'),
  handler: function(direction) {
    this.element.classList.add('fan-out')
  }
})

