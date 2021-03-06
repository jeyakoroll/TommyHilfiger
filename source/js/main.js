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
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    loop: true,
    responsiveClass:true,
    nav: false,
    autoplay: true,
    autoplayTimeout: 4000,
    autoWidth: true,
    navContainer: '.colors__navs',
    responsive:{
      0:{
          items: 1,
          margin: 50,
          center: true,
          nav: false,
          dots: true
      },
      480:{
          margin: 200,
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

  // ----- WOW ----- \\
  new WOW().init();
  
  // popup politics
  $('.politics').on('click', function(event){
    event.preventDefault();
    $('.cd-politics').addClass('is-visible');
  });
  
  // close popup
  $('.cd-politics').on('click', function(event){
    if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-politics') ) {
      event.preventDefault();
      $(this).removeClass('is-visible');
    }
  });
  // close popup when clicking the esc keyboard button
  $(document).keyup(function(event){
      if(event.which=='27'){
        $('.cd-politics').removeClass('is-visible');
      }
  });


  // style for form
		$( '.form__wrap input[name=name_last]' ).closest( '.form-group' ).after(
      '<div class="form-group"><select class="form-control footer__form-select" required name="size"><option selected="selected" value="" class="option" style="background-color: transparent;">Выберите размер</option><option value="xs" class="option" style="background-color: transparent;">40р 26.5 см</option><option value="x" class="option" style="background-color: transparent;">41р 27.5 см</option><option value="red" class="option" style="background-color: transparent;">42р 28см</option><option value="grey" class="option" style="background-color: transparent;">43р 28.5см</option><option value="grey" class="option" style="background-color: transparent;">44р 29см</option><option value="grey" class="option" style="background-color: transparent;">45р 29.5см</option></select></div>'
    );

    $( '.form__wrap .order-form' ).addClass( 'footer__form-order' );
    $( '.form__wrap input' ).addClass( 'footer__form-data' );
    $( '.form__wrap button' ).addClass( 'footer__form-button hvr-bob' );
    $('.form__wrap input[name=name_first]').attr("placeholder","Имя");
    $('.form__wrap input[name=name_last]').attr("placeholder","Телефон");
	
  // show form
  $('.price__list-item_button').on('click', showForm);

  function showForm (e) {
      e.preventDefault();
      toForm($(this).data('form'), true);
  }

  function toForm(section, isAnimate) {
      var 
          reqSection = $('.form__title').filter('[data-section="' + section +'"]'),
          reqSectionPos = reqSection.offset().top;

      if (isAnimate) {
        $('body, html').animate({scrollTop: reqSectionPos}, 350);
      }
  }

  // hight of the fixed menu when scrolling
  var
     menu = $('.header'),
     menuList = $('.header__menu'),
     logo = $('.header__logo');
    
      
    $(window).scroll(function(){
      console.log($(this).scrollTop());
        if ( $(this).scrollTop() <= 100 && menu.hasClass("move") ) {
            menu.removeClass("move").addClass("default");
            menuList.removeClass('push-top');
            logo.removeClass('logo-top');
        }
        else if ( $(this).scrollTop() > 100 && menu.hasClass("default") ){
            menu.removeClass("default").addClass("move");
            menuList.addClass('push-top');
            logo.addClass('logo-top');
        } 
    });//scroll

  // scroll function call
  $('.header__menu-link').on('click', function(e) {
    e.preventDefault();

    showSection($(this).attr('href'), true); 
  });

  showSection(window.location.hash, false);

  function showSection(section, isAnimate) {
  var 
      direction = section.replace(/#/, ''),
      reqSection = $('.section').filter('[data-section="' + direction + '"]'),
      reqSectionPos = reqSection.offset().top - 49;

      if (isAnimate) {
        $('body, html').animate({scrollTop: reqSectionPos}, 400);
      } else {
        $('body, html').scrollTop(reqSectionPos);
      }
  }

});