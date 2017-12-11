$(document).ready(function() {
	var topGallery = $('.about__slider');

	// about gallery
	topGallery.owlCarousel({
		// animateOut: 'slideOutDown',
  //   animateIn: 'flipInX',
    responsiveClass:true,
    responsive:{
        0:{
				    loop:true,
				    margin: 150,
				    items: 1,
				    center: true,
				    dots: true,
				    nav: false,
				    autoplay: true,
				    autoWidth: true
        },
        992:{
            loop:true,
				    margin: 20,
				    items: 1,
				    center: true,
				    dots: true,
				    nav: false,
				    autoplay: true,
				    autoWidth: true
        }
    }
  });
	


});