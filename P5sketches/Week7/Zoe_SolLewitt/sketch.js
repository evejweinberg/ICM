var cells = []; // This means array!
var w = 90;
var cols, rows;
var canvas, text;

function setup() {
  text = createDiv('Sol LeWitt | Wall Drawing');
  text.position(150,50);
  
  canvas = createCanvas(1000, 1000);
  canvas.position(130, 100);

  
  cols = width / w; //so code doesn't redraw itself
  rows = height / w;
 
  createGrid();

  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      cells[i][j].display();
    }
  }
  
  button = createButton ("randomize!");
  button.position(190,325);
  button.mousePressed(createGrid);
  
  
}


function createGrid() {

  for (var i = 0; i < cols; i++) {

    cells[i] = [];//create an array for every column

    for (var j = 0; j < rows; j++) {

      cells[i][j] = { //create a multi-array for col and row
        x: i * w,
        y: j * w,
        w: w,
        h: w,
        dir: floor(random(4)),

        display: function() {
          fill(255);
          
          
          rect(this.x, this.y, this.w, this.h);

          if (this.dir == 1) {

            line(this.x, this.y, this.x + w, this.y + w);

          } else if (this.dir == 2) {

            line(this.x + w, this.y, this.x, this.y + w);

          } else if (this.dir == 3) {

            line(this.x + w, this.y, this.x, this.y + w);
            line(this.x, this.y, this.x + w, this.y + w);

          } else {
            rect(this.x, this.y, this.w, this.h);
          }

          //line changes

          if (mouseX >= this.x && mouseX < this.x + 10 && mouseY >= this.y && mouseY < this.y + 10) {



            fill(255);
            rect(this.x, this.y, this.w, this.h);
            if (this.dir == 2) {

              line(this.x, this.y, this.x + w, this.y + w);

            } else if (this.dir == 3) {

              line(this.x + w, this.y, this.x, this.y + w);

            } else if (this.dir == 1) {

              rect(this.x, this.y, this.w, this.h);

            } else {

              line(this.x + w, this.y, this.x, this.y + w);
              line(this.x, this.y, this.x + w, this.y + w);
            }
          }
        }
      }
    }
  }
}



function draw() {
  //create array of cells
  background(255);
  rect(0,0, 200, 200)
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      cells[i][j].display();
    }
  }
}