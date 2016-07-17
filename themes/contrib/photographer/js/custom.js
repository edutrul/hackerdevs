/**
 * @file
 * Custom.js.
 *
 * Filename:     custom.js
 * Website:      http://www.ordasoft.com
 * Description:  template
 * Author:       ordasoft dev team ordasoft.com.
 */

(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.osDeltaReady = {
    attach: function (context, settings) {
      var mainMenu = $('.region-primary-menu ul');
      mainMenu.find('li.menu-item--expanded > a').once().append('<span class="arrow"></span>');
      $('.menu li a + ul').addClass('sub_menu');
      $('.menu li a').addClass('links');
      var slideButton = $('.views_slideshow_controls_text');
      $('.views_slideshow_controls_text_previous > a').addClass('previous');
      $('.views_slideshow_controls_text_next > a').addClass('next');
      slideButton.find('.previous').once().append('<i class="fa fa-angle-left"></i>');
      $('.views_slideshow_controls_text_next > a').addClass('next');
      slideButton.find('.next').once().append('<i class="fa fa-angle-Right"></i>');
      $('.switchButton span').click(function () {
        var page = $('body').removeClass();
        if ($(this).hasClass('bt-red')) {
          page.addClass('default');
        }
        if ($(this).hasClass('bt-lghtGre')) {
          page.addClass('divLghtGreen');
        }
        if ($(this).hasClass('bt-blue')) {
          page.addClass('divBlue');
        }
        if ($(this).hasClass('bt-red')) {
          page.addClass('divRed');
        }
        if ($(this).hasClass('bt-green')) {
          page.addClass('divGreen');
        }
        if ($(this).hasClass('bt-indigo')) {
          page.addClass('divIndigo');
        }
        if ($(this).hasClass('bt-orange')) {
          page.addClass('divOrange');
        }
        if ($(this).hasClass('bt-white')) {
          page.addClass('divWhite');
        }
      });

      $('div.btn-info').hover(function () {
        $('#play').css('opacity', '1');
        $('.region-main-title  p').css('opacity', '1');
        $('.border_button').css('opacity', '1');
        $(this).css('opacity', '0.2');
      }, function () {
        $('#play').css('opacity', '0.8');
        $('.region-main-title  p').css('opacity', '0.8');
        $('.border_button').css('opacity', '0.6');
        $(this).css('opacity', '0.4');
      });

      function dynamicPanel() {
        var spm = '#dynamicPanel';
        if ($(window).width() >= 200) {
          $(window).scroll(function () {
            if ($(window).scrollTop() > 300) {
              $(spm).slideDown('normal');
            }
            else {
              $(spm).slideUp('normal');
            }
          });
        }
      }
      $('.views-field-field-button-top a').click(function () {
        $('html, body').animate({scrollTop: 0}, 1100);
        return false;
      });

      function sliderResize() {
        var slBody = $('.sliderBody').height();
        var slImg = $('img.slImg').height();
        if (slImg < slBody) {
          $('.swiper-container2').height(slBody);
        }
        if (slImg > slBody) {
          $('.swiper-container2').height(slImg);
        }
      }
      sliderResize();
      dynamicPanel();
      $(window).resize(function () {
        sliderResize();
        dynamicPanel();
      });
      $('.scrollup').click(function () {
        $('html,body').animate({scrollTop: 0}, 300);
        return false;
      });

      $('a.links').click(function () {
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top - 70}, 1100);
        return false;
      });

      var page = $('#page');
      var page1 = $('#page1');
      var page3 = $('#page3');
      var page6 = $('#page6');

      $(window).scroll(function () {
        var scrolled = $(window).scrollTop();
        page.css({backgroundPosition: '50%' + (-(scrolled / 7)) + 'px'});
        page1.css({backgroundPosition: '50%' + (-(scrolled / 7)) + 'px'});
        page3.css({backgroundPosition: '50%' + (-(scrolled / 7)) + 'px'});
        page6.css({backgroundPosition: '50%' + (-(scrolled / 17)) + 'px'});
      });

    }
  };
})(jQuery, Drupal);
