function Circle(_x, _y) {
  this.x = _x;
  this.y = _y;
  this.rad = 10;
  this.xSpeed = random(-5, 5);
  this.clr = color(255);

  this.update = function() {
    this.x = this.x + this.xSpeed;

    if (this.x < 100) {
      this.x = 100;
      this.xSpeed = this.xSpeed * -1;
    } else if (this.x > width-100) {
      this.x = width-100;
      this.xSpeed = this.xSpeed * -1;
    }
  }
  this.check = function(_x, _y) {
    var dst = dist(this.x, this.y, _x, _y);
    
    if (dst < this.rad) {
      
      if (mouseIsPressed) this.clr = color(255, 0, 0);
      else this.clr = color(150, 0, 255);

    } else {
      // change the color
      this.clr = color(255-dst);
      // change the size
      var radFromDist = (250 - dst) * 0.10;
      if (radFromDist < 0) radFromDist = 0;
      this.rad = 10 + radFromDist;
    }
  }
  this.display = function() {
    push();
    noStroke();
    fill(this.clr);
    ellipse(this.x, this.y, this.rad * 2, this.rad * 2);
    pop();
  }
}

var myCircles = [];

function setup() {
  createCanvas(800, 800);
  for (var i = 0; i < 10; i++) {
    myCircles.push(new Circle(random(width), 100 + i * 70));
  }
}

function draw() {
  background(50);
  for (var i = 0; i < myCircles.length; i++) {
    myCircles[i].update();
    myCircles[i].check(mouseX, mouseY);
    
    // draw line from one object to other objects  
    for (var j = 0; j < myCircles.length; j++) {
      if (i != j) {
        stroke(255, 50);
        line(myCircles[i].x, myCircles[i].y,
          myCircles[j].x, myCircles[j].y
        );
      }
    }

    // display
    myCircles[i].display();
    
  }
  fill(255);
  text("Roll over and click the circles.", 10, 20);
}