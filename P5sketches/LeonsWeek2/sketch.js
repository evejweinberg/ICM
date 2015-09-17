var circles = []; // array of Jitter objects
var backc = 255;
var frontc = 0;

function setup() {
  createCanvas(900,900);
   
  
  for (var i=0; i<200; i++) {
    circles.push(new circle()); //instantiate the circles
  }
 
}

  
function draw() {
  background(backc);
  for (var i=0; i<circles.length; i++) { //call all of the circles to draw, 
    
    circles[i].display(); //no arguments for display, all determined inside the function
  }
  
  
}

function circle() {
  
  // this.diameter = width/15;
    this.diameter = random(1,width/15); //random width from 1 to width/15

  this.position = createVector(random(this.diameter, width - this.diameter),random(this.diameter, width - this.diameter))
  //create a new vector number of x components, number of y, number of z
  
  this.angle = 0;
  
  this.col = color(random(0,255),random(0,255),random(0,255),70); //70% opacity
  
  this.display = function() {
    noFill();
    stroke(frontc);
    
    var col_rad = 3;
    if(mouseX < this.position.x+this.diameter*col_rad && mouseX > this.position.x - this.diameter*col_rad && mouseY < this.position.y+this.diameter*col_rad && mouseY > this.position.y - this.diameter*col_rad){
      fill(this.col);
      
    }
    // stroke(0);
    ellipse(this.position.x, this.position.y, this.diameter,this.diameter);
    strokeCap(SQUARE)
    strokeWeight(7);
    noFill();
    this.angle = atan2(mouseY - this.position.y, mouseX - this.position.x);
    arc(this.position.x, this.position.y, this.diameter,this.diameter, this.angle - PI/5, this.angle + PI/5)
    strokeWeight(1);
    
    
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
