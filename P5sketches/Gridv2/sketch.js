var sineS;
var sprite = [];
var gridTotalCols = 12;
var gridTotalRows = 12;
var GridLines;
var NeutraBold;
var BGtemp;
var center;
var Y_AXIS = 1;
var X_AXIS = 2;
var b1, b2, c1, c2;
var LghtPur, DrkPur, Teal;
var h1, h2, h3, h4;
var strkwght;

function preload() {
  NeutraBold = loadFont('Assets/NeutraText-Bold.otf');
  BGtemp = loadImage('Assets/HereYOuTakeIt-01.png');
}



function setup() {
  createCanvas(windowWidth, windowHeight);
  sineS = new SineSlider(floor(width * (1 / gridTotalCols)), floor(height * (8 / gridTotalRows)) - 40, floor(width * (10 / gridTotalCols)), 10, 0.09, (242, 121, 218), (255, 9, 200));
  print("SineSlider");
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

  sprite[1] = new spriteBalls(90, GridLines[1]);
  // sprite[2] = new spriteBalls(70, floor(height * (2 / gridTotalRows)));
  sprite[2] = new spriteBalls(70, GridLines[2]);
  // print(GridLines[2]);
}


function draw() {
  h1 = windowWidth / 26;
  h2 = windowWidth / 63;
  image(BGtemp, 0, 0, width, height);
  center = createVector(width / 2, height / 2);
  print("center is" + center);
  background(DrkPur);




  for (var i = 0; i < gridTotalRows; i++) {
    for (var j = 0; j < gridTotalCols; j++) {
      // stroke(0);
      fill(255);
      noStroke();

      var size = floor((dist(mouseX, mouseY, j * width / gridTotalRows, GridLines[i]) / 62));
      if (size > 7) {
        size = 7;
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

  WTF(center.x, GridLines[0] - height / 15);

  sineS.display();
  sprite[1].display();
  sprite[2].display();

  if (mouseIsPressed) {
    sprite[2].explode();
    sprite[1].explode();
  }

  if (mouseIsPressed && WTF.WTFisOn == true) {
    print("it's on they really wanna know");
    WTF.grow = 3;
  }
}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}




function WTF(xPos, yPos) {
  var dx = 120;
  var grow = 1;
  this.WTFisOn = false;


  textAlign(CENTER);
  fill(LghtPur);
  noStroke();
  textLeading(20);
  textFont(NeutraBold);
  textSize(h2);
  text("WTF is THIS SITE?", xPos, yPos);
  fill(Teal);
  stroke(255);
  strokeWeight(strkwght);
  push();
  scale(grow, grow);
  rectMode(CENTER);
  rect(xPos + dx, yPos - h2 / 2.5, h2, h2);
  fill(255);
  noStroke();
  text("?", xPos + dx, yPos);
  pop();
  if (dist(mouseX, mouseY, xPos + dx, yPos - h2 / 2.5) < h2) {
    print("WTF i wanna know!!!")
    this.grow = 3;
    this.WTFisOn = true;
  }

  this.boxGrow = function() {
    fill(Teal);
    stroke(255);
    strokeWeight(strkwght);
    // rect(x,y,w,h);





  }
}