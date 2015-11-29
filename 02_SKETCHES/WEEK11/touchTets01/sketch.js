var x,y,px,py;
function setup() {
  createCanvas(windowWidth, windowHeight);
  // touchX = 200;
  // touchY=200;
  background(247, 209, 66);

}

function draw() {
  touched();
  strokeWeight(10)
  noStroke();


  fill(97, 248, 122);
  ellipse(x, y, 100, 100);
  fill(247, 209, 66);
  ellipse(px + random(100), py, 40, 40);
  fill(236, 115, 105);
  ellipse(px + random(100), py, 100, 100);

}

function touched() {

 x = mouseX || touchX;
  y = mouseY || touchY;
  px = pmouseX || ptouchX;
  py = pmouseY || ptouchY;

}

function changeBG() {
  strokeWeight(10)
  noStroke();

  var x = mouseX || touchX;
  var y = mouseY || touchY;
  var px = pmouseX || ptouchX;
  var py = pmouseY || ptouchY;
  fill(97, 248, 122);
  ellipse(x, y, 100, 100);
  fill(247, 209, 66);
  ellipse(px + random(100), py, 40, 40);
  fill(236, 115, 105);
  ellipse(px + random(100), py, 100, 100);
}