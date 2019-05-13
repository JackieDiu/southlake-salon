$(window).on("scroll", function() {
  if ($(window).scrollTop()) {
    $("nav").addClass("white");
  } else {
    $("nav").removeClass("white");
  }
});

$(function() {
  setTimeout(function() {
    $(".text-animation").removeClass("hidden");
  }, 500);
})();
