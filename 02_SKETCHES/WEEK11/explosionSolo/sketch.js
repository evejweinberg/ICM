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
// var b1, b2, c1, c2; //background gradient
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

  // for (var ls = 0; ls < 30; ls++) {
  //   letterspace[ls] = lettergap * ls;
  // }


}

function draw() {
 
  background(0);


  for (var i = 0; i < arrayOfBalls.length; i++) {
    arrayOfBalls[i].display(); //display them all
    arrayOfBalls[i].explode(); //explode them all
  }

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

    arrayOfBalls.push(new Line(width / 2, height / 2, width / 2 + random(-width, width), height / 2 + random(-height, height))); //push new particles
  }
}

