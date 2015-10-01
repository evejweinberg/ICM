var totalParticles = 12; //number of total particles
var arrayOfBalls = []; //empty array to be filled
var arrayOfLines = [];

function setup() {
  createCanvas(windowWidth, windowHeight);



  // for (var i = 0; i < totalParticles; i++) {

  //   arrayOfBalls.push(new Ball(width / 2, height / 2, width / 2 + random(-width, width), height / 2 + random(-height, height))); //push new particles

  //   arrayOfLines.push(new Line(width / 2, height / 2, width / 2 + random(-width, width), height / 2 + random(-height, height))); //push new particles
  // }



}

function draw() {
background(255);

for (var i = 0; i < arrayOfBalls.length; i++) {
    arrayOfBalls[i].display(); //display them all
    arrayOfBalls[i].explode(); //explode them all
    // arrayOfLines[i].display(); //display them all
    // arrayOfLines[i].explode(); //explode them all
}
for (var i = 0; i < arrayOfLines.length; i++) {
    arrayOfLines[i].display(); //display them all
    arrayOfLines[i].explode(); //explode them all
}

}

function mousePressed() {
  print("mouseispressed")
for (var i = 0; i < totalParticles; i++) {

  arrayOfBalls.push(new Ball(width / 2, height / 2, width / 2 + random(-width, width), height / 2 + random(-height, height))); //push new particles

  arrayOfLines.push(new Line(width / 2, height / 2, width / 2 + random(-width, width), height / 2 + random(-height, height))); //push new particles
  }
}




function Ball(x, y, targetX, targetY) {
  this.x = x;
  this.y = y;
  this.xStatic = x;
  this.yStatic = y;
  this.size = 50;
  this.scalar = 300;
  this.angle = 0;
  this.target = {
    x: targetX,
    y: targetY
  };


  this.display = function() {


    if (millis() % 3) {
      fill(255, 0, 0);
      noStroke();
      ellipse(this.x, this.y, this.size, this.size);
    }
    if (millis() % 10) {
      push();
      translate(this.x - 10, this.y - 10);
      rotate(this.size / 10);
      fill(0, 0, 255);
      rect(10, 10, this.size, this.size);
      pop();
    }
  }


  this.explode = function() {
    push();
    translate(this.xStatic, this.yStatic);
    rotate(this.size / 50);
    fill(0, 255, 0)
    textAlign(CENTER);
    textSize(40 + this.size);
    text("Thanks", 0, 0);
    pop();
    print("exploding")
    this.size = this.size - 1;
    this.x = lerp(this.x, this.target.x, 0.1);
    this.y = lerp(this.y, this.target.y, 0.1);
    print(this.x);
    if (this.size < 0) {
      this.size = 0;
    }
  }
}

function Line(x, y, targetX, targetY) {
  this.x = x;
  this.y = y;
  this.size = 50;
  this.linelength = 170;
  this.scalar = 300;
  this.angle = 0;
  this.target = {
    x: targetX,
    y: targetY
  };


  this.display = function() {
    if (this.size > 45) {
      this.linelength = 100;
    } else if (this.size == 45 && this.size > 20) {
      this.linelength = this.linelength + 15;
    } else if (this.size < 20) {
      this.linelength = this.linelength - 7;
    }
    if (this.linelength <= 0) {
      this.linelength = 0;
    }

    push();
    translate(this.x, this.y);
    // var angle = atan2(0, this.targetX);
    // rotate(angle);
    stroke(0, 0, 255);
    noFill();
    line(0, 0, this.linelength, this.linelength);
    strokeWeight(10);
    var angle2 = atan2(this.target.y - this.y, this.target.x - this.x);
    rotate(angle2);
    print("angle2:" + angle2)
    var distance = dist(this.x, this.y, 0, 0);
    line(0, 0, this.linelength, this.linelength);
    line(distance - this.linelength, 0, distance, 0);
    pop();
  }

  this.explode = function() {
    print("exploding")
    this.size = this.size - 1;
    this.x = lerp(this.x, this.target.x, 0.1);
    this.y = lerp(this.y, this.target.y, 0.1);
    print(this.x);
    if (this.size < 0) {
      this.size = 0;
    }
  }
}

function mouseDragged() {
  // for (var i = 0; i < totalParticles; i++) {

  // arrayOfBalls.push(new Ball(width / 2, height / 2, width / 2 + random(-width, width), height / 2 + random(-height, height))); //push new particles

  // arrayOfLines.push(new Line(width / 2, height / 2, width / 2 + random(-width, width), height / 2 + random(-height, height))); //push new particles
  // }
}