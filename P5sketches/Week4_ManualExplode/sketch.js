var totalParticles = 12; //number of total particles
var arrayOfBalls = []; //empty array to be filled
var arrayOfLines = [];
var rect1, rect2, rect3;
var globacounter = 0;
var letterwidth = 80;
var letterheight = 120;
var letterxheight = 70;
var lettergap = 100;
var letterrounding = 80;
var letterstroke = 2;
var letterstrokeB = letterstroke - 3;
var wordTopHeight = 200;
var letterspace = [];
var letterkern = letterheight * 1.3;
var b1, b2, c1, c2; //background gradient
var Y_AXIS = 1;
var X_AXIS = 2;
var letterMoves;


var palettebluepink;

function setup() {

  createCanvas(windowWidth, windowHeight);
  b1 = color(0, 0, 60);
  b2 = color(0, 0, 0);


  var center = createVector(width / 2, height / 2);
  rect1 = new RectFrames(width / 2, height / 2);
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

  for (var ls = 0; ls < 30; ls++) {
    letterspace[ls] = lettergap * ls;
  }


}

function draw() {
  printLines();
  background(0);

  letterMovesX = map(mouseX, 0, width, -40, 40);
  letterMovesY = map(mouseY, 0, width, -40, 40);
  letterheight = 120 - letterMovesY;
  letterwidth = 80 - letterMovesX;

  globalcounter = floor(millis() / 10);
  var rectrotation = 0;
  push(); //all letters
  if (globalcounter < 400) {
    translate(500 + (globalcounter), 200);
  } else {
    translate(900, 200); //
  }
  if (globalcounter > 60) {
    LetterP(letterspace[0], 0);
  }
  if (globalcounter > 140) {
    LetterE(letterspace[3], 0);
  }
  if (globalcounter > 105) {
    LetterO(letterspace[1], 0);
  }
  if (globalcounter > 150) {
    LetterW(letterspace[2], 0);
  }
  if (globalcounter > 90) {
    LetterR(letterspace[4], 0);

  }
  if (globalcounter > 120) {
    LetterO(letterspace[2], letterkern);
  }
  if (globalcounter > 70) {
    LetterF(letterspace[3], letterkern);
  }

  if (globalcounter > 115) {
    LetterT(letterspace[3], letterkern * 2);

  }
  if (globalcounter > 80) {
    LetterE(letterspace[4], letterkern * 2);
  }
  if (globalcounter > 150) {
    LetterN(letterspace[5], letterkern * 2);
  }

  pop(); //end all letters
  if (globalcounter > 200) {
    TenWeb();
  }




  if (globalcounter > 200 && globalcounter < 208) {

    for (var i = 0; i < totalParticles; i++) {

      arrayOfBalls.push(new Ball(width / 2, height / 2, width / 2 + random(-width, width), height / 2 + random(-height, height))); //push new particles
      arrayOfBalls.push(new Line(width / 2, height / 2, width / 2 + random(-width, width), height / 2 + random(-height, height))); //push new particles
    }
  }
  if (globalcounter > 200) {
    rect1.waitingtoR = rect1.waitingtoR - .4;
    rect1.display();
    rect1.move();
    if (rect1.waitingtoR <= 0) {
      rect1.waitingtoR = 0;
    }
  }

  for (var i = 0; i < arrayOfBalls.length; i++) {
    arrayOfBalls[i].display(); //display them all
    arrayOfBalls[i].explode(); //explode them all
  }
  // for (var i = 0; i < arrayOfLines.length; i++) {
  //   arrayOfLines[i].display(); //display them all
  //   arrayOfLines[i].explode(); //explode them all
  // }
  // print("array length =" + arrayOfBalls.length);
  //kill them, save CPU
  // for (var i = arrayOfLines.length - 1; i >= 0; i--) {
  //   if (arrayOfLines[i].counter > 400) { //if it's been 200 millis
  //     arrayOfLines.splice(i, 1); //kill this particle
  //   }
  // }
  for (var i = 0; i < arrayOfBalls.length; i++) {

    if (arrayOfBalls[i].size === 0) {
      arrayOfBalls.splice(i, 1);
    }
  }


} /////DRAW ENDS////////

function mousePressed() {
  // print("mouseispressed")
  for (var i = 0; i < totalParticles; i++) {

    arrayOfBalls.push(new Ball(width / 2, height / 2, width / 2 + random(-width, width), height / 2 + random(-height, height))); //push new particles

    arrayOfLines.push(new Line(width / 2, height / 2, width / 2 + random(-width, width), height / 2 + random(-height, height))); //push new particles
  }
}


function mouseDragged() {

}


function setGradient(x, y, w, h, c1, c2, axis) {

  noFill();

  if (axis == Y_AXIS) { // Top to bottom gradient
    for (var i = y; i <= y + h; i++) {
      var inter = map(i, y, y + h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis == X_AXIS) { // Left to right gradient
    for (var i = x; i <= x + w; i++) {
      var inter = map(i, x, x + w, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function printLines() {
  // print("global counter = " + globalcounter)
  // print("Xadd = " +TenWeb.Xadd);
  // print("Size = " + rect1.bPos)
  // print("COunter = " + rect1.counter)
  // print("mult" + TenWeb.mult)
  // print("Size RectB = " + rect1.sizeB)
}