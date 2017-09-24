$(document).ready(function () {
    svg4everybody({});

  $('.toggle').click(function(){
    $(this).toggleClass('js-toggle--open');
    $('.page-header__top').toggleClass('js-page-header__top--open-toggle');
    $('.main-nav').toggleClass('js-main-nav--open-toggle');
  
  });

});