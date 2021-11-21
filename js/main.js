// popup //
$('.popup-open').click(function() {
    $('.popup-bg').fadeIn(600);
});

$('.popup-close').click(function() {
    $('.popup-bg').fadeOut(600);
});

// mobile menu //
$('.menu-open').click(function() {
    $('.menu-bg').fadeIn(600);
});

$('.menu-close').click(function() {
    $('.menu-bg').fadeOut(600);
});


window.addEventListener("resize", function() {
    if (window.innerWidth <= 768) {
      $('.js-slider').slick('unslick');
      sliderIsLive = false;
    }
    else {
      if (sliderIsLive) {
        $('.js-slider').slick();
        sliderIsLive = true;
      }
    }
});


