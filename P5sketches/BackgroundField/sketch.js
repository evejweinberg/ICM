var triangles = []; // allocate space for this array


function setup() {
  createCanvas(windowWidth, windowHeight);


  for (var i = 0; i < 500; i++) {
    triangles.push(new TriangleBackground()); //instantiate the triangles

  }

} ////////SETUP ENDS

function draw() {
  background(0);
  for (var i = 0; i < triangles.length; i++) { //call all of the circles to draw, 

    triangles[i].display(); //no arguments for display, all determined inside the function
  }

  DashedLine(width/2, height/2);

} /////////////////////DRAW ENDS///////////////////////////



function DashedLine(xPos, yPos) {
  var linelength = 10;
  push();
  translate(xPos, yPos);
  strokeWeight(4);
  stroke(255);
  for (var i = 0; i < 20; i++) {
    line(i * 20, 0, linelength + i * 20, 0);
  }
  pop();
}

function TriangleBackground() {
  // this.randomOffsetX1 = random(80, 100);
  // this.randomOffsetY2 = random(-10, 10);
  // this.randomOffsetX2 = random(30, 90);
  // this.randomOffsetY3 = random(70, 120);
    var a = atan2(mouseY - height / 2, mouseX - width / 2);
    this.Centerposition = createVector(random(0, width) , random(0, width)) ; //the centerpoint can be anywhere
  this.opacity = 90;
  this.col = color(random(5, 50), random(5, 60), random(150, 255), this.opacity); //70% opacity, mostly blue
   var triWidth = random(6,50);

  this.display = function() {



    stroke(100); //want this to be a random color from my array
    var mouseradius = 100;
    strokeWeight(2);
    this.opacity = 70;
    fill(this.col);

    //------------if mouse is near the cneter of the triangle, dim it down----------------
    if (mouseX > this.Centerposition.x + (-1 * mouseradius) && mouseX < this.Centerposition.x + (mouseradius) && mouseY > this.Centerposition.y + (-1 * mouseradius) && mouseY < this.Centerposition.y + (mouseradius)) {
      this.opacity = 10;
      fill(240, this.opacity);
      strokeWeight(1);
      stroke(160, this.opacity * 5);
      //and rotate the triangle towards the mouse using atan
    }

    push();
   
    // rotate somehow ----- this.angle = atan2(mouseY - this.position.y, mouseX - this.position.x);
    triangle(this.Centerposition.x, this.Centerposition.y - 30, this.Centerposition.x + triWidth, this.Centerposition.y + triWidth, this.Centerposition.x - triWidth, this.Centerposition.y + triWidth);
    noFill();
    pop();


  };

}