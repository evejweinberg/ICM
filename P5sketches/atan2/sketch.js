function setup() {
  createCanvas(900, 800);
}

function draw() {
  background(0);
  fill(255);

  // var length = 100;
  // triangle(mouseX-length/2, mouseY,
  //   mouseX+length/2, mouseY,
  //   mouseX, mouseY - sqrt(3)/2*length
  // );


  var posX = mouseX;
  var posY = mouseY;
  push();
  stroke(255);
  translate(width / 2, height / 2);
  var a = atan2(posY - height / 2, posX - width / 2);
  rotate(a);
  for (var i = 0; i < 10; i++) {
    var Centerposition = createVector(random(0,200), random(0,200)); //the centerpoint can be anywhere
    var triWidth = 6;

    triangle(Centerposition.x, Centerposition.y - 30, Centerposition.x + triWidth, Centerposition.y + triWidth, Centerposition.x - triWidth, Centerposition.y + triWidth);

    rect(100 * i, 100, 40, i * 100);
    line(i, i * 20, i * 100, i);
    line(i, i * 10, 100, i * 10);
  }
  pop();
}