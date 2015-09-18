// var colorA = color(248, 73, 41);//pink
// var colorB = color(69, 97, 220);//blue
// var colorC = color(59, 50, 89); //drk blue
// var colorD = color(251, 151, 162);//tan?
// var colorE = color(251, 248, 234);//lightB
// var colorF = color(240, 206, 181); //light
var triangles = []; // allocate space for this array


function setup() {
  createCanvas(windowWidth, windowHeight);


  for (var i = 0; i < 500; i++) {
    triangles.push(new TriangleBackground()); //instantiate the triangles
    //if a triangles center is within 20px do not draw it
    // var desiredseparation = 25.0;
    // var steer = createVector(0, 0);
    // var count = 0;
    // // For every triangle in the system, check if it's too close
    // for (var j = 0; j < triangles.length; j++) {
    //   var d = p5.Vector.dist(this.Centerposition, triangles[j].position);
    //   // If the distance is greater than 0 and less than an arbitrary amount (0 when you are yourself)
    //   if (d > desiredseparation) {
    //     // Calculate vector pointing away from neighbor
    //     var diff = p5.Vector.sub(this.Centerposition, boids[i].position);
    //     diff.normalize();
    //     diff.div(d); // Weight by distance
    //     steer.add(diff);
    //     count++; // Keep track of how many
    //   }
    }

  }


  function draw() {
    background(0);
    for (var i = 0; i < triangles.length; i++) { //call all of the circles to draw, 

      triangles[i].display(); //no arguments for display, all determined inside the function
    }


  }

  function TriangleBackground() {
    // this.randomOffsetX1 = random(80, 100);
    // this.randomOffsetY2 = random(-10, 10);
    // this.randomOffsetX2 = random(30, 90);
    // this.randomOffsetY3 = random(70, 120);
    this.Centerposition = createVector(random(0, width), random(0, width)); //the centerpoint can be anywhere
    this.opacity = 90;
    this.col = color(random(5, 50), random(5, 60), random(150, 255), this.opacity); //70% opacity, mostly blue

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
      var triWidth = 6;
      // rotate somehow ----- this.angle = atan2(mouseY - this.position.y, mouseX - this.position.x);
      triangle(this.Centerposition.x, this.Centerposition.y - 30, this.Centerposition.x + triWidth, this.Centerposition.y + triWidth, this.Centerposition.x - triWidth, this.Centerposition.y + triWidth);
      noFill();
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