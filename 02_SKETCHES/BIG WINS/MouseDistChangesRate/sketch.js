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
  createCanvas(400, 400);
  // noCanvas();
  gd = new getmousedist();
  song.loop();
  distancetomap = 1;
  changethismuch = 1;



}

function draw() {
  background(200);
  gd.display();

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

    if (millis() - this.lastcheck > 1000) {
      console.log('time:  ' + millis()/1000);


      distancetomap = (this.currentpos - this.previouspos);
      changethismuch = map(distancetomap, -30, 40, -1.5, 2);
      this.previouspos = this.currentpos;
      console.log('distancetomap:  ' + distancetomap);
      console.log('changethismuch:  ' + changethismuch);
      this.lastcheck = millis();
    }
  }
}