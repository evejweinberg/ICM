
var p1;
var p2;

function setup() {
  createCanvas(400, 400);
  p1 = new Particle();
  p2 = new Particle();
}

function draw() {
  background(0);
  p1.display();
  p2.display();

}