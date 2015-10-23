var mode;

function setup() {
   mode = 1;
   createCanvas(500,500);
  
}

function draw() {
  if (mode === 1) {
    
  Button(windowWidth * .5, windowHeight * .95); //draw volume button
  var distanceR = dist(mouseX, mouseY, windowWidth * .5, windowHeight * .95);
  print("distance R:" + distanceR);
  //if the disctance less than the circle's radius
  if (distanceR < buttonradius) { //which button radius?
    isOverPlayButton = true;
    cursor(HAND);
    // print("mousewasPressed - turn music on")
  } else {
    isOverPlayButton = false;
    cursor(ARROW);
  }

  ButtonNext(windowWidth * .5, windowHeight * .5); //draw the next button
  var distanceW = dist(mouseX, mouseY, windowWidth * .5, windowHeight * .5); //why can't I say 'ButtonNext.xPos'
  print("distance W to next button:" +distanceW);
  // print("mouse to next button is:" + distanceR);
  //if the disctance less than the circle's radius
  if (distanceW < buttonradius) {
    isOverNextButton = true;
    cursor(HAND);
    // print("mousewasPressed - turn music on")
  } else {
    isOverNextButton = false;
    cursor(ARROW);
  }

    }

  
  
  if (mode === 2) { //mode 2
    ellipse(40, 50, 30, 30);
    
    
  Button(windowWidth * .5, windowHeight * .95);
  var distanceS = dist(mouseX, mouseY, windowWidth * .5, windowHeight * .95);
  print("distanceS to play button" + distanceS);
  //if the disctance less than the circle's radius
  if (distanceS < buttonradius) {
    isOverPlayButton = true;
    cursor(crosshair);
    print("mousewasPressed - turn music on")
  } else {
    isOverPlayButton = false;
    cursor(ARROW);
  }

  ButtonNext(windowWidth * .5, windowHeight * .5); //draw the next button
  var distanceX = dist(mouseX, mouseY, windowWidth * .5, windowHeight * .5);
  print("distanceX to next button" + distanceX);
  //if the disctance less than the circle's radius
  if (distanceX < buttonradius) {
    isOverNextButton = true;
    cursor(HAND);
    // print("mousewasPressed - turn music on")
  } else {
    isOverNextButton = false;
    cursor(ARROW);
  }
  } ////mode 2 ends
 
    
  
}


function mousePressed() {
  if (isOverPlayButton === true) {
    if (SoundBG.isPlaying()) { // .isPlaying() returns a boolean
      SoundBG.pause(); // .play() will resume from .pause() position
      background(255, 0, 0);
    } else {
      SoundBG.play();
      background(0, 255, 0);
    }
  }

  if (mode === 1 && isOverNextButton === true) {
    mode = 2;
  }
  if (mode ===2 && isOverNextButton === true){
    mode = 1;
  }

}


function Button(xPos, yPos) { //Volume Button
  this.buttonradius = 60;
  fill(150);
  strokeWeight(4);
  stroke(60);
  ellipse(xPos, yPos, buttonradius, buttonradius);


}

function ButtonNext(xPos, yPos) {
  this.buttonradius = 60;
  fill(2255,144,30);
  strokeWeight(4);
  // stroke(palettebluepink[2]);
  rectMode(CENTER);
  rect(xPos, yPos, 120, 50);
  textSize(26);
  textAlign(CENTER);
  noStroke();
  fill(50,50,40);
  text("NEXT", xPos, yPos);
  noFill();

}


