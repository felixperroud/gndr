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
