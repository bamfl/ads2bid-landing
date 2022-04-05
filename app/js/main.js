$(document).ready(function () {
  window.intercomSettings = {
    api_base: "https://api-iam.intercom.io",
    app_id: "cj2q9izh",
    alignment: 'right',
    language_override: localStorage.getItem('language_override') || 'ru'
  };
  (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/cj2q9izh';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
  const locale = document.getElementById('locale');
  locale.addEventListener('click', () => {
    locale.classList.toggle('active');
  });
  function changeLocale() {
    const ruBtns = document.querySelectorAll('[data-locale="ru"]');
    
    ruBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        localStorage.setItem('language_override', 'ru');

        if (window.location.pathname.includes('/tearms-of-use_en.html')) {
          window.location.href = 'tearms-of-use.html';
        } else if (window.location.pathname.includes('/policy_en.html')) {
          window.location.href = 'policy.html';
        } else if (window.location.pathname.includes('/') || window.location.pathname.includes('/index_en.html')) {
          window.location.href = 'index.html';
        }
      });
    })

    const enBtns = document.querySelectorAll('[data-locale="en"]');

    enBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        localStorage.setItem('language_override', 'en');

        if (window.location.pathname.includes('/tearms-of-use.html')) {
          window.location.href = 'tearms-of-use_en.html';
        } else if (window.location.pathname.includes('/policy.html')) {
          window.location.href = 'policy_en.html';
        } else if (window.location.pathname.includes('/') || window.location.pathname.includes('/index.html')) {
          window.location.href = 'index_en.html';
        }
      });
    })
  }
  changeLocale();

  const enterBtn = document.getElementById('header-auth-enter');
  const enterBtn2 = document.getElementById('header-auth-enter2');
  const enterBtns = [enterBtn, enterBtn2];

  enterBtns.forEach(enterBtn => {
    enterBtn.addEventListener('click', (e) => {
      $('#popup').animate({ opacity: 'toggle', display: 'block' }, 100);
      $('.modal-tub__reg').removeClass('active');
      $('.modal-tub__vhod').addClass('active');
      $('.modal-tab').hide(),
      $('.modal-tab').eq(1).show();
  
      $('.modal-tub__reg').click(function () {
        $('.modal-tub button').removeClass('active'),
          $(this).addClass('active'),
          $('.modal-tab').hide(),
          $('.modal-tab').eq(0).show();
      }),
      $('.modal-tub__vhod').click(function () {
        $('.modal-tub button').removeClass('active'),
          $(this).addClass('active'),
          $('.modal-tab').hide(),
          $('.modal-tab').eq(1).show();
      }),
      !1
    });
  })

  window.innerWidth < 992 &&
    ($('.burger, header nav ul li a').click(function () {
      $('header nav .nav-sec').animate({ opacity: 'toggle', display: 'flex' }, 300),
        $('.container').toggleClass('container__filter'),
        $('section.home').toggleClass('home__filter'),
        $('header').toggleClass('header-blure'),
        $('header .container').toggleClass('container-nofilter'),
        $('header .burger svg').toggleClass('active');
    }),
    $(window).resize(function () {
      $(window).width() > 800 && $('header nav .nav-sec').removeAttr('style');
    })),
    $('.home .slider').slick({ infinite: !0, slidesToShow: 1, slidesToScroll: 1, centerMode: !0, variableWidth: !0 }),
    $('.lk-prev .slider-1').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: !1,
      fade: !0,
      swipe: !1,
      responsive: [{ breakpoint: 772, settings: { swipe: !0 } }],
    }),
    $('.lk-prev .slider-2').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.lk-prev .slider-1',
      arrows: !0,
      dots: !1,
      focusOnSelect: !0,
      responsive: [
        { breakpoint: 1500, settings: { slidesToShow: 3 } },
        { breakpoint: 772, settings: 'unslick' },
      ],
    }),
    $('.lk-step .slider-1').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: !1,
      fade: !0,
      swipe: !1,
      responsive: [{ breakpoint: 772, settings: { swipe: !0 } }],
    }),
    $('.lk-step .slider-2').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.lk-step .slider-1',
      arrows: !0,
      dots: !1,
      focusOnSelect: !0,
      responsive: [
        { breakpoint: 1500, settings: { slidesToShow: 3 } },
        { breakpoint: 772, settings: 'unslick' },
      ],
    }),
    $('.example .tub-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: !0,
      fade: !1,
      responsive: [
        { breakpoint: 992, settings: { slidesToShow: 3, slidesToScroll: 3 } },
        { breakpoint: 772, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      ],
    }),
    $('.example .tub-slider-mb').slick({ slidesToShow: 1, slidesToScroll: 1, arrows: !0, fade: !1 }),
    $('.liner-slider').slick({
      responsive: [{ breakpoint: 992, settings: { slidesToShow: 1, slidesToScroll: 1, arrows: !1, dots: !0 } }],
    }),
    $('.lk-slider-sec-2__next').on('click', function () {
      $('.lk-slider-1 .slider-1').slick('slickNext');
      var e = $('.lk-slider-1 .slider-2 .slick-current');
      e.removeClass('slick-current'),
        e.next('.lk-slider-1 .slider-2 .slide-2').addClass('slick-current'),
        e.next('.lk-slider-1 .slider-2 .slide-2').get(0) ||
          $('.lk-slider-1 .slider-2 .slide-2:first-child').addClass('slick-current');
    }),
    $('.lk-slider-sec-2__next__2').on('click', function () {
      $('.lk-slider-2 .slider-1').slick('slickNext');
      var e = $('.lk-slider-2 .slider-2 .slick-current');
      e.removeClass('slick-current'),
        e.next('.lk-slider-2 .slider-2 .slide-2').addClass('slick-current'),
        e.next('.lk-slider-2 .slider-2 .slide-2').get(0) ||
          $('.lk-slider-2 .slider-2 .slide-2:first-child').addClass('slick-current');
    }),
    $('.tub-item').click(function () {
      $('.tub-item').parent().find('.tub-item').removeClass('tub-item__active').removeClass('mb-tub-item__active'),
        $(this).addClass('tub-item__active');
    }),
    $('.tub-item').click(function () {
      $(this)
        .closest('.example-container')
        .find('.tub-content')
        .find('.tub-section')
        .removeClass('tub-section__active')
        .removeClass('mb-tub-section__active')
        .eq($(this).index())
        .addClass('tub-section__active');
    }),
    $('.tub-version__item').click(function () {
      $('.tub-version__item').parent().find('.tub-version__item').removeClass('tub-version__item__active'),
        $(this).addClass('tub-version__item__active');
    }),
    $('.tub-version__item__1').click(function () {
      $('section.example .tub-content').removeClass('tub-content-mb'),
        $('.example .tub-slider').resize(),
        $('.example .tub-slider-mb').resize(),
        $('section.example .tub-content .tub-section .slick-next').trigger('click');
    }),
    $('.tub-version__item__2').click(function () {
      $('section.example .tub-content').addClass('tub-content-mb'),
        $('.example .tub-slider').resize(),
        $('.example .tub-slider-mb').resize(),
        $('section.example .tub-content .tub-section .slick-next').trigger('click');
    }),
    $('.check input[type="checkbox"]').change(function () {
      1 == $(this).prop('checked')
        ? ($('.form button[type="submit"]').prop('disabled', !1),
          $('.form button[type="submit"]').removeClass('btn-blocked').addClass('btn-grd'))
        : ($('.form button[type="submit"]').prop('disabled', !0),
          $('.form button[type="submit"]').removeClass('btn-grd').addClass('btn-blocked'));
    }),
    $('body').on('click', '[href*="#"]', function (e) {
      $('html,body')
        .stop()
        .animate({ scrollTop: $(this.hash).offset().top + 220 }, 1e3)
    }),
    window.innerWidth > 992 &&
      $('section.about .about-item').hover(function () {
        $('section.about .about-item').not(this).find('.about__text').hide(200),
          $(this).find('.about__text').slideToggle(200);
      });
  var e = $('.partners .partners-sec').width() + 10,
    t = $('.partners-sec');
  $('.partners__btn').on('click', function () {
    t.stop().animate({ scrollLeft: '+=' + e * $(this).data('factor') });
  }),
    $('section.home .slider-cont .slick-current').prev('section.home .slider-cont .slider .slide').css('opacity', '1'),
    $('.home .slider').on('afterChange', function (e, t, n) {
      $('section.home .slider-cont .slider .slide').css('opacity', '1'),
        $('section.home .slider-cont .slick-current')
          .prev('section.home .slider-cont .slider .slide')
          .css('opacity', '1'),
        $('.carousel-finger').addClass('carousel-finger__hide');
    }),
    $('.liner-slider').on('afterChange', function (e, t, n) {
      $('.carousel-finger').addClass('carousel-finger__hide');
    });
  var n = document.getElementsByClassName('header-auth__reg__span');
  function i(e) {
    var t = document.createElement('div'),
      n = Math.max(this.clientWidth, this.clientHeight),
      i = this.getBoundingClientRect();
    (sDiv = t.style),
      (px = 'px'),
      (sDiv.width = sDiv.height = n + px),
      (sDiv.left = e.clientX - i.left - n / 2 + px),
      (sDiv.top = e.clientY - i.top - n / 2 + px),
      t.classList.add('pulse'),
      this.appendChild(t);
  }
  return (
    Array.prototype.forEach.call(n, function (e) {
      e.addEventListener('click', i);
    }),
    $('.header-auth__reg, #reg1, #reg2, #reg3, #reg4, #reg5, #popup .close').click(function () {
      $('#popup').animate({ opacity: 'toggle', display: 'block' }, 100);
      $('.modal-tub__reg').addClass('active');
      $('.modal-tub__vhod').removeClass('active');
      $('.modal-tab').hide(),
      $('.modal-tab').eq(0).show();
    }),
    $('.modal-tub__reg').click(function () {
      $('.modal-tub button').removeClass('active'),
        $(this).addClass('active'),
        $('.modal-tab').hide(),
        $('.modal-tab').eq(0).show();
    }),
    $('.modal-tub__vhod').click(function () {
      $('.modal-tub button').removeClass('active'),
        $(this).addClass('active'),
        $('.modal-tab').hide(),
        $('.modal-tab').eq(1).show();
    }),
    !1
  );
});
