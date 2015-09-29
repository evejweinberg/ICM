function spriteBalls(xPos, yPos) {
  this.x = xPos; //within this function, which var should I now use? xPos or this.x 
  this.y = yPos;
  this.targetX;
  this.targetY;
  this.distance = 20;
  this.lastTime = 0;
  this.endptA_x = -40;
  this.endptA_y = 40;
  this.step = 0.005; // createCanvas of each step (0.0 to 1.0)
  this.pct = 0.0; // Percentage traveled (0.0 to 1.0)
  this.startX = xPos;
  this.startY = yPos;

  // easing variable
  this.easing = 0.05;


  this.display = function() {
    fill(0, 152, 217);
    noStroke();
    ellipse(this.x + 5, this.y + 5, 5, 5);
    fill(242, 121, 218);
    ellipse(this.x, this.y, 5, 5);
    strokeWeight(2);
    stroke(150, 236, 255);
    ellipse(this.startX, this.startY, 12,12)

  }

  this.explode = function() {

    if (this.pct < 1.0) {
      print("sprite is exploding")
      this.startX = this.startX + ((this.endptA_x - this.startX) * this.pct);
      this.startY = this.startY + ((this.endptA_y - this.startX) * this.pct);
      this.pct += this.step; //add .005 each frame
    }

    this.dx = this.targetX - this.x;
    this.dy = this.targetY - this.y; //distance to target
    // this.dxLeft = this.targetX + this.x;
    // this.dyUp = this.targetY + this.y; //distance to target
    // lerp(start,stop,amt)

    if (abs(this.dy) > 1) { //if you are not on the Y target go there 
      this.y += this.dy * this.easing;
    }

    if (abs(this.dx) > 1) {
      this.x += this.dx * this.easing;
    }

    this.targetX = this.x + this.distance; //20px away
    this.targetY = this.y + this.distance;



    //loop it!
    if (millis() - this.lastTime > 1000) { //this will only last one second
      this.y = yPos;
      this.x = xPos;
      this.lastTime = millis(); //6sec
    }

  }
}