var posX;
var posY;

function setup() {
  createCanvas(600,600);
  noStroke();
  posX = 0;
  posY = 0;
}

function draw() {
  background(100);
  //  lerp(currentPos, targetPos, 0.0~1.0);
  // lerp(0, 10, 0.1); // 1
  // lerp(0, 10, 0.5); // 5
  //print( lerp(0, 20, 0.2) );
  
  posX = lerp(posX, mouseX, 0.05);
  posY = lerp(posY, mouseY, 0.05);
  
  fill(255,0,0);
  ellipse(posX, posY, 50, 50);
}