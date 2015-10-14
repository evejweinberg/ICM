var x = 0;
var canvas1;
var par, par2, par3;
var slider;
var rect1;
var checkbox;

function setup() {
  canvas1 = createCanvas(100, 100);

  canvas1.position(400, 400);
  print('canvas1')
  par = createP("Web socket.");
  par2 = createP("JSON.");
  par3 = createP("DOM.");
  par.position(200,200);
  
  par.style("background-color", "blue");
  par2.class("textboxes");
  par3.class("textboxes");
  par2.position(canvas1.width/2,canvas1.height/2);
par3.postion(500,500);
  slider = createSlider(0, 255, 100);
  checkbox = createCheckbox("ShutUp", false);
  canvas1.class("lemon"); // assign a class to be used by the CSS sheet
}


function draw() {
  background(slider.value());

  checkbox.position(slider.value(), 300);


  par.mouseClicked(rectangle);

  stroke(255);
  line(x, 0, x, height);
  x = x + 3;
  if (x > width) {
    x = 0;
  }
  par.html("The slider is at: " + slider.value());
}

function rectangle() {
  fill(255, 0, 200);
  rect(20, 20, 20, 20);
  print('rect1')
}