// This example shows how to read an analog
// value from an serial port
// and draw circle with size mapped to that value

// Declare a "SerialPort" object
var serial;
var img0, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10;

// Variable for size 
//var diameter = 0;
var tree;

function preload() {
  // img0 = loadImage("assets/Tree_00000.png");
  // img1 = loadImage("assets/Tree_00001.png");
  //   img2 = loadImage("assets/Tree_00002.png");


//create an animation from a sequence of numbered images
//pass the first and the last file name and it will try to find the ones in between
tree = loadAnimation("assets/Tree_00000.png", "assets/Tree_00028.png");

}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Instantiate our SerialPort object
  serial = new p5.SerialPort();

  // Assuming our Arduino is connected, let's open the connection to it
  // Change this to the name of your arduino's serial port
  serial.open("/dev/cu.usbmodemfa131");

  // if you need to see the list
  // serial.onList(gotList);

  // This is a new concept!
  // Whenever there is new data, the "gotData" function happens.
  // This is called a *CALLBACK*
  serial.onData(gotData);
  
  
  
}

// This happens when there is data
function gotData() {
  // Read the data as text (a string)!
  var data = serial.readLine();
  // Check to make sure something really came in
  if (data.length > 0); {
    // To use it as a number, the Number() function
    // converts it.  Divide by 10 to make it smaller
    diameter = Number(data) / 10;
  }
}

function draw() {
  background(0);
  animation(tree, width/2, height/2);
  
  // getFrameImage ()

  // Display raw data in canvas
  // fill(255);
  // textAlign(CENTER);
  // textSize(24);
  // text(diameter, width / 2, height -12);
  
  // Draw the circle!
  // fill(255);
  // ellipse(width/2, height/2, diameter, diameter);
}


/*
// Got the list of ports
function gotList(thelist) {
  println("List of Serial Ports:");
  // theList is an array of their names
  for (var i = 0; i < thelist.length; i++) {
    // Display in the console
    println(i + " " + thelist[i]);
  }
}*/

