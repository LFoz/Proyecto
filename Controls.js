//Move
var MoveX=0,MoveY=0;
var Shot=1;
function Move(v){
    switch(v) {
      case 'MoveYUp':
      if (MoveY==13) {
        alert("No more move");
      }else{
        console.log(++MoveY);
      }
        break;
      case 'MoveYDown':
      if (MoveY==0) {
        alert("No more move");
      }else{
        console.log(--MoveY);
      }
        break;
      case 'MoveXLeft':
      if (MoveX==0) {
        alert("No more move");
      }else{
        console.log(--MoveX);
      }
        break;
      case 'MoveXRight':
      if (MoveX==25) {
        alert("No more move");
      }else{
        console.log(++MoveX);
      }
        break;
    }
}

//Auto Analysis function
$(document).ready(function () {
  $("#AutoAnalysis").click(function () {
    do{
      for(var i = 0; i <=12; i++){
        MoveX=MoveX+2         
        console.log("Movimiento en X="+MoveX);
      }
      if (MoveX==26) {
        MoveY=MoveY+2;        
        console.log("Y="+MoveY);
        for (var i = 0; i <=12; i++) {
        MoveX=MoveX-2;        
        console.log("Movimiento en X="+MoveX);
        }
      }if(MoveX===0&&MoveY<14){
        MoveY=MoveY+2;        
        console.log("Y="+MoveY);
      }
      }while(MoveY<14);
      if (MoveY==14) {
        alert("Start to Analysis");
        MoveX=0;
        MoveY=0;
        console.log("Movimiento en X="+MoveX);
        console.log("Y="+MoveY);
      }
  });
});

$(document).ready(function () {
  $("#AutoAnalysis1").click(function () {
      do{
      for(var i = 0; i <=12; i++){
        MoveX=MoveX+2         
        console.log("Movimiento en X="+MoveX);
      }
      if (MoveX==26) {
        MoveY=MoveY+2;        
        console.log("Y="+MoveY);
        for (var i = 0; i <=12; i++) {
        MoveX=MoveX-2;        
        console.log("Movimiento en X="+MoveX);
        }
      }if(MoveX===0&&MoveY<14){
        MoveY=MoveY+2;        
        console.log("Y="+MoveY);
      }
      }while(MoveY<14);
      if (MoveY==14) {
        alert("Start to Analysis");
        MoveX=0;
        MoveY=0;
        console.log("Movimiento en X="+MoveX);
        console.log("Y="+MoveY);
      }
  });
});

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
  var Video = document.getElementById("Video"),
  canvas = document.getElementById("LookPhoto"),
  photo = document.getElementById('photo');
  Video.unavalable = false;

  $("#StartCamara").click(function () {
    if(Video.unavalable == false){
    navigator.getMedia = ( navigator.getUserMedia || 
                          navigator.webkitGetUserMedia||
                          navigator.mozGetUserMedia ||
                          navigator.msGetUserMedia);
    navigator.getMedia({video: true}, function (stream) { 
    Video.srcObject = stream; //permission granted
    Video.play();
    Video.unavalable = true;
    }, function () {
    alert("Camera Not Avaiable"); //permission not granted
    });      
  }else{
    alert("The camera is on");
  }
  });

  //Take Photo function "behavior"
  $("#TakePhoto").click(function () {
    if (Video.unavalable == true) {
      $("#CamOff").css("opacity", 0);  //Camera on
      $("#LookPhoto").css("opacity", 1);
      $("#buttonbox").css("opacity", 1);      
      var Phot;
      Phot = document.getElementById("LookPhoto");
      var context = Phot.getContext('2d');
      context.drawImage(Video, 0, 0, 640, 480);
    }else{
      $("#CamOff").css("opacity", 1);  //Camera off
      $("#LookPhoto").css("opacity", 0);
      $("#buttonbox").css("opacity", 0);
    }
  });

  //Take and save photo
  $("#Analysis").click(function () {
    var data = canvas.toDataURL();
    var TimeBefore = Date.now();
    var Today = new Date (TimeBefore);
    var name = Today.toLocaleDateString();
    var link =document.createElement('a');
    link.href= data;
    link.download=name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    console.log("HI"); 
  });

  //Stop Camera
  $("#StopCamara").click(function () {
    if (Video.unavalable == true) {
      Video.srcObject.getTracks()[0].stop();
      Video.unavalable = false;   // Camera on
    }else{
      alert("Camera Is Off");//Camera off
    }
  });
});
