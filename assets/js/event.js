$(document).ready(() => {
  AOS.init();

  $('.l-section--journey__locations.slick').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    dots: false,
    arrows: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          infinite: true,
          variableWidth: false,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          infinite: true,
          variableWidth: false,
          dots: true,
          arrows: false,
        }
      }
    ]
  });

  $("#juorney-detail").on("click", function () {
    const scrollToEl = $("#journey-form");
    $('html').animate(
      {
        scrollTop: scrollToEl.offset().top,
      },
      800 //speed
    );
  });

  $('.l-gnav li').click(function() {
    $('.l-gnav li').removeClass('active');
    $(this).addClass('active');
  });

  let toggle = $('.js-nav-toggle'),
    menu = $('.js-nav-menu');

  toggle.on('click',function(){
    $(this).toggleClass('active');
    menu.toggleClass('active');
  });
});