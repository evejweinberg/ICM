    
var unit = 40;
var Fullcount;
var dots = [];

function setup() {
  createCanvas(720, 360);
  noStroke();
  var wideCount = width / unit; //number of horizontal dots is total width/unit
  var highCount = height / unit; //number of vertical dots is total height/unit
  Fullcount = wideCount * highCount; //Fullcount is combo of both
  var index = 0; //the first index is zero, so dots0, dots1, dots2. . .
  for (var y = 0; y < highCount; y++) { //run for loop for height
    for (var x = 0; x < wideCount; x++) { //run for loop for width
      dots[index++] = new Module(x*unit, y*unit, unit/2, unit/2, unit); //make a list of dots and they will each be a new Module
    }
  }
}

function draw() {
  background(0);
  for (var i = 0; i < Fullcount; i++) {
    dots[i].draw();
  }
}


function Module(_xOff, _yOff, _x, _y, _unit) {
  this.xOff = _xOff; //offst?
  this.yOff = _yOff;
  this.x = _x;
  this.y = _y;
  this.unit = _unit;

}


// Custom method for drawing the object
Module.prototype.draw = function() {
  fill(color(3,170,204)); //teal
  ellipse(this.xOff + this.x, this.yOff + this.y, 6, 6); //x is xOff + xvalue, y = yOff + y value, and width&height is 6
}