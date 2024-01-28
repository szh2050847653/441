(function ($) {
    "use strict";
    
    new WOW().init();  
    
    
    /*---background image---*/
	function dataBackgroundImage() {
		$('[data-bgimg]').each(function () {
			var bgImgUrl = $(this).data('bgimg');
			$(this).css({
				'background-image': 'url(' + bgImgUrl + ')', // + meaning concat
			});
		});
    }
    
    
    $(window).on('load', function () {
        dataBackgroundImage();
    });
    

    // wiper slider activation 
    var swiper = new Swiper('.swiper_slider', {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });

    /*swiper container activation*/
    var swiper = new Swiper('.testimonial_swiper', {
        slidesPerView: 2,
        clickable: true,
        spaceBetween: 70,
        breakpoints: {
            1500: {
                spaceBetween: 70,
              },
            1200: {
                spaceBetween: 30,
              },
            992: {
                spaceBetween: 30,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            576: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            250: {
              slidesPerView: 1,
              spaceBetween: 20,
            }
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
            
        },
    });
    

    $(".switcher_language > a").on("click", function() {
        $(this).toggleClass('active');
        $('.lng_dropdown').slideToggle('medium');
    }); 
    
    /*--- Magnific Popup Video---*/
    $('.video_popup').magnificPopup({
        type: 'iframe',
        gallery: {
            enabled: true
        }
    });

    $('.img_popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $('.img_popup2').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    
    /*--- counterup activation ---*/
    $('.counterup').counterUp({
        delay: 20,
        time: 1000
    });
    
    
    $('.select_option').niceSelect();
 
    
      /*---  ScrollUp Active ---*/
    // $.scrollUp({
    //     scrollText: 'BACK TO TOP',
    //     easingType: 'linear',
    //     scrollSpeed: 900,
    //     animation: 'fade'
    // });
    
    
       /*----------  Scroll to top  ----------*/
       function scrollToTop() {
        var $scrollUp = $('#scroll-top'),
            $lastScrollTop = 0,
            $window = $(window);

        $window.on('scroll', function () {
            var st = $(this).scrollTop();
           
            $lastScrollTop = st;
        });

        $scrollUp.on('click', function (evt) {
            $('html, body').animate({scrollTop: 0}, 600);
            evt.preventDefault();
        });
    }
    scrollToTop();

    

    /*---canvas menu activation---*/
    $('.canvas_open').on('click', function(){
        $('.offcanvas_menu_wrapper,.body_overlay').addClass('active')
    });
    
    $('.canvas_close,.body_overlay').on('click', function(){
        $('.offcanvas_menu_wrapper,.body_overlay').removeClass('active')
    });
    /*---Off Canvas Menu---*/
    var $offcanvasNav = $('.offcanvas_main_menu'),
        $offcanvasNavSubMenu = $offcanvasNav.find('.sub-menu');
    $offcanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i class="fa fa-angle-down"></i></span>');
    
    $offcanvasNavSubMenu.slideUp();
    
    $offcanvasNav.on('click', 'li a, li .menu-expand', function(e) {
        var $this = $(this);
        if ( ($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('menu-expand')) ) {
            e.preventDefault();
            if ($this.siblings('ul:visible').length){
                $this.siblings('ul').slideUp('slow');
            }else {
                $this.closest('li').siblings('li').find('ul:visible').slideUp('slow');
                $this.siblings('ul').slideDown('slow');
            }
        }
        if( $this.is('a') || $this.is('span') || $this.attr('clas').match(/\b(menu-expand)\b/) ){
        	$this.parent().toggleClass('menu-open');
        }else if( $this.is('li') && $this.attr('class').match(/\b('menu-item-has-children')\b/) ){
        	$this.toggleClass('menu-open');
        }
    });

   
    
    
    /*---MailChimp---*/
    $('#mc-form').ajaxChimp({
        language: 'en',
        callback: mailChimpResponse,
        // ADD YOUR MAILCHIMP URL BELOW HERE!
        url: 'http://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef'

    });
    function mailChimpResponse(resp) {

        if (resp.result === 'success') {
            $('.mailchimp-success').addClass('active')
            $('.mailchimp-success').html('' + resp.msg).fadeIn(900);
            $('.mailchimp-error').fadeOut(400);

        } else if(resp.result === 'error') {
            $('.mailchimp-error').html('' + resp.msg).fadeIn(900);
        }  
    }
 
  
    
    
})(jQuery);	
