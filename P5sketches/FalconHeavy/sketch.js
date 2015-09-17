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
  for (var i = 0; i < letterTotal; i++) { //i want to create an array of variables names called letterpos_
    letterpos[i + 1] = letterwidth * i + lettergap * i;
    //do I need to push here?
  }

}

function draw() {
  background(0);
  var r = 3;
  letterwidth = 160;
  letterheight = 240;
  letterxheight = 130;
  lettergap = 40;
  letterrounding = 80;
  // for (var i =0; i<letterTotal;i++){
  //   letterpos[i+1] = letterwidth * i + lettergap * i;
  // }
  print(letterpos);
  // letterpos1 = letterwidth * 0 + lettergap * 0;
  letterpos2 = letterwidth * 1 + lettergap * 1;
  // letterpos3 = letterwidth * 2 + lettergap * 2;
  // letterpos4 = letterwidth * 3 + lettergap * 3;
  // letterpos5 = letterwidth * 4 + lettergap * 4;
  letterpos6 = letterwidth * 5 + lettergap * 5;
  letterstrokeB = letterstroke - 2;
  typecolor = color(255);
  

  // LetterF();
  // LetterA();
  // LetterL();
  // LetterG();
  // LetterO();
  // LetterN();
  
  //one traingle----------
  // var theta = this.velocity.heading() + radians(90);
  // fill(127);
  // stroke(200);
  // push();
  // translate(200,200);
  // beginShape();
  // vertex(0, r*2);
  // vertex(r, r*2);
  // vertex(r, r*2);
  // endShape(CLOSE);
  // pop();

}


//---------D--------
function LetterD() {
  // this.letterpos;
  stroke(typecolor);
  noFill();
  strokeWeight(letterstroke);
  rect(0, 0, letterwidth, letterheight, 0, letterrounding, letterrounding, 0);
  strokeWeight(letterstrokeB);
  stroke(240, 90);
  line(letterwidth / 5, 0 + letterheight / 4, letterwidth / 5, letterheight * .9); //D
}


//----R-------------
function LetterR() {
  stroke(typecolor);
  noFill();
  strokeWeight(letterstroke);
  rect(letterpos2, 0, letterwidth, letterxheight, 0, letterrounding, letterrounding, 0);
  line(letterpos2, 0, letterpos2, letterheight); //striaght down
  // line(letterpos2+letterwidth,leterxheight, letterpos2, letterheight);
  line(letterpos2 + letterwidth * .7, letterxheight, letterpos2 + letterwidth, letterheight);
  strokeWeight(letterstrokeB);
  stroke(240, 90);
  line(letterpos2 + letterwidth / 5, letterheight / 8, letterpos2 + letterwidth / 5, letterxheight * .9); //R
}



//------A-----------
function LetterA() {
  stroke(typecolor);
  noFill();
  strokeWeight(letterstroke);
  line(letterpos3 + letterwidth / 2, 0, letterpos3, letterheight);
  line(letterpos3 + letterwidth / 2, 0, letterpos3 + letterwidth, letterheight);
  line(letterpos3 + letterwidth * .26, letterxheight, letterpos3 + letterwidth * .66, letterxheight); //crossbar
}


//-----G---------
function LetterG() {
  // curve(letterpos4 + letterwidth, -100, letterpos4 + letterwidth, 0, letterpos4, letterheight, letterpos4, letterheight / 2)
  // ellipseMode(CENTER);
  stroke(typecolor);
  noFill();
  strokeWeight(letterstroke);
  angleMode(DEGREES);
  arc(letterpos4 + letterwidth / 2, letterheight / 2.5, letterwidth, letterheight * .8, 180, 350);
  arc(letterpos4 + letterwidth / 2, letterheight - letterheight / 2.5, letterwidth, letterheight * .8, 360, 180);
  // line(letterpos4 + letterwidth / 2, letterxheight, letterpos4 + letterwidth, letterxheight); //cross line
  line(letterpos4, letterheight * .4, letterpos4, letterheight * .6); //left straight line
  strokeWeight(letterstrokeB);
  stroke(240, 90);
  angleMode(DEGREES);
  arc(letterpos4 + letterwidth / 2, letterheight / 3, letterwidth / 1.7, letterwidth / 1.7, 180, 360); //G
}


//------O------
function LetterO() {
  stroke(typecolor);
  noFill();
  strokeWeight(letterstroke);
  rect(letterpos5, 0, letterwidth, letterheight, letterrounding, letterrounding, letterrounding, letterrounding);
  strokeWeight(letterstrokeB);
  stroke(240, 90);
  angleMode(DEGREES);
  arc(letterpos5 + letterwidth / 2, letterheight / 3, letterwidth / 1.7, letterwidth / 1.7, 180, 360); //O
}

//------N-----
function LetterN() {
  stroke(typecolor);
  noFill();
  strokeWeight(letterstroke);
  line(letterpos6, 0, letterpos6, letterheight);
  line(letterpos6, 0, letterpos6 + letterwidth, letterheight);
  line(letterpos6 + letterwidth, 0, letterpos6 + letterwidth, letterheight);
  strokeWeight(letterstrokeB);
  stroke(240, 90);
  line(letterpos6 + letterwidth / 5, 0 + letterheight / 3, letterpos6 + letterwidth / 5, letterheight); //N
}

//-----F-------
function LetterF() {
  stroke(typecolor);
  noFill();
  strokeWeight(letterstroke);
  line(letterpos6, 0, letterpos6, letterheight);
  line(letterpos6, 0, letterpos6 + letterwidth, 0);//top bar
  line(letterpos6, letterxheight, letterpos6 + letterwidth, letterxheight);//bottombar
  // strokeWeight(letterstrokeB);
  // stroke(240, 90);
  // line(letterpos6 + letterwidth / 5, 0 + letterheight / 3, letterpos6 + letterwidth / 5, letterheight); //N
}

//-----L-------
function LetterL() {
  stroke(typecolor);
  noFill();
  strokeWeight(letterstroke);
  line(letterpos3, 0, letterpos3, letterheight);
  line(letterpos3, letterheight, letterpos3 + letterwidth, letterheight);//top bar
  
  // strokeWeight(letterstrokeB);
  // stroke(240, 90);
  // line(letterpos6 + letterwidth / 5, 0 + letterheight / 3, letterpos6 + letterwidth / 5, letterheight); //N
}