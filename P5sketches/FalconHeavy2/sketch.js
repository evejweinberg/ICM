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

// var c = color(255, 204, 0);

function preload(){
  // Sound1 = loadSound('assets/');
  buttonGraphic = loadImage("Assets/button_01.gif");
  buttonGraphicAlt = loadImage("Assets/buttonstill.png");
}

function setup() {
  
  createCanvas(windowWidth, windowHeight); //this is not updating?
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
  letterstroke = 7;
  letterstrokeB = letterstroke - 2;
  typecolor = 255;
  var wordTopHeight = 200;
  // for (var i =0; i<letterTotal;i++){
  //   letterpos[i+1] = letterwidth * i + lettergap * i;
  // }

  var letterpos1 = letterwidth * 0 + lettergap * 0;
  var letterpos2 = letterwidth * 1 + lettergap * 1;
  var letterpos3 = letterwidth * 2 + lettergap * 2;
  var letterpos4 = letterwidth * 3 + lettergap * 3;
  var letterpos5 = letterwidth * 4 + lettergap * 4;
  var letterpos6 = letterwidth * 5 + lettergap * 5;
  var letterpos7 = 2000;
  var scaleTypeDown = 1;
  
  if ((windowWidth < 1000) && (windowHeight < 700)) { // display message if screen resolution is too low
        fill(255);
        ellipse(100,100,30,30);

    }


if (letterpos7>windowWidth){ //how would I make their scale related to the window width, map 1 to 
  scaleTypeDown = scaleTypeDown*.85;
} else if (letterpos7<windowWidth){
    scaleTypeDown = scaleTypeDown*1.85;
}


push();
scale(scaleTypeDown,scaleTypeDown);//how would I make their scale related to the window width, map 1 to 
  LetterF(letterpos1, wordTopHeight);
  LetterA(letterpos2, wordTopHeight);
  LetterL(letterpos3, wordTopHeight);
  LetterC(letterpos4, wordTopHeight);
  LetterO(letterpos5, wordTopHeight);
  LetterN(letterpos6, wordTopHeight);
  pop();
  
  noFill();
  strokeWeight(letterstrokeB);
  stroke(typecolor);
  // fill(255);
  rect(windowWidth-(windowWidth*.95), windowHeight-(windowHeight*.95),windowWidth*.9,windowHeight*.9);
  
  image(buttonGraphic, 10,10,30,30); //why doesn't the gif play?
    image(buttonGraphicAlt, 100,100,30,30);
   



}//-----------------END OF DRAW-----------------------END OF DRAW-----------------END OF DRAW---------------------------------------------

function Button(xPos, yPos){
  //fill with gif
  rect(xPos, yPox, 40,40);
}

//-----C---------
function LetterC(xPos, yPos) { //define arguments and then use them inside the function to be updated in draw
  push();
  translate(xPos, yPos);
  stroke(typecolor);
  noFill();
  strokeWeight(letterstroke);
  angleMode(DEGREES);
  arc(letterwidth / 2, letterheight / 2.5, letterwidth, letterheight * .8, 180, 350);
  arc(letterwidth / 2, letterheight - letterheight / 2.5, letterwidth, letterheight * .8, 360, 180);
  line(0,letterheight * .4,  0,letterheight * .6); //left straight line
  strokeWeight(letterstrokeB);
  stroke(240, 90);
  angleMode(DEGREES);
  arc(letterwidth / 2, letterheight / 3, letterwidth / 1.7, letterwidth / 1.7, 180, 360); //G
  pop();
}


//------A-----------
function LetterA(xPos, yPos) {
  push();
  translate(xPos, yPos);
  stroke(typecolor);
  noFill();

  strokeWeight(letterstroke);
  line(letterwidth / 2, 0, 0, letterheight);
  line(letterwidth / 2, 0, letterwidth, letterheight);
  line(letterwidth * .26, letterxheight, letterwidth * .66, letterxheight); //crossbar
  pop();
}



