$(function () {

    "use strict";

    //===== Prealoder

    $(window).on('load', function (event) {
        $('.preloader').delay(500).fadeOut(500);
    });


    //===== Sticky

    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 20) {
            $(".header_navbar").removeClass("sticky");
            $(".header_navbar img").attr("src", "assets/images/logo.png");
        } else {
            $(".header_navbar").addClass("sticky");
            $(".header_navbar img").attr("src", "assets/images/logo-2.png");
        }
    });
    
    
    //===== Section Menu Active

    var scrollLink = $('.page-scroll');
    // Active link switching
    $(window).scroll(function () {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function () {

            var sectionOffset = $(this.hash).offset().top - 73;

            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        });
    });
    
    //===== close navbar-collapse when a  clicked

    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });

    $(".navbar-toggler").on('click', function () {
        $(this).toggleClass("active");
    });

    $(".navbar-nav a").on('click', function () {
        $(".navbar-toggler").removeClass('active');
    });



    //===== Back to top

    // Show or hide the sticky footer button
    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });


    //Animate the scroll to yop
    $('.back-to-top').on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });

    
    //=====  WOW active
    
    var wow = new WOW({
        boxClass: 'wow', //
        mobile: false, // 
    })
    wow.init();

    //===== Compte à rebours

    function startCountdown(countdownId, daysId, hoursId, minutesId, secondsId, targetDate) {
        var weddingDate = new Date(targetDate).getTime();
        var countdownFunction = setInterval(function () {
            var now = new Date().getTime();
            var distance = weddingDate - now;

            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            $('#' + daysId).text(days.toString().padStart(2, "0"));
            $('#' + hoursId).text(hours.toString().padStart(2, "0"));
            $('#' + minutesId).text(minutes.toString().padStart(2, "0"));
            $('#' + secondsId).text(seconds.toString().padStart(2, "0"));

            if (distance < 0) {
                clearInterval(countdownFunction);
                $('#' + countdownId).html("<p>Le grand jour est arrivé ! 🎉</p>");
            }
        }, 1000);
    }

    // Appels :
    startCountdown('countdown_hero', 'days', 'hours', 'minutes', 'seconds', 'June 27, 2026 16:00:00');
    startCountdown('countdown_coming', 'days_coming', 'hours_coming', 'minutes_coming', 'seconds_coming', 'June 27, 2026 16:00:00');
    
});
