

function setup() {
  createCanvas(displayWidth,displayHeight);
  background(255, 128, 163);
  

  
  noLoop();
}

function draw() {
  
  var sat = 200;
  var bri = 255;
  var strokeweight = 10;

  
  //create random numbers - want to make this a 4loop next
  var hueChange1 = int(random(0, 360));
  var hueChange2 = int(random(0, 360));
  var hueChange3 = int(random(0, 360));
  
  
  colorMode(HSB, 255); //switch to HSB, but what is this 255?
  var c = color(hueChange1, sat, bri); //create 3 hue values
  var d = color(hueChange2, sat, bri);
  var e = color(hueChange3, sat, bri);


 
   
    var b = color(40, 0, 255);
    var a = color(31, 149, 137);//teal
    print(hueChange1); 
  
  //bike varibles
  strokeWeight(strokeweight);
  wheel1start = 0; //center of back wheel
  var wheeldist = 120;
  var wheelsize = 50;
  var top = wheel1start-wheelsize;
  var barlength = wheel1start+wheeldist/2;
  
  //bike 1
  push();
  translate(100,100);
  stroke(b);
  fill(c);
  ellipse(wheel1start,wheel1start,wheelsize,wheelsize);
  stroke(b);
  fill(c);
  ellipse(wheeldist,0,wheelsize,wheelsize);
  line(wheel1start, wheel1start, barlength, wheel1start); //bottom
  line(wheel1start, wheel1start, wheel1start+wheeldist/3, top); //towards seat
  line(wheel1start+wheeldist/3, top, barlength+wheel1start+wheeldist/3, top); //top
  line(barlength, wheel1start, wheel1start+wheeldist/3-5, top-12); //pedal to seat
  line(barlength, wheel1start, barlength+wheel1start+wheeldist/3, top); //pedals to handles
  line(barlength+wheel1start+wheeldist/3-5, top-12, wheeldist, wheel1start);
  line()
  
  pop();
  
}