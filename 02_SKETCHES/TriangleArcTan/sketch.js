var triangles = []; // allocate space for this array
var a;

function setup() {
  createCanvas(800, 800);
  for (var i = 0; i < 100; i++) {
    triangles.push(new TriangleBackground()); //instantiate the triangles
 
  }
  

}

function draw() {
  background(0);

for (var h = 0; h < triangles.length; h++) { //call all of the circles to draw, 
    triangles[h].display(); //no arguments for display, all determined inside the function
  }


  var distanceS = dist(mouseX, mouseY, windowWidth * .5, windowHeight * .95);
var distanceX = dist(mouseX, mouseY, windowWidth * .5, windowHeight * .5);

}



function TriangleBackground() {
  this.Centerposition = createVector(random(0, windowWidth), random(0, windowHeight)); //the centerpoint can be anywhere
  this.opacity = 70;
  var triWidth = random(6, 20);

  


  this.display = function() {
    stroke(150, 60); //want this to be a random color from my array
    var mouseradius = 100;
    strokeWeight(5);
    this.opacity = 70;
    fill(200, 30); //now I can access the colors and create a number/intenger
    this.wiggle = 0;

    //i want to map saturation onto this center with distance mapping to sat. 
    //------------if mouse is near the cneter of the triangle, dim it down----------------
    if (mouseX > this.Centerposition.x + (-1 * mouseradius) && mouseX < this.Centerposition.x + (mouseradius) && mouseY > this.Centerposition.y + (-1 * mouseradius) && mouseY < this.Centerposition.y + (mouseradius)) {
      // this.opacity = 10;
      // fill(50, 60);
      // strokeWeight(0);
      // stroke(90, 30);
    this.wiggle = cos(millis()/20*50);
    } 

  

    push();
  
    a = atan2(width/2 - this.Centerposition.y, height/2- this.Centerposition.x); //arc tangent

    translate(this.Centerposition.x, this.Centerposition.y);
    rotate(a+this.wiggle);

    triangle(0, 0 - triWidth * 1.8, 0 + triWidth, 0 + triWidth, 0 - triWidth, 0 + triWidth);

    noFill();
    pop();

  }
}