var sineS;
var sprite = [];
var gridTotalCols = 12;
var gridTotalRows = 12;
var GridLines;
var NeutraBold, BGtemp;
var center;
var b1, b2, c1, c2;
var LghtPur, DrkPur, Teal;
var h1, h2, h3, h4;
var strkwght;
var spritetotal = 12;

function preload() {
  NeutraBold = loadFont('Assets/NeutraText-Bold.otf');
  BGtemp = loadImage('Assets/HereYOuTakeIt-01.png');
}



function setup() {
  createCanvas(windowWidth, windowHeight);
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
  translate(-5 * width, -5 * height);//why only displaying 1 row
  for (var i = 0; i < spritetotal; i++) {
    for (var j = 0; j < spritetotal; j++) {
      sprite[i] = new spriteBalls(GridLines[j], GridLines[i]);
    }
  }
  pop();

}


function draw() {
  textSize();
  center = createVector(width / 2, height / 2); //how do I use this vector?
  // image(BGtemp, 0, 0, width, height);
  background(DrkPur);



  /////////MAKE GRID/////////
  for (var i = 0; i < gridTotalRows; i++) {
    for (var j = 0; j < gridTotalCols; j++) {
      // stroke(0);
      fill(LghtPur);
      noStroke();
      var size = floor((dist(mouseX, mouseY, j * width / gridTotalRows, GridLines[i]) / 62));
      if (size > 9) {
        size = 9;
      }
      rect(j * width / gridTotalRows, GridLines[i], size, size);
    }
  }



  // textAlign(CENTER);
  fill(255);
  noStroke();
  textLeading(20);
  textFont(NeutraBold);
  textSize(h1);
  text("   I Have an Idea!\nHere, you take it:", center.x - 200, GridLines[1] - h2);

  WTF(center.x, GridLines[0] - height / 12);
  print("WTF")

  sineS.display();
  for (var k = 0; k < spritetotal; k++) {
    sprite[k].display();

  }

  if (mouseIsPressed) {
    for (var l = 0; l < spritetotal; l++) {
      sprite[l].explode();
    }

  }

  if (mouseIsPressed && WTF.WTFisOn === true) {
    print("it's on they really wanna know");
    WTF.grow = 3;
  }
}

function textSize() {
  this.h1 = windowWidth / 26; //how do I use these globally?
  this.h2 = windowWidth / 63;
}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}




function WTF(xPos, yPos) {
  var dx = 120;
  var grow = 1;
  this.WTFisOn = false;
  var rectW;
  var rectH;


  textAlign(CENTER);
  fill(LghtPur);
  noStroke();
  textLeading(20);
  textFont(NeutraBold);
  textSize(textSize.h2);
  text("WTF is THIS SITE?", xPos, yPos);
  fill(Teal);
  stroke(255);
  strokeWeight(strkwght);
  push();
  scale(grow, grow);
  rectMode(CENTER);
  rect(xPos + dx, yPos - textSize.h2 / 2.5, textSize.h2, textSize.h2); //it doesn't know h2
  fill(255);
  noStroke();
  text("?", xPos + dx, yPos);
  pop();
  if (dist(mouseX, mouseY, xPos + dx, yPos - textSize.h2 / 2.5) < textSize.h2) {
    print("WTF i wanna know!!!")
    this.grow = 3;
    this.WTFisOn = true;
  }
  
  //when MouseinClicked, call his
  this.grow = function(){
    rectH = 40;
    rectW =50;
  
  }

  
}