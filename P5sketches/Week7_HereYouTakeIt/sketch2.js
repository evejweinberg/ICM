var x = 0;
var canvas1;
var par, par2, par3;
var slider;
var rect1;
var checkbox, qbutton, header;
var LghtPur, DrkPur, Teal, DrkTeal, Orange;
var open;
var ischecked = false;





function setup() {
  canvas1 = createCanvas(200, 200);
  canvas1.class("background");
  LghtPur = color(125, 88, 183);
  DrkPur = color(84, 46, 150);
  Teal = color(33, 173, 146);
  DrkTeal = color(25, 117, 99);
  Orange = color(255, 166, 105);

  palettePastels = [
    LghtPur, DrkPur, Teal, DrkTeal, Orange
  ]

  canvas1.position(400, 400);
  print('canvas1')
  header = createP("I have an idea. \n Here you take it");
  par = createP("HEADLINE");
  par2 = createP("DESCRIPTION");
  par3 = createP("REFERENCE");
  par.position(200, 200);
  par3.position(500, 500);
  header.position(500, 200);
  header.class("h2");
  par.class("background");
  par2.class("textboxes");
  par3.class("textboxes");
  // par2.position(canvas1.width / 2, canvas1.height / 2);

  slider = createSlider(0, 255, 100);
  qbutton = createButton("?", "Hi");
  checkbox = createCheckbox("ShutUp", ischecked);
  checkbox.size(100,100);
  canvas1.class("lemon"); // assign a class to be used by the CSS sheet
  open = new OpenQRect(10, 10, 10, 10);
}


function draw() {
  background(slider.value());

  open.display();


  checkbox.position(slider.value(), 300);
  qbutton.position(500, 0);
  // qbutton.size(1, 1);
  qbutton.class("qbutton");
  qbutton.mousePressed(open.expand);



  stroke(255);
  line(x, 0, x, height);
  x = x + 3;
  if (x > width) {
    x = 0;
  }
  par.html("The slider is at: " + slider.value());
}



function OpenQRect(x, y, w, h) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.display = function() {
    fill(255);
    rect(x, y, w, h);
  }

  this.expand = function() {
    this.w = this.w + 1;
    this.h = this.h +1;
    print(this.w+ "w")
    print(this.h + "h")
    // if (this.w => 300) {
    //   this.w = 300;
    // }
    // if (this.h => 700) {
    //   this.h = 700;
    // }

  }
}