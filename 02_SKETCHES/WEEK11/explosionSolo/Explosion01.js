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
  this.deathrate = 0;
  this.counter = 0; //give me a counter so I can kill this thing.


  this.display = function() {

    noStroke();
    push();
    translate(this.x - 10, this.y - 10);
    fill(palettebluepink[1]); //red
    ellipse(this.x, this.y, this.size, this.size); //these rotate later
    rotate(this.size / 5); //spin rectangles around
    fill(palettebluepink[2]); //blue
    rect(10, 10, this.size, this.size);
    pop();

  }


  this.explode = function() {
    this.counter = this.counter + 1; //tick up and ill splice after it reaches 100
    push();
    translate(this.xStatic, this.yStatic);
    rotate(this.size / 50); //rotate whole explosion
    fill(palettebluepink[0]);
    textAlign(CENTER);
    textSize(40 + this.size);
    // text("XXXXXXX", 0, 0);
    pop();

    this.size = this.size - 1; //decrease size by 1;
    this.deathrate = map(this.size, 50, 0, 0, 1); //not sure about this
    this.x = lerp(this.x, this.target.x, this.deathrate); //this target is set later, outside
    this.y = lerp(this.y, this.target.y, this.deathrate); //this target is set later, outside
    // print(this.x);
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
  this.counter = 0;


  this.display = function() {
    if (this.size > 45) {
      this.linelength = 100;
    } else if (this.size == 45 && this.size > 24) {
      this.linelength = this.linelength + 15;
    } else if (this.size < 24) {
      this.linelength = this.linelength - 7;
    }
    if (this.linelength <= 0) {
      this.linelength = 0;
    }
    push();
    translate(this.x, this.y);
    noFill();
    strokeWeight(3);
    var angle2 = atan2(this.target.y - this.y, this.target.x - this.x);
    rotate(angle2);

    var distance = dist(this.x, this.y, 0, 0);
    stroke(palettebluepink[2]);
    line(0, 0, this.linelength, this.linelength);
    stroke(palettebluepink[0]);
    line(0, 0, this.linelength, this.linelength);
    // line(distance - this.linelength, 0, distance, 0);
    pop();
  }

  this.explode = function() {
    this.counter = this.counter + 1;
    // print("exploding")
    this.size = this.size - 1;
    this.x = lerp(this.x, this.target.x, 0.1);
    this.y = lerp(this.y, this.target.y, 0.1);

    if (this.size < 0) {
      this.size = 0;
    }
  }
}