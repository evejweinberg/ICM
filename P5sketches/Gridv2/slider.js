//shoutOut to Leon for this slider code that I'm adapting

function SineSlider(xpos_, ypos_, w_, intensity_, frequency_, strokeC_, fillC_) {
  this.position = createVector(xpos_, ypos_); //a new local variable to reference the global argument
  //every time I say this.position locally.... 
  //it will be referencing the first two arguments from outside this function
  //of i can use them locally, independently, as this.position.x this.

  this.w = w_; //a new local variable to reference the global argument for the width of the whole line

  this.previousY = 0; //a new local variable

  this.intensity = intensity_; //a new local variable to reference the global argument
  this.frequency = frequency_; //a new local variable to reference the global argument

  this.sliderX = 0; //a new local variable, where the slider button should start
  this.sliderY = 0; //a new local variable
  this.sliderHeight = 20; //a new local variable
  this.sliderWidth = 20; //a new local variable, these can be referenced indepenedently later too,
  //by saying globally SineSlider.sliderWidth = x;
  this.value = 0;

  this.selected = false; //boolean state
  this.strokeC = strokeC_;
  this.fillC = fillC_;




  this.display = function() {
    //update slider position
    this.update();

    stroke(this.strokeC); //fill with the argument's stroke
    fill(this.fillC); ////fill with the argument's color

    // baseline
    this.drawBaseline();


    //slider
    //draw an ellipse at (local variable + globalX, localY, local, localwidth)
    ellipse(this.sliderX + this.position.x, this.sliderY, this.sliderHeight, this.sliderWidth)
  }

  this.update = function() { //later we will call this in main draw loop
    this.sliderXcenteronScreen = this.sliderX + this.position.x; //where the slider is + slider's main X value;
    this.sliderHalfWidth = this.sliderWidth / 2;
      this.sliderHalfHeight = this.sliderHeight / 2;
    
    this.sliderEndPt = this.position.x + this.w;

    this.sliderX = map(this.value, 0, 255, 0, this.w); //global 3rd parameter w
    this.sliderY = this.position.y + (sin(this.sliderX * this.frequency) * this.intensity);

    if (mouseIsPressed && mouseX > this.sliderXcenteronScreen - this.sliderHalfWidth && mouseX < this.sliderXcenteronScreen + this.sliderHalfWidth && mouseY > this.sliderY - this.sliderHalfHeight && mouseY < this.sliderY + this.sliderHalfHeight) {
      this.selected = true;
      print("you're dragging the slider")
    }

    // if (mouseX > (this.val1) - this.sliderHeight / 2 && mouseX < (this.sliderX + this.position.x) + this.sliderWidth / 2 && mouseY > this.sliderY - this.sliderWidth / 2 && mouseY < this.sliderY + this.sliderWidth / 2) {
    //   this.selected = true;
    //   print("you're on the slider")
    // }
    
    if (!mouseIsPressed) {
      this.selected = false;
    }
    if (this.selected && mouseIsPressed && mouseX > this.position.x && mouseX < this.sliderEndPt) {
      this.changeValue();
    }

  }

  this.changeValue = function() {
    this.value = map(mouseX, this.position.x, this.sliderEndPt, 0, 255);

    if (this.value < 0) {
      this.value = 0;
    } else if (this.value > 255) {
      this.value = 255;
    }

  }

  this.drawBaseline = function() {
    for (var i = 0; i < this.w; i++) {

      var p = this.position.y + (sin(i * this.frequency) * this.intensity);
      strokeWeight(1);
      stroke(this.strokeC);
      if (i > 0) {
        line(i + this.position.x, p, i + this.position.x - 1, this.previousY);
      }
      this.previousY = p;
    }
  }


}