var particleList = [];

function setup() {
  createCanvas(400, 400);
}

function mousePressed() {
  particleList.push(new Particle());
}

function draw() {
  background(0);
  for (var i = 0; i < particleList.length; i++) {
    particleList[i].display();
    particleList[i].move();
  }
}