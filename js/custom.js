$(document).ready(function() {
  // header color change
  $(window).on("scroll", function() {
    var scrollDistance = $(window).scrollTop();
    var $header = $(".js-header");
    if (scrollDistance > 80) {
      $header.addClass("header--colored");
    } else {
      $header.removeClass("header--colored");
    }
  });

  // wow 初始化
  new WOW().init();
});
