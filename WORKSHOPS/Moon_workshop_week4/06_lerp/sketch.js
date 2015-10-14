var circle;

function setup() {
  createCanvas(500, 700);
  noStroke();


  circle = {
    x: width / 2,
    y: height / 2,
    dia: 50
  }

}

function draw() {
  background(100);
  
  // lerp
  circle.x = lerp(circle.x, mouseX, 0.1);
  circle.y = lerp(circle.y, mouseY, 0.1);
  
  // draw circle
  fill(255, 0, 0);
  ellipse(circle.x, circle.y, circle.dia, circle.dia);

}