var particleList = [];

function setup() {
  createCanvas(400, 400);
  for (var i = 0; i < 5; i++) {
    var p = new Particle(random(width), random(height));
    particleList.push(p);
  }
}

function mousePressed() {
  for (var i = 0; i < particleList.length; i++) {
    particleList[i].clicked();
  }
}

function draw() {
  background(0);
  for (var i = 0; i < particleList.length; i++) {
    particleList[i].display();
    particleList[i].move();
  }
}