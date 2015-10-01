function RectFrames(centerX, centerY) {
  this.x = centerX;
  this.y = centerY;
  this.sizeA = 50;
  this.sizeB = 150;
  this.sizeC = 250;
  this.counter = 0;
  this.strokeweight = 2;

  this.display = function() {
    
    noFill();
    stroke(255, 0, 0);
    strokeWeight(this.strokeweight);
    rectMode(CENTER);
    rect(this.x, this.y, this.sizeA, this.sizeA);
    rect(this.x, this.y, this.sizeB, this.sizeB);
    stroke(0, 0, 255);
    rect(this.x, this.y, this.sizeC, this.sizeC);
  }

  this.move = function() {
    this.counter = this.counter + 1;
    print("rect counter" + this.counter);

    this.strokeweight = map(this.sizeA, 0, 2000, 2, 30);

    if (this.counter < 40) {
      this.SizeA = lerp(this.SizeA, 400, 0.1);
    } else if (this.counter >= 40) {
      this.SizeA = this.SizeA;
    }


    if (this.counter > 50) {
      push();
      translate(this.x, this.y);
      rotate(30);
      rect(this.x, this.y, this.sizeB, this.sizeB);
    }



  }




}