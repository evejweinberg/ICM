// array to resrote Window(object I created)
var allWindowsArray = [];

function preload() {
  mySound = loadSound('Yell_Original.mp3');
}

function setup() {
  createCanvas(600, 600);
  //mySound.play();
  
  // create windows for 1st building
  for (var x = 110; x <= 190; x += 10) {
    for (var y = 305; y <= 590; y += 10) {
      var newWindow = new Window(x, y); // create new Window object
                                        // with different positions
                                        
      allWindowsArray.push(newWindow); // restore the new Window object into array
    }
  }
  
  for (var x = 210; x <= 290; x+=10){
    for (var y = 405; y <= 590; y+=10){
      var newWindow = new Window(x,y);
      allWindowsArray.push(newWindow);
    }
  }
  
    for (var x = 310; x <= 390; x+=10){
    for (var y = 105; y <= 590; y+=10){
      var newWindow = new Window(x,y);
      allWindowsArray.push(newWindow);
    }
  }
  
    for (var x = 410; x <= 490; x+=10){
    for (var y = 305; y <= 590; y+=10){
      var newWindow = new Window(x,y);
      allWindowsArray.push(newWindow);
    }
  }
}


function draw() {
  background(0);
  mySound.play();
  building(103, 300, 100, 600);
  building(203, 400, 100, 600);
  building(303, 100, 100, 600);
  building(403, 300, 100, 600);

  // loop through all the Window objects inside the array
  for (var i = 0; i < allWindowsArray.length; i++) {

    // for each Window
    // if mouse is inside it
    if (mouseX > allWindowsArray[i].pX && mouseX < (allWindowsArray[i].pX + 5) && mouseY > allWindowsArray[i].pY && mouseY < (allWindowsArray[i].pY + 5)) {
      
      // set the attribute sManPassedBy of Window to be true
      allWindowsArray[i].sManPassedBy = true;
    }

    // draw the Window
    allWindowsArray[i].display();
  }

  spiderellipse();

}

function spiderellipse() {
  noStroke();
  fill(255, 0, 0);
  ellipse(mouseX, mouseY, 4, 4);
}

function building(x, y, w, h) {
  strokeWeight(1);
  fill(192)
  rect(x, y, w, h);
}

// OBJECT
// Window
// need positionX & positionY to be created
function Window(posX, posY) {
  // attributes, eg. name, age, love and hate
  this.sManPassedBy = false;
  this.pX = posX;
  this.pY = posY;

  // functions, eg. behaviors
  this.display = function() {
    noStroke();
    
    if (this.sManPassedBy)
      fill("yellow");     // once spider man has passed by, draw yellow
    else
      fill("black");      // default: draw black

    rect(posX, posY, 5, 5);
  }
}

// function mousePressed() {
//   if ( song.isPlaying() ) { // .isPlaying() returns a boolean
//     song.stop();
//   } else {
//     song.play();
//   }
// }
