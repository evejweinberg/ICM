function setup() {
  createCanvas(600, 600);
  background(50);
  noFill();
  stroke(255);


  var howManyTimes = 5;
  var rectSize = 80;

  // #1
  for (var y = 0; y < howManyTimes; y++) {
    for (var x = 0; x < howManyTimes; x++) {
      rect(100 + rectSize * x, 100 + rectSize * y,
        rectSize, rectSize);
    }
  }

  //#2
  for (var y = 0; y < howManyTimes * rectSize; y += rectSize) {
    for (var x = 0; x < howManyTimes * rectSize; x += rectSize) {
      rect(100 + x, 100 + y,
        rectSize, rectSize);
    }
  }
  
  // the two method above are identical.

}

function draw() {

}