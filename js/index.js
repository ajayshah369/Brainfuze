// *********************************************
var back_to_top = $('#back-to-top');
var header = $('#header');
var toggle_menu = $('#toggle-menu');
var backdrop = $('.backdrop');
var side_nav = $('.side-nav');
var startup = $('.startup');
var logo = $('.logo img');

startup.hide();

if ($(window).scrollTop() > 0) {
  header.addClass('header-scrolled');
} else {
  header.removeClass('header-scrolled');
}

$(window).scroll(function () {
  if ($(window).scrollTop() > 0) {
    header.addClass('header-scrolled');
  } else {
    header.removeClass('header-scrolled');
  }

  if ($(window).scrollTop() > 300) {
    back_to_top.removeClass('hide');
  } else {
    back_to_top.addClass('hide');
  }
});

back_to_top.click(function () {
  $('html, body').animate(
    {
      scrollTop: 0,
    },
    100
  );
});

function toggle() {
  toggle_menu.toggleClass('bx-menu');
  toggle_menu.toggleClass('bx-x');
  backdrop.toggleClass('show');
  side_nav.toggleClass('show');
}

toggle_menu.click(function () {
  toggle();
});

backdrop.click(function () {
  toggle();
});

side_nav.click(function () {
  toggle();
});

// ***********************************************
// Smooth scroll for the navigation menu and links with .scrollto classes
$(document).on('click', '.nav-link', function (e) {
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
    location.hostname == this.hostname
  ) {
    e.preventDefault();
    var target = $(this.hash);
    if (target.length) {
      var scrollto = target.offset().top;
      if (target !== '#home') {
        scrollto -= 110;
      }

      $('html, body').animate(
        {
          scrollTop: scrollto,
        },
        100
      );

      if ($(this).parents('.nav-menu, .mobile-nav').length) {
        $('.nav-menu .active, .mobile-nav .active').removeClass('active');
        $(this).closest('a').addClass('active');
      }
    }
  }
});

// Navigation active state on scroll
var nav_sections = $('section');
var main_nav = $('.header-nav, .side-nav');

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop() + 200;

  nav_sections.each(function () {
    var top = $(this).offset().top,
      bottom = top + $(this).outerHeight();

    if (cur_pos >= top && cur_pos <= bottom) {
      if (cur_pos <= bottom) {
        main_nav.find('a').removeClass('active');
      }
      main_nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
    }
    if (cur_pos < 300) {
      $('.nav-menu a:first').addClass('active');
    }
  });
});

// Activate smooth scroll on page load with hash links in the url

if ($(location).prop('hash')) {
  var hash = $(location).prop('hash');

  if ($(hash)) {
    var scrollto = $(hash).first().position().top - 113;

    $(document).ready(function () {
      $('html, body').animate(
        {
          scrollTop: scrollto,
        },
        100
      );
    });
  }
}

// **********************************************

$(document).ready(function () {
  var { left, top } = logo.first().position();
  var width = 75 / 2;
  console.log(left, top);
  startup.fadeIn();
  setTimeout(function () {
    startup.css({ width: '75', left: left + width, top: top + width });
    setTimeout(function () {
      startup.css('display', 'none');
    }, 1000);
  }, 600);
});

// ************************************************

import './contact';
