var letterwidth;
var letterheight;
var letterxheight;
var lettergap;
var letterrounding;
var letterstroke;
var lettercount;
var typecolor;
var letterstrokeB;
var letterTotal = 25;
var letterpos = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  background(0);
  var r = 3;
  letterwidth = 160;
  letterheight = 240;
  letterxheight = 130;
  lettergap = 40;
  letterrounding = 80;
  

  LetterG(60,50);

}


//-----G---------
function LetterG(xPos,yPos) {
  // curve(letterpos4 + letterwidth, -100, letterpos4 + letterwidth, 0, letterpos4, letterheight, letterpos4, letterheight / 2)
  // ellipseMode(CENTER);

  push();
  translate(this.xPos, this.yPos);
  stroke(255);
  noFill();
  strokeWeight(10);
  angleMode(DEGREES);
  arc(letterwidth / 2, letterheight / 2.5, letterwidth, letterheight * .8, 180, 350);
  arc(letterwidth / 2, letterheight - letterheight / 2.5, letterwidth, letterheight * .8, 360, 180);
  line(letterwidth / 2, letterxheight,letterwidth, letterxheight); //cross line
  line(letterheight * .4, 0, letterheight * .6, 0); //left straight line
  strokeWeight(letterstrokeB);
  stroke(240, 90);
  angleMode(DEGREES);
  arc(letterwidth / 2, letterheight / 3, letterwidth / 1.7, letterwidth / 1.7, 180, 360); //G
  pop();
}