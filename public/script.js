$(document).ready(function() {
  $("ul li a").click(function() {
    $("li a").removeClass("active");
    $(this).addClass("active");
  });
});

$(function() {
  setTimeout(function() {
    $(".text-animation").removeClass("hidden");
  }, 500);
})();
