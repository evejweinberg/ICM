var angle = 0.0;
var offset = 120;
var scalar = 300;
var speed = 0.05;
var size = 20;

var circlearray = [];

function setup() {
  createCanvas(900, 900);
  for (var i = 0; i < 360; i++) {
    size = sin(i) * 12;
    circlearray[i] = new CircleArray(450, 450);
    print("circle number" + circlearray[i])

  }
  
  // background(204);
  strokeWeight(1);
  stroke(150);

for (var i = 0; i < 360; i++) {
    size = sin(i) * 12;
    circlearray[i] = new CircleArray(450, 450);
    circlearray[i].display(random(255), random(12));
  }

  scalar = -1 * (dist(mouseX, mouseY, width / 2, height / 2));
  print(scalar);
}



function draw() {
  
    // var theta = 0;
    // var r = 500;
    for (var j = 0; j < 12; j++) {
      print("drawing!");
      // ellipse(r*cos(theta), r*sin(theta), 20, 20);
      // theta += TWO_PI/12;
    }

//   background(204);
//   strokeWeight(1);
//   stroke(150);

// for (var i = 0; i < 360; i++) {
//     size = sin(i) * 12;
//     circlearray[i] = new CircleArray(450, 450);
//     circlearray[i].display(random(255), random(12));
//   }

//   scalar = -1 * (dist(mouseX, mouseY, width / 2, height / 2));
//   print(scalar);
}

function MousePressed(){
//   for (var i = 0; i < 360; i++) {
    
//     circlearray[i].display(random(255), random(12));
//   }
}

function CircleArray(xPos, yPos) {
  x = xPos + cos(angle) * scalar;
  y = yPos + sin(angle) * scalar;
  angle += speed;
  // ellipse(x, y, size, size);


  this.display = function(change, change2) {
    // translate between polar and cartesian
    // x = r*cos(angle)
    // y = r*sin(angle)
    
    x = xPos + cos(angle) * scalar;
    y = yPos + sin(angle) * scalar;


    push();
    // rotate(x,y);
    stroke(255);
    strokeWeight(2);
    translate(x,y);
    var a = atan2(x-width/2, y-width/2)
    rotate(a);
    line(0,0, random(10, 30),  random(10, 30));
    pop();

    fill(255, change / 2, change);
    ellipse(x, y, size, size);
  }
}