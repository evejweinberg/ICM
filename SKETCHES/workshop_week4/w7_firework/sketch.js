function Circle() {
  this.x = width / 2;
  this.y = height;
  this.dia = random(2, 8);
  this.xspeed = 0;
  this.yspeed = -11;
  this.stage = 0;
  this.startAngle = random(0, PI * 2);
  this.boomVel = random(-2.0, 2.0);
  this.boomAmp = random(6);

  this.move = function() {
    if (this.stage == 3) {
      this.x = this.x + this.xspeed +
        sin(this.startAngle + frameCount * 0.05) * 3;
      this.y += this.yspeed +
        cos(this.startAngle + frameCount * 0.05) * 3;
    } else if (this.stage == 2) {
      this.x = this.x + this.xspeed +
        sin(this.startAngle + frameCount * this.boomVel) * this.boomAmp;
      //this.y += this.yspeed +
      //cos(this.startAngle + frameCount * this.boomVel) * this.boomAmp;
    } else if (this.stage == 1) {
      this.x = this.x + this.xspeed;
      this.y = this.y + this.yspeed;
    } else {
      this.x = this.x + this.xspeed;
      this.y += this.yspeed;
    }

    if (this.stage != 3) this.yspeed = this.yspeed + 0.1;

    if (frameCount == 120 || frameCount == 250 ||
      frameCount == 400 || frameCount == 550) {
      this.boom();
    }
  }
  this.checkBoundary = function() {
    if (this.x < 0) this.x = width;
    else if (this.x > width) this.x = 0;
    if (this.y < 0) this.y = height;
    else if (this.y > height) this.y = 0;
  }

  this.boom = function() {
    this.xspeed = random(-3, 3);
    this.yspeed = random(-4, 0);
    this.stage = this.stage + 1;
  }
  this.display = function() {
    //255,210,140
    //fill(random(255), 50, random(255),50);
    fill(255, 210, 140, 150);
    ellipse(this.x, this.y, this.dia, this.dia);
  }
}

var lights = [];


function setup() {
  createCanvas(500, 700);
  noStroke();
  //blendMode(ADD);
  for (var i = 0; i < 300; i++) {
    lights.push(new Circle());
  }
}

function draw() {
  background(0, 10);

  push();
  blendMode(ADD);
  for (var i = 0; i < lights.length; i++) {
    lights[i].move();
    lights[i].checkBoundary();
    lights[i].display();
  }
  pop();

  fill(255);
  text(frameCount, 10, 20);

}

function keyPressed() {
  for (var i = 0; i < lights.length; i++) {
    lights[i].boom();
  }
}