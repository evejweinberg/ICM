function Circle(x, y) {
  this.x = x;
  this.y = y;
  this.radius = random(10, 100);

  this.display = function() {
    fill(255, 0, 0);
    this.radius += random(-1,1);
    ellipse(this.x, this.y, this.radius, this.radius);
  }
}

var circles = [];

function setup() {
  createCanvas(600, 600);
  for (var i = 0; i < 10; i++){
    var myCircle = new Circle(random(width), random(height));
    circles.push(myCircle);
  }

}

function draw() {
  background(255);
  for (var i = 0; i < 10; i++){
    circles[i].display();
  }
}
