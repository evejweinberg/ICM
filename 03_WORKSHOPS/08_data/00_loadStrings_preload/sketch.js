var lines;

function preload() {
  lines = loadStrings("lines.txt");
}

function setup() {
  createCanvas(600, 700);
  //lines = loadStrings("lines.txt"); // doesn't load in time
  textSize(20);
  fill(0);
  noLoop();
}

function draw() {
  background(0, 150, 250);
  for (var i=0; i<lines.length; i++) {
    fill(230,0,0);
    text(lines[i], 5, 20*i+20);
  }
}





