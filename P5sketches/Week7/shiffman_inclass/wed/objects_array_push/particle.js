function Particle() {
  this.x = random(width);
  this.y = random(height);
  
  this.display = function() {
    noStroke();
    fill(255, 100);
    ellipse(this.x, this.y, 24, 24);

  }
  this.move = function() {
    this.x += random(-1, 1);
    this.y += random(-1, 1);
  }
  
  this.clicked = function() {


  }
}
