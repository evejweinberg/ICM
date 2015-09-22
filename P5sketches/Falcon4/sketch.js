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
var triangles = []; // allocate space for this array




// var c = color(255, 204, 0);

function preload() {
  SoundBG = loadSound('Assets/Kelly.mp3');
  buttonGraphic = loadImage("Assets/button_01.gif");
  buttonGraphicAlt = loadImage("Assets/buttonstill.png");
  volume = loadImage("Assets/V.png");
}

function setup() {

  for (var i = 0; i < 500; i++) {
    triangles.push(new TriangleBackground()); //instantiate the triangles
    print("triangles printed")
  }
  SoundBG.loop();
  // window.resizeTo(500,500);

  mode = 1;
  createCanvas(screen.width, screen.height);

  var dim = width / 2;
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
  print(shuffledPalette);
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
    // for (var x = 0; x <= width; x += dim) {
    //   drawGradient(x, height / 2);
    // }
    // print("i drew a gradient")

    var r = 3;
    letterwidth = 160;
    letterheight = 240;
    letterxheight = 130;
    lettergap = 40;
    letterrounding = 80;
    letterstroke = 2;
    letterstrokeB = letterstroke - 3;
    typecolor = 255;
    var wordTopHeight = 200;

    push();
    translate(-800, -300);
    scale(.5, .5);
    for (var jk = 1; jk < 4; jk++) {
      for (var k = 1; k < 10; k++) {
        for (var j = 1; j < 2; j++) {

          push();
          translate(-200, k * 280);
          translate(jk * 1200, 0);
          LetterF(letterwidth * j + lettergap, 20);
          LetterA((letterwidth * 2) * j + 2 * lettergap, 20);
          LetterL((letterwidth * 3) * j + 3 * lettergap, 20);
          LetterC((letterwidth * 4) * j + 4 * lettergap, 20);
          LetterO((letterwidth * 5) * j + 5 * lettergap, 20, shuffledPalette[5]);
          LetterN((letterwidth * 6) * j + 6 * lettergap, 20, shuffledPalette[0]);

          pop();

        }

      }

    }
    pop();


    noFill();
    strokeWeight(letterstrokeB);

    var numOfRects = 30;
    var thickness = 0.2; // can change the thickness 

    for (var i = 0; i < numOfRects; i++) { //must take notes in this section!!
      var randval = 0;
      stroke(shuffledPalette[i % 8]);
      rectMode(CENTER);

      strokeWeight((2400 * (numOfRects - i) / windowWidth) * thickness); // here
      //strokeWeight(10);
      var distanceFromCenter = dist(mouseX, mouseY, windowWidth / 2, windowHeight / 2);
      var mappedDistance = map(distanceFromCenter, 0, windowWidth * 0.5, 500, 0);
      // map (value, valueMin, valueMax, targetMin, targetMax);
      rect(windowWidth / 2, windowHeight / 2,
        windowWidth - i * 25 + mappedDistance, windowHeight - i * 25 + mappedDistance);


      ellipseMode(CENTER);
      Button(windowWidth * .5, windowHeight * .95); //draw volume button

      var distanceR = dist(mouseX, mouseY, windowWidth * .5, windowHeight * .95);
      // print("distance R:" + distanceR);
      //if the disctance less than the circle's radius
      if (distanceR < Playbuttonradius) { //which button radius?
        isOverPlayButton = true;
        // Button.scale = 2;
        Playbuttonradius = 80;
        cursor(HAND);
        // print("mousewasPressed - turn music on")
      } else {
        isOverPlayButton = false;
        cursor(ARROW);
        Playbuttonradius = 60;
      }



      ButtonNext(windowWidth * .5, windowHeight * .5); //draw the next button
      var distanceW = dist(mouseX, mouseY, windowWidth * .5, windowHeight * .5); //why can't I say 'ButtonNext.xPos'
      // print("distance W to next button:" + distanceW);
      // print("mouse to next button is:" + distanceR);
      //if the disctance less than the circle's radius
      if (distanceW < buttonradius) {
        isOverNextButton = true;
        ButtonNext.buttonradius = 100;
        print("radius" + ButtonNext.buttonradius);
        print("butradius" + buttonradius);
        cursor(HAND);
        // print("mousewasPressed - turn music on")
      } else {
        isOverNextButton = false;
        cursor(ARROW);
      }

    }

  }

  if (mode === 2) { //mode 2

    for (var h = 0; h < triangles.length; h++) { //call all of the circles to draw, 

      triangles[h].display(); //no arguments for display, all determined inside the function
    }
    push();
    // var a = atan2(posY - height / 2, posX - width / 2);
    // rotate(a);
    translate(width / 2, height / 2);
    DashedLine(0, 0);
    DashedLine(-width, 0);
    rotate(45);
    DashedLine(0, 0);
    DashedLine(width / 2 - 10, height / 2);
    pop();

    Button(windowWidth * .5, windowHeight * .95);
    var distanceS = dist(mouseX, mouseY, windowWidth * .5, windowHeight * .95);
    print("distanceS to play button" + distanceS);
    //if the disctance less than the circle's radius
    if (distanceS < buttonradius) {
      isOverPlayButton = true;
      cursor(HAND);
      // print("mousewasPressed - turn music on")
    } else {
      isOverPlayButton = false;
      cursor(ARROW);
      // print("TEST")
    }

    ButtonNextTri(windowWidth * .5, windowHeight * .5 - 20); //draw the next button
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
      mode = mode + 1;
    } else {
      mode = 1;

    }

  }



}


