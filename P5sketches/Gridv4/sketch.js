var sineS;
var system, system2;
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
  // blinkingButton =loadAnimation("Assets/BlinkButton/bb_00000.png", "Assets/BlinkButton/bb_00027.png");
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




  for (var i = 0; i < gridTotalRows; i++) {
    for (var j = 0; j < gridTotalCols; j++) {
      sprite[i] = new spriteBalls(j * width / gridTotalRows, i * width / gridTotalCols);

    }
  }
  system = new ParticleSystem(createVector(width / gridTotalRows, height / gridTotalCols));
  system2 = new ParticleSystem(createVector(2 * width / gridTotalRows, 5 * width / gridTotalCols));



} //////SETUP ENDS///////////SETUP ENDS///////////SETUP ENDS///////////SETUP ENDS//////////


function draw() {
  print(GridLines[2] + "gridlines1")
  textSizes = new TextSize();
  center = createVector(width / 2, height / 2); //how do I use this vector?
  background(DrkPur);
  rectgrid = new GridofRects();
  mainHeading = new heading(center.x, GridLines[3]);
  wtf = new WTF(center.x, GridLines[0]);
  // sineS.display();
  for (var k = 0; k < spritetotal; k++) {
    push();
    sprite[k].display();
    pop();

  }





  if (mouseIsPressed && wtf.WTFisOn === true) {
    print("it's on they really wanna know");
    wtf.grow = 3;
  }

  //specify the animation instance and its x,y position
  //animation() will update the animation frame as well
  // animation(blinkingButton, 300, 150);

  system.addParticle();
  system.run();
  system2.addParticle();
  system2.run();


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
  print("heading is called");
  text("   Click on a NODE \n Watch it EXPLODE", xPos - 230, yPos);
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
      if (size > 9) {
        size = 9;
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
  for (var l = 0; l < spritetotal; l++) {
    sprite[l].explode();
  }


  if (dist(mouseX, mouseY, wtf.xPos, wtf.yPos) < 200) {
    print("WTF mouse is hovering")
    wtf.WTFisOn = true;
    wtf.grow = 3;

  }

  if (keyCode == SPACE) { //if up arrow is pressed
    print("S was hit")
      // system.addParticle();
      // system.run();

  }


}