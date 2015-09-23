var b;
var b2;

function Button(x, y, speed) {
  this.x = x;
  this.y = y;
  this.r = 100;
  // this.speed = speed;
  
  this.display = function() {
    // this.x += this.speed;
    if (dist(mouseX, mouseY, this.x, this.y) < this.r/2) {
      fill(255, 0, 0);
    } else {
      fill(0, 0, 0);
    }
    ellipse(this.x, this.y, this.r, this.r);
  }
}

function add(a, b) {
  return a + b;
}


function setup() {
  createCanvas(500,500);
  b = new Button(width/2, height/2, 1);
  b2 = new Button(40, 40, 2);
}

function draw() {
  b.display();
  b2.display();
}