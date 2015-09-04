// function preload(){
// background(255, 128, 163);
// }

function setup() {
  createCanvas(displayWidth,displayHeight);
  
  

  background(255, 128, 163);
  
  // noLoop();
}

function draw() {
  


  
  // colorMode(HSB, 255); //switch to HSB, but what is this 255?
  // var sat = 120;
  // var bri = 255;
  
  // var hueChange1 = int(random(0, 360));
  // var hueChange2 = int(random(0, 360));
  // var hueChange3 = int(random(0, 360));
  // var hueChange4 = int(random(0, 360));
  // var hueChange5 = int(random(0, 360));
  //   var color1 = color(hueChange1, sat, bri);
  //   var color2 = color(hueChange2, sat, bri);
  //   var color3 = color(hueChange3, sat, bri);
  //   var color4 = color(hueChange4, sat, bri);
  
  
  // //create random numbers with a for loop doesn't work
  // hueChangetotal = 10;
  // for (var i=0; i<hueChangetotal.length; i++) {
  // var hueChange[] = int(random(0, 360));
  // var color[] = color(hueChange[]], sat, bri);
  // }
  
 
  
  //bike varibles
  var strokeweight = 10;
  wheel1start = 0; //center of back wheel
  var wheeldist = 120;
  var wheelsize = 50;
  var topbar = wheel1start-wheelsize;
  var barlength = wheel1start+wheeldist/2;
  
  
  // for (var b=0; b<20; b++) {

  push();
    translate(400,100);
    strokeWeight(strokeweight);
    stroke(color1);
    fill(color2);
    ellipse(wheel1start,wheel1start,wheelsize,wheelsize);
    stroke(color3);
    fill(color4);
    ellipse(wheeldist,0,wheelsize,wheelsize);
    line(wheel1start, wheel1start, barlength, wheel1start); //bottom
    line(wheel1start, wheel1start, wheel1start+wheeldist/3, topbar); //towards seat
    line(wheel1start+wheeldist/3, topbar, barlength+wheel1start+wheeldist/3, topbar); //top
    line(barlength, wheel1start, wheel1start+wheeldist/3-5, topbar-12); //pedal to seat
    line(barlength, wheel1start, barlength+wheel1start+wheeldist/3, topbar); //pedals to handles
    line(barlength+wheel1start+wheeldist/3-5, topbar-12, wheeldist, wheel1start);
  pop();

  // }
  
}