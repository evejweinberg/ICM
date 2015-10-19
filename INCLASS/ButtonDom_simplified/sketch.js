var bgcol = 200;
var button;

function setup() {
  createCanvas(400,400);
  button = createButton('change BG color');
  button.mousePressed(changeColor);
  input = createInput('Where do you want to live?');
  input.changed(updateText);
  nameP = createP('Hiiiiii');
  
}

function updateText(){
  nameP.html(input.value());
  
}

function draw() {
  background(bgcol);
  rect(255,0,10,10);
  
}

function changeColor(){
  bgcol = color(random(255));
}