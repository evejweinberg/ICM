var x, y, px, py;
// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 20-3: Manipulating sound 

// A sound file object
var song;
var gd;
var distancetomap;
var changethismuch;
var speedSlider;
var volumeSlider;
var globalpos1check;


function preload() {
  song = loadSound("story1.m4a");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // noCanvas();
  gd = new getmousedist();
  song.loop();
  distancetomap = 1;
  changethismuch = 1;



}

function draw() {
  background(200);
  gd.display();
  line(100, 100, 700, 100);

  song.rate(changethismuch);
  fill(0);
  // ellipse(ratetochange * 10, 20, 20, 20)
  text(changethismuch, 20, 20);
  text(distancetomap, 40, 40);
  text(gd.currentpos, 20, 80);
  text(gd.previouspos, 20, 120);
  // console.log(changethismuch + '||', ratetochange);
}

function getmousedist() {
  this.currentpos = mouseX;
  this.previouspos = mouseX;
  this.lastcheck = 0;

  this.display = function() {
    this.currentpos = mouseX;
    // this.previouspos = this.previouspos;

    if (millis() - this.lastcheck > 100) {
      distancetomap = (this.currentpos - this.previouspos);
      changethismuch = map(distancetomap, -5, 7, -.4, 1.2);
      this.previouspos = this.currentpos;
      console.log('distancetomap:  ' + distancetomap);
      console.log('changethismuch:  ' + changethismuch);
      this.lastcheck = millis();
    }
  }
}


function touched() {

  x = mouseX || touchX;
  y = mouseY || touchY;
  px = pmouseX || ptouchX;
  py = pmouseY || ptouchY;

}