function Point(_x, _y, _t) {
  this.x = _x;
  this.y = _y;
  this.dia = 15;
  this.startTime = _t;
  this.elapsedTime;

  this.update = function() {
    this.elapsedTime = frameCount - this.startTime;
  }
  this.display = function() {
    push();
    smooth();
    noStroke();
    fill(255);
    ellipse(this.x, this.y, this.dia / 2, this.dia / 2);
    fill(255, 100);
    ellipse(this.x, this.y, this.dia, this.dia);
    text(this.startTime, this.x + 10, this.y);
    text(this.elapsedTime, this.x + 10, this.y + 15);
    pop();
  }
}



var myPoints = [];


function setup() {
  createCanvas(500, 700);
}



function draw() {
  background(0);

  for (var i = 0; i < myPoints.length; i++) {
    myPoints[i].update();
    
    if (i != 0) {
      stroke(255);
      
      var lerpValue = myPoints[i].elapsedTime * 0.01;
      if (lerpValue > 1.0) {
        myPoints[i].display();
        lerpValue = 1.0;
      }
      // lerp(startX, targetX, 0.0);
      var targetX = lerp(myPoints[i - 1].x, myPoints[i].x, lerpValue);
      var targetY = lerp(myPoints[i - 1].y, myPoints[i].y, lerpValue);
      line(
        myPoints[i - 1].x, myPoints[i - 1].y,
        targetX, targetY
      );
    } else {
      myPoints[i].display();
    }
  }
}

function mousePressed() {
  myPoints.push(new Point(mouseX, mouseY, frameCount));
}