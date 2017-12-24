$(document).ready(function() {

  const $hovershadow = $('.hover-shadow');
  $hovershadow.hover(
     function(){
       $(this).addClass("mdl-shadow--4dp");
     },
     function(){
       $(this).removeClass("mdl-shadow--4dp");
     }
   );
});

$(function(){

$("#top").click(function(){
    jQuery("html,body").animate({
    scrollTop:0
    },1000);
});
$(window).scroll(function() {
   if ( $(this).scrollTop() > 85){
      $('#top').fadeIn("fast");
   } else {
      $('#top').stop().fadeOut("fast");
   }
});
});

$( document ).ready(function() {

   $( ".cross" ).hide();
   $( ".menu" ).hide();
   $( ".hamburger" ).click(function() {
     $( ".menu" ).slideToggle( "slow", function() {
     $( ".hamburger" ).hide();
     $( ".cross" ).show();
    });
});

$( ".cross" ).click(function() {
    $( ".menu" ).slideToggle( "slow", function() {
      $( ".cross" ).hide();
      $( ".hamburger" ).show();
    });
});

});
