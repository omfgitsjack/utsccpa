(function() {

	$(document).ready(function(){

	  var eventsId = '.events-carousel';

	  $(eventsId).slick({
	  	arrows: false,
	  	infinite: true,
	  	touchThreshold: 8,
	  	prevArrow: '#left-event-btn',
	  	nextArrow: '#right-event-btn',
	  });

	  $('#left-event-btn').on('click', function(e) {
	  	$(eventsId).slick('slickPrev');
	  });

	  $('#right-event-btn').on('click', function(e) {
	  	$(eventsId).slick('slickNext');
	  });
	});

}());