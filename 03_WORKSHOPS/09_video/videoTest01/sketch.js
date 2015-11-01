var vid; // to hold video element
var img;

var skipPixels = 1;
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

  for (var y = 0; y < vid.height; y= y+ skipPixels) { 
    for (var x = 0; x < vid.width; x = x + skipPixels) { 
      //get the color of the current pixel
      var thisColor = vid.get(x,y);
      var r = thisColor[0];
      var g = thisColor[1];
      var b = thisColor[2];
      img.set(x, y, [r, g, b, 255]); //leave it the natural color
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
