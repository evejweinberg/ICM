var button;
var fillColor = 0;

function setup() {
   createCanvas(640,360);
   
   button = createButton("First button.");
   button.mousePressed(clickedit);
    button.position(20,20);
    button.style("background: blue")
  
}

function draw() {
  background(fillColor);
  
}

function clickedit(){
  ellipse(10,10,10,10);
  fillColor = random(255)
  
}