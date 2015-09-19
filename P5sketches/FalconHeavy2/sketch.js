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
var isOverPlayButton;
var On = true;


// var c = color(255, 204, 0);

function preload() {
  SoundBG = loadSound('Assets/Kelly.mp3');
  buttonGraphic = loadImage("Assets/button_01.gif");
  buttonGraphicAlt = loadImage("Assets/buttonstill.png");
}

function setup() {
  SoundBG.loop();


  createCanvas(screen.width, screen.height); //this is not updating?
  // for (var i = 0; i < letterTotal; i++) { //i want to create an array of variables names called letterpos_
  //   letterpos[i + 1] = letterwidth * i + lettergap * i;
  //   //do I need to push here?
  // }

  //create a  color array and set variables for typecolor

}

function draw() {

  if (On === true) {
    SoundBG.isPlaying();
  }

  background(0);

  Button(windowWidth * .95, windowHeight * .95);
  var distanceR = dist(mouseX, mouseY, windowWidth * .95, windowHeight * .95);
  print(distanceR);
  //if the disctance less than the circle's radius
  if (distanceR < buttonradius) {
    isOverPlayButton = true;
    cursor(HAND);
    print("mousewasPressed - turn music on")

  } else {
    isOverPlayButton = false;
    cursor(ARROW);
  }




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
  var letterpos7 = letterwidth * 6 + lettergap * 6;
  var scaleTypeDown = 1;

  if ((windowWidth < 1000) && (windowHeight < 700)) { // display message if screen resolution is too low
    fill(255);
    ellipse(100, 100, 30, 30);

  }


  if (letterpos7 > windowWidth - 200) { //how would I make their scale related to the window width, map 1 to 
    scaleTypeDown = scaleTypeDown * .75;
  } else if (letterpos7 < windowWidth) {
    scaleTypeDown = scaleTypeDown * 1.85;
  }

var d = int(dist(letterpos1,0, letterpos7,0));
  push();
  print('distance =' +d);
  print("windowWidth =" +windowWidth);
  translate((windowWidth-d)/2,0); //get distance from first to last letter, divide by 2
  scale(scaleTypeDown, scaleTypeDown); //how would I make their scale related to the window width, map 1 to 
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
  rect(windowWidth - (windowWidth * .95), windowHeight - (windowHeight * .95), windowWidth * .9, windowHeight * .9);

  image(buttonGraphic, 10, 10, 30, 30); //why doesn't the gif play?
  image(buttonGraphicAlt, 100, 100, 30, 30);




} //-----------------END OF DRAW-----------------------END OF DRAW-----------------END OF DRAW---------------------------------------------

function mousePressed() {
  if (isOverPlayButton === true) {
    if (SoundBG.isPlaying()) { // .isPlaying() returns a boolean
      SoundBG.pause(); // .play() will resume from .pause() position
      background(255, 0, 0);
    } else {
      SoundBG.play();
      background(0, 255, 0);
    }
  }

}


function Button(xPos, yPos) {
  this.buttonradius = 20;
  fill(255, 0, 0);
  ellipse(xPos, yPos, buttonradius, buttonradius);
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
  line(0, letterheight * .4, 0, letterheight * .6); //left straight line
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
  stroke(typecolor);
  line(0, 0, letterwidth, 0); //top bar
  stroke(typecolor);
  line(0, letterxheight, letterwidth, letterxheight); //bottombar
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