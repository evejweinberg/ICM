var sineS;
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
var canvasDivide =12;

function preload() {
  NeutraBold = loadFont('Assets/NeutraText-Bold.otf');
  BGtemp = loadImage('Assets/HereYOuTakeIt-01.png');
  //create an animation from a sequence of numbered images
//pass the first and the last file name and it will try to find the ones in between
  // blinkingButton =loadAnimation("Assets/BlinkButton/bb_00000.png", "Assets/BlinkButton/bb_00027.png");
}



function setup() {
  createCanvas(windowWidth, windowHeight);

  textInfo = new TextSize();
  sineS = new SineSlider(floor(width * (1 / gridTotalCols)), floor(height * (8 / gridTotalRows)) - 40, floor(width * (10 / gridTotalCols)), 10, 0.09, (242, 121, 218), (255, 9, 200));
  LghtPur = color(125, 88, 183);
  DrkPur = color(84, 46, 150);
  Teal = color(33, 173, 146);
  strkwght = 1;




  // GridLines = [ //create an array for the 12 heights
  //   floor(height * (1 / gridTotalRows)),
  //   floor(height * (2 / gridTotalRows)),
  //   floor(height * (3 / gridTotalRows)),
  //   floor(height * (4 / gridTotalRows)),
  //   floor(height * (5 / gridTotalRows)),
  //   floor(height * (6 / gridTotalRows)),
  //   floor(height * (7 / gridTotalRows)),
  //   floor(height * (8 / gridTotalRows)),
  //   floor(height * (9 / gridTotalRows)),
  //   floor(height * (10 / gridTotalRows)),
  //   floor(height * (11 / gridTotalRows)),
  //   floor(height * (12 / gridTotalRows))
  // ];
  
 

 
for (var i = 0; i < canvasDivide; i++) {
    for (var j = 0; j < canvasDivide; j++) {
      sprite[i] = new spriteBalls(j *canvasDivide, i*canvasDivide );
      
    }
  }

 

} //////SETUP ENDS///////////SETUP ENDS///////////SETUP ENDS///////////SETUP ENDS//////////


function draw() {
  canvasDivide = 120;
  // print(GridLines[2] + "gridlines1")
  textSizes = new TextSize();
  center = createVector(width / 2, height / 2); //how do I use this vector?
  // image(BGtemp, 0, 0, width, height);
  background(DrkPur);
  rectgrid = new GridofRects();
  mainHeading = new heading(center.x, height/canvasDivide);
  wtf = new WTF(center.x, height/(canvasDivide/12));
  // sineS.display();
  for (var k = 0; k < spritetotal; k++) {
     push();
    sprite[k].display();
    pop();

  }
  for (var l = 0; l < 300; l++) {
    circlearray[l] = new CircleArray(width / 2, height / 2);
  }

 


  if (mouseIsPressed && wtf.WTFisOn === true) {
    print("it's on they really wanna know");
    wtf.grow = 3;
  }
  
    //specify the animation instance and its x,y position
  //animation() will update the animation frame as well
  // animation(blinkingButton, 300, 150);
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
  for (var i = 0; i < canvasDivide; i++) {
    for (var j = 0; j < canvasDivide; j++) {
      fill(LghtPur); //from global scope
      noStroke();
      var size = floor((dist(mouseX, mouseY, rect.x, rect.y)));
      if (size > 9) {
        size = 9;
      }
      rect(j*canvasDivide ,i*canvasDivide, size, size);
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


function CircleArray(xPos, yPos) {
  x = xPos + cos(angle) * scalar;
  y = yPos + sin(angle) * scalar;
    push();
    translate(xPos, yPos);
    fill(Teal);
    noStroke();
    ellipse(x, y, 10, 10);
    pop();
    push();
    rotate(x,y);
    stroke(10);
    strokeWeight(10);
    line(0,0,10,10);
    pop();
    print("circle is here" + xPos + cos(angle) * scalar)
   angle += circleArraySpeed;

  }

  

