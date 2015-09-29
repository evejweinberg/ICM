var sineS;
var sprite = [];
var gridTotalCols = 12;
var gridTotalRows = 12;
var GridLines;
var NeutraBold, BGtemp;
var center;
var LghtPur, DrkPur, Teal;
var h1, h2, h3, h4;
var strkwght;
var spritetotal = 12;
var textSizes, wtf, mainHeading, rectgrid; //declare all variables of functions up top
var angle = 0.0;
var offset = 800;
var scalar = 700;
var circleArraySpeed = 1.05;
var circlearray = [];

function preload() {
  NeutraBold = loadFont('Assets/NeutraText-Bold.otf');
  BGtemp = loadImage('Assets/HereYOuTakeIt-01.png');
}



function setup() {
  createCanvas(windowWidth, windowHeight);
 
  textInfo = new TextSize();
  sineS = new SineSlider(floor(width * (1 / gridTotalCols)), floor(height * (8 / gridTotalRows)) - 40, floor(width * (10 / gridTotalCols)), 10, 0.09, (242, 121, 218), (255, 9, 200));
  LghtPur = color(125, 88, 183);
  DrkPur = color(84, 46, 150);
  Teal = color(33, 173, 146);
  strkwght = 1;
  



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

  push();
  translate(-5 * width, -5 * height); //why only displaying 1 row
  for (var i = 0; i < spritetotal; i++) {
    for (var j = 0; j < spritetotal; j++) {
      sprite[i] = new spriteBalls(GridLines[j], GridLines[i]);
    }
  }
  pop();

} //////SETUP ENDS///////////SETUP ENDS///////////SETUP ENDS///////////SETUP ENDS//////////


function draw() {
  textSizes = new TextSize();
  center = createVector(width / 2, height / 2); //how do I use this vector?
  // image(BGtemp, 0, 0, width, height);
  background(DrkPur);
  rectgrid = new GridofRects();
  mainHeading = new heading(center.x, GridLines[3]);
  wtf = new WTF(center.x, GridLines[0]);


  sineS.display();
  for (var k = 0; k < spritetotal; k++) {
    sprite[k].display();

  }
  
     for (var i = 0; i < 360; i++) {
    circlearray[i] = new CircleArray();
  }


  if (mouseIsPressed && wtf.WTFisOn === true) {
    print("it's on they really wanna know");
    wtf.grow = 3;
  }
} ////////DRAW ENDS////////////DRAW ENDS////////////DRAW ENDS////////////



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function heading(xPos, yPos) {
  // textAlign(CENTER);
  fill(255);
  noStroke();
  textLeading(20);
  textFont(NeutraBold);
  textSize(textSizes.h1);
  print("heading is called");
  text("   I Have an Idea!\nHere, you take it:", xPos - 150, yPos);
}


function mouseClicked() {
  for (var l = 0; l < spritetotal; l++) {
    sprite[l].explode();
  }


  if (dist(mouseX, mouseY, wtf.xPos, wtf.yPos) < 200) {
    print("WTF mouse is hovering")
    wtf.WTFisOn = true;
    wtf.grow = 3;

  }

}


function WTF(xPos, yPos) {
  var dx = 120;
  this.grow = 1;
  this.WTFisOn = false;
  var rectW = 30;
  var rectH = 30;
  textAlign(CENTER);
  fill(LghtPur);
  noStroke();
  textLeading(20);
  textFont(NeutraBold);
  textSize(textSizes.h2);
  text("WTF is THIS SITE", xPos, yPos);
  fill(Teal);
  stroke(255);
  strokeWeight(strkwght);
  push();
  scale(this.grow, this.grow);
  // rectMode(CENTER);
  //print(textInfo);
  rect(xPos + dx, yPos - textSizes.h2, rectW, rectH); //it doesn't know h2
  fill(255);
  noStroke();
  text("?", xPos + dx + 15, yPos);
  pop();


  //when MouseinClicked, call his
  this.grow = function() {
    rectH = 40;
    rectW = 50;

  }
}

function GridofRects() {
  for (var i = 0; i < gridTotalRows; i++) {
    for (var j = 0; j < gridTotalCols; j++) {
      fill(LghtPur); //from global scope
      noStroke();
      var size = floor((dist(mouseX, mouseY, j * width / gridTotalRows, GridLines[i]) / 62));
      if (size > 9) {
        size = 9;
      }
      rect(j * width / gridTotalRows, GridLines[i], size, size);
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


function CircleArray() {
  x = offset + cos(angle) * scalar;
  y = offset + sin(angle) * scalar;
  fill(Teal);
  ellipse(x, y, 10, 10);
  angle += circleArraySpeed;
}