var  blipwidth = 5;
var blipheight = [];
var total = 20;

function setup() {
  for (var i = 0; i < total; i++) {
  blipheight[i] = int(random(5, 15)); //randomly choose a starting X point
  }
  
}

function draw() {
  createCanvas(500,500);
  background(0);
  fill(255);
  noStroke();
  for (var j = 0; j < total; j++) {
    rect(j * 10, 10, blipwidth, blipheight[j]); //x,y,w,h
  }
  
  print(blipheight);
  
}

