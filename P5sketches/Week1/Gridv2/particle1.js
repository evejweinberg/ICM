

// A simple Particle class
var Particle = function(position) { //we will put a vector in here
  this.acceleration = createVector(random(-.1, .1), random(-.1, .1));
  this.velocity = createVector(random(-1, 1), random(-1, 0));
  this.position = position.copy();
  this.lifespan = 255.0;
  this.size = 40; //particle size
  this.linelength = 120;
};

Particle.prototype.run = function() {
  this.update(); //call update
  this.display(); //call display
};

// Method to update position
Particle.prototype.update = function() {
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespan -= 4;
  this.size = this.size - .35; //get smaller
  if (this.size <= 0) { //don't go negative
    this.size = 0;
  }
  this.linelength = this.linelength - 1; //line get smaller
  if (this.linelength <= 0) {
    this.linelength = 0;
  }
};

// Method to display, static stuff
Particle.prototype.display = function() {
  stroke(palettePastels[4], this.lifespan);
  // stroke(200, this.lifespan);
  strokeWeight(2);
  fill(palettePastels[2], this.lifespan);
  ellipse(this.position.x, this.position.y, this.size, this.size);
  noFill();
  
  push();
  translate(this.position.x, this.position.y);
  rotate(millis()/400 %360);
    stroke(palettePastels[4]);
  line(0,0, this.linelength, this.linelength);
  stroke(palettePastels[3]);
  rect(0,0, this.size, this.size);
  pop();

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
};

ParticleSystem.prototype.addParticle = function() {
  this.particles.push(new Particle(this.origin));
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