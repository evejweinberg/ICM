var angle = 0.0;
var offset = 60;
var scalar = 40;
var speed = 0.005;

function setup() {
  createCanvas(240, 120);
}

function draw() {

  background(0);
  var y1 = offset + sin(angle) * scalar;
  var y2 = offset + sin(angle + .04) * scalar * 1.5;
  var y3 = offset + sin(angle + .08) * scalar * 2;
  ellipse(80, y1, sin(40 + speed), 20);
  ellipse(120, y2, 40, 40);
  ellipse(160, y3, 40, 40);
  constrain(y2, 30,50); //why doesn't this work
  angle += speed;
  // print(angle + "||" + speed)
  // print(sin(angle))
  print(floor(y1) + "||"+floor(y2) + "||"+
    y3);
}