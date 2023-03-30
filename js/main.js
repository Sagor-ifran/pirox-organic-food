$(function () {

    "use strict";

    //======MENU FIX========
    if ($('.tf_main_manu').offset() != undefined) {
        $(window).bind('scroll', function () {
            if ($(window).scrollTop() > 40) {
                $('.tf_main_manu').addClass('menu_fix');
            } else {
                $('.tf_main_manu').removeClass('menu_fix');
            }
        });
    }



    //======BARFILLER JS========
    $(document).ready(function () {
        $('#bar1').barfiller();
    });


    new WOW().init();


});
