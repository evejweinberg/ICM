var particleList = [];

function setup() {
  createCanvas(400, 400);
  for (var i = 0; i < 10; i++) {
    particleList.push(new Particle());
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