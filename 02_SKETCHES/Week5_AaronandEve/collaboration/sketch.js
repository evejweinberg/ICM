var rings = [];
var total = 50;
var decrement = 3;
var distance = 10;
var squares = [];
var globalcounter = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);



}

function draw() {
    globalcounter++;
  background(0);
  blendMode(ADD);


  var newRing = new Ring(mouseX + random(-100, 230), mouseY + random(-100, 230));
  var newSquare = new Square(mouseX + random(-100, 230), mouseY + random(-100, 230),100,100,30,30);
  rings.push(newRing);
  squares.push(newSquare);

  for (var i = rings.length - 1; i > 0; i--) {
   
      squares[i].display();
    squares[i].dissolve();
    squares[i].follow();

  }

  for (var i = squares.length - 1; i > 0; i--) {
   
      squares[i].display();
    squares[i].dissolve();
    squares[i].follow();

  }
  for (var i = 0; i < rings.length; i++) {
    if (dist(mouseX, mouseY, rings[i].x, rings[i].y) < distance) {
      rings.splice(i, 1);
      squares.splice(i, 1);
    }
  }

}



function Ring(x, y) {
  this.x = x;
  this.y = y;
  this.external_radius = 140;
  this.internal_radius = 50;
  this.R = random(255);
  this.G = random(255);
  this.B = random(255);


  this.display = function() {
    for (var i = this.internal_radius; i < this.external_radius; i++) {
      noFill();

      stroke(this.R, this.G, this.B);
      ellipse(this.x, this.y, i, i)
    }
    //blendMode(SCREEN);
  }


  this.dissolve = function() {
    this.external_radius = this.external_radius - decrement;
    if (this.external_radius <= this.internal_radius) {
      this.external_radius = this.internal_radius;
    }
  }

  this.follow = function() {
    this.x = lerp(this.x, mouseX, random(0, 0.04));
    this.y = lerp(this.y, mouseY, random(0, 0.04));
  }
}


function Square(x, y, w, h, tw, th) {
  this.x = x;
  this.y = y;
  this.h = h;
  this.w = w;
  this.th = th;
  this.tw = tw;
  this.revolve = 0;
  this.dissolver = 20;
    this.R = random(255);
  this.G = random(255);
  this.B = random(255);


  this.display = function() {
    noFill();
    stroke(this.R, this.G, this.B);
    strokeWeight(this.dissolver);
    push();
    translate(this.x, this.y);
    rotate(this.revolve);
    rectMode(CENTER);
    rect(0, 0, this.w, this.h);
    pop();
  }
  
  this.follow = function() {
    this.x = lerp(this.x, mouseX, random(0, 0.04));
    this.y = lerp(this.y, mouseY, random(0, 0.04));
  }

  this.dissolve = function() {
    if (globalcounter % 100 == 0){
      this.tw = random(600);
      this.th = random(600);
    }
    this.w = lerp(this.w, this.tw, .1);
    this.h = lerp(this.h, this.th, .1);
    this.dissolver--;
    if(this.dissolver <=0){
      this.dissolver =0;
    }
    this.revolve++;
  }
}