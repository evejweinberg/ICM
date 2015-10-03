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
  PrintLines();
  background(0);
  // setGradient(0, 0, width / 2, height, b2, b1, X_AXIS);
  // setGradient(width / 2, 0, width / 2, height, b1, b2, X_AXIS);
  globalcounter = floor(millis() / 10);
  var rectrotation = 0;
  push(); //all letters
  if(globalcounter < 320){
  translate(500+(globalcounter), 200);
  } else{
    translate(820, 200);
  }
  if (globalcounter > 60) {
    LetterP(letterspace[0], 0);
  }
  if (globalcounter > 140) {
    LetterE(letterspace[3], 0);
    // LetterH.splice();
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



  // if (rect1.counter < 100) {
  //   rectrotation = 5 * globalcounter;
  //   // print("rectcounter less")
  // }
if (globalcounter >200 &&globalcounter <220) {
  
for (var i = 0; i < totalParticles; i++) {

    arrayOfBalls.push(new Ball(width / 2, height / 2, width / 2 + random(-width, width), height / 2 + random(-height, height))); //push new particles

    arrayOfLines.push(new Line(width / 2, height / 2, width / 2 + random(-width, width), height / 2 + random(-height, height))); //push new particles
  }
}
  if (globalcounter > 200) {
 rect1.waitingtoR = rect1.waitingtoR-.4;
    rect1.display();
    rect1.move();
    if(rect1.waitingtoR <=0){
      rect1.waitingtoR =0;
    }
  




  }
  
  // if (rect1.counter > 75) {
  //       rect1.waitingtoR = this.counter*4;
  //       push();
  //       translate(this.x, this.y);
  //       rotate(5 * this.counter);
  //       this.sizeA = lerp(50, 400, (this.growthrate)); //this value has to go down from .1 to .001
  //       pop();
  //     }


  for (var i = 0; i < arrayOfBalls.length; i++) {
    arrayOfBalls[i].display(); //display them all
    arrayOfBalls[i].explode(); //explode them all
  }
  for (var i = 0; i < arrayOfLines.length; i++) {
    arrayOfLines[i].display(); //display them all
    arrayOfLines[i].explode(); //explode them all
  }

  //kill them, save CPU
  for (var i = arrayOfLines.length - 1; i >= 0; i--) {
    if (arrayOfLines[i].counter > 400) { //if it's been 200 millis
      arrayOfLines.splice(i, 1); //kill this particle
    }
  }



}

function mousePressed() {
  // print("mouseispressed")
  // for (var i = 0; i < totalParticles; i++) {

  //   arrayOfBalls.push(new Ball(width / 2, height / 2, width / 2 + random(-width, width), height / 2 + random(-height, height))); //push new particles

  //   arrayOfLines.push(new Line(width / 2, height / 2, width / 2 + random(-width, width), height / 2 + random(-height, height))); //push new particles
  // }
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

function PrintLines() {
  // print("global counter = " + globalcounter)
  print("Size = " + rect1.bPos)
    print("COunter = " + rect1.counter)
  // print("Size RectB = " + rect1.sizeB)
}
