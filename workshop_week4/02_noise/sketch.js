var posX = 0;
var posY = 0;

function setup() {
  createCanvas(800, 600);
  //angleMode(DEGREES);
  noStroke();
}

function draw() {
  background(50, 10);


  // random
  posY = 200 + random(-1, 1) * 100;
  fill(255, 0, 0);
  ellipse(posX, posY, 10, 10);


  // noise
  posY = 400 + noise(posX*0.05) * 100;
  fill(255, 255, 0);
  ellipse(posX, posY, 10, 10);


  // update posX
  posX = posX + 1;
  if (posX > width) {
    posX = 0;
  }
}