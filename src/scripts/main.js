//require('./../../node_modules/waypoints/lib/noframework.waypoints.min.js')

$(document).ready(function() {

  const reveals = document.querySelectorAll('.reveal')
  const mainBody = document.querySelector('.main-body')

  let titleScreenText = ''

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

  const titlescreen = new Waypoint.Sticky({
    element: $('.titlescreen')[0],
    handler: function() {
      titleScreenText = $(this.element).html()
console.dir($(this));
    }
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


jQuery(document).ready(function($){
	var animating = false;

	//update arrows visibility and detect which section is visible in the viewport
	setSlider();

	$(window).on('scroll resize', function(){
		(!window.requestAnimationFrame) ? setSlider() : window.requestAnimationFrame(setSlider);
	});

	//move to next/previous section clicking on arrows
  $('.cd-vertical-nav .cd-prev').on('click', function(){
  	prevSection();
  });
  $('.cd-vertical-nav .cd-next').on('click', function(){
  	nextSection();
  });

  //move to next/previous using the keyboards
  $(document).keydown(function(event){
	if( event.which=='38' ) {
		prevSection();
		event.preventDefault();
	} else if( event.which=='40' ) {
		nextSection();
		event.preventDefault();
	}
});

	//go to next section
	function nextSection() {
		if (!animating) {
			if ($('.is-visible[data-type="slider-item"]').next().length > 0) smoothScroll($('.is-visible[data-type="slider-item"]').next());
		}
	}

	//go to previous section
	function prevSection() {
		if (!animating) {
			var prevSection = $('.is-visible[data-type="slider-item"]');
			if(prevSection.length > 0 && $(window).scrollTop() != prevSection.offset().top) {
				smoothScroll(prevSection);
			} else if(prevSection.prev().length > 0 && $(window).scrollTop() == prevSection.offset().top) {
				smoothScroll(prevSection.prev('[data-type="slider-item"]'));
			}
		}
	}

	function setSlider() {
		checkNavigation();
		checkVisibleSection();
	}

	//update the visibility of the navigation arrows
	function checkNavigation() {
		( $(window).scrollTop() < $(window).height()/2 ) ? $('.cd-vertical-nav .cd-prev').addClass('inactive') : $('.cd-vertical-nav .cd-prev').removeClass('inactive');
		( $(window).scrollTop() > $(document).height() - 3*$(window).height()/2 ) ? $('.cd-vertical-nav .cd-next').addClass('inactive') : $('.cd-vertical-nav .cd-next').removeClass('inactive');
	}

	//detect which section is visible in the viewport
	function checkVisibleSection() {
		var scrollTop = $(window).scrollTop(),
			windowHeight = $(window).height();

		$('[data-type="slider-item"]').each(function(){
			var actualBlock = $(this),
				offset = scrollTop - actualBlock.offset().top;
			//add/remove .is-visible class if the section is in the viewport - it is used to navigate through the sections
			( offset >= 0 && offset < windowHeight ) ? actualBlock.addClass('is-visible') : actualBlock.removeClass('is-visible');
		});
	}

	function smoothScroll(target) {
		animating = true;
        $('body,html').animate({'scrollTop': target.offset().top}, 500, function(){ animating = false; });
	}
});
