$(function () {
    $('.header-menu a').click(function (e) {
        $('.current').removeClass('current');
        $('.active').removeClass('active');
        var posClick = $(this).attr('href');
        $("[href='" + posClick + "']").addClass('current');
        $("[href='" + posClick + "']").addClass('active');
    });

    $('.parallax').ripples({
        dropRadius: 1,
        perturbance: 0.1,
        resolution: 400,
    });

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 80) {
            $("#product-gallery").addClass("slideup")
        }
        else {
            $("#product-gallery").removeClass("slideup")
        }

        if (scroll > 1200) {
            $("#About").addClass("slideright")
        }
        else {
            $("#About").removeClass("slideright")
        }
    }) 

});