var shape;

function setup() {
  createCanvas(500, 700);
  noStroke();


  shape = {
    x: width / 2,
    y: height / 2,
    width: 30,
    height: 50
  }

}

function draw() {
  background(100);

  // lerp
  shape.x = lerp(shape.x, mouseX, 0.1);
  shape.y = lerp(shape.y, mouseY, 0.1);

  // draw triangle
  push();
  fill(255, 0, 0);
  translate(shape.x, shape.y);
  var angle = atan2(mouseY - shape.y, mouseX - shape.x);
  rotate(angle + PI / 2);
  // I will explain why I add "+ PI/2".
  triangle(
    0 - shape.width / 2, 0 + shape.height,
    0 + shape.width / 2, 0 + shape.height,
    0, 0
  );
  pop();
  
  // draw line
  push();
  translate(shape.x, shape.y);
  var angle = atan2(mouseY - shape.y, mouseX - shape.x);
  rotate(angle); // see the difference
  stroke(255,255,0);
  line(0,0,-100,0);
  pop();


}