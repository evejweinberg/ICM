var x = 0;
var col;
var par;
var button;
var canvas;

var slider;
var sw = 1;

function setup() {

  canvas = createCanvas(100, 100);
  canvas.mousePressed(resetColor); //a method of canvas

  button = createButton('submit');
  button.mousePressed(changeColor);
  
  slider = createSlider(1, 24, 4);
  
  col = color(255, 0, 0);
  par = createP('It was a dark and stormy night.');
  par.style("color","red");
  par.style("margin-left","30px");
  par.style("text-decoration", "line-through");
  background(0);
}

function resetColor() {
  col = color(0);
}

function changeColor() {
  col = color(random(255), random(255), random(255));
}

// function mousePressed() {
//   //par.hide();
// }

function draw() {
  background(col);
  sw = slider.value();
  strokeWeight(sw);
  stroke(255);
  line(x, 0, x, height);
  x = x + 3;
  if (x > width) {
    x = 0;
  }
  //par.html(x);
}