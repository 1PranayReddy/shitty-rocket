function gameOver(){
  document.querySelector("h2").style.display="block";
}
function gameRun(){
  if (up>=100 && up<=240){
    if(left>=70 && left<=165){
      gameOver();
    }
  }
  else if (up>=280 && up<=446) {
    if (left>=280 && left<=405){
      gameOver();
    }
  }
  else if (up>=455 && up<=555){
    if(left>=100 && left<=230){
      gameOver();
    }
  }
}
var x = document.querySelector(".rocket");
var up = 60;
var left = 225;
document.addEventListener("keydown",function(event){

  gameRun();

  switch (event.key) {
    case "w":
      x.style.bottom = up+"px";
      up+=10;
      if (up>=600){
        up=5;
      }
      console.log(up);
      break;
    case "s":
      x.style.bottom = (up-8)+"px";
      up-=8;
      if (up<=0){
        up=600;
      }
      break;
    case "d":
      x.style.left = (left+5)+"px";
      left+=5;
      if (left>=450){
        left=10;
      }
      console.log(left)
      break;
    case "a":
      x.style.left = (left-5)+"px";
      left-=5;
      if (left<0){
        left=450;
      }
      break;

    case "e":
      x.style.bottom = up+"px";
      up+=5;
      if (up>=600){
        up=5;
      }
      x.style.left = (left+5)+"px";
      left+=5;
      if (left>=450){
        left=10;
      }
    break;
    case "q":
      x.style.bottom = up+"px";
      up+=5;
      if (up>=600){
        up=5;
      }
      x.style.left = (left-5)+"px";
      left-=5;
      if (left<0){
        left=450;
      }
      break;
    default:
      console.log(event.key)

  }
})
