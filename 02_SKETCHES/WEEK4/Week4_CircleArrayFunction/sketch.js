var circlearray = [];
CircleOn = false;

function setup() {
  createCanvas(900, 900);
  for (var i = 0; i < 360; i++) {

    circlearray[i] = new CircleArray(450, 450); //put the particle system on the node
    circlearray.size = sin(i) * 12; //
    print("circle number" + circlearray[i])

  }

}

function draw() {
  background(204);
  strokeWeight(1);
  stroke(150);

  for (var i = 0; i < 360; i++) {

    circlearray[i] = new CircleArray(450, 450);
    circlearray[i].display(random(255), random(12));
    circlearray[i].update(random(255), random(12));
  }


}

function MousePressed() {

  CircleOn = !CircleOn;
}



function CircleArray(xPos, yPos) {
  this.angle = 0.0;
  this.offset = 120;
  this.scalar = 300;
  this.speed = 0.05;
  this.size = 20;

  if (CircleOn === false) {
    this.size = 20;
  }

  this.display = function(change, change2) {
    
    this.x = xPos + cos(this.angle) * this.scalar;
    this.y = yPos + sin(this.angle) * this.scalar;
    this.angle += this.speed;
    print(xPos);

  }


  this.update = function() {
    this.x = xPos + cos(this.angle) * this.scalar;
    this.y = yPos + sin(this.angle) * this.scalar;
    push();
    // rotate(x,y);
    stroke(255);
    strokeWeight(12);
    line(this.x, this.y, this.x + random(10, 30), this.y + random(10, 30));
    pop();

    fill(255, 0, 200);
    ellipse(this.x, this.y, this.size, this.size);
    this.scalar = -1 * (dist(mouseX, mouseY, width / 2, height / 2));
    print(circlearray.scalar);
  }
}