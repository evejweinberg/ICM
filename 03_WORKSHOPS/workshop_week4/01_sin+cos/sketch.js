var posX = 0;
var posY = 0;

function setup() {
  createCanvas(800, 500);
  angleMode(DEGREES);
  noStroke();
}

function draw() {
  background(50, 10);
  
  // sin
  posY = height/2 + sin(posX) * 100;
  fill(255,0,0);
  ellipse(posX, posY, 10, 10);
  
  // cos
  posY = height/2 + cos(posX) * 100;
  fill(100,0,255);
  ellipse(posX, posY, 10, 10);
  
  // update posX
  posX = posX + 1;
  if (posX > width) {
    posX = 0;
  }
}