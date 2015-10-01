var img;
var mySound;
var circles = [];



function Circle(_x, _y, _xspeed, _yspeed, _dia) {
  this.x = _x;
  this.y = _y;
  this.xspeed = _xspeed;
  this.yspeed = _yspeed;
  this.dia = _dia;
  this.diaSpeed = random(0.2, 0.8);
  this.color = color(255, random(50, 255));

  this.move = function() {
    this.x += this.xspeed / 2 + sin(frameCount * 0.05) * 5;
    this.y += this.yspeed / 2 + cos(frameCount * 0.01) * 22;
    this.dia += this.diaSpeed;
  }

  this.checkSize = function() {
    if (this.dia > 5) this.dia = 1;
  }

  this.checkBoundary = function() {
    if (this.y > height) {
      this.y = 0;
    }
    if (this.y < 0) {
      this.y = height;
    }
    if (this.x < 0) {
      this.x = width;
    }
    if (this.x > width) {
      this.x = 0;
    }
  }
  this.changePosition = function(_x, _y) {
    this.x = _x;
    this.y = _y;
  }
  this.draw = function() {

    noStroke;
    fill(this.color);
    ellipse(this.x, this.y, this.dia, this.dia);
  }
}



//Lines



var lineRun = [];
var stars = [];
var ursaRun = [];
var thinLineRun = [];

function setup() {
  noStroke;
background(0);

  createCanvas(900, 700);
}


function draw() {


  noStroke;
  image(img, -5, -10);

  
for (var e = 0; e < circles.length; e++) {
    circles[e].move();
    circles[e].checkSize();
    circles[e].checkBoundary();
    circles[e].draw();
  }

}

function mouseDragged() {
  for (var z = 0; z < 12; z++) {
    noStroke;
    circles.push(new Circle(width / 2, height / 2, random(-15, -1), random(-5, 2), random(3, 7)));
  }
}