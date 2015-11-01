var vid; // to hold video element
var img;

var skipPixels = 1;
var threshold = 50;


function setup() {

  createCanvas(640, 480);
  vid =  createCapture(VIDEO); // access webcam
  devicePixelScaling(false) ; //retinal display thing?
  vid.size(width,height);
  vid.hide(); // we will paint our own video
  img = createImage(width, height);

}

function draw() {
  background(255);
  vid.loadPixels();
  for (var y = 0; y < vid.height; y= y+ skipPixels) { 
    //start at the second pixel so you can check against previous
    for (var x = 1; x < vid.width; x = x + skipPixels) { 
      //get color of the pixel to the left
      var previousColor = vid.get(x-1,y);
      var pr = previousColor[0];
      var pg = previousColor[1];
      var pb = previousColor[2];
      //get the color of the current pixel
      var thisColor = vid.get(x,y);
      var r = thisColor[0];
      var g = thisColor[1];
      var b = thisColor[2];

      //use pythagorean formula to find distance between this pixel and pixel to left
      var closeInColor = sqrt(pow(r - pr, 2) + pow(g - pg, 2) + pow(b - pb, 2));
      //if they are pretty different turn it black
      if (closeInColor > threshold) { 
        img.set(x, y, [0, 0, 0, 255]); //turn pixel black
     }else{
        img.set(x,y,[255,0,255,255]);
      }
    }
  }
  img.updatePixels();
  image(img, 0, 0);

}


function keyTyped() {

  if (key == 't') {
    threshold--;
  } else if (key == 'T') {
    threshold++;
  }
  print(threshold);
}