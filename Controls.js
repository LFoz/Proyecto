//Move
var MoveX=0,MoveY=0;
var Shot=1;
function Move(v){
    switch(v) {
      case 'MoveXUp':
        console.log(++MoveX);
        break;
      case 'MoveXDown':
        console.log(--MoveX);
        break;
      case 'MoveYLeft':
        console.log(--MoveY);
        break;
      case 'MoveYRight':
        console.log(++MoveY);
        break;
    }
}

//Photo
function TakePhoto(){
	alert("Photo Taken");
	console.log(Shot);
}

//load funtion
$(window).on("load",function () {
  $(".container1").css("opacity",1);
  $("#precarga").css("display", "none");
  $("#loadbox").css("height", 0);
  });

//nav collapse funtion
$(function () {
  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#navbarToggle").removeClass('navbar-toggler').addClass('navbar-toggler collapsed');
      $("#navbarSupportedContent").collapse('hide');
    }
  });
});

//nav move
$(document).ready(function () {
  $(window).on('scroll', function () {
   if($(window).scrollTop() > 30){
      $("#navarnavigation").removeClass('sticky-top').addClass('fixed-top');
      $("body").css("margin-top",60);
   }else{
      $("#navarnavigation").removeClass('fixed-top').addClass('sticky-top');
      $("body").css("margin-top",0);
   }
  });
  
});
