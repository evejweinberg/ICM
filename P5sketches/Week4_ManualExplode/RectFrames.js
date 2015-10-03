function RectFrames(centerX, centerY) {
  this.x = centerX;
  this.y = centerY;
  this.sizeA = 5000;
  this.sizeB = 2000;
  this.sizeC = 5000;
  this.counter = 0; //a rate mapped to counter to function as my timeline
  this.strokeweightA = 1;
  this.strokeweightB = 1;
  this.strokeweightC = 1;
  this.growthrate = 0; //a constant rate mapped to counter
  this.expgrwth = 1;

  this.display = function() { //why do I need this as a separate function?

    noFill();
    stroke(255, 0, 0);
    strokeWeight(this.strokeweightA);
    rectMode(CENTER);
    rect(this.x, this.y, this.sizeA, this.sizeA);
    strokeWeight(this.strokeweightB);
    rect(this.x, this.y, this.sizeB, this.sizeB);
    strokeWeight(this.strokeweightC);
    stroke(0, 0, 255);
    rect(this.x, this.y, this.sizeC, this.sizeC);
  }

  this.move = function() {

    // push();
    //   translate(this.x,this.y);
    //   rotate(lerp(45,0,this.growthrate)); //why doesn't this work?
    //   print("rotation=" )

    // noFill();
    // stroke(255, 0, 0);
    // strokeWeight(this.strokeweightA);
    // rectMode(CENTER);
    // rect(this.x, this.y, this.sizeA, this.sizeA);
    // strokeWeight(this.strokeweightB);
    // rect(this.x, this.y, this.sizeB, this.sizeB);
    // strokeWeight(this.strokeweightC);
    // stroke(0, 0, 255);
    // rect(this.x, this.y, this.sizeC, this.sizeC);
    //       pop();

    this.counter = this.counter + 1;

    this.strokeweightA = map(this.sizeA, 0, 5000, 0, 40);
    this.strokeweightB = map(this.sizeB, 0, 5000, 0, 40);
    this.strokeweightC = map(this.sizeC, 0, 5000, 0, 40);

    if (this.counter < 100) {

      // print("Size RectA = " + this.sizeA)
      // print("Size RectB = " + this.sizeB)
        // print("log = " + floor(log(this.counter)))
        // print("sin = " + floor(sin(this.counter)))
        // print("exp growth =" + this.growthrate * this.expgrwth)
      this.growthrate = map(this.counter, 0, 100, 0, 1);
      this.expgrwth = map(this.growthrate, 0, 1, 1, 0);
      this.sizeB = lerp(2000, 300, (this.growthrate));
      this.sizeC = lerp(4000, 700, (this.growthrate));
      this.sizeA = lerp(400, 50, (this.growthrate)); //this value has to go down from .1 to .001
      if ((this.growthrate) <= 0) {
        (thisgrowthrate = 0);
      }

      if (this.counter > 105) {
        push();
        translate(this.x, this.y);
        rotate(5 * this.counter);
        this.sizeA = lerp(50, 400, (this.growthrate)); //this value has to go down from .1 to .001
        pop();
      }



    }

  }




}