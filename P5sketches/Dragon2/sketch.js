var letterwidth;
var letterheight;
var letterxheight;
var lettergap;
var letterrounding;
var letterstroke;
var lettercount;
var typecolor;
var blipwidth;
var blipheight;
//BGdots
var unit = 100;
var Fullcount;
var dots = [];
var b1, b2, c1, c2; //background gradient
var Y_AXIS = 1;
var X_AXIS = 2;

//create variables for the functions
var singlestar = []; //create a variable and get ready to store a list inside of this array
var bouquet = [];
// var blipline;


function Blips(xloc, yloc) {

  ellipse(xloc, yloc, size - i * steps, size - i * steps);
  //setup
  blipwidth = 6;
  this.blipheight = random(5, 15); //randomly choose a starting X point

  //draw
  this.display = function() {
    fill(255);
    noStroke();
    for (var j = 0; j < 20; j++) {
      rect(j + 100, 0, blipwidth, blipheight);
    }
  }
}

function Stars() {
  this.xstart = random(100, width - 100); //randomly choose a starting X point
  this.ystart = random(100, height - 100); //randonly choose a starting Y point
  var starsize = 5;
  var speed = .2;


  this.display = function() {
    fill(230);
    noStroke();
    ellipse(this.xstart, this.ystart, starsize, starsize);
    starsize = starsize + speed;

    if (starsize > 10 || starsize < 3) {
      speed = speed * -1;
    }

  }
}

function OneBouquet() {
  //setup
  this.xstart = random(100, width - 100); //randomly choose a starting X point
  this.ystart = random(100, height - 100); //randonly choose a starting Y point
  var xends = []; //a future list of Xends
  var yends = []; //a future list of Yends
  this.rotation = random(0, 2 * PI); //360 degrees rotation, random
  total = 4;
  for (var i = 0; i < total; i++) {
    xends.push(this.xstart + random(35, 200)); //create the actual list and store it
    yends.push(this.ystart + random(30, 150));
  }
  // xends1 = this.xstart +70;
  // xends2 = this.xstart +50;
  // xends3 = this.xstart +40;
  // xends4 = this.xstart +35;
  // yends1 = this.ystart +70;
  // yends2 = this.ystart+50;
  // yends3 = this.ystart+40;
  // yends4 = this.ystart+35;




  this.display = function() {
    push();
    translate(this.xstart, this.ystart);
    rotate(this.rotation + frameCount / 900); //have each one rotate slowly, but why does it seem like they have one common rotational pivot point?

    noFill();
    stroke(150,80);
    strokeWeight(1);
    for (var k = 0; k < total; k++) {
      line(this.xstart + map(mouseX, 0, displayWidth, -40, 40), this.ystart + map(mouseY, 0, displayWidth, -30, 30), xends[k] + map(mouseX, 0, displayWidth, 0, 0), yends[k] + map(mouseY, 0, displayWidth, 0, 0));
      // fill(150);
      noFill();
      ellipse(xends[k] + map(mouseX, 0, displayWidth, 0, 0), yends[k] + map(mouseY, 0, displayWidth, 0, 0), 20, 20);
    }
    // fill(150);
    noFill();
    ellipse(this.xstart + map(mouseX, 0, displayWidth, -40, 40), this.ystart + map(mouseY, 0, displayWidth, -30, 30), 30, 30);
    noFill();
    pop();

  }
}



function setup() {

  createCanvas(displayWidth, displayHeight);
  b1 = color(0, 0, 60);
  b2 = color(0, 0, 0);

  noStroke();
  var wideCount = width / unit; //number of horizontal dots is total width/unit
  var highCount = height / unit; //number of vertical dots is total height/unit
  Fullcount = wideCount * highCount; //Fullcount is combo of both
  var index = 0; //the first index is zero, so dots0, dots1, dots2. . .
  for (var y = 0; y < highCount; y++) { //run for loop for height
    for (var x = 0; x < wideCount; x++) { //run for loop for width
      dots[index++] = new Module(x * unit, y * unit, unit, unit, unit); //make a list of dots and they will each be a new Module
    }
  }


  for (var m = 0; m < 50; m++) {
    singlestar.push(new Stars());
  }
  for (var n = 0; n < 50; n++) {
    bouquet.push(new OneBouquet());
  }

  letterwidth = 80;
  letterheight = 120;
  letterxheight = 65;
  lettergap = 20;
  letterrounding = 40;
  letterstroke = 4;
  lettercount = 30;
  typecolor = color(255, 255, 255);






  letterpos2 = letterwidth + lettergap;
  letterpos3 = letterwidth * 2 + lettergap * 2;
  letterpos4 = letterwidth * 3 + lettergap * 3;
  letterpos5 = letterwidth * 4 + lettergap * 4;
  letterpos6 = letterwidth * 5 + lettergap * 5;
  //want to turn this into a forloop/array
  //   for(var i=0; i<lettercount; i++){
  //   letterspace[i] = letterwidth*i+gap*i;
  //   //create a new list of variables called letterposX for all 30 letters
  // }

}

function draw() {
  // background(0, 0, 50);
  setGradient(0, 0, width/2, height, b2, b1, X_AXIS);
  setGradient(width/2, 0, width/2, height, b1, b2, X_AXIS);

  for (var i = 0; i < Fullcount; i++) {
    dots[i].draw();
  }


  // var blipheight = random(5,15);
  // fill(255);
  //   noStroke();
  //   for (var j = 0; j < 20; j++) {
  //     rect(j + 100, 200, blipwidth, blipheight);
  //   }

  push();
  translate(width/2, height/2);
  angleMode(DEGREES);
  noFill();
  var circCenter = 0;
  var circDiam = 700;
  strokeWeight(4);
  stroke(color(248, 73, 41));
  arc(circCenter, circCenter, circDiam, circDiam, 0, 40);
  stroke(color(69, 97, 220));
  arc(circCenter, circCenter, circDiam, circDiam, 40, 80);
  stroke(color(59, 50, 89));
  arc(circCenter, circCenter, circDiam, circDiam, 80, 120);
  stroke(color(69, 97, 220));
  arc(circCenter, circCenter, circDiam, circDiam, 120, 160);
  stroke(color(251, 151, 162));
  arc(circCenter, circCenter, circDiam, circDiam, 160, 200);
  stroke(color(251, 248, 234));
  arc(circCenter, circCenter, circDiam, circDiam, 200, 240);
  stroke(color(240, 206, 181));
  arc(circCenter, circCenter, circDiam, circDiam, 240, 280);
  stroke(color(69, 97, 220));
  arc(circCenter, circCenter, circDiam, circDiam, 280, 320);
  stroke(color(59, 50, 89));
  arc(circCenter, circCenter, circDiam, circDiam, 320, 360);
  pop();

  stroke(typecolor);
  noFill();
  strokeWeight(letterstroke);
  push();
  translate(260, 360);
  scale(2, 2);

  //---------D--------
  rect(0, 0, letterwidth, letterheight, 0, letterrounding, letterrounding, 0);
  //----R-------------
  rect(letterpos2, 0, letterwidth, letterxheight, 0, letterrounding, letterrounding, 0);
  line(letterpos2, 0, letterpos2, letterheight); //striaght down
  // line(letterpos2+letterwidth,leterxheight, letterpos2, letterheight);
  line(letterpos2 + letterwidth * .7, letterxheight, letterpos2 + letterwidth, letterheight);
  //------A-----------
  line(letterpos3 + letterwidth / 2, 0, letterpos3, letterheight);
  line(letterpos3 + letterwidth / 2, 0, letterpos3 + letterwidth, letterheight);
  line(letterpos3 + letterwidth * .26, letterxheight, letterpos3 + letterwidth * .66, letterxheight); //crossbar
  //-----G---------
  // curve(letterpos4 + letterwidth, -100, letterpos4 + letterwidth, 0, letterpos4, letterheight, letterpos4, letterheight / 2)
  // ellipseMode(CENTER);
  angleMode(DEGREES);
  arc(letterpos4 + letterwidth / 2, letterheight / 2.5, letterwidth, letterheight * .8, 180, 350);
  arc(letterpos4 + letterwidth / 2, letterheight - letterheight / 2.5, letterwidth, letterheight * .8, 360, 180);
  line(letterpos4 + letterwidth / 2, letterxheight, letterpos4 + letterwidth, letterxheight); //cross line
  line(letterpos4, letterheight * .4, letterpos4, letterheight * .6); //left straight line
  //------O------
  rect(letterpos5, 0, letterwidth, letterheight, letterrounding, letterrounding, letterrounding, letterrounding);
  //------N-----
  line(letterpos6, 0, letterpos6, letterheight);
  line(letterpos6, 0, letterpos6 + letterwidth, letterheight);
  line(letterpos6 + letterwidth, 0, letterpos6 + letterwidth, letterheight);

pop();




  // for (var m = 0; m < singlestar.length; m++) {

  //   singlestar[m].display();
  // }
  angleMode(RADIANS);
  for (var n = 0; n < bouquet.length; n++) {
    bouquet[n].display();
  }

  // blipline.display();
}

function Module(_xOff, _yOff, _x, _y, _unit) {
  this.xOff = _xOff; //offset?
  this.yOff = _yOff;
  this.x = _x;
  this.y = _y;
  this.unit = _unit;
  this.Dotsize = 5;
  this.Dotspeed = .2;

}


// Custom method for drawing the object
Module.prototype.draw = function() {
  fill(color(3, 170, 204, 90)); //teal
  ellipse(this.xOff + this.x, this.yOff + this.y, this.Dotsize, this.Dotsize); //x is xOff + xvalue, y = yOff + y value, and width&height is 6
  // ellipse(this.xOff + this.x, this.yOff + this.y, 5, 5); //x is xOff + xvalue, y = yOff + y value, and width&height is 6
  this.Dotsize = this.Dotsize + this.Dotspeed;

    if (this.Dotsize > 10 || this.Dotsize < 3) {
      this.Dotspeed = this.Dotspeed * -1;
    }


}


function mouseMoved() {

  letterstroke = map(mouseX, 0, width, 1, 6);
  lettergap = map(mouseY, 0, width, 20, 100); //why does this not work?
  letterwidth = map(mouseX, 0, width, 20, 70);

}


function setGradient(x, y, w, h, c1, c2, axis) {

  noFill();

  if (axis == Y_AXIS) {  // Top to bottom gradient
    for (var i = y; i <= y+h; i++) {
      var inter = map(i, y, y+h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x+w, i);
    }
  }  
  else if (axis == X_AXIS) {  // Left to right gradient
    for (var i = x; i <= x+w; i++) {
      var inter = map(i, x, x+w, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y+h);
    }
  }
}