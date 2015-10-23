var posX;
var posY;

function setup() {
  createCanvas(600, 600);
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


  push();
  fill(255, 0, 0);
  translate(posX, posY);
  var angle = atan2(mouseY - posY, mouseX - posX);
  rotate(angle + PI / 2);

  triangle(
    0, 0, -15, 50,
    15, 50
  );
  //stroke(255,255,0);
  //line(0,0, -100,0);

  pop();

  //ellipse(posX, posY, 50, 50);


  push();

  translate(posX, posY);
  var angle = atan2(mouseY - posY, mouseX - posX);
  rotate(angle);
  stroke(255, 255, 0);
  line(0, 0, -100, 0);

  pop();



  //push();
  //translate(shapeOriginX, shapeOriginY);
  //var angle = atan2(destinationY - shapeOriginY,
  //destinationX - shapeOriginX);
  //rotate(angle);
  
  // draw some shapes!

  // pop();












}