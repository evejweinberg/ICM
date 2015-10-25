//var b;
//var c;
var lastTime = 0; // spin timer
var xCord = []; // array to hold various x coordinate
var yCord = []; // array to hold various y coordinates
var radMeasure = [];
var t = 0; // new x in movement function
var j = 0; // new y in movement function
var m = 0; // new radian in movement function
var lastMove = 0; // line flying timer
var newexplosionX = 0;
var newexplosionY = 0;
var randColorRed = 0;
var randColorGreen = 0;
var randColorBlue = 0;
var press = 0;

var stars = {
  Place: function() {
    for (var q = 0; q < width + 100; q = q + width / 12) {
      for (s = 0; s < height + 100; s = s + height / 12) {
        stroke(255, 255, 255, 100);
        strokeWeight(1);
        line(q - 10, s, q + 10, s);
        line(q, s - 10, q, s + 10);
        line(q-5.5, s-5.5, q+5.5, s+5.5);
        line(q-5.5, s+5.5, q+5.5, s-5.5);
      }
    }
  }
}

var fire = {
  lastTime: 0,
  rad: 100,
  radius: 100,
  // use this function with the other one to create dynamimc pedals
  Seed: function(x, y) {
    randColorRed = random(0, 255);
    randColorGreen = random(0, 255);
    randColorBlue = random(0, 255);
    fill(randColorRed, randColorGreen, randColorBlue);
    stroke(0, 255, 10, 50);
    strokeWeight(10);
    ellipse(x, y, 25, 25);
    //noFill();
    //bezier(x, y, x, y + 300, x + 50, y + 50, x, y + 300);
    stroke(100, 100, 100);
    strokeWeight(1);
    line(x, y, x + this.radius * cos(this.rad), y + this.radius * sin(this.rad));
    fill(randColorRed, randColorGreen, randColorBlue);
    ellipse(x + this.radius * cos(this.rad), y + this.radius * sin(this.rad), 10, 10);
    xCord.unshift(x);
    yCord.unshift(y);

  },
  Spin: function(speed) {
    radMeasure.unshift(this.rad);
    this.rad = this.rad + speed;

  },
  // use this function to draw the static explosion pedals
  explosion: function(x, y) {
    for (var i = 0; i < 7 * TWO_PI; i++) {
      fill(randColorRed, randColorGreen, randColorBlue);
      stroke(0, 255, 0);
      strokeWeight(1);
      ellipse(x, y, 25, 25);
      //noFill();
      stroke(randColorRed, randColorGreen, randColorBlue);
      strokeWeight(1);
      line(x, y, x + this.radius * cos(i), y + this.radius * sin(i));
      fill(randColorRed, randColorGreen, randColorBlue);
      ellipse(x + this.radius * cos(i), y + this.radius * sin(i), 10, 10);
    }
  }
};

function setup() {
  createCanvas(windowWidth, windowHeight);
  //background(255);
  //b = width/2;
  //c = height/2;
}

function draw() {
  //fire.Seed(b, c);
  background(0);
  stars.Place();
  fire.Seed(width / 2, height / 2);
  fire.Spin(10);
  loadLine(0);
  lineMove();
  bunchFireworks();
}

function loadLine(i) {
  if (mouseIsPressed && mouseX < xCord[i] + 25 && mouseX > xCord[i] - 25 && mouseY < yCord[i] + 25 && mouseY > yCord[i] - 25) {
    j = yCord[i];
    t = xCord[i];
    m = radMeasure[i];
    press = press + 1;
  }
}

function lineMove() {
  if (press > 0) {
    if (millis() - lastMove > 10) {
      line(t, j, t + fire.radius * cos(m), j + fire.radius * sin(m));
      ellipse(t + fire.radius * cos(m), j + fire.radius * sin(m), 10, 10);
      t = t + 2 * cos(m);
      j = j + 2 * sin(m);
      lastMove = millis();
    }
  }
}

function bunchFireworks() {
  if (t > width || t < 0 || j > height || j < 0) {
    newexplosionX = random(50, width - 100);
    newexplosionY = random(50, width - 100);
    fire.explosion(newexplosionX, newexplosionY);
  }
}