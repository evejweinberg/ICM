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

//create variables for the functions
var singlestar = []; //create a variable and get ready to store a list inside of this array
var bouquet = [];
var blipline;


function Blips(){
  //setup
  blipwidth = 6;
  this.blipheight = random(5,15); //randomly choose a starting X point
  
  //draw
  this.display = function(){
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
      xends.push(this.xstart + random(35, 70)); //create the actual list and store it
      yends.push(this.ystart + random(30, 100));
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
    stroke(150);
    strokeWeight(1);
    for (var k = 0; k < total; k++) {
      line(this.xstart + map(mouseX, 0, displayWidth, -40, 40), this.ystart + map(mouseY, 0, displayWidth, -30, 30), xends[k]+map(mouseX, 0, displayWidth, 0, 0), yends[k]+map(mouseY, 0, displayWidth, 0, 0));
      // fill(150);
      noFill();
      ellipse(xends[k] +map(mouseX, 0, displayWidth, 0, 0), yends[k]+map(mouseY, 0, displayWidth, 0, 0), 6, 6);
    }
    // fill(150);
     noFill();
    ellipse(this.xstart + map(mouseX, 0, displayWidth, -40, 40), this.ystart + map(mouseY, 0, displayWidth, -30, 30), 6, 6);
    noFill();
    pop();

  }
}



function setup() {

  createCanvas(displayWidth, displayHeight);

  blipline = new Blips();
  
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

  background(0, 0, 50);

  
  
  stroke(typecolor);
  noFill();
  strokeWeight(letterstroke);

  
  
  push();
  translate(200, 300);
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
  line(letterpos3 + letterwidth *.26, letterxheight, letterpos3 + letterwidth * .66, letterxheight); //crossbar
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




  for (var m = 0; m < singlestar.length; m++) {
    
    singlestar[m].display();
  }
  angleMode(RADIANS);
  for (var n = 0; n < bouquet.length; n++) {
    bouquet[n].display();
  }
  
  blipline.display();











}