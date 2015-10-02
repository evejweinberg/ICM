var sineS;
var totalParticles = 12; //number of total particles
var arrayOfBalls = []; //empty array to be filled
var arrayOfLines = [];
var system = [];
var sprite = [];
var gridTotalCols = 12;
var gridTotalRows = 12;
var GridLines;
var NeutraBold, BGtemp;
var center;
var LghtPur, DrkPur, Teal, DrkTeal, Orange;
var h1, h2, h3, h4;
var strkwght;
var spritetotal = 12;
var textSizes, wtf, mainHeading, rectgrid; //declare all variables of functions up top
var angle = 0.0;
var offset = 800;
var scalar = 700;
var circleArraySpeed = 0.0;
var circlearray = [];
var blinkingButton;

function preload() {
  NeutraBold = loadFont('Assets/NeutraText-Bold.otf');
  BGtemp = loadImage('Assets/HereYOuTakeIt-01.png');
  //create an animation from a sequence of numbered images
  //pass the first and the last file name and it will try to find the ones in between
  blinkingButton =loadAnimation("Assets/BlinkButton/bb_00000.png", "Assets/BlinkButton/bb_00027.png");
}



function setup() {
  createCanvas(windowWidth, windowHeight);

  textInfo = new TextSize();
  sineS = new SineSlider(floor(width * (1 / gridTotalCols)), floor(height * (8 / gridTotalRows)) - 40, floor(width * (10 / gridTotalCols)), 10, 0.09, (242, 121, 218), (255, 9, 200));

  strkwght = 1;

  LghtPur = color(125, 88, 183);
  DrkPur = color(84, 46, 150);
  Teal = color(33, 173, 146);
  DrkTeal = color(25, 117, 99);
  Orange = color(255, 166, 105);
  palettePastels = [
    LghtPur, DrkPur, Teal, DrkTeal, Orange
  ]




  GridLines = [ //create an array for the 12 heights
    floor(height * (1 / gridTotalRows)),
    floor(height * (2 / gridTotalRows)),
    floor(height * (3 / gridTotalRows)),
    floor(height * (4 / gridTotalRows)),
    floor(height * (5 / gridTotalRows)),
    floor(height * (6 / gridTotalRows)),
    floor(height * (7 / gridTotalRows)),
    floor(height * (8 / gridTotalRows)),
    floor(height * (9 / gridTotalRows)),
    floor(height * (10 / gridTotalRows)),
    floor(height * (11 / gridTotalRows)),
    floor(height * (12 / gridTotalRows))
  ];



} //////SETUP ENDS///////////SETUP ENDS///////////SETUP ENDS///////////SETUP ENDS//////////


function draw() {
  //print(GridLines[2] + "gridlines1")
  textSizes = new TextSize();
  center = createVector(width / 2, height / 2); //how do I use this vector?
  background(DrkPur);
  rectgrid = new GridofRects();
  for (var i=0;i<8;i++){
    animation(blinkingButton, i*250,-30);
    animation(blinkingButton, i*250,height);
  }
  mainHeading = new heading(center.x, GridLines[3]);
  
   for (var i = 0; i < arrayOfBalls.length; i++) {
    arrayOfBalls[i].display(); //display them all
    arrayOfBalls[i].explode(); //explode them all
}
for (var i = 0; i < arrayOfLines.length; i++) {
    arrayOfLines[i].display(); //display them all
    arrayOfLines[i].explode(); //explode them all
}



  for (var i = system.length - 1; i >= 0; i--) {
    system[i].addParticle();
    system[i].run();
    if (system[i].count > 250) {
      system.splice(i, 1); //kill this particle
    }
  }
  if (keyIsPressed) {
    for (var i = 0; i < system.length; i++) {
      for (var p = 0; p < system[i].particles.length; p++) {
        system[i].particles[p].velocity.x *= 6;
        system[i].particles[p].velocity.y *= 6;
      }
    }
  }

} ////////DRAW ENDS////////////DRAW ENDS////////////DRAW ENDS////////////



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function heading(xPos, yPos) {
  // textAlign(CENTER);
  fill(palettePastels[0]);
  noStroke();
  textLeading(20);
  textFont(NeutraBold);
  textSize(textSizes.h1);
  //print("heading is called");
  // var value = 10;
  // var plus = map(value, mouseY, xPos-10,xPos+10)
  // text("Click Around", xPos - 230+value, yPos);
//   fill(color(105, 58, 153));
  text("Click Around", xPos - 230-(mouseX/12), yPos-(mouseY/12));
}




function WTF(xPos, yPos) {
  var dx = 120;
  this.grow = 1;
  this.WTFisOn = false;
  this.rectW = 30;
  this.rectH = 30;
  fill(Teal);
  stroke(255);
  strokeWeight(strkwght);
  rect(xPos + dx, yPos - textSizes.h2, this.rectW, this.rectH); //it doesn't know h2


  this.grow = function() {
    this.rectH = 40;
    this.rectW = 50;
  }


}

//BG rectangle grid
function GridofRects() {
  for (var i = 0; i < gridTotalRows; i++) {
    for (var j = 0; j < gridTotalCols; j++) {
      fill(LghtPur); //from global scope
      noStroke();
      var size = floor((dist(mouseX, mouseY, j * width / gridTotalRows, GridLines[i]) / 52));
      if (size > 12) {
        size = 12;
      }
      rect(j * width / gridTotalRows, GridLines[i], size, size);
      // sprite[i] = new spriteBalls(j * width / gridTotalRows, GridLines[i]);
    }
  }
}


function TextSize() {
  this.h1 = windowWidth / 20; //how do I use these globally?
  this.h2 = windowWidth / 53;
  if (this.h2 < 24) {
    this.h2 = 24;
  }
  if (this.h1 < 24) {
    this.h1 = 24;
  }
}
function mousePressed() {
  if(mouseX<width/2){
  print("mouseispressed")
for (var i = 0; i < totalParticles; i++) {

  arrayOfBalls.push(new Ball(mouseX, mouseY, mouseX+random(-width, width), mouseY+random(-height, height))); //push new particles

  arrayOfLines.push(new Line(mouseX, mouseY, mouseX+random(-width, width), mouseY+random(-height, height))); //push new particles
  }
  }
  
  if (mouseX>width/2){



  system.push(new ParticleSystem(createVector(mouseX, mouseY)));
  }

}