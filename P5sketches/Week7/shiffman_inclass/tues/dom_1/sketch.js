var x = 0;
var canvas;

var canvasX = 0;

function setup() {
  canvas = createCanvas(100, 100);
}

function draw() {
  background(0);
  strokeWeight(4);
  stroke(255);
  line(x, 0, x, height);
  x = x + 3;
  if (x > width) {
    x = 0;
  }
  canvas.position(canvasX, 50);
  canvasX = canvasX + 1;
}


// function windowResized() {
//   canvas.position(windowWidth / 2 - 50, windowHeight / 2 - 50);
// }