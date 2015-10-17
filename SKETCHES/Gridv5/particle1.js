// A simple Particle class
var Particle = function(position) { //we will put a vector in here
  this.acceleration = createVector(random(-1, 1), random(-1, 1));
  this.velocity = createVector(random(-1, 1), random(-1, 0));
  this.position = position.copy();
  this.lifespan = 255.0;
  this.size = 40; //particle size
  this.linelength = 50;
  this.origin = this.position.copy();
};

Particle.prototype.run = function() {
  this.update(); //call update
  this.display(); //call display
    this.displayballs(); //call display
};

// Method to update position
Particle.prototype.update = function() {
  //this.acceleration = createVector(random(-2*this.lifespan, 2*this.lifespan), random(-2*this.lifespan, 2*this.lifespan));

  // if(lifespan > 150){
  //   this.velocity = createVector(random(-4, 4), random(-4, 4));
  // }

  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespan -= 4;
  print(this.lifespan)
    // this.velocity = this.velocity*(20);
  this.size = this.size - .35; //get smaller
  if (this.size <= 0) { //don't go negative
    this.size = 0;
  }
  if (this.lifespan > 200) {
    this.linelength = this.linelength + 1;
  } else if (this.lifespan < 200 && this.lifespan > 140) {
    this.linelength = this.linelength + 15;
  } else if  (this.lifespan >= 140) {
    this.linelength = this.linelength - 5; //line get smaller
    if (this.linelength <= 0) {
      this.linelength = 0;
    }
  }
};

Particle.prototype.displayballs = function() {
  stroke(palettePastels[4], this.lifespan);
  strokeWeight(2);
  noFill()
  ellipse(this.position.x, this.position.y, this.size/2, this.size/2);
  noStroke();
  fill(palettePastels[2], this.lifespan);
  ellipse(this.position.x+10, this.position.y+10, this.size/2, this.size/2);
  noFill();
}

// Method to display, static stuff
Particle.prototype.display = function() {

 

  if (millis() % 50) {
    //draw rectangles
    push();
    translate(this.position.x, this.position.y);
    rotate(millis() / 400 % 360);
    stroke(palettePastels[3]);
    rect(5, 5, this.size, this.size);
    fill(palettePastels[0]);
    noStroke();
    rect(-5, -5, this.size / 1.5, this.size / 1.5);
    // rotate(-millis() / 400 % 360);
    pop();
  }

  // draw line 
  push()
  translate(this.origin.x, this.origin.y);
  var angle = atan2(this.position.y - this.origin.y, this.position.x - this.origin.x);
  rotate(angle);
  var distance = dist(this.position.x, this.position.y, this.origin.x, this.origin.y);
  if (distance > 100) {
    stroke(palettePastels[4]);
    if (distance - this.linelength > -100) {
      line(distance - this.linelength, 0, distance, 0); //?
    }
  }

  pop();
   fill(255);
  // textFont(NeutraBold);
  textSize(20);
  //print("heading is called");
  text("THANKS!", 0,0);

};

// Is the particle still useful?
Particle.prototype.isDead = function() {
  if (this.lifespan < 0) { //if the counter has counted down to zero
    return true; //true..yes, it's Dead
  } else {
    return false; //otherwise it's alive
  }
};

var ParticleSystem = function(position) {
  this.origin = position.copy();
  this.particles = [];
  this.count = 0;
};

ParticleSystem.prototype.addParticle = function() {
  if (this.count <= 20) {
    this.particles.push(new Particle(this.origin));
  }
  this.count++;
};

ParticleSystem.prototype.run = function() {
  for (var i = this.particles.length - 1; i >= 0; i--) {
    var p = this.particles[i];
    p.run();
    if (p.isDead()) { //if the function returns Dead=true
      this.particles.splice(i, 1); //kill this particle
    }
  }
};