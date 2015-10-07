var dots = []; // holds the points that form the origin and end of the line
var nodes = []; // holds the objects for the lines
var lineX = []; // holds mouseX values for lines
var lineY = []; // holds mouseY values for lines
var rad = []; // holds the radian values for lines
var orbs = []; // stupid ball that won't do what I want it to
var lastTime = 0; // timer for line drawing
var countX = 0; // stores value for when to delete a line
var countY = 0; // stores value for when to delete a line
var limits = 5; // stores the number of lines allowed on screen
var XonCir = []; // array for holding all X coordinates of the circle
var YonCir = []; // array for holding all y coordinates of the circle
var XonLine = []; // array for holding all the X points on the line
var YonLine = []; // array for holding all the Y points on the line
//var countTest = 0; // test timer for seeing values in arrays
//var testTime = 0; // resets the testing timer
var lineSpeed = 5; // controls speed of line being drawn
var randomX = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < dots.length; i++) {
    dots[i] = new Points(); //keep drawing new dots, how does it know the length, if this is in setup?
  }
  for (var j = 0; j < nodes.length; j++) {
    nodes[j] = new DrawLines();
  }
  for (var k = 0; k < orbs.length; k++) {
    orbs[k] = new Ball(x, y, s);
  }
  orbs.push(new Ball(width / 3, 0, 1));
  orbs.push(new Ball(300, 0, 2));//push 2 balls to start?
}

function draw() {
  background(0);
  randomX = random(20, width-100);
  for (var i = 0; i < dots.length; i++) {
    dots[i].look();
  }
  for (var j = 0; j < nodes.length; j++) {
    nodes[j].connect(255, 255, 255);
    if (nodes.length > 4) {
      nodes[0].connect(255, 0, 0);
    } else {
      nodes[0].connect(255, 255, 255);
    }
  }
  for (var k = 0; k < orbs.length; k++) {
    orbs[k].look();
    orbs[k].fall();
    orbs[k].wall();
    if (orbs[k].y > height || orbs[k].y < 0) { //if an orb is off-screen kill it and push a new one
      orbs.splice(0, 1);
      orbs.push(new Ball(randomX, 0, 2));
      //orbs.push(new Ball((random(100, width-200)), 0, random(1-3)));
    }

  }
  /*if (millis() - testTime > 5000) {
    print(YonCir[0]);
    print(YonCir[100]);
    countTest = countTest + 1;
    testTime = millis();
  } */
  /*fill(255);
  ellipse(XonCir[0], YonCir[0], 10, 10);
  ellipse(XonCir[0], YonCir[1], 10, 10);
  noFill();*/
}

function mousePressed() {
  // store X and Y values of X and Y mouse presses
  lineX.push(mouseX); //push a new value in this array, how does the line know which element in the array is it's lineX
  lineY.push(mouseY); //push a new value in this array
  dots.push(new Points(mouseX, mouseY));//push a new dot at the mouse X and Y

  // set x and y coordinates of the lines and call them as the button is pressed each time
  if (lineX.length > 1 && nodes.length < 6) {
    nodes.push(new DrawLines(lineX[countX], lineY[countY], lineX[countX + 1], lineY[countY + 1], rad[countX]));
    countX = countX + 1;
    countY = countY + 1;
  }

  // set it so no more than 5 lines can be on the screen at one time
  if (nodes.length > limits) {
    countX = limits;
    countY = limits;
    nodes.shift(new DrawLines(lineX[countX], lineY[countY], lineX[countX + 1], lineY[countY + 1], rad[countX]));
    lineX.splice(0, 1); //
    lineY.splice(0, 1);
    XonLine.splice(0, 25);
    YonLine.splice(0, 25);
    dots.shift(new Points(mouseX, mouseY));
  }
}

function Points(x, y) {
  this.x = x;
  this.y = y;
  this.look = function() {
    strokeWeight(1);
    stroke(255, 0, 200);
    ellipse(this.x, this.y, 10, 10);
  }
}

