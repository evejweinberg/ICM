function Square1(x, y, w, h, tw, th) {
  this.x = x;
  this.y = y;
  this.h = h;
  this.w = w;
  this.th = th;
  this.tw = tw;
  this.revolve = 0;
 this.varsw = 1;


  this.display = function() {
    noFill();
    stroke(255);
    strokeWeight(this.varsw);
    push();
    translate(this.x, this.y);
    rotate(this.revolve);
    rectMode(CENTER);
    rect(0, 0, this.w, this.h);
    pop();
  }

  this.update = function() {
    if (this.w) {
      //this.revolve
    }
    this.w = lerp(this.w, this.tw, .1);
    this.h = lerp(this.h, this.th, .1);
     this.varsw = map(this.tw,200,1200,1,50);
  }
}