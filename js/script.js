$('.js-slider').slick({
    responsive: [
        {
            breakpoint: 3000,
            settings: "unslick"
          },
          {
            breakpoint: 768,
            settings: {
                arrows: false,
                infinite: true,
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1,
            },
          }
      ]
  });


  $('.js-slider-team').slick({
    arrows: false,
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,

});

