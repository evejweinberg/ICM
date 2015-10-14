var particleList = [];

function setup() {
  createCanvas(400, 400);

}

function mouseDragged() {
  addParticle();
}

function draw() {
  background(0);
  for (var i = 0; i < particleList.length; i++) {
    particleList[i].display();
    particleList[i].move();
  }
}



function addParticle() {
  var p = {
    x: mouseX,
    y: mouseY,
    r: random(255),
    b: random(255),
    display: function() {
      noStroke();
      fill(this.r, 0, this.b, 200);
      ellipse(this.x, this.y, 24, 24);
    },
    move: function() {
      this.x += random(-1, 1);
      this.y += random(-1, 1);
    },
  };
  particleList.push(p);
}