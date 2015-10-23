//GLOBAL!!!!!
var interview1;
var speedSlider;
var volumeSlider;
var train1, train2, train3;

function preload() {
  interview1 = loadSound("assets/interview1_trimmed.m4a");  
}////PRELOAD ENDS

function setup() {
  var canvas = createCanvas(windowWidth,windowHeight);
  canvas.position(0,0);

  // Loop the sound forever
  // (well, at least until stop() is called)
  // interview1.loop();

  speedSlider = createSlider(0.5, 4, 1, 0.1);
  speedSlider.parent('rate');
  volumeSlider = createSlider(0, 1, 0.5, 0.01);
  volumeSlider.parent('volume');
  train1 = new TrainLines(0, 150, width,20);

}////SETUP ENDS////////

function draw() {
  // background(200);
clear();
  interview1.amp(volumeSlider.value());
  interview1.rate(speedSlider.value());
  train1.display(mouseX, mouseY);
  var time = interview1.currentTime();
  fill(255,0,0);
  noStroke();
  textSize(40)
  text(time, 100,100)
}////DRAW ENDS/////////

function mousePressed() {
  // If the user clicks on the doorbell, play the sound!
  if (train1.contains(mouseX, mouseY)) {
    interview1.play();
  } 
  // else{
  //       interview1.pause();

  // }
}




function TrainLines(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

  // change this to something more sophisticated
  this.contains = function(mx, my) {
    if (dist(mx, my, this.x, this.y) < this.h) {
      return true;
    } else {
      return false;
    }
  }

  // display a state change
  this.display = function(mx, my) {
    if (this.contains(mx, my)) {
      fill(100);
    } else {
      fill(175);
    }
    stroke(0);
    strokeWeight(10);
    noFill();
    rect(this.x,this.y,this.h,this.h)
  bezier(300, 30, 300, 300, 100, 500, 100, 700);
  }
}

