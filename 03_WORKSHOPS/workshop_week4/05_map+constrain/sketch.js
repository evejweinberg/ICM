var posX;
var posY;

var brightness;

function setup() {
  createCanvas(600,600);
  noStroke();
}

function draw() {
  background(100);
  
  // constrain()
  posX = constrain(mouseX, 100,500);
  posY = constrain(mouseY, 200,400);
  
  // map() to color
  brightness = map(mouseX, 0, width, 0, 255);
  
  // circle
  fill(255,0,0);
  ellipse(mouseX, mouseY, 20, 20);
  
  // constrained circle with mapped color
  fill(brightness);
  ellipse(posX, posY, 50, 50);
  
  // text
  fill(255);
  text("X: " + mouseX, 10,20);
  text("Y: " + mouseY, 10,40);
}