// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 16-9: The scribbler

// Two global variables
var x;
var y;
var video;
 var balla;

function setup() {
  createCanvas(640, 480);
  background(175);
  // Start x and y in the center
  x = width/2;
  y = height/2;

  // Fix for retina computers
  devicePixelScaling(false);

  video = createCapture(VIDEO);
  video.size(width, height);
  // The above function actually makes a separate video
  // element on the page.  The line below hides it since we are
  // drawing the video to the canvas
  video.hide();

}

function draw() {
  video.loadPixels();

  // A new x,y location is picked as the current (x,y) plus or minus a random value. 
  // The new location is constrained within the window's pixels.  
  var newx = constrain(x + random(-60, 60), 0, width);
  var newy = constrain(y + random(-60, 60), 0, height);

  var col = video.get(floor(newx), floor(newy));
  var s = random(-40,40)
   var u = random(30)
  
  
  // var loc = (floor(newx) + floor(newy) * width) * 4;
  // var r = video.pixels[loc];
  // var g = video.pixels[loc + 1];
  // var b = video.pixels[loc + 2];
  // Draw a line from x,y to the newx,newy
  stroke(col,.2);
  // console.log(col)
  strokeWeight(random(10));
  noFill();
  // var t=line(x, y, newx, newy);
  bezier(x, y, x+s,y+s,newx+s,newy+s, newx, newy);
  fill(col)
  ellipse(x,y,u,u);
rainbow(x,y,u);

  // Save the new location in (x,y) in order to start the process over again.
  x = newx; 
  y = newy;
}

function rainbow(x, y, diameter) {
 ellipse(x+random(500), y+random(100), diameter, diameter);
  ellipse(x+random(500) + 50, y+random(100), diameter, diameter);
}