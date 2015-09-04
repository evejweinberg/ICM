var bike;  // Declare object

function setup() {
  createCanvas(710, 400);
  // Create object
  bike = new OneBike();
  bike = new OneBike();
  colorMode(HSB, 360, 100, 100);
      noLoop();
}

function draw() {
  var sat = 100;
    var bri = 100;
    
    var hueChange1 = int(random(0, 360));
    var hueChange2 = int(random(0, 360));
    var hueChange3 = int(random(0, 360));
    var hueChange4 = int(random(0, 360));
    var hueChange5 = int(random(0, 360));
    var color1 = color(hueChange1, sat, bri);
    var color2 = color(hueChange2, sat, bri);
    var color3 = color(hueChange3, sat, bri);
    var color4 = color(hueChange4, sat, bri);
    var color5 = color(hueChange5, sat, bri);
background(hueChange5, sat-50, bri);
  bike.move();
  push();
  translate(100,200);
  bike.display();
  pop();
}

// OneBike class
function OneBike() {
  this.seatwidth = 20;
  this.strokeweight = 8;
  this.wheel1start = 0; //center of back wheel
  this.wheeldist = 140;
  this.wheelsize = 60;
 


  this.move = function() {
    // this.x += random(-this.speed, this.speed);
    // this.y += random(-this.speed, this.speed);
  };

  this.display = function() {
    // ellipse(this.x, this.y, this.diameter, this.diameter);
    
    //bike varibles
    var sat = 150;
    var bri = 255;
    
    
 
    
    var topbar = this.wheel1start-this.wheelsize;
    var barlength = this.wheeldist/2;
    var hueChange1 = int(random(0, 360));
    var hueChange2 = int(random(0, 360));
    var hueChange3 = int(random(0, 360));
    var hueChange4 = int(random(0, 360));
    var hueChange5 = int(random(0, 360));
    var color1 = color(hueChange1, sat, bri);
    var color2 = color(hueChange2, sat, bri);
    var color3 = color(hueChange3, sat, bri);
    var color4 = color(hueChange4, sat, bri);
    var color5 = color(hueChange5, sat, bri);
    
    strokeWeight(this.strokeweight);
    stroke(color1);
    fill(color2);
    ellipse(this.wheel1start,this.wheel1start,this.wheelsize,this.wheelsize); //wheel 1
    ellipse(this.wheeldist,0,this.wheelsize,this.wheelsize);
     stroke(color3);
    line(this.wheel1start, this.wheel1start, barlength, this.wheel1start); //bottom
    line(this.wheel1start, this.wheel1start, this.wheel1start+this.wheeldist/3, topbar); //towards seat
    line(this.wheel1start+this.wheeldist/3, topbar, barlength+this.wheel1start+this.wheeldist/3, topbar); //top
    line(barlength, this.wheel1start, this.wheel1start+this.wheeldist/3-5, topbar-12); //pedal to seat
    line(barlength, this.wheel1start, barlength+this.wheel1start+this.wheeldist/3, topbar); //pedals to handles
    line(barlength+this.wheel1start+this.wheeldist/3, topbar-12, this.wheeldist, this.wheel1start); //front wheel to handles
    stroke(color4);
    line(this.wheel1start+this.wheeldist/3-this.seatwidth/2, topbar-12, this.wheel1start+this.wheeldist/3+this.seatwidth, topbar-12);//seat
    line(barlength+this.wheel1start+this.wheeldist/3, topbar-12, barlength+this.wheel1start+this.wheeldist/3+this.seatwidth, topbar-12);//handles
  };
}