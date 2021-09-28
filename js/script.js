$(document).ready(function() {
	new WOW().init();

    //pop-up
    $(".pop-up-section").fadeIn(300);
    $(".overlay-box").fadeIn(300);
    $(".pop-close, .overlay-box").click(function () {
        $(".pop-up-section").fadeOut(300);
        $(".overlay-box").fadeOut(300);
    });

	//phone size menu onclick
	if ($(window).width() <= 1199) {
        $('#menu-id').click(function (e) {
           e.preventDefault()
           $(".overlay-box").fadeIn(300);
           $(".navgition").addClass("reset-left");
           $("body").addClass("overflow");
       });
       $(".nav-head .close-btn, .overlay-box").click(function () {
           $(".overlay-box").fadeOut(300);
           $(".navgition").removeClass("reset-left");
           $("body").removeClass("overflow");
       });

	   //dropdown inside menu
	   $('.cat-li.dropdown .cat-anchor, .lang-word, .navgition .dropdown>a, .hide-txt').click(function (e) {
		e.preventDefault()
		var item =  $(this).siblings(".dropdown-content");
		item.slideToggle(500);
		
		})
        //slide down menu
        $('.btn-div').click(function () {
            $(".cats-dispaly").slideToggle(400);
            if ($(window).width() <= 1199) {
                $(this).toggleClass("active")
            }
        });
        // $('.overlay-box').click(function () {
        //     $(".cats-dispaly").slideToggle(400);
        // });

        $('.has-level-2>.cat-anchor').click(function (e) {
            e.preventDefault()
            var item = $(this);
            $(".has-level-2>.cat-anchor").not(item).removeClass("active");
            $(item).toggleClass("active");
            if ($(item).siblings().css('display') == 'none') {
                $(item).siblings().slideDown(500);
            } else {
                $(item).siblings().slideUp(500);
            }
            $(".has-level-2>.cat-anchor").not(item).siblings().slideUp(500);
        })

        // $('.has-level-3>.cat-anchor').click(function (e) {
        //     e.preventDefault()
        //     var item = $(this);
        //     $(".has-level-3>.cat-anchor").not(item).removeClass("active");
        //     $(item).toggleClass("active");
        //     if ($(item).siblings().css('display') == 'none') {
        //         $(item).siblings().slideDown(500);
        //     } else {
        //         $(item).siblings().slideUp(500);
        //     }
        //     $(".has-level-3>.cat-anchor").not(item).siblings().slideUp(500);
        // })
        $(".top-header .add-chevron").addClass("chevron-down");
   	}
    
    // //main Slider Carousel
    ///////// ** main** /////////
    var specials = new Swiper('.main-slider .swiper-container', {
        loop: true,
        autoplay: true,
        pagination: {
            el: '.main-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.main-slider .swiper-btn-next',
            prevEl: '.main-slider .swiper-btn-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 1,
            },
            992: {
                slidesPerView: 1,
            },
            1199: {
                slidesPerView: 1,
            },
        },
    });
	

    // //product Slider Carousel
    ///////// ** product** /////////
    var specials = new Swiper('.product-slider .swiper-container', {
        loop: true,
        autoplay: true,
        pagination: {
            el: '.product-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.product-slider .swiper-btn-next',
            prevEl: '.product-slider .swiper-btn-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            1199: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        },
    });    
    // //insta Slider Carousel
    ///////// ** insta** /////////
    var specials = new Swiper('.insta-section .swiper-container', {
        loop: true,
        autoplay: true,
        pagination: {
            el: '.insta-section .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.insta-section .swiper-btn-next',
            prevEl: '.insta-section .swiper-btn-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 0,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 0,
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 0,
            },
            1199: {
                slidesPerView: 4,
                spaceBetween: 0,
            },
        },
    });

     // //reviews-section Slider Carousel
    ///////// ** reviews-section** /////////
    var specials = new Swiper('.reviews-slider .swiper-container', {
        loop: true,
        autoplay: true,
        pagination: {
            el: '.reviews-slider .swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
            767: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
            992: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
            1199: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
        },
    });
    ////////////** footer transfer into accordion **//////////

	if ($(window).width() <= 767) {
		$(".nav-foot-header").addClass("footer-accordion");
		$(".nav-foot").addClass("footer-panel");
	}
	$('.footer-accordion').click(function () {
		var x = $(this).siblings().prop('scrollHeight') + 12 + "px";
		$(".footer-accordion").not(this).removeClass("active");
		$(this).toggleClass("active");
		if ($(this).siblings().css('max-height') == '0px') {
			$(this).siblings().css('max-height', x);
			$(this).siblings('.nav-foot').css('padding-top', "15px");
		} else {
			$(this).siblings().css('max-height', '0');
			$(this).siblings('.nav-foot').css('padding-top', "0");
		}

		$(".footer-accordion").not(this).siblings().css('max-height', '0');
		$(".footer-accordion").not(this).siblings('.nav-foot').css('padding-top', "0");
	})

	

});