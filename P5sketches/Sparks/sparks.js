function ball(x, y) {
  this.x = x;
  this.y = y;
  this.r = 20;
  this.sparks = [];
  
  this.display = function() {
    //display this ball
    //iterate in a for loop through each of the sparks
    //call this.sparks[i].display
    //also: check their life variable, and if life < 0, remove them from 
    //the sparks array
  }
  
  this.clicked = function() {
    if (dist(mouseX, mouseY, this.x, this.y) < this.r) {
      return true;
    } else {
      return false;
    }
  }
  
  this.explode = function() {
    //maybe this is in a for loop so we get lots of them
    this.sparks.push(new Spark(/*stuff goes in here*/));
  }
  
}

function Spark(x, y, direction) {
  this.x = x;
  this.y = y;
  this.direction = direction;
  this.life = 100;
  
  this.display = function() {
    ellipse(this.x, this.y, 4, 4);
    //other code that moves the x and y based on direction
  }
}

var b;

function mousePressed() {
  if (b.clicked()) {
    b.explode();
  }
}

function setup() {
  b = new ball(width/2, height/2);
}

function draw() {
  
}