// This example shows how values for sin() cycle from −1 to 1 as
// the angle increases. With the map() function, the sinval variable
// is converted from this range to values from 0 to 255. This new
// value is used to set the background color of the canvas:


var angle = 0.0;
var offset = 60;
var scalar = 40;
var speed = 0.05;

function setup() {
createCanvas(240, 120);
}

function draw() {

  background(0);
var y1 = offset + sin(angle) * scalar;
var y2 = offset + sin(angle + 0.4) * scalar;
var y3 = offset + sin(angle + 0.8) * scalar;
ellipse( 80, y1, 40, 40);
ellipse(120, y2, 40, 40);
ellipse(160, y3, 40, 40);
angle += speed;
}