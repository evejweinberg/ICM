//array of objects
var rings = [];

//number of objects to be created
var number = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);

}

function draw() {
drawRings();
}



function drawRings() {

  this.centerX = random(width);
  this.centerY = random(height);

  this.newcenterX = lerp(this.centerX, mouseX, 0.1);
  this.newcenterY = lerp(this.centerY, mouseY, 0.1);


    //random center and external and internal diameters
    var newRing = new Ring(this.centerX, this.centerY, random(50, 100), random(0, 50));

    rings.push(newRing);

    for (var i =0; i < rings.length; i++){
   
    rings[i].display();
    rings[i].update();
    }


}


function Ring(x, y, external_radius, internal_radius) {
  this.x = x;
  this.y = y;
  this.external_radius = external_radius;
  this.internal_radius = internal_radius;
  this.opacity = 255;
  this.opacity = this.opacity - 1;



  this.display = function() {

    push();

    noFill();
    stroke(random(255), random(255), random(255), random(255));

    for (var i = this.internal_radius; i < this.external_radius; i++) {
      ellipse(this.x, this.y, i, i);
    }
    pop();


  }

  this.update = function() {
    this.opacity = this.opacity - 1;
    this.external_radius = this.external_radius - 2;
    // this.newcenterX = lerp(this.centerX, mouseX, 0.1);
    // this.newcenterY = lerp(this.centerY, mouseY, 0.1);
    if (this.external_radius <= this.internal_radius){
      this.external_radius = this.internal_radius;
    }
  }

}