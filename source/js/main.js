$(document).ready(function() {
	var topGallery = $('.about__slider');

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