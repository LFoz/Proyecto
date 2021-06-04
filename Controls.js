//Move
var MoveX=0,MoveY=0;
function Move(v){
    switch(v) {
      case 'MoveYUp':
      if (MoveY==13) {
        alert("No more move");
      }else{
      document.getElementById('OutY').innerHTML=++MoveY;
      }
        break;
      case 'MoveYDown':
      if (MoveY==0) {
        alert("No more move");
      }else{
      document.getElementById('OutY').innerHTML=--MoveY;
      }
        break;
      case 'MoveXLeft':
      if (MoveX==0) {
        alert("No more move");
      }else{
      document.getElementById('OutX').innerHTML=--MoveX;
      }
        break;
      case 'MoveXRight':
      if (MoveX==25) {
        alert("No more move");
      }else{
      document.getElementById('OutX').innerHTML=++MoveX;
      }
        break;
    }
}

//Auto Analysis function
$(document).ready(function () {
  $("#AutoAnalysis").click(function () {
    navigator.getMedia = (navigator.getUserMedia || 
                          navigator.webkitGetUserMedia||
                          navigator.mozGetUserMedia ||
                          navigator.msGetUserMedia);
    navigator.getMedia({video:true}, function(){
      console.log("Prueba");
    }, function () {
      console.log("No encendida");
    });
    do{
      for(var i = 0; i <=12; i++){
        MoveX=MoveX+2
        document.getElementById('OutX').innerHTML=MoveX;
        console.log("Movimiento en X="+MoveX);
      }
      if (MoveX==26) {
        MoveY=MoveY+2;
        document.getElementById('OutY').innerHTML=MoveY;
        console.log("Y="+MoveY);
        for (var i = 0; i <=12; i++) {
        MoveX=MoveX-2;        
        document.getElementById('OutX').innerHTML=MoveX;
        console.log("Movimiento en X="+MoveX);
        }
      }if(MoveX===0&&MoveY<14){
        MoveY=MoveY+2;        
        document.getElementById('OutY').innerHTML=MoveY;
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
      Video2 = document.getElementById("Video2"),
      canvas = document.getElementById("LookPhoto"),
      canvas2 = document.getElementById("LookPhoto2"),
      photo = document.getElementById('photo');
  Video.unavalable = false;
  Video2.unavalable =false;
  canvas.width=canvas2.width=640;
  canvas.height=canvas2.height=480;
  var context = canvas.getContext('2d'),
      context2 = canvas2.getContext('2d')

  $("#StartCamara").click(function () {
    if(Video.unavalable == false){
    navigator.getMedia = ( navigator.getUserMedia || 
                          navigator.webkitGetUserMedia||
                          navigator.mozGetUserMedia ||
                          navigator.msGetUserMedia);
    navigator.getMedia({video: true}, function (stream) { 
    Video.srcObject = stream; //permission granted
    Video2.srcObject= stream;
    Video.play();
    Video2.play();
    Video.unavalable = true;
    }, function () {
    alert("Camera Not Avaiable"); //permission not granted
    });      
  }else{
    alert("The camera is on");
  }
  });

  //Take Photo behavior
  $("#TakePhoto").click(function () {
    if (Video.unavalable == true) {
      $("#CamOff").css("opacity", 0);  //Camera on
      $("#LookPhoto").css("opacity", 1);
      $("#buttonbox").css("opacity", 1);
      context.drawImage(Video, 0, 0, canvas.width, canvas.height);
      context2.drawImage(Video2, 0, 0, canvas2.width, canvas2.height);
      var imageData = context.getImageData( 0, 0, canvas.width, canvas.height);
      pixels = imageData.data;
      numPixels = imageData.width * imageData.height;
      var imageData2 = context2.getImageData( 0, 0, canvas2.width, canvas2.height);
      pixels2 = imageData2.data;
      numPixels2 = imageData2.width * imageData2.height;
      for ( var i = 0; i < numPixels; i++ ) {
      var r = pixels[ i * 4 ],
          g = pixels[ i * 4 + 1 ],
          b = pixels[ i * 4 + 2 ],
          r2=pixels2[ i * 4 ],
          g2=pixels2[ i * 4 + 1 ],
          b2=pixels2[ i * 4 + 2],
          NIR = r2+g2+b2,
          NDVI = (NIR-r)/(NIR+r);
          if (NDVI>0.75) {
          pixels[ i * 4 ] = 0;
          pixels[ i * 4 + 1 ] = 255*NDVI;
          pixels[ i * 4 + 2 ] = 0;            
        }else if (NDVI<=0.75 && NDVI>0.25) {
          pixels[ i * 4 ] = 255*(1-NDVI);
          pixels[ i * 4 + 1 ] = 255*NDVI;
          pixels[ i * 4 + 2 ] = 0;
        }else {
          pixels[ i * 4 ] = 255*(1-NDVI);
          pixels[ i * 4 + 1 ] = 0;
          pixels[ i * 4 + 2 ] = 0;  
        }

      }context.putImageData(imageData, 0, 0 );
      // var data = canvas.toDataURL();
      // var TimeBefore = Date.now();
      // var Today = new Date (TimeBefore);
      // var name = Today.toLocaleDateString();
      // var link =document.createElement('a');
      // link.href= data;
      // link.download=name + "Analysis_Photo"
      // document.body.appendChild(link);
      // link.click();
      // document.body.removeChild(link); 
    }else{
      $("#CamOff").css("opacity", 1);  //Camera off
      $("#LookPhoto").css("opacity", 0);
      $("#buttonbox").css("opacity", 0);
    }
  });

  //Stop Camera
  $("#StopCamara").click(function () {
    if (Video.unavalable == true) {
      Video.srcObject.getTracks()[0].stop();
      Video.unavalable = false;
      Video2.srcObject.getTracks()[0].stop();
      Video2.unavalable = false;   // Camera on
    }else{
      alert("Camera Is Off");//Camera off
    }
  });
});

