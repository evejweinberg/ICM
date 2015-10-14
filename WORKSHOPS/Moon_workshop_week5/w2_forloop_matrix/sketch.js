

function setup() {
  createCanvas(600, 600);
  background(50);
  noStroke();
  fill(255);
  
  var max = width; 
  
  var size = 50;
  var gap = 10;
  var startX = (size+gap)/2;
  var startY = (size+gap)/2;
  var howManyTimes = max/(size+gap);
  

  for (var y = 0; y < howManyTimes; y++) {
    for (var x = 0; x < howManyTimes; x++) {
      ellipse(startX + x * (size + gap), startY + y * (size + gap),
        size, size);
    }
  }


}

function draw() {

}