"use strict";

$(function () {
  //Кнопка бургера
  var burger = $('.burger');
  burger.on('click', function () {
    $(this).toggleClass('on');
    $('.header, .navbar').toggleClass('on');
  });
  var features = $(".features");

  function checkWidth() {
    var windowWidth = $('body').innerWidth(),
        elem = $(".features");

    if (windowWidth < 1280) {
      elem.addClass('features--mob');
    } else {
      elem.removeClass('features--mob');
    }
  }

  if (features.hasClass('features--mob')) {
    features.find('.features__item').on('click', function () {
      $(this).siblings('.features__item').children('.features__descr').slideUp();
      $(this).children('.features__descr').slideDown();
      $(this).siblings('.features__item').removeClass('is-active');
      $(this).addClass('is-active');
    });
  }

  checkWidth();
  $(window).resize(function () {
    checkWidth();
  }); //Слайдер

  if ($('.gallery-js').length > 0) {
    var slider = $('.gallery-js').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      variableWidth: true,
      cssEase: 'linear',
      dots: false,
      prevArrow: $('.slick-prev'),
      nextArrow: $('.slick-next'),
      responsive: [{
        breakpoint: 1768,
        settings: {
          variableWidth: false
        }
      }, {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          variableWidth: false
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          variableWidth: false
        }
      }]
    });
  }
  /*Активный пункт меню*/


  function activeMenuItem() {
    $('.menu-top__link').removeClass('is-active');
    $(this).addClass('is-active');
  }

  $('.menu-top__link').on('click', activeMenuItem);

  function scrollNav() {
    $("a[href^='#nav']").on("click", function () {
      var _href = $(this).attr("href");

      $("html, body").animate({
        scrollTop: $(_href).offset().top - 118 + "px"
      });
      return false;
    });
  }

  scrollNav();
  var lastScrollTop = 0;
  $(window).scroll(function () {
    var scrollPos = $('.converce').offset().top;

    if ($(this).scrollTop() > scrollPos) {
      $('.button-up-wrapper').fadeIn();
    } else {
      $('.button-up-wrapper').fadeOut();
    }

    var st = $(this).scrollTop();

    if (st > lastScrollTop) {
      $('.navbar').addClass('show');
    } else {
      $('.navbar').removeClass('show');
    }
  });
  $('.button-up').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
});