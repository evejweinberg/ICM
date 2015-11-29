var flysmall;
function setup() {
  createCanvas(800, 800);
  flysmall = createImg('assets/flysmall.png')

}

function draw() {

  background(0);
var rad = 200;
var rate=0;
  var circl = map(millis(), 0, 440, 0, PI / 3);//i'll figure this out later
  var cic = map(millis(), 0, 440, 0, PI / 3 - HALF_PI);//i'll figure this out later
  // print(circl);
  var circy = sin(circl) * rad + width / 2;
var circx= cos(circl) * rad + width / 2;
  fill(255, 0, 0);
  flysmall.position(circx,circy).size(100,100);
  // ellipse(circx, circy, 30, 30);
  // fill(255, 0, 0);
  // ellipse(cos(cic) * 20 + width / 2, sin(circl) * 20 + width / 2, 70, 70);
}