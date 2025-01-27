$(document).ready(function () {
  $(window).bind("scroll", function () {
    if ($(this).scrollTop() > 50) {
      $(".arrow-up").fadeIn(400);
    } else {
      $(".arrow-up").fadeOut(400);
    }
  });
  // window.onload = function () {
  //   myFunction();
  // }
  setTimeout(function () {
    $(".load").css({
      display: "none",
    });
  }, 1300);
  // function myFunction() {

  // }
  $(".ham").on("click", function () {
    $(".main-ul-none").css({
      display: "block",
    });
    $(".close-btn-ham").css({
      display: "block",
    });
    $(".arrow-up").css({
      display: "none",
    });
    $("html").css({
      overflow: "hidden",
    });
  });
  $(".close-btn-ham").on("click", function () {
    $("html").css({
      overflow: "scroll",
    });
    $(".main-ul-none").css({
      display: "none",
    });
    $(this).css({
      display: "none",
    });
    $(".arrow-up").css({
      display: "block",
    });
  });
  $(".arrow-up").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: "0px",
      },
      100
    );
  });
  $(".clicked-link").on("click", function () {
    $("html").css({
      overflow: "scroll",
    });
    $(".main-ul-none").css({
      display: "none",
    });
    $(".close-btn-ham").css({
      display: "none",
    });
    $(".arrow-up").css({
      display: "block",
    });
  });
  $(".main-ul .border-li").on("click", function () {
    const link = $(this).find("a");
    if (link.length) {
      window.location = link.attr("href");
    }
  });
});
