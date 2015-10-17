function Particle(x, y) {
  this.x = x;
  this.y = y;
  this.col = color(255, 100);
  this.display = function() {
    noStroke();
    fill(this.col);
    ellipse(this.x, this.y, 24, 24);

  }
  this.move = function() {
    this.x += random(-1, 1);
    this.y += random(-1, 1);
  }

  this.clicked = function() {
    var d = dist(this.x, this.y, mouseX, mouseY);
    if (d < 12) {
      this.col = color(255, 0, 0);
    }
  }
}