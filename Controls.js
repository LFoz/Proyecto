var MoveX=0,MoveY=0;
var Shot=1;
//Move
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
//Photo alert
function TakePhoto(){
	alert("Photo Taken");
}