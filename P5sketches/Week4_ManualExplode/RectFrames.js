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
  this.waitingtoR = 0;
  this.waitingtoR=5;

  this.display = function() { //why do I need this as a separate function?
push();

rotate(this.waitingtoR);

    noFill();
    stroke(palettebluepink[6]);
    strokeWeight(this.strokeweightA);
    rectMode(CENTER);
    rect(this.x, this.y, this.sizeA, this.sizeA);
    strokeWeight(this.strokeweightB);
      stroke(palettebluepink[0]);
    rect(this.x, this.y, this.sizeB, this.sizeB);
    strokeWeight(this.strokeweightC);
    stroke(palettebluepink[4]);
    rect(this.x, this.y, this.sizeC, this.sizeC);

    pop();
  }

  this.move = function() {


    this.counter = this.counter + 1;

    this.strokeweightA = map(this.sizeA, 0, 5000, 0, 40);
    this.strokeweightB = map(this.sizeB, 0, 5000, 0, 40);
    this.strokeweightC = map(this.sizeC, 0, 5000, 0, 40);

    if (this.counter < 200) {

     this.growthrate = map(this.counter, 0, 200, 0, 2);
     this.lerpshrink = this.growthrate*.05;
      print("this"+ 2*(1/this.counter));
       constrain(this.sizeB, 2000, 300);
      this.sizeB = lerp(2000, 300, (2*(1/this.counter)));
     
      constrain(this.sizeB, 4000, 700);
      this.sizeC = lerp(4000, 700, (2*(1/this.counter)));
      constrain(this.sizeA, 400, 50);
      this.sizeA = lerp(400, 50, (2*(1/this.counter))); //this value has to go down from .1 to .001
      if ((this.growthrate) <= 0) {
        (thisgrowthrate = 0);
      }

      // if (this.counter > 75) {
      //   this.waitingtoR = this.counter*4;
      //   push();
      //   translate(this.x, this.y);
      //   rotate(5 * this.counter);
      //   this.sizeA = lerp(50, 400, (this.growthrate)); //this value has to go down from .1 to .001
      //   pop();
      // }



    }

  }




}