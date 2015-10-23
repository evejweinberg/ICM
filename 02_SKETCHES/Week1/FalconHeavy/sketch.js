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
  // for (var i = 0; i < letterTotal; i++) { //i want to create an array of variables names called letterpos_
  //   letterpos[i + 1] = letterwidth * i + lettergap * i;
  //   //do I need to push here?
  // }
  
  //create a  color array and set variables for typecolor

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
  // letterstroke = 7;
  // letterstrokeB = letterstroke - 2;
  // typecolor = 255;
  // for (var i =0; i<letterTotal;i++){
  //   letterpos[i+1] = letterwidth * i + lettergap * i;
  // }

  // letterpos1 = letterwidth * 0 + lettergap * 0;
  // letterpos2 = letterwidth * 1 + lettergap * 1;
  // letterpos3 = letterwidth * 2 + lettergap * 2;
  // letterpos4 = letterwidth * 3 + lettergap * 3;
  // letterpos5 = letterwidth * 4 + lettergap * 4;
  // letterpos6 = letterwidth * 5 + lettergap * 5;
  
 
 
  

  // LetterF(500,100);
  // print(1);
  // LetterA(400,300);
  // LetterL(400,600);

  // LetterO(100,900);
  // LetterN(400,900);
  

}

//-----G---------
function LetterG(xPos,yPos) {
  print("function G ran");
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


// //---------D--------
// function LetterD(xPos,yPos) {
//   // this.letterpos;
//   stroke(typecolor);
//   noFill();
//   strokeWeight(letterstroke);
//   rect(0, 0, letterwidth, letterheight, 0, letterrounding, letterrounding, 0);
//   strokeWeight(letterstrokeB);
//   stroke(240, 90);
//   line(letterwidth / 5, 0 + letterheight / 4, letterwidth / 5, letterheight * .9); //D
// }


// //----R-------------
// function LetterR(xPos,yPos) {
//   stroke(typecolor);
//   noFill();
//   strokeWeight(letterstroke);
//   rect(0, 0, letterwidth, letterxheight, 0, letterrounding, letterrounding, 0);
//   line(0, 0, 0, letterheight); //striaght down
//   // line(letterpos2+letterwidth,leterxheight, letterpos2, letterheight);
//   line(letterwidth * .7, letterxheight, letterwidth, letterheight);
//   strokeWeight(letterstrokeB);
//   stroke(240, 90);
//   line(letterwidth / 5, letterheight / 8, letterwidth / 5, letterxheight * .9); //R
// }



// //------A-----------
// function LetterA(xPos,yPos) {
//   stroke(typecolor);
//   noFill();
//   strokeWeight(letterstroke);
//   line(letterwidth / 2, 0, 0, letterheight);
//   line(letterwidth / 2, 0, letterwidth, letterheight);
//   line(letterwidth * .26, letterxheight, letterwidth * .66, letterxheight); //crossbar
// }





// //------O------
// function LetterO(xPos,yPos) {
//   stroke(typecolor);
//   noFill();
//   strokeWeight(letterstroke);
//   rect(0, 0, letterwidth, letterheight, letterrounding, letterrounding, letterrounding, letterrounding);
//   strokeWeight(letterstrokeB);
//   stroke(240, 90);
//   angleMode(DEGREES);
//   arc( letterwidth / 2, letterheight / 3, letterwidth / 1.7, letterwidth / 1.7, 180, 360); //O
// }

// //------N-----
// function LetterN(xPos,yPos) {
//   stroke(typecolor);
//   noFill();
//   strokeWeight(letterstroke);
//   line(0, 0, 0, letterheight);
//   line(0, 0, letterwidth, letterheight);
//   line(letterwidth, 0, letterwidth, letterheight);
//   strokeWeight(letterstrokeB);
//   stroke(240, 90);
//   line( letterwidth / 5, 0 + letterheight / 3, letterwidth / 5, letterheight); //N
// }

// //-----F-------
// function LetterF(xPos,yPos) {
//   stroke(typecolor);
//   noFill();
//   strokeWeight(letterstroke);
//   line(0, 0, 0, letterheight);
//   line(0, 0, letterwidth, 0);//top bar
//   line(0, letterxheight, letterwidth, letterxheight);//bottombar
//   // strokeWeight(letterstrokeB);
//   // stroke(240, 90);
//   // line(letterpos6 + letterwidth / 5, 0 + letterheight / 3, letterpos6 + letterwidth / 5, letterheight); //N
// }

// //-----L-------
// function LetterL(xPos,yPos) {
//   stroke(typecolor);
//   noFill();
//   strokeWeight(letterstroke);
//   line(0, 0, 0, letterheight);
//   line(0, letterheight, letterwidth, letterheight);//top bar
  
//   // strokeWeight(letterstrokeB);
//   // stroke(240, 90);
//   // line(letterpos6 + letterwidth / 5, 0 + letterheight / 3, letterpos6 + letterwidth / 5, letterheight); //N
// }