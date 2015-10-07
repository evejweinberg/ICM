var circle;

function setup() {
  createCanvas(windowWidth,windowHeight);
  noStroke();


//instantiate the object with its color and size
  

}




function draw() {
  background(100);
  
  // draw the object and allow it's center 
  circle.x = lerp(circle.x, mouseX, 0.1);
  circle.y = lerp(circle.y, mouseY, 0.1);
  
  // draw circle
  fill(255, 0, 0);
  ellipse(circle.x, circle.y, circle.dia, circle.dia);

}