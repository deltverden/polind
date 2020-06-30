$('.scs-list-slides').on('init', function(e, slick) {
    $('.scsd-nav > span').eq(slick.currentSlide).addClass('active');
  }).slick({
    arrows: false,
    slidesToShow: 1,
    infinite: false
  }).on('beforeChange', function(e, slick, currentSlide, nextSlide) {
    $('.scsd-nav > span').removeClass('active').eq(nextSlide).addClass('active');
  });
  
  $('.scsd-nav').on('click', 'span', function() {
    $('.scs-list-slides').slick('slickGoTo', $(this).index());
  });