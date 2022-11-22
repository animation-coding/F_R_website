(function ($) {
    "use strict";

    $(document).ready(function () {

        /**-------------------------------------------
         *  Navbar fix
         * -----------------------------------------*/
        $(document).on('click', '.navbar-area .navbar-nav li.menu-item-has-children>a', function (e) {
            e.preventDefault();
        })

        /*-------------------------------------
            menu
        -------------------------------------*/
        $('.navbar-area .menu').on('click', function () {
            $(this).toggleClass('open');
            $('.navbar-area .navbar-collapse').toggleClass('sopen');
        });

        // mobile menu
        if ($(window).width() < 992) {
            $(".in-mobile").clone().appendTo(".sidebar-inner");
            $(".in-mobile ul li.menu-item-has-children").append('<i class="fas fa-chevron-right"></i>');
            $('<i class="fas fa-chevron-right"></i>').insertAfter("");

            $(".menu-item-has-children a").on('click', function (e) {
                // e.preventDefault();

                $(this).siblings('.sub-menu').animate({
                    height: "toggle"
                }, 300);
            });
        }

        /*--------------------------------------------------
            select onput
        ---------------------------------------------------*/
        if ($('.single-select').length) {
            $('.single-select').niceSelect();
        }

        /*---------------------------------------
            Quantity
        ---------------------------------------*/
        function wcqib_refresh_quantity_increments() {
            jQuery("div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)").each(function (a, b) {
                var c = jQuery(b);
                c.addClass("buttons_added"), c.children().first().before('<input type="button" value="-" class="minus" />'), c.children().last().after('<input type="button" value="+" class="plus" />')
            })
        }
        String.prototype.getDecimals || (String.prototype.getDecimals = function () {
            var a = this,
                b = ("" + a).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
            return b ? Math.max(0, (b[1] ? b[1].length : 0) - (b[2] ? +b[2] : 0)) : 0
        }), jQuery(document).ready(function () {
            wcqib_refresh_quantity_increments()
        }), jQuery(document).on("updated_wc_div", function () {
            wcqib_refresh_quantity_increments()
        }), jQuery(document).on("click", ".plus, .minus", function () {
            var a = jQuery(this).closest(".quantity").find(".qty"),
                b = parseFloat(a.val()),
                c = parseFloat(a.attr("max")),
                d = parseFloat(a.attr("min")),
                e = a.attr("step");
            b && "" !== b && "NaN" !== b || (b = 0), "" !== c && "NaN" !== c || (c = ""), "" !== d && "NaN" !== d || (d = 0), "any" !== e && "" !== e && void 0 !== e && "NaN" !== parseFloat(e) || (e = 1), jQuery(this).is(".plus") ? c && b >= c ? a.val(c) : a.val((b + parseFloat(e)).toFixed(e.getDecimals())) : d && b <= d ? a.val(d) : b > 0 && a.val((b - parseFloat(e)).toFixed(e.getDecimals())), a.trigger("change")
        });

        /*---------------------------------------
            Range slider
        ---------------------------------------*/
        $("#slider-range").slider({
            range: true,
            min: 0.00,
            max: 40.00,
            values: [5.00, 1999.00],
            slide: function (event, ui) {
                $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });
        $("#amount").val("$" + $("#slider-range").slider("values", 0) +
            " - $" + $("#slider-range").slider("values", 1));


        /* -----------------------------------------------------
            Variables
        ----------------------------------------------------- */
        var leftArrow = '<i class="ri-arrow-left-line"></i>';
        var leftAngle = '<i class="ri-arrow-left-s-line"></i>';
        var rightArrow = '<i class="ri-arrow-right-line"></i>';
        var rightAngle = '<i class="ri-arrow-right-s-line"></i>';
        var backButton = '<button class="slide-arrow prev-arrow"><i class="fa fa-angle-left"></i></button>';
        var nextButton = '<button class="slide-arrow next-arrow"><i class="fa fa-angle-right"></i></button>';

        /**testimonial-slider**/
        $('.testimonial-slider').owlCarousel({
            loop: true,
            nav: true,
            dots: true,
            margin: 10,
            items: 1,
            smartSpeed: 1500,
            navText: [leftArrow, rightArrow],
        })

        /**related-product-slider**/
        $('.related-product-slider').owlCarousel({
            loop: true,
            nav: true,
            dots: false,
            margin: 0,
            items: 3,
            smartSpeed: 1500,
            navText: [leftAngle, rightAngle],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
            }
        })

        /*---------------------------------------
            Thumbnail Slider
        ---------------------------------------*/
        var productDetailSlider = $('.single-thumbnail-slider');
        var pThumbanilSlider = $('.product-thumbnail-carousel');

        if (productDetailSlider.length) {
            productDetailSlider.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                speed: 1500,
                asNavFor: '.product-thumbnail-carousel'
            });
        }
        if (pThumbanilSlider.length) {
            pThumbanilSlider.slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                asNavFor: '.single-thumbnail-slider',
                dots: false,
                centerMode: false,
                focusOnSelect: true,
                arrows: false,
                prevArrow: '<div class="slick-prev"><i class="fa fa-angle-up"></i></div>',
                nextArrow: '<div class="slick-next"><i class="fa fa-angle-down"></i></div>',
            });
        }

        var productDetailSlider = $('.single-thumbnail-slider2');
        var pThumbanilSlider = $('.product-thumbnail-carousel2');

        if (productDetailSlider.length) {
            productDetailSlider.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                asNavFor: '.product-thumbnail-carousel2'
            });
        }
        if (pThumbanilSlider.length) {
            pThumbanilSlider.slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                asNavFor: '.single-thumbnail-slider2',
                dots: false,
                centerMode: false,
                focusOnSelect: true,
                vertical: true,
                arrows: false,
                prevArrow: '<div class="slick-prev"><i class="fa fa-angle-double-up"></i></div>',
                nextArrow: '<div class="slick-next"><i class="fa fa-angle-double-down"></i></div>',
            });
        }

        /**banner-move**/
        function touches(e) {
            var x = e.touches ? e.touches[0].clientX : e.clientX,
                y = e.touches ? e.touches[0].clientY : e.clientY;
            var w = window.innerWidth / 2;
            var h = window.innerHeight / 2;

            var l = -(x - w) / (w / 1) - 1;
            var t = -(y - h) / (h / 1) - 1;
            //10 / (y - (h / 2)) * 10;             
            console.log(y + ' | ' + h + ' | ' + t);

            TweenMax.to($('.banner-bg-img'), 1, {
                top: t + "%",
                left: l + "%"
            });

        }

        window.addEventListener("mousemove", touches);
        window.addEventListener("touchstart", touches);
        window.addEventListener("touchmove", touches);



        /*------------------------------------------------
            Magnific JS
        ------------------------------------------------*/
        $('.play-btn').magnificPopup({
            type: 'iframe',
            removalDelay: 260,
            mainClass: 'mfp-zoom-in',
        });
        $.extend(true, $.magnificPopup.defaults, {
            iframe: {
                patterns: {
                    youtube: {
                        index: 'youtube.com/',
                        id: 'v=',
                        src: 'https://www.youtube.com/embed/Wimkqo8gDZ0'
                    }
                }
            }
        });

        /*--------------------------------------------
            Search Popup
        ---------------------------------------------*/
        var bodyOvrelay = $('#body-overlay');
        var searchPopup = $('#td-search-popup');

        $(document).on('click', '#body-overlay', function (e) {
            e.preventDefault();
            bodyOvrelay.removeClass('active');
            searchPopup.removeClass('active');
        });
        $(document).on('click', '.search', function (e) {
            e.preventDefault();
            searchPopup.addClass('active');
            bodyOvrelay.addClass('active');
        });

        /**featured-accordion**/
        $('.accordion-item').on('click', function (e) {
            $('.accordion-item').removeClass('active');
            $(this).toggleClass('active');
        });

        $(document).on('mouseover', '.single-intro-contact-wrap', function () {
            $(this).addClass('single-intro-contact-wrap-active');
            $('.single-intro-contact-wrap').removeClass('single-intro-contact-wrap-active');
            $(this).addClass('single-intro-contact-wrap-active');
        });

        /*------------------
           back to top
        ------------------*/
        $(document).on('click', '.back-to-top', function () {
            $("html,body").animate({
                scrollTop: 0
            }, 200);
        });

    });

    $(window).on("scroll", function () {
        /*---------------------------------------
        sticky menu activation && Sticky Icon Bar
        -----------------------------------------*/

        var mainMenuTop = $(".navbar-area");
        if ($(window).scrollTop() >= 1) {
            mainMenuTop.addClass('navbar-area-fixed');
        }
        else {
            mainMenuTop.removeClass('navbar-area-fixed');
        }

        var ScrollTop = $('.back-to-top');
        if ($(window).scrollTop() > 1000) {
            ScrollTop.fadeIn(1000);
        } else {
            ScrollTop.fadeOut(1000);
        }
    });

    $(window).on('load', function () {

        /*-----------------
            preloader
        ------------------*/
        var preLoder = $("#preloader");
        preLoder.fadeOut();

        /*-----------------
            back to top
        ------------------*/
        var backtoTop = $('.back-to-top')
        backtoTop.fadeOut();

        /*---------------------
            Cancel Preloader
        ----------------------*/
        $(document).on('click', '.cancel-preloader a', function (e) {
            e.preventDefault();
            $("#preloader").fadeOut(1500);
        });

    });


})(jQuery);