//----R-------------
function LetterR(xPos, yPos) {
  push();
  translate(xPos, yPos);
  stroke(255);
  noFill();
  strokeWeight(this.letterstroke);
  rect(0, 0, letterwidth, letterxheight, 0, letterrounding, letterrounding, 0);
  line(0, 0, 0, letterheight); //striaght down
  // line(letterpos2+letterwidth,leterxheight, letterpos2, letterheight);
  line(letterwidth * .7, letterxheight, letterwidth, letterheight);
  strokeWeight(letterstrokeB);
  stroke(240, 90);
  line(letterwidth / 5, letterheight / 8, letterwidth / 5, letterxheight * .9); //R
  pop();
}


//------O------
function LetterO(xPos, yPos) {
  push();
  translate(xPos, yPos);
  stroke(typecolor);
  noFill();
  strokeWeight(letterstroke);
  rect(0, 0, letterwidth, letterheight, letterrounding, letterrounding, letterrounding, letterrounding);
  strokeWeight(letterstrokeB);
  stroke(240, 90);
  angleMode(DEGREES);
  arc(letterwidth / 2, letterheight / 3, letterwidth / 1.7, letterwidth / 1.7, 180, 360); //O
  pop();
}

//------N-----
function LetterN(xPos, yPos) {
  push();
  translate(xPos, yPos);
  stroke(typecolor);
  noFill();
  strokeWeight(letterstroke);
  line(0, 0, 0, letterheight);
  line(0, 0, letterwidth, letterheight);
  line(letterwidth, 0, letterwidth, letterheight);
  strokeWeight(letterstrokeB);
  stroke(240, 90);
  line(letterwidth / 5, 0 + letterheight / 3, letterwidth / 5, letterheight); //N
  pop();
}

//-----F-------
function LetterF(xPos, yPos) {
  push();
  translate(xPos, yPos);
  stroke(typecolor);
  noFill();
  strokeWeight(letterstroke);
  line(0, 0, 0, letterheight);
  line(0, 0, letterwidth, 0); //top bar
  line(0, letterxheight, letterwidth, letterxheight); //bottombar
  // strokeWeight(letterstrokeB);
  // stroke(240, 90);
  // line(letterpos6 + letterwidth / 5, 0 + letterheight / 3, letterpos6 + letterwidth / 5, letterheight); //N
  pop();
}

//-----L-------
function LetterL(xPos, yPos) {
  push();
  translate(xPos, yPos);
  stroke(255);
  noFill();
  strokeWeight(letterstroke);
  line(0, 0, 0, letterheight);
  line(0, letterheight, letterwidth, letterheight); //top bar
  strokeWeight(letterstrokeB);
  stroke(240, 90);
  line(letterwidth / 5, 0 + letterheight / 3, letterwidth / 5, letterheight); //N
  pop();
}

// //-----G---------
// function LetterG(xPos,yPos) {
//   push();
//   translate(this.xPos, this.yPos);
//   stroke(typecolor);
//   noFill();
//   strokeWeight(letterstroke);
//   angleMode(DEGREES);
//   arc(letterwidth / 2, letterheight / 2.5, letterwidth, letterheight * .8, 180, 350);
//   arc(letterwidth / 2, letterheight - letterheight / 2.5, letterwidth, letterheight * .8, 360, 180);
//   line(letterwidth / 2, letterxheight,letterwidth, letterxheight); //cross line
//   line(letterheight * .4, 0, letterheight * .6, 0); //left straight line
//   strokeWeight(letterstrokeB);
//   stroke(240, 90);
//   angleMode(DEGREES);
//   arc(letterwidth / 2, letterheight / 3, letterwidth / 1.7, letterwidth / 1.7, 180, 360); //G
//   pop();
// }

// //---------D--------
// function LetterD(xPos,yPos) {

//   // this.letterpos;
//   stroke(255);
//   noFill();
//   strokeWeight(letterstroke);
//   rect(0, 0, letterwidth, letterheight, 0, letterrounding, letterrounding, 0);
//   strokeWeight(letterstrokeB);
//   stroke(240, 90);
//   line(letterwidth / 5, 0 + letterheight / 4, letterwidth / 5, letterheight * .9); //D
// }