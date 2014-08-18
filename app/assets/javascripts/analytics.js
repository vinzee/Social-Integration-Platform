$(document).ready(function(){
  $(".tabs").width($(".main").width() + 25);
  $(".profile").width($(".brdr").width());

  $("#scroll_to_top").css("margin-top",$(window).height() - 100 + "px");

  $('a,#scroll_to_top').click(function(){
    $('html, body').animate({scrollTop:0}, 'fast');
  });

});

$(window).resize(function() {
  $(".tabs").width($(".main").width() + 25);
  $(".profile").width($(".brdr").width());
  $("#scroll_to_top").css("margin-top",$(window).height() - 100 + "px");
});