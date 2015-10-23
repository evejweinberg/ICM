function setup() {
  createCanvas(400, 400);
  background(50);
  
  var howManyTimes = 10;

  // left
  fill(255);
  var posX = 100;
  var posY; // we will change this value in forLoop
  
  for (var i = 0; i < howManyTimes; i++) {
    textSize(10+i);
    var posY = 80 + i * 25;
    text(i, posX, posY);
  }
  
  // right
  fill(255,255,0);
  var posX = 260;
  var posY; // we will change this value in forLoop
  
  for (var i = 0; i < howManyTimes*25; i+=25) {
    textSize(10+i/25);
    posY = 80 + i;
    text(i, posX, posY);
  }
}

function draw() {

}