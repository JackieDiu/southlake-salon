$(function() {
  setTimeout(function() {
    $(".text-animation").removeClass("hidden");
  }, 500);
})();

$(li > a).click(function() {
  $(this)
    .addClass("active")
    .siblings()
    .removeClass("active");
});
