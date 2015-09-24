var b;
var b2;
var sliderStart = 100;
var sliderEnd = 320;
var linex = 100;
var liney = 440;
var draggingX = 0;
var dragging = false;
var a = 270;
var b = 420;
var d = 20;
var sliderRad =20;
var speed = 1;
var sliderChangeval = 0;

function Button(x, y, speed) {
  this.x = x;
  this.y = y;
  this.r = 100;
  // this.speed = speed;

  this.display = function() {
    // this.x += this.speed;
    if (dist(mouseX, mouseY, this.x, this.y) < this.r / 2) {
      fill(255, 0, 0);
    } else {
      fill(0, 0, 0);
    }
    ellipse(this.x, this.y, this.r, this.r);
  }
}

function add(a, b) {
  return a + b;
}


function setup() {
  createCanvas(500, 500);

  b = new Button(width / 2, height / 2, 1);
  b2 = new Button(40, 40, 2);
}

function draw() {
  background(255);
  b.display();
  b2.display();
    DashedLine(width * .05, height / 2, 0);

  //sliderline
  line(sliderStart, 440, sliderEnd, 440)
    //sliderbutton
  fill(100, 60, 20);
  ellipse(linex, liney, 10, 10)
  if (dragging && mouseX > 100 && mouseX < 320) {
    linex = mouseX - draggingX;
    sliderChangeval = 100;
  }

  if (dist(mouseX, mouseY, a, b) < d / 2) {
    fill(100);
  } else {
    fill('black');
  }
  // dragging = false;
    var circX = 100;
    
    speed = speed++;
  if(dragging === true){
  
    ellipse(circX+speed, 20, 20,20);
    
  }

}

function mousePressed() {
  if (dist(mouseX, mouseY, linex, liney) < sliderRad) {
    dragging = true;
  }


}

function mouseReleased() {
  if (mouseX > 0 && mouseX < 420 && mouseY > 400 && mouseY < 500) {
    dragging = false;
  }
}

function DashedLine(xPos, yPos, lineRotation) {
  var linelength = 15;
  push();
  rotate(lineRotation);
  translate(xPos, yPos);
  strokeWeight(3);

  for (var i = 0; i < 20; i++) {
    stroke(255,0,200);
    line(i * 25, 0, linelength + i * 25, 0);
  }
  pop();
}