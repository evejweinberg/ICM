function setup() {
  createCanvas(600, 600);
}


function draw() {
  background(50);
  noFill();
  stroke(255);
  
  
  var howManyTimes = 5;
  var rectSize = 70;
  var gap = 10;

  var startX = -( (rectSize + gap) * 2 + rectSize/2 );
  var startY = -( (rectSize + gap) * 2 + rectSize/2 );

  push();
  translate(width / 2, height / 2);
  rotate(frameCount*0.01);
  for (var y = 0; y < howManyTimes; y++) {
    for (var x = 0; x < howManyTimes; x++) {
      rect(startX + (rectSize + gap) * x, startY + (rectSize + gap) * y,
        rectSize, rectSize);
    }
  }

  // red dot - the origin
  noStroke();
  fill(255, 0, 0);
  ellipse(0, 0, 10, 10);
  pop();

}