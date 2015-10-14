function setup() {
  createCanvas(600, 600);
  background(50);
  noFill();
  stroke(255);


  var howManyTimes = 5;
  var rectSize = 70;
  var gap = 10;

  for (var y = 0; y < howManyTimes; y++) {
    for (var x = 0; x < howManyTimes; x++) {
      rect(100 + (rectSize + gap) * x, 100 + (rectSize + gap) * y,
        rectSize, rectSize);
    }
  }

  // red dot - this will continue to the next sketch.
  noStroke();
  fill(255, 0, 0);
  ellipse(100, 100, 10, 10);
}

function draw() {

}