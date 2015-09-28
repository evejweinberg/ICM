function spriteBalls(xPos, yPos) {
  this.x = xPos;
  this.y = yPos;
  this.targetX;
  this.targetY;
  this.distance = 20;
  this.lastTime = 0;
  

  // easing variable
  this.easing = 0.05;


  this.display = function() {
    fill(0, 152, 217);
    noStroke();
    ellipse(this.x + 5, this.y + 5, 5, 5);
    fill(242, 121, 218);
    ellipse(this.x, this.y, 5, 5);
    strokeWeight(2);
    stroke(150,236,255);
    line(this.x, this.y,this.x+10, this.y+10)

  }

  this.explode = function() {
    
    this.dx = this.targetX - this.x;
    this.dy = this.targetY - this.y; //distance to target
    // this.dxLeft = this.targetX + this.x;
    // this.dyUp = this.targetY + this.y; //distance to target
    // lerp(start,stop,amt)
    
    if(abs(this.dy) > 1) { //if you are not on the Y target go there 
    this.y += this.dy * this.easing;
  }
  
  if(abs(this.dx) > 1) {
    this.x += this.dx * this.easing;
  }
  
  this.targetX = this.x + this.distance;  //20px away
  this.targetY = this.y + this.distance;

  
 
  //loop it!
  if (millis() - this.lastTime > 1000) { //this will only last one second
     this.y = yPos;
     this.x = xPos;
    this.lastTime = millis(); //6sec
  }

  }
}