function Button(xPos, yPos) { //Volume Button
  this.Playbuttonradius = 60;
  fill(palettebluepink[2]);
  strokeWeight(4);
  stroke(palettebluepink[0]);
  ellipse(xPos, yPos, Playbuttonradius, Playbuttonradius);
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
  fill(palettebluepink[5]);
  text("NEXT", xPos, yPos + 10);
  noFill();
}

function ButtonNextTri(xPos, yPos) {
  var triwidth = 33;
  this.buttonradius = 60;
  fill(palettebluepink[6]);
  strokeWeight(4);
  stroke(palettebluepink[0]);
  // rectMode(CENTER);
  triangle(xPos, yPos - triwidth, xPos + triwidth * 2, yPos + triwidth * 2, xPos - triwidth * 2, yPos + triwidth * 2);
  textSize(26);
  textAlign(CENTER);
  noStroke();
  fill(palettebluepink[2]);
  text("NEXT", xPos, yPos + 40);
  noFill();
}

















//-----C---------
function LetterC(xPos, yPos) { //define arguments and then use them inside the function to be updated in draw
  push();
  translate(xPos, yPos);
  ellipseMode(CENTER);
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



//------O------
function LetterO(xPos, yPos, linecolor) {
  push();
  translate(xPos, yPos);
  rectMode(CORNER);
  ellipseMode(CENTER);
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












function DashedLine(xPos, yPos) {
  var linelength = 15;
  push();
  translate(xPos, yPos);
  strokeWeight(5);

  for (var i = 0; i < 20; i++) {
    stroke(palettebluepink[i % 8]);

    line(i * 25, 0, linelength + i * 25, 0);
  }
  pop();
}

function TriangleBackground() {
  // var a = atan2(mouseY - height / 2, mouseX - width / 2);
  this.Centerposition = createVector(random(0, windowWidth), random(0, windowHeight)); //the centerpoint can be anywhere
  this.opacity = 90;
  // this.col = color(palettebluepink[2]), this.opacity); //70% opacity, mostly blue
  var triWidth = random(6, 50);
  var df = dist(mouseX, mouseY, this.Centerposition.x, this.Centerposition.y);

  this.display = function() {
    stroke(100); //want this to be a random color from my array
    var mouseradius = 100;
    strokeWeight(2);
    this.opacity = 70;
    fill(palettebluepink[2]);

    //------------if mouse is near the cneter of the triangle, dim it down----------------
    while (mouseX > this.Centerposition.x + (-1 * mouseradius) && mouseX < this.Centerposition.x + (mouseradius) && mouseY > this.Centerposition.y + (-1 * mouseradius) && mouseY < this.Centerposition.y + (mouseradius)) {
      this.opacity = 10;
      fill(240, this.opacity);
      strokeWeight(1);
      stroke(160, this.opacity * 5);
      if (mouseX > width / 2) {
        this.Centerposition.x = this.Centerposition.x + df / 2;
      } else {
        this.Centerposition.x = this.Centerposition.x - df / 2;
      }

    }

    push();

    // rotate somehow ----- this.angle = atan2(mouseY - this.position.y, mouseX - this.position.x);
    triangle(this.Centerposition.x, this.Centerposition.y - 30, this.Centerposition.x + triWidth, this.Centerposition.y + triWidth, this.Centerposition.x - triWidth, this.Centerposition.y + triWidth);
    noFill();
    pop();

  }
}


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


function drawGradient(x, y) {

  // var radius = dim / 2;
  // var h = 200;
  // noStroke();
  // ellipseMode(RADIUS);
  // for (var r = radius; r > 0; --r) { //incrementing down
  //   colorMode(HSB, 360, 100, 100);
  //   fill(260, h, h); //RGB
  //   ellipse(x, y, r, r);
  //   h = (h + 1) % 360;
  // }
}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}