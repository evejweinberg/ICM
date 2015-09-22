var lastTime = 0;
var xLocation = 50;
var mode = 0;

function setup() {
  createCanvas(600, 600);

}

function draw() {
  
  if (mode >2){
    mode =0;
  }
  
  if (millis() - lastTime > 1000) { //one second
    mode = mode + 1;
    xLocation = xLocation + 10;
    lastTime = millis(); //6sec
  }
  
  if (mode == 0) {
    print("Mode" + mode);
    rect(0,xLocation,20,20);

  } else if (mode == 1){
    ellipse(xLocation, 50, 30, 30);
    print("Mode" + mode);
  }
  
  
    

}