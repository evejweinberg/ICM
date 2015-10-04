function Shape() {
  this.x = 0;
  this.y = 0;
  this.width = 0;
  this.height = 0;
}


var triangles = [];


function setup() {
  createCanvas(600, 600);
  noStroke();
  triangles.push(new Shape());
  triangles.push(new Shape());
  triangles.push(new Shape());
  
}

function draw() {
  background(100);
  
  for (var i = 0; i < 3; i++) {
    triangles[i].x = lerp(triangles[i].x, mouseX, 0.1);
    triangles[i].y = lerp(triangles[i].y, mouseY, 0.1 * (i+1));

    push();

    translate(triangles[i].x, triangles[i].y);
    var angle = atan2(mouseY - triangles[i].y,
    mouseX - triangles[i].x);
    rotate(angle);
    stroke(255, 80*i, 0);
    line(0, 0, -100, 0);

    pop();
  }




}