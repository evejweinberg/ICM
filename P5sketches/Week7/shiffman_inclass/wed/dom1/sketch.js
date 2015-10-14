var x = 0;
var px = 0;
var canvas;
var par;

function setup() {
  canvas = createCanvas(200, 200);
  par = createP("This is some text.");
}


function draw() {
  background(0);
  stroke(255);
  line(x, 0, x, height);
  x = x + 3;
  if (x > width) {
    x = 0;
  }
}