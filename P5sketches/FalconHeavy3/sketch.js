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
var isOverNextButton;
var mode;
var On = true;

var palettebluepink;
//i can make another color palette !
var shuffledPalette;



// var c = color(255, 204, 0);

function preload() {
  SoundBG = loadSound('Assets/Kelly.mp3');
  buttonGraphic = loadImage("Assets/button_01.gif");
  buttonGraphicAlt = loadImage("Assets/buttonstill.png");
  volume = loadImage("Assets/V.png");
}

function setup() {
  SoundBG.loop();
  // window.resizeTo(500,500);

  mode = 1;
  createCanvas(screen.width, screen.height);


  palettebluepink = [
    color(248, 73, 41), //red
    color(69, 97, 220), //blue
    color(59, 50, 89), //drk blue
    color(251, 151, 162), //pink
    color(201, 208, 234), //light
    color(240, 206, 181), //tan
    color(81, 216, 236),
    color(61, 77, 191) //drk blue
  ]

  shuffledPalette = shufflePalette(palettebluepink); //this variable equals the return of this function
  // print(shuffledPalette);
  analyzer = new p5.Amplitude();
  analyzer.setInput(SoundBG);

} //////////////////SETUP ENDS/////////////////////SETUP ENDS////////////////////

function draw() {

  if (On === true) {
    SoundBG.isPlaying();
  }
  // Get the overall volume (between 0 and 1.0)
  // var vol = analyzer.getLevel();
  var vol = 0;

  background(0);


  if (mode === 1) { //draw all of scene 01 here

    var r = 3;
    letterwidth = 160;
    letterheight = 240;
    letterxheight = 130;
    lettergap = 40;
    letterrounding = 80;
    letterstroke = 7;
    letterstrokeB = letterstroke - 3;
    typecolor = 255;
    var wordTopHeight = 200;

    for (var j = 1; j < 3; j++) {
      for (var k = 1; k < 3; k++) {

        LetterF(letterwidth * j + lettergap * j, 20 + wordTopHeight * k);
        LetterA(letterwidth * j * 2 + lettergap * j * 2, 20 + wordTopHeight * k);
        LetterL(letterwidth * j * 3 + lettergap * j * 3, 20 + wordTopHeight * k);
        LetterC(letterwidth * j * 4 + lettergap * j * 4, 20 + wordTopHeight * k);
        LetterO(letterwidth * j * 5 + lettergap * j * 5, 20 + wordTopHeight * k, shuffledPalette[5]);
        LetterN(letterwidth * j * 6 + lettergap * j * 6, 20 + wordTopHeight * k, shuffledPalette[0]);

      }

    }


    noFill();
    strokeWeight(letterstrokeB);

    for (var i = 0; i < 12; i++) {
      var randval = 0;
      stroke(shuffledPalette[i % 8]);
      rectMode(CENTER);
      strokeWeight(2900 * i / windowWidth);
      rect(windowWidth / 2, windowHeight / 2, windowWidth - i * 50, windowHeight - i * 50);


      Button(windowWidth * .5, windowHeight * .95); //draw volume button
      var distanceR = dist(mouseX, mouseY, windowWidth * .5, windowHeight * .95);
      print("distance R:" + distanceR);
      //if the disctance less than the circle's radius
      if (distanceR < buttonradius) { //which button radius?
        isOverPlayButton = true;
        cursor(HAND);
        // print("mousewasPressed - turn music on")
      } else {
        isOverPlayButton = false;
        cursor(ARROW);
      }

      ButtonNext(windowWidth * .5, windowHeight * .5); //draw the next button
      var distanceW = dist(mouseX, mouseY, windowWidth * .5, windowHeight * .5); //why can't I say 'ButtonNext.xPos'
      print("distance W to next button:" + distanceW);
      // print("mouse to next button is:" + distanceR);
      //if the disctance less than the circle's radius
      if (distanceW < buttonradius) {
        isOverNextButton = true;
        cursor(HAND);
        // print("mousewasPressed - turn music on")
      } else {
        isOverNextButton = false;
        cursor(ARROW);
      }

    }

  }

  if (mode === 2) { //mode 2
    ellipse(40, 50, 30, 30);


    Button(windowWidth * .5, windowHeight * .95);
    var distanceS = dist(mouseX, mouseY, windowWidth * .5, windowHeight * .95);
    print("distanceS to play button" + distanceS);
    //if the disctance less than the circle's radius
    if (distanceS < buttonradius) {
      isOverPlayButton = true;
      cursor(crosshair);
      print("mousewasPressed - turn music on")
    } else {
      isOverPlayButton = false;
      cursor(ARROW);
    }

    ButtonNext(windowWidth * .5, windowHeight * .5); //draw the next button
    var distanceX = dist(mouseX, mouseY, windowWidth * .5, windowHeight * .5);
    print("distanceX to next button" + distanceX);
    //if the disctance less than the circle's radius
    if (distanceX < buttonradius) {
      isOverNextButton = true;
      cursor(HAND);
      // print("mousewasPressed - turn music on")
    } else {
      isOverNextButton = false;
      cursor(ARROW);
    }
  } ////mode 2 ends



// if (mode >2){
//   mode = 1;
// }


} ///////////////////-END OF DRAW/////////////////END OF DRAW-/////////////////END OF DRAW/////////////////

function mousePressed() {
  if (isOverPlayButton === true) {
    if (SoundBG.isPlaying()) { // .isPlaying() returns a boolean
      SoundBG.pause(); // .play() will resume from .pause() position
      // background(255, 0, 0);
    } else {
      SoundBG.play();
      // background(0, 255, 0);
    }
  }

  if (isOverNextButton === true) {
    if (mode === 1) {
      mode = mode +1;
    } else {
      mode = 1;
      
    }
    
    }
  


}


