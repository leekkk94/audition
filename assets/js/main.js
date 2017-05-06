/*
Author       : Hash Theme.
Template Name: Hexin - One Page Business Template
Version      : 1.0
*/
(function($) {
    'use strict';

    jQuery(document).on('ready', function() {

        /* 1. PRELOADER JS*/

        $(window).load(function() {
            $('.pre-loader-container').fadeOut();
            $("#pre-loader").delay(350).fadeOut('slow');
            $(".preload-logo").addClass('zoomOutUp');
            $(".loader").addClass('zoomOutDown');
        });

        /*END PRELOADER JS*/


        /* 2. BOOTSTRAP TOOLTIP  */

        $('[data-toggle="tooltip"]').tooltip();

        /* END BOOTSTRAP TOOLTIP  */


        /* 3. JQUERY SCROLL PSY  */

        $('body').scrollspy({
            target: '.navbar-default',
            offset: 95
        });

        /* END JQUERY SCROLL PSY  */


        /* 4. JQUERY SMOOTH SCROLL JS */

        $('.navbar-nav li a,.btn-home-slider').on('click', function(e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1500);
            e.preventDefault();
        });


        $(window).on('scroll', function() {
            if ($(this).scrollTop() > 100) {
                $('.hexin-menu').addClass('sticky-menu');
            } else {
                $('.hexin-menu').removeClass('sticky-menu');
            }
        });


        $(document).on('click', '.navbar-collapse.in', function(e) {
            if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
                $(this).collapse('hide');
            }
        });

        /* END JQUERY SMOOTH SCROLL JS  */



        /* 5. START SLIDER JS */
        $('#home-slider-carousel').carousel({
            interval: 6000,
			pause: 'hover'
        });

        /* END SLIDER JS */


        /* 6. SECTIONS BACKGROUNDS */

        var pageSection = $("div,section");
        pageSection.each(function(indx) {

            if ($(this).attr("data-background")) {
                $(this).css("background-image", "url(" + $(this).data("background") + ")");
            }
        });

        /* END SECTIONS BACKGROUNDS */



        /* 7. IMAGE GALLERY POPUP  */

        $(".game-gallery").magnificPopup({
            fixedContentPos: true,
            fixedBgPos: true,
            mainClass: "my-mfp-zoom-in",
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function(item) {
                    return item.el.attr('title') + '<small>by Hash Theme</small>';
                }
            }
        });

        /* END IMAGE GALLERY POPUP  */


        /* 8. START TESTIMONIAL SLIDER  */
        $('.testimonial-slider').owlCarousel({
            autoPlay: false, //Set AutoPlay to 3 seconds
            items: 1,
            itemsDesktop: [1199, 1],
            itemsDesktopSmall: [979, 1],
            itemsTablet: [768, 1],
            pagination: true
        });

        /* END TESTIMONIAL SLIDER  */


        /* 9. START CLIENT LOGO */
        $('.client').owlCarousel({
            autoPlay: true, //Set AutoPlay to 3 seconds
            items: 6,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [979, 3],
            pagination: false
        });

        /* END CLIENT LOGO */


        /* 10. START COUNTDOWN JS */
        $('.counter-section').on('inview', function(event, visible, visiblePartX, visiblePartY) {
            if (visible) {
                $(this).find('.timer').each(function() {
                    var $this = $(this);
                    $({
                        Counter: 0
                    }).animate({
                        Counter: $this.text()
                    }, {
                        duration: 2500,
                        step: function() {
                            $this.text(Math.ceil(this.Counter));
                        }
                    });
                });
                $(this).unbind('inview');
            }
        });
        /* END COUNTDOWN JS */



       /*  11. START TWITTER JS */

        $('.twitter-wrap .tweet').twittie({
            dateFormat: '%b. %d, %Y',
            username: 'ipe6969',
            template: '{{tweet}} <div class="date">{{date}}</div>',
            count: 1,
            loadingText: 'Loading!'
        });

        /* END TWITTER JS */



        /* 12. START GOOGLE MAP */

        function initialize() {
            var mapOptions = {
                zoom: 17,
                scrollwheel: false,
                center: new google.maps.LatLng(37.62648, 126.70950)
            };
            var map = new google.maps.Map(document.getElementById('map'),
                mapOptions);
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(37.62648, 126.70950),
                animation: google.maps.Animation.BOUNCE,
                icon: 'assets/img/map-marker.png',
                map: map
            });
        }
        google.maps.event.addDomListener(window, 'load', initialize);

        /* END GOOGLE MAP */


    });




    /* 13. START MIXITUP JS */

    $('.portfolio-container').mixItUp();

    /* END MIXITUP JS */


    /* 14. START WOW ANIMATION JS*/

    new WOW().init();

    /* END WOW ANIMATION JS */


})(jQuery);