function Ball(x, y, s) {
  this.x = x; // x point of ball
  this.y = y; // y point of ball
  this.speed = s; //atan2((height - this.y), (width - this.x)); // direction of ball; used 1 previously but wanted all range of values
  this.radius = 50; // radius of circle
  //this.cirColor = 0; //variable to store value of pixel color of ball
  this.look = function(red, green, blue) {
    fill(this.red, this.green, this.blue);
    if (mouseX < this.x + this.radius && mouseX > this.x - this.radius && mouseY < this.y + this.radius && mouseY > this.y - this.radius){
    this.red = 0;
    this.green = 255;
    this.blue = 0;
    //print(this.speed);
    ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
  } else {
    stroke(255, 0, 0);
    fill(255, 0, 0);
    ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
  }
}
this.fall = function() {
  this.y = this.y + this.speed;
  for (var w = 0; w < TWO_PI; w = w + 1 / 360) {
    this.cirXpoint = this.x + this.radius * cos(w);
    this.cirYpoint = this.y + this.radius * sin(w);
    //print(this.cirXpoint);
    XonCir.shift(this.cirXpoint); //clear out the values in the array
    YonCir.shift(this.cirYpoint); //clear out the values in the array
  }
  for (var a = 0; a < TWO_PI; a = a + 1 / 360) {
    this.cirXpoint = this.x + this.radius * cos(a);
    this.cirYpoint = this.y + this.radius * sin(a);
    XonCir.push(this.cirXpoint); //repopulate the array
    YonCir.push(this.cirYpoint); //repopulate the array
  }
}
this.wall = function() {
  for (var i = 0; i < YonLine.length; i++) {
    for (var j = 0; j < YonCir.length; j++) {
      //add or subtract one from each figure as a buffer
      if (YonLine[i] - 1 <= YonCir[j] && YonLine[i] + 1 >= YonCir[j] && XonLine[i] - 1 <= XonCir[j] && XonLine[i] + 1 >= XonCir[j]) { //&& XonCir[l] == XonLine[k]) {
        this.speed = this.speed * -1;

      }
    }
  }
}
}

// object that creates lines between points
function DrawLines(a, b, c, d, r) {
  this.a = a; // x point of line origin
  this.b = b; // y point of line origin
  this.c = c; // x point of line terminal
  this.d = d; // y point of line terminal
  // obtain the radian measurement
  this.r = atan2((this.d - this.b), (this.c - this.a)); // radians of slope of line
  // use the radian measurement to get a new destination for the leading point of the line
  this.Xpoint = this.a + cos(this.r); // how much to increment x point
  this.Ypoint = this.b + sin(this.r); // how much to increment y point
  // get the distance of the finished line
  this.distance = dist(this.a, this.b, this.c, this.d); // store distane between points
  this.drawnline = 0; // store where the line is in the process of being drawn
  this.connect = function(red, green, blue) { //store paremeters for line color
    if (lineX.length >= 2) {
      stroke(red, green, blue);
      strokeWeight(5);
      if (millis() - lastTime > lineSpeed) {
        if (this.distance >= this.drawnline) {
          line(this.a, this.b, this.Xpoint, this.Ypoint);
          this.drawnline = dist(this.a, this.b, this.Xpoint, this.Ypoint);
          this.Xpoint = this.Xpoint + cos(this.r) * lineSpeed;
          this.Ypoint = this.Ypoint + sin(this.r) * lineSpeed;
          XonLine.push(this.Xpoint); //store x values in array to evaluate if circle intersects this point
          YonLine.push(this.Ypoint); //store y value in array to evaluate if circle intersects this point
          lastTime = millis(); //reset timer
        } else {
          line(this.a, this.b, this.c, this.d); //keep line
        }
      }
    }
    strokeWeight(1);
  }
}