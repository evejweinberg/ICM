var triangles = []; // allocate space for this array
var a;
var transition = false;

function setup() {
  fingerprint();

  createCanvas(250, 800);
  for (var i = 0; i < 100; i++) {
    triangles.push(new TriangleBackground()); //instantiate the triangles
  }
}

function BreakOut() {
  transition = !transition;
}

function draw() {
  background(0);

  for (var h = 0; h < triangles.length; h++) { //call all of the circles to draw, 
    triangles[h].display(); //no arguments for display, all determined inside the function
  }

}



function TriangleBackground() {
  this.Centerposition = createVector(random(0, 250), random(0, 800)); //the centerpoint can be anywhere
  this.linelength = random(10, 60);
  var mouseradius = 30;




  this.display = function() {


    this.wiggle = 0;

    if (mouseX > this.Centerposition.x + (-1 * mouseradius) && mouseX < this.Centerposition.x + (mouseradius) && mouseY > this.Centerposition.y + (-1 * mouseradius) && mouseY < this.Centerposition.y + (mouseradius)) {
      this.wiggle = cos((millis() / 1) * 1);
    }



    push();

    a = atan2(400 - this.Centerposition.y, 125 - this.Centerposition.x); //arc tangent

    translate(this.Centerposition.x, this.Centerposition.y);
    rotate(a + this.wiggle);
    stroke(255); //want this to be a random color from my array
    strokeWeight(5);
    line(-(this.linelength / 2), -(this.linelength / 2), (this.linelength / 2), (this.linelength / 2));

    // triangle(0, 0 - triWidth * 1.8, 0 + triWidth, 0 + triWidth, 0 - triWidth, 0 + triWidth);

    noFill();
    pop();

  }


}


function fingerprint() {
  var fp = createDiv('');
  var fpimg = createImg("assets/fp_00.png");
  fpimg.parent(fp).size(60, 90);
  fp.position(90, 500).mouseOver(BreakOut).mouseOut(BreakOut);
}