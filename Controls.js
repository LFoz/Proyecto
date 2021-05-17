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

//Camera

$(document).ready(function() {
  //Start Camera
  Video.unavalable = false;
  $("#StartCamara").click(function () {
    if(Video.unavalable == false){
    navigator.getMedia = ( navigator.getUserMedia || 
                          navigator.webkitGetUserMedia||
                          navigator.mozGetUserMedia ||
                          navigator.msGetUserMedia);
    navigator.getMedia({video: true}, function (stream) { 
    var Video = document.getElementById("Video");//permission granted
    Video.srcObject = stream;
    Video.play();
    Video.unavalable = true;
    }, function () {
    alert("Camera Not Avaiable"); //permission not granted
    });      
  }else{
    alert("The camera is on");
  }
  });
  //Take Photo
  $("#TakePhoto").click(function () {
    if (Video.unavalable == true) {
      $("#CamOff").css("display", "none");  //Camera on
      $("#LookPhoto").css("display", "true");
      var Phot;
      Phot = document.getElementById("LookPhoto");
      var context = Phot.getContext('2d');
        context.drawImage(Video, 0, 0, 640, 480);
    }else{
      $("#CamOff").css("display", "true");  //Camera off
      $("#LookPhoto").css("display", "none");
    }
  });
  //Stop Camera
  $("#StopCamara").click(function () {
    if (Video.unavalable == true) {
      Video.srcObject.getTracks()[0].stop();
      Video.unavalable = false;   // Camera on
    }else{
      alert("Camera Is Off"); //Camera off
    }
  });
});
