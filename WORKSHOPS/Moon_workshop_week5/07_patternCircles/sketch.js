function setup() {
  createCanvas(600, 600);
}


function draw() {
  background(50);
  fill(255);

  var circleSize = 60;

  var howManyTimes = width / circleSize;

  for (var y = 0; y < howManyTimes; y++) {
    for (var x = 0; x < howManyTimes; x++) {

      var posX = circleSize / 2 + circleSize * x;
      var posY = circleSize / 2 + circleSize * y;
      var distanceFromCenter = dist(width / 2, height / 2, posX, posY);
      // feel the differences between two newCircleSizes
      var newCircleSize = circleSize * (distanceFromCenter / width);
      //var newCircleSize = circleSize * (width - distanceFromCenter) / width;
      //
      ellipse(posX, posY, newCircleSize, newCircleSize);

    }
  }
}