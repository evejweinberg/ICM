var circleX = 0;
var circleY = 0;
var redColor = 255;
var blueColor = 255;
var greenColor = 255;
var alphaColor = 0;
var lastTime = 0;
var fixedX = 0;
var fixedY = 0;
var variableX = 0;
var variableY = 0;
var fxDistance = 0;
var fyDistance = 0;
var direction = 0;
var varXdist = 0;
var varYdist = 0;
var sliderX;
var sliderY;
var sliderDial;
var sliderImpact = 50;
var sliderLength = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(230, 50 + (frameCount % 200), 20, 134);

  fixedX = width / 12;
  fixedY = height / 12;
  fxDistance = width / 12;
  fyDistance = height / 12;
  direction = random(0, 2);
  sliderX = width - 100;
  sliderY = 0;
  sliderDial = sliderX;
}

function draw() {
  lineDirection();
  lineMovement();
  sliderDesign();
  sliderButton();
  for (var x = 0; x < width + 100; x += width / 12) {
    for (var y = 0; y < height + 100; y += height / 12) {
      ellipseStyle();
      ellipse(x, y, 10, 10);
    }
  }
}

function sliderDesign() {
  strokeWeight(5);
  stroke(0);
  line(sliderX, height - 95, sliderX - 200, height - 95);
  sliderLength = dist(sliderX, height - 95, sliderX - 200, height - 95);
}

function sliderButton() {
  fill(0, 0, 255);
  rectMode(CENTER);
  rect(sliderDial, height - 95, 20, 20);
  sliderFunction();
}

function sliderFunction() {
  if (mouseIsPressed && mouseY <= height - 75 && mouseY >= height - 115 && mouseX >= sliderX - 200 && mouseX < sliderX) {
    rect(mouseX, height - 95, 20, 20);
    sliderImpact = map(mouseX, sliderX - 200, sliderX, 10, 50);
  }
}

function lineStyle() {
  strokeWeight(3);
  stroke(redColor, greenColor, blueColor);
}

function ellipseStyle() {
  strokeWeight(1);
  stroke(0);
  fill(redColor, greenColor, blueColor);
  ellipseMode(CENTER);
}

function lineDirection() {
  if (fxDistance <= varXdist || fyDistance <= varYdist) {
    fixedX = fixedX + variableX;
    fixedY = fixedY + variableY;
    direction = random(0, 4);
    varXdist = 0;
    varYdist = 0;
    variableX = 0;
    variableY = 0;
  } else {

  }
}

function lineDraw() {
  line(fixedX, fixedY, fixedX + variableX, fixedY + variableY);
}

function lineMovement() {
  if (fixedX < 0 || fixedX > width || fixedY < 0 || fixedY > height) {
    fixedX = width / 2;
    fixedY = height / 2;
    direction = random(0, 4);
  } else {
    if (direction >= 0 && direction < 1) {
      if (millis() - lastTime > sliderImpact) {
        redColor = 255;
        greenColor = 0;
        blueColor = 0;
        lineStyle();
        variableX = variableX + 1;
        lineDraw();
        varXdist = dist(fixedX, fixedY, fixedX + variableX, fixedY + variableY);
        lastTime = millis();
      }
    } else if (direction >= 1 && direction < 2) {
      if (millis() - lastTime > sliderImpact) {
        redColor = 0;
        greenColor = 255;
        blueColor = 0;
        lineStyle();
        variableY = variableY + 1;
        lineDraw();
        varYdist = dist(fixedX, fixedY, fixedX + variableX, fixedY + variableY);
        lastTime = millis();
      }
    } else if (direction >= 2 && direction < 3) {
      if (millis() - lastTime > sliderImpact) {
        redColor = 0;
        greenColor = 0;
        blueColor = 255;
        lineStyle();
        variableX = variableX - 1;
        lineDraw();
        varXdist = dist(fixedX, fixedY, fixedX + variableX, fixedY + variableY);
        lastTime = millis();
      }
    } else if (direction >= 3 && direction < 4) {
      if (millis() - lastTime > sliderImpact) {
        redColor = 0;
        greenColor = 0;
        blueColor = 0;
        lineStyle();
        variableY = variableY - 1;
        lineDraw();
        varYdist = dist(fixedX, fixedY, fixedX + variableX, fixedY + variableY);
        lastTime = millis();
      }
    }
  }
}