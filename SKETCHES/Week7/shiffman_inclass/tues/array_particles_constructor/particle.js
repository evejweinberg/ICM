 function Particle() {
   this.x = random(width);
   this.y = random(height);
   this.col = color(255, 0, 0, 100);

   this.display = function() {
     stroke(255);
     fill(this.col);
     ellipse(this.x, this.y, 24, 24);
   }

   this.move = function() {
     this.x += random(-1, 1);
     this.y += random(-1, 1);
   }

   this.clicked = function() {
     var d = dist(mouseX, mouseY, this.x, this.y);
     if (d < 12) {
       this.col = color(0, 0, 255, 100);
     }
   }
 }

   //var p = new Particle();