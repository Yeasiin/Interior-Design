(function ($) {
"use strict";

// meanmenu
$('#mobile-menu').meanmenu({
	meanMenuContainer: '.mobile-menu',
	meanScreenWidth: "767"
});

// PreLoader

$(window).load(function(){
	$(".preloader").fadeOut(1000);
})



// owlCarousel
$('.slider-active').owlCarousel({
    loop:true,
    margin:0,
	items:1,
	navText:['<i class="arrow_carrot-left"></i>','<i class="arrow_carrot-right"></i>'],
    nav:true,
	dots:false,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:1
        },
        992:{
            items:1
        }
    }
})


$('.testimonial-active').owlCarousel({
    loop:true,
    margin:0,
	items:1,
	navText:['<i class="arrow_left"></i>','<i class="arrow_right"></i>'],
    nav:true,
	dots:false,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:1
        },
        992:{
            items:1
        }
    }
})



$('.brand-active').owlCarousel({
    loop:true,
    margin:10,
	dots:false,
    responsive:{
        0:{
            items:2
        },
        767:{
            items:3
        },
        992:{
            items:5
        }
    }
})



/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});




})(jQuery);