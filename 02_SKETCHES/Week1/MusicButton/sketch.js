var isOverPlayButton;
 var On = true;
 
 function preload(){
  SoundBG = loadSound('Assets/Kelly.mp3');
  buttonGraphic = loadImage("Assets/button_01.gif");
  buttonGraphicAlt = loadImage("Assets/buttonstill.png");
}


function setup() {
   SoundBG.loop();
   createCanvas(screen.width, screen.height);
  
}

function draw() {
  background(0);
  
  
  if (On === true){
  SoundBG.isPlaying();
  }
  
  Button(windowWidth*.95, windowHeight*.95);
  var distanceR = dist(mouseX, mouseY, windowWidth*.95, windowHeight*.95);
  print(distanceR);
  //if the disctance less than the circle's radius
  if (distanceR < buttonradius) {
    isOverPlayButton = true;
     cursor(HAND);
     print("mousewasPressed - turn music on")

  } else {
    isOverPlayButton = false;
    cursor(ARROW);
  }
  
}
  
  function mousePressed() {
  if (isOverPlayButton === true) {
    
    On = !On;
    // SoundBG.play();
    // SoundBG.pause();
    print("mousewasPressed - turn music off")
    } 
    // if (isOverPlayButton === true &&  On === false) {
    // // SoundBG.pause();
    // // SoundBG.play();
    // // SoundBG.isPlaying() = true;
    // On = true;
    // print("mousewasPressed - turn music on")
    // }
}


function Button(xPos, yPos){
  this.buttonradius = 20;
  fill(255,0,0);
  ellipse(xPos,yPos,buttonradius, buttonradius);
}
  