function Button(xPos, yPos) { //Volume Button
  this.buttonradius = 60;
  fill(palettebluepink[2]);
  strokeWeight(4);
  stroke(palettebluepink[0]);
  ellipse(xPos, yPos, buttonradius, buttonradius);
  image(volume, xPos - 20, yPos - 20, 40, 40);

}

function ButtonNext(xPos, yPos) {
  this.buttonradius = 60;
  fill(palettebluepink[3]);
  strokeWeight(4);
  stroke(palettebluepink[2]);
  rectMode(CENTER);
  rect(xPos, yPos, 120, 50);
  textSize(26);
  textAlign(CENTER);
  noStroke();
  fill(palettebluepink[2]);
  text("NEXT", xPos, yPos);
  noFill();

}

















//-----C---------
function LetterC(xPos, yPos) { //define arguments and then use them inside the function to be updated in draw
  push();
  translate(xPos, yPos);

  noFill();
  strokeWeight(letterstroke);
  angleMode(DEGREES);
  stroke(palettebluepink[6]);
  arc(letterwidth / 2, letterheight / 2.5, letterwidth, letterheight * .8, 180, 350);
  stroke(palettebluepink[0]);
  arc(letterwidth / 2, letterheight - letterheight / 2.5, letterwidth, letterheight * .8, 360, 180);
  stroke(palettebluepink[2]);
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
  noFill();

  strokeWeight(letterstroke);
  stroke(palettebluepink[1]);
  line(letterwidth / 2, 0, 0, letterheight);
  stroke(palettebluepink[6]);
  line(letterwidth / 2, 0, letterwidth, letterheight);
  stroke(palettebluepink[5]);
  line(letterwidth * .26, letterxheight, letterwidth * .66, letterxheight); //crossbar
  pop();
}



// //----R-------------
// function LetterR(xPos, yPos) {
//   push();
//   translate(xPos, yPos);
//   stroke(255);
//   noFill();
//   strokeWeight(letterstroke);
//   rect(0, 0, letterwidth, letterxheight, 0, letterrounding, letterrounding, 0);
//   line(0, 0, 0, letterheight); //striaght down
//   // line(letterpos2+letterwidth,leterxheight, letterpos2, letterheight);
//   line(letterwidth * .7, letterxheight, letterwidth, letterheight);
//   strokeWeight(letterstrokeB);
//   stroke(240, 90);
//   line(letterwidth / 5, letterheight / 8, letterwidth / 5, letterxheight * .9); //R
//   pop();
// }


//------O------
function LetterO(xPos, yPos, linecolor) {
  push();
  translate(xPos, yPos);
  rectMode(CORNER);
  noFill();
  strokeWeight(letterstroke);
  stroke(linecolor);
  rect(0, 0, letterwidth, letterheight, letterrounding, letterrounding, letterrounding, letterrounding);
  strokeWeight(letterstrokeB);
  stroke(240, 90);
  angleMode(DEGREES);
  arc(letterwidth / 2, letterheight / 3, letterwidth / 1.7, letterwidth / 1.7, 180, 360); //O
  pop();
}

//------N-----
function LetterN(xPos, yPos, linecolor) {
  push();
  translate(xPos, yPos);

  noFill();
  strokeWeight(letterstroke);
  stroke(linecolor);
  line(0, 0, 0, letterheight);
  stroke(linecolor);
  line(0, 0, letterwidth, letterheight);
  stroke(linecolor);
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

  noFill();
  strokeWeight(letterstroke);
  stroke(palettebluepink[1]);
  print(palettebluepink[4]);
  line(0, 0, 0, letterheight);
  stroke(palettebluepink[0]);
  line(0, 0, letterwidth, 0); //top bar
  stroke(palettebluepink[3]);
  line(0, letterxheight, letterwidth, letterxheight); //bottombar
  pop();
}

//-----L-------
function LetterL(xPos, yPos) {
  push();
  translate(xPos, yPos);

  noFill();
  strokeWeight(letterstroke);
  stroke(palettebluepink[5]);
  line(0, 0, 0, letterheight);
  stroke(palettebluepink[6]);
  line(0, letterheight, letterwidth, letterheight); //top bar
  strokeWeight(letterstrokeB);
  stroke(240, 90);
  line(letterwidth / 5, 0 + letterheight / 3, letterwidth / 5, letterheight * .8); //N
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


/////////////COLOR PALETTE/////////////////////////

function shufflePalette(myPalette) { //pass a palette and return a shuffled version of the palette
  myPalette = myPalette.slice(0); //create a clone so I dont empty the palette. slice(0) returns all the elements WTF
  var newColorOrder = []; //make an empty array
  while (myPalette.length > 0) {
    var randomIndex = floor(random(myPalette.length)); // pick a random index 
    // print("randomIndex " + randomIndex);
    var randomColor = myPalette.splice(randomIndex, 1).pop(); // extract an array of size 1 and starting at randomIndex, remove the only element it has and store it in randomColor
    newColorOrder.push(randomColor); // push the object into the new array
    // print("randomColor " + randomColor);

  }
  return newColorOrder; //give me the goods

}

function randomColorPicker(myPalette) { //access one random element and return it

  var randomIndex = floor(random(myPalette.length)); //give me an int between 0 and my color palette's length
  // print(randomIndex);
  var randomColor = myPalette[randomIndex]; //this references my argument, so I can pull from any palette later
  return randomColor; //give me something
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}