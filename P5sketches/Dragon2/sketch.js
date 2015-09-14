var letterwidth;
var letterheight;
var letterxheight;
var lettergap;
var letterrounding;
var letterstroke;
var lettercount;
var typecolor;
var letterstrokeB;
//BGdots
var unit = 100;
var Fullcount;
var dots = [];
var b1, b2, c1, c2; //background gradient
var Y_AXIS = 1;
var X_AXIS = 2;
var bliplineTotal =20;
var linespeed = 0;

// var colorA = color(248, 73, 41);
// var colorB = color(69, 97, 220);
// var colorC = color(59, 50, 89);
// var colorD = color(251, 151, 162);
// var colorE = color(251, 248, 234);
// var colorF = color(240, 206, 181);


//create variables for the functions
var singlestar = []; //create a variable and get ready to store a list inside of this array
var bouquet = [];
var blipline = [];



// function Triangle(){
//   noFill();
//   stroke(251, 151, 162);
//   triangle(30, 75, 58, 20, 86, 75);
//   if (frameCount%20 == 0){
//   }
// }

function Blips() {
  this.blipwidth = 5;
  this.blipheight = [];
  this.total = 20;

  for (var i = 0; i < this.total; i++) {
    this.blipheight[i] = int(random(5, 15)); //randomly choose a starting X point
   
  }
  
  this.display = function(x,y){
    push();
    translate(x,y);
    // fill(255);
    // noStroke();
    stroke(255);
    strokeWeight(letterstrokeB);
    for (var j = 0; j < 16; j++) {
      // rect(j * 10, 10, this.blipwidth, this.blipheight[j]); //x,y,w,h
      line(j * 10,10,j * 10,10+this.blipheight[j]);
      if(letterstrokeB < 0){
        letterstrokeB ===0;
      }
    }
    pop();
    
    // print(this.blipheight);
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
    xends.push(this.xstart + random(-75, 100)); //create the actual list and store it
    yends.push(this.ystart + random(-70, 100));
  }




  this.display = function() {
    push();
    translate(this.xstart, this.ystart);
    rotate(this.rotation + frameCount / 900); //have each one rotate slowly, but why does it seem like they have one common rotational pivot point?
     this.mapDist = 100;
    this.offsetX = map(mouseX, 0, displayWidth, -1*this.mapDist, this.mapDist);
    this.offsetY = map(mouseY, 0, displayHeight, -1*this.mapDist, this.mapDist);
    this.FinalptX = this.xstart + this.offsetX;
    this.FinalptY = this.ystart + this.offsetY;
    this.d = int(dist(mouseX, mouseY, this.FinalptX, this.FinalptY));
  
    
    
    

    noFill();
    stroke(150,80);
    strokeWeight(1);
  
    for (var k = 0; k < total; k++) {
      line(this.FinalptX , this.FinalptY, xends[k], yends[k]);
      noFill();
      ellipse(xends[k], yends[k], 20, 20);
    }
    
    noFill();
    ellipse(this.FinalptX, this.FinalptY, 30, 30);
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
  for (var n = 0; n < 70; n++) { //how many bouquet do you want to instantiate?
    bouquet.push(new OneBouquet());
  }
  
  for (var o = 0; o <bliplineTotal; o++){
    blipline.push(new Blips());
  }

  letterwidth = 160;
  letterheight = 240;
  letterxheight = 130;
  lettergap = 40;
  letterrounding = 80;
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
 letterstrokeB = letterstroke-2;
 
  for (var i = 0; i < Fullcount; i++) {
    dots[i].draw();
  }
  
 if(mouseX>100 && mouseX<300 && mouseY>100 && mouseY<300){
   var grow = 10;
   noFill();
  stroke(251, 151, 162); //will this fade it out?
  push();
  triangle(100,100,300,100,200,300);
 pop();
 print(grow);
 }
 


 
  
  //------------LINES!!!!!-------------------------
  linespeed = linespeed+25;
  var LineTopLeft = linespeed-200;
  var LineTopMiddle = linespeed;
  stroke(color(248, 73, 41));
  strokeWeight(5);
  line(LineTopLeft,LineTopLeft,100+linespeed,100+linespeed);
  if (LineTopLeft>height+200){
    linespeed=0;
  }
  // stroke(color(69, 97, 220)); //blue
  // strokeWeight(5);
  // line(700+LineTopMiddle,700+-1*LineTopMiddle,700-linespeed,700-linespeed*-1);

  stroke(color(251, 248, 234)); //offwhite 2nd
  strokeWeight(5);
  line(width-100-(linespeed),width-100-(linespeed),width-linespeed,width-linespeed);
  
  stroke(color(251, 248, 234));//offwhite
  strokeWeight(5);
  line(600-linespeed,600-linespeed,900-linespeed,900-linespeed);
  
  push();
  translate(700,0);
  stroke(color(59, 50, 89));
  line(LineTopLeft,LineTopLeft,100+linespeed,100+linespeed);
  pop();
  
  stroke(color(69, 97, 220)); //blue
  strokeWeight(5);
  line(1200+linespeed,1200-linespeed,1500+linespeed,900-linespeed);
  
  stroke(color(251, 151, 162)); //pink?
  strokeWeight(5);
  line(100+linespeed*1.3,1400-linespeed*1.3,500+linespeed,1000-linespeed);


  
 

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

 //----------WORD-------------
  push();
  stroke(typecolor);
  noFill();
  strokeWeight(letterstroke);
  translate(width/2-(letterpos3+lettergap+letterwidth),height/2-(letterheight/2)+map(mouseY,0,height,-40,40));
  // scale(2, 2);
     if (letterstrokeB <0){
       letterstrokeB = 0;
     }
  
  

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
  
  //------------SECONDARY LETTER MARKS!!!!!!!------------
  strokeWeight(letterstrokeB);
  stroke(240,90);
  line(letterpos6+letterwidth/5, 0+letterheight/3, letterpos6+letterwidth/5, letterheight); //N
  line(letterpos2+letterwidth/5, letterheight/8, letterpos2+letterwidth/5, letterxheight*.9); //R
   line(letterwidth/5, 0+letterheight/4, letterwidth/5, letterheight*.9); //D
   angleMode(DEGREES);
   arc(letterpos5 + letterwidth / 2, letterheight/3, letterwidth/1.7, letterwidth/1.7, 180, 360); //O
     arc(letterpos4 + letterwidth / 2, letterheight/3, letterwidth/1.7, letterwidth/1.7, 180, 360); //G
     
  
     
       for (var o = 0; o < 6; o++) {
    blipline[o].display(0+o*200,-50);
    push();
    blipline[o].display(0+o*200,letterheight+50);
    pop();

  }
pop();



  angleMode(RADIANS);
  for (var n = 0; n < bouquet.length; n++) {
    bouquet[n].display(n*10,n*10);
  }


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

    if (this.Dotsize > 12 || this.Dotsize < 3) {
      this.Dotspeed = this.Dotspeed * -1;
    }


}


function mouseMoved() {
if (mouseX<width/2){
  letterstroke = map(mouseX, 0, width/2, 1, 8);

} else {
  letterstroke = map(mouseX, width/2, width, 8, 1);
}
  lettergap = map(mouseX, 0, width, -40, 40); //why does this not work?
  

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