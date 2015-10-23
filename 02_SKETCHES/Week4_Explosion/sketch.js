var LghtPur, DrkPur, Teal, DrkTeal, Orange;
var explode;

function setup() {
  createCanvas(300, 300);
  LghtPur = color(125, 88, 183);
  DrkPur = color(84, 46, 150);
  Teal = color(33, 173, 146);
  DrkTeal = color(25, 117, 99);
  Orange = color(255, 166, 105);

  palettePastels = [
    LghtPur, DrkPur, Teal, DrkTeal, Orange
  ]
  
   explode = new Explosion(width/2, height/2, random(360));

}

function draw() {
  background(0);
  explode.move();
  explode.display();
 


}

function Explosion(xPos, yPos, tempdirection) {
  this.speed = .5;
  this.direction = tempdirection;
  this.xPos = xPos;
  this.yPos = yPos;
  this.size = 40;
  this.linelength = 60;
  this.stepspeed = .005;
  this.pct = 0.0;
  this.target = [ //create an array of targets
    createVector(0,0), createVector(width,0), createVector(width,height), createVector(0,height)
    ];
  
  
  
  

  this.move = function() {
    this.size = this.size -.5; //get smaller
    if (this.size <= 0){ //don't go negative
      this.size = 0;
    }
    this.linelength = this.linelength -1; //line get smaller
    if (this.linelength <=0){
      this.linelength =0;
    }
    
    this.distance = dist(this.xPos, this.yPos, width/2,0); //
    // print("this.target[x]" + this.target[2][1])
    
    if (this.pct<1.0){
      this.xPos = this.xPos + this.distance * this.stepspeed;
    }
    //create attay of end pts based on a large circle
    //create vector of xPos & yPos
    //find dist of xPos,yPos to endPts
    
    
    // print("moving")
  }
  this.display = function() {

    fill(palettePastels[1]);
    ellipse(this.xPos, this.yPos, this.size, this.size);
    print("ellipse1 size:"+ this.size);
    fill(palettePastels[0]);
    rect(this.xPos, this.yPos, this.size, this.size);
    print("rect1 size:"+ this.size);
    noFill();
    stroke(palettePastels[3]);
    rect(this.xPos, this.yPos, this.size, this.size);
    stroke(palettePastels[4]);
    line(this.xPos, this.yPos, this.xPos + this.linelength, this.yPos + this.linelength);
    print("xPos =" + this.xPos);
  }




}