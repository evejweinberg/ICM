var vid; // to hold video element
var img;
var targetColor = [255,0,0,0];
var skipPixels = 2;
var threshold = 25;


function setup() {

  createCanvas(640, 480);
  vid =  createCapture(VIDEO); // access webcam
  devicePixelScaling(false) ; //retinal display thing?
  vid.size(width,height);
  vid.hide(); // we will paint our own video
  img = createImage(width, height);

}

function draw() {
  background(0);
  vid.loadPixels();
  var sumX = 0;
  var sumY = 0;
  var counter = 0;
  var targetR = targetColor[0];
  var targetG = targetColor[1];
  var targetB = targetColor[2];
  for (var y = 0; y < vid.height; y= y+ skipPixels) { 
    for (var x = 0; x < vid.width; x = x + skipPixels) { 
      //get the color of the current pixel
      var thisColor = vid.get(x,y);
      var r = thisColor[0];
      var g = thisColor[1];
      var b = thisColor[2];
      //use pythagorean formula to find distance between this pixel and color you are chasing
      var closeInColor = sqrt(pow(r - targetR, 2) + pow(g - targetG, 2) + pow(b - targetB, 2));
      if (closeInColor < threshold) {
        //sum up and count all the qualifying positions for averaging at the end
        sumX = sumX + x;
        sumY = sumY + y;
        counter++;
        img.set(x, y, [255, 0, 0, 255]); //debug turn qualifying pixesl red
      } else {
        img.set(x, y, [r, g, b, 255]); //leave it the natural color
      }
    }
  }
  img.updatePixels();
  image(img, 0, 0);
  //average all the X's and Y's that qualified.
  if (counter > 0) {
    aveX = sumX / counter;
    aveY = sumY / counter;
    fill(255, 0, 0);
    ellipse(aveX, aveY, 20, 20);
  }
}

function mousePressed() {
  //pick new color to chase
  targetColor = vid.get(mouseX, mouseY);  
  println("Target R" + targetColor[0]+ " G" + targetColor[1] + " B" + targetColor[2]);

}

function keyTyped() {

  if (key == 't') {
    threshold--;
  } else if (key == 'T') {
    threshold++;
  }
  print(threshold);
}