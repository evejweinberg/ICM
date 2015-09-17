// var colorA = color(248, 73, 41);//pink
// var colorB = color(69, 97, 220);//blue
// var colorC = color(59, 50, 89); //drk blue
// var colorD = color(251, 151, 162);//tan?
// var colorE = color(251, 248, 234);//lightB
// var colorF = color(240, 206, 181); //light
var circles = []; // array of Jitter objects
var backc = 255;
var frontc = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);


  for (var i = 0; i < 200; i++) {
    circles.push(new circle()); //instantiate the circles
  }

}


function draw() {
  background(0);
  for (var i = 0; i < circles.length; i++) { //call all of the circles to draw, 

    circles[i].display(); //no arguments for display, all determined inside the function
  }


}

function circle() {
  this.randomOffsetX1 = random(80, 100);
  this.randomOffsetY2 = random(-10, 10);
  this.randomOffsetX2 = random(30, 90);
  this.randomOffsetY3 = random(70, 120);
  strokeWeight(7);
  this.opacity = 70;
  this.diameter = random(1, width / 15); //random width from 1 to width/15

  this.position = createVector(random(0, width), random(0, width))
    //create a new vector number of x components, number of y, number of z

  this.angle = 0;
  this.col = color(random(0, 255), random(0, 255), random(0, 255), this.opacity); //70% opacity

  this.display = function() {
    noFill();
    stroke(255); //want this to be a random color from my array
    var col_rad = 3;
    if (mouseX < this.position.x + this.diameter * col_rad && mouseX > this.position.x - this.diameter * col_rad && mouseY < this.position.y + this.diameter * col_rad && mouseY > this.position.y - this.diameter * col_rad) {
      fill(this.col);
      strokeWeight(2);
      this.opacity = 10;

    }

    this.angle = atan2(mouseY - this.position.y, mouseX - this.position.x);
    push();
    scale();
    // rotate(this.angle);
    // stroke(0);
    triangle(this.position.x, this.position.y, this.position.x + this.randomOffsetX1, this.position.y + this.andomOffsetY2, this.position.x + this.randomOffsetX2, this.position.y + this.randomOffsetY3);

    noFill();
    // arc(this.position.x, this.position.y, this.diameter,this.diameter, this.angle - PI/5, this.angle + PI/5)
    // strokeWeight(1);
    pop();


  };

}

// function mousePressed(){

//   for (var i=0; i<200; i++) {
//     circles.pop();
//     // circles.push(new circle());
//   }
//   for (var i=0; i<200; i++) {
//     // circles.pop();
//     circles.push(new circle());
//   }
//   if(frontc == 0){
//     frontc = 255;
//     backc = 0;
//   }else{
//     frontc = 0;
//     backc = 255;
//   }

//   }