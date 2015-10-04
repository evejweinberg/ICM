function setup() {
  createCanvas(800, 800);

}

function draw() {

  background(0);

  var circl = map(millis(), 0, 440, 0, PI / 3);//i'll figure this out later
  var cic = map(millis(), 0, 440, 0, PI / 3 - HALF_PI);//i'll figure this out later
  print(circl);

  fill(255, 0, 0);
  ellipse(cos(circl) * 30 + width / 2, sin(circl) * 30 + width / 2, 30, 30);
  // fill(255, 0, 0);
  // ellipse(cos(cic) * 20 + width / 2, sin(circl) * 20 + width / 2, 70, 70);
}