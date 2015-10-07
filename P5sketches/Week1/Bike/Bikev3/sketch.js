var sat = 150;
var bri = 255;
//bike varibles
  var strokeweight = 10;
  wheel1start = 0; //center of back wheel
  var wheeldist = 120;
  var wheelsize = 50;
  var topbar = wheel1start-wheelsize;
  var barlength = wheel1start+wheeldist/2;
  var seatwidth = 10;



function setup() {
    createCanvas(900,900);
    noLoop();
}

function draw() {
    var hueChange1 = int(random(0, 360));
    var hueChange2 = int(random(0, 360));
    var hueChange3 = int(random(0, 360));
    var hueChange4 = int(random(0, 360));
    var hueChange5 = int(random(0, 360));
    var color1 = color(hueChange1, sat, bri);
    var color2 = color(hueChange2, sat, bri);
    var color3 = color(hueChange3, sat, bri);
    var color4 = color(hueChange4, sat, bri);
    var color5 = color(hueChange5, sat, bri);
  
   background(hueChange5, sat-50, bri);
  

  push();
    translate(100,100);
    strokeWeight(strokeweight);
    stroke(color1);
    fill(color2);
    ellipse(wheel1start,wheel1start,wheelsize,wheelsize);
    ellipse(wheeldist,0,wheelsize,wheelsize);
    line(wheel1start, wheel1start, barlength, wheel1start); //bottom
    line(wheel1start, wheel1start, wheel1start+wheeldist/3, topbar); //towards seat
    line(wheel1start+wheeldist/3, topbar, barlength+wheel1start+wheeldist/3, topbar); //top
    line(barlength, wheel1start, wheel1start+wheeldist/3-5, topbar-12); //pedal to seat
    line(barlength, wheel1start, barlength+wheel1start+wheeldist/3, topbar); //pedals to handles
    line(barlength+wheel1start+wheeldist/3-5, topbar-12, wheeldist, wheel1start); //front wheel to handles
    line(wheel1start+wheeldist/3-5, topbar-12, wheel1start+wheeldist/3-5+seatwidth, topbar-12);//seat
    line(barlength+wheel1start+wheeldist/3, topbar-12, barlength+wheel1start+wheeldist/3+seatwidth, topbar-12);//handles
  pop();
  
}