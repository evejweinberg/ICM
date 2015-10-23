
var gridTotalCols = 12;
var gridTotalRows = 12;




// GridLines[1][1];

function setup() {
  createCanvas(windowWidth, windowHeight);

var GridLines = [
  [height*(1/gridTotalRows)],
  [height*(2/gridTotalRows)],
  [height*(3/gridTotalRows)],
  [height*(4/gridTotalRows)],
  [height*(5/gridTotalRows)],
  [height*(6/gridTotalRows)],
  [height*(7/gridTotalRows)],
  [height*(8/gridTotalRows)],
  [height*(9/gridTotalRows)],
  [height*(10/gridTotalRows)],
  [height*(11/gridTotalRows)],
  [height*(12/gridTotalRows)],
];

  background(255);
  for (var i = 0; i < gridTotalRows; i++) {
    for (var j = 0; j < gridTotalCols; j++) {
      stroke(0);
      rect(j*width/gridTotalRows,GridLines[i], 5, 5);
    }
  }
}
print(i,j)

function draw() {
  windowResized();
  // background(255);
  // rect(GridX1, GridY1, 50, 50);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}