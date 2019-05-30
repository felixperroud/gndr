$(window).on("load", function() {
  $(".loader").fadeOut("slow", function() {
    $(this).remove();
  });
});

$(document).ready(function() {
  $(".dropdown").hover(
    function() {
      $(".dropdown .menu").show();
    },
    function() {
      $(".dropdown .menu").hide();
    }
  );
});
