
$('.product-large__sl').slick({
    arrows: false,
    asNavFor: '.product-min__sl',
    slidesToShow: 1
  });


  $('.product-min__sl').slick({
    arrows: false,
    slidesToShow: 3,
    asNavFor: '.product-large__sl',
    focusOnSelect: true
  });