var totalParticles = 12; //number of total particles
var arrayOfBalls = []; //empty array to be filled
var arrayOfLines = [];
var rect1, rect2, rect3;
var globacounter = 0;
var letterwidth = 80;
var letterheight = 120;
var letterxheight = 70;
var lettergap = 90;
var letterrounding = 80;
var letterstroke = 2;
var letterstrokeB = letterstroke - 3;
var wordTopHeight = 200;

var palettebluepink;

function setup() {

  createCanvas(windowWidth, windowHeight);
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


}

function draw() {
  // PrintLines();
  background(255);
  globalcounter = floor(millis() / 10);
  var rectrotation = 0;

  if (globalcounter > 100) {
    LetterH(100, 100);
  }
  if (globalcounter > 140) {
    LetterE(100 + lettergap, 100);
    // LetterH.splice();
  }
  if (globalcounter > 200) {
    LetterL(100 + lettergap * 2, 100);
  }
  if (globalcounter > 220) {
    LetterL(100 + lettergap * 3, 100);
  }
  if (globalcounter > 240) {
    LetterO(100 + lettergap * 4, 100);
  }
  if (rect1.counter < 100) {
    rectrotation = 5 * globalcounter;
    // print("rectcounter less")
  }

  if (globalcounter > 220) {
    // push();
    // translate(width/2,height/2);
    // rotate(rectrotation);
    rect1.display();
    rect1.move();
    // pop();





  }


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
  print("mouseispressed")
  for (var i = 0; i < totalParticles; i++) {

    arrayOfBalls.push(new Ball(width / 2, height / 2, width / 2 + random(-width, width), height / 2 + random(-height, height))); //push new particles

    arrayOfLines.push(new Line(width / 2, height / 2, width / 2 + random(-width, width), height / 2 + random(-height, height))); //push new particles
  }
}


function mouseDragged() {

}

function PrintLines() {
  print("global counter = " + globalcounter)
   print("Size RectA = " + rect1.sizeA)
      print("Size RectB = " + rect1.sizeB)
}