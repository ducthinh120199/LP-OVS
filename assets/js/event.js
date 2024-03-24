$(document).ready(() => {
  AOS.init();

  $('.l-section--journey__locations.slick').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    dots: false,
    arrows: true,
    variableWidth: true,
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
});