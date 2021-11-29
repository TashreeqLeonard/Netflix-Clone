$(function() {
    $(window).scroll(function () {
       if ($(this).scrollTop() > 50) {
          $('to').addClass('header')
       } else {
          $(‘body’).removeClass(‘changeColor’)
       }
    });
 });