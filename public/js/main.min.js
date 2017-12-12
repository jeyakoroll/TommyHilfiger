$(document).ready(function() {
	var topGallery = $('.about__slider'),
      reviewsGallery = $('#colors-gallery'),
      owl = $('.slider__wrap');

	// about gallery
	topGallery.owlCarousel({
	  animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    autoplay: true,
    autoplayTimeout: 4000,
    responsiveClass:true,
    center: true,
    autoWidth: true,
    loop:true,
    items: 1,
    nav: false,
    dots: true,
    responsive:{
        0:{
			margin: 150
        },
        992:{
			margin: 20
        }
    }
  });

  // slider
  var url = null,
      bgDrop = $(".bg-drop"),
      prev = $("#left"),
      next = $("#right");

  owl.owlCarousel({
    center: true,
    loop: true,
    items: 2,
    stagePadding: 20,
    margin: 0,
    responsive: {
      0: {
        items: 1,
        stagePadding: 20,
        margin: 10
      },
      640: {
        margin: 0,
        items: 1.4
      },
      1024: {
        margin: 0,
        items: 1.8
      },
    }
  });

  owl.on("changed.owl.carousel", function(){
    setTimeout(function() {
      var centerImg = owl.find(".center").find("div"),
          url = centerImg.css('background-image');
      bgDrop.css('background-image', url);
    }, 20)
  });

  next.on("click", function(){
    owl.trigger("next.owl.carousel");
  })
  prev.on("click", function(){
    owl.trigger("prev.owl.carousel");
  })

  // gallery in reviews area
  reviewsGallery.owlCarousel({
    loop: true,
    responsiveClass:true,
    nav: false,
    autoWidth: true,
    navContainer: '.colors__navs',
    responsive:{
      0:{
          items: 1,
          margin: 50,
          autoplay: true,
          center: true,
          dots: false
      },
      480:{
          margin: 100,
          items: 1,
          center: true,
          dots: false,
          nav: true,
          autoWidth: true,
      },
      768:{
          margin: 200,
          items: 2,
          center: true,
          dots: false,
          nav: true,
          autoWidth: true,
      },
      992:{
          loop:false,
          margin: 20,
          items: 3,
          center: false,
          dots: false,
          autoWidth: false,
      }
    }
  });


  // style for form
		$( '.form__wrap input[name=name_last]' ).closest( '.form-group' ).after(
      '<div class="form-group"><select class="form-control footer__form-select" required name="size"><option selected="selected" value="" class="option" style="background-color: transparent;">Выберите размер</option><option value="xs" class="option" style="background-color: transparent;">40</option><option value="x" class="option" style="background-color: transparent;">41</option><option value="red" class="option" style="background-color: transparent;">42</option><option value="grey" class="option" style="background-color: transparent;">43</option><option value="grey" class="option" style="background-color: transparent;">44</option><option value="grey" class="option" style="background-color: transparent;">45</option></select></div>'
    );

    $( '.form__wrap .order-form' ).addClass( 'footer__form-order' );
    $( '.form__wrap input' ).addClass( 'footer__form-data' );
    $( '.form__wrap button' ).addClass( 'footer__form-button' );
    $('.form__wrap input[name=name_first]').attr("placeholder","Имя");
    $('.form__wrap input[name=name_last]').attr("placeholder","Телефон");
	


});