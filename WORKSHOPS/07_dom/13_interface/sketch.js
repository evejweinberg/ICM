// ICM 2015
// DOM Manipulation
// https://github.com/ITPNYU/ICM-2015

var divs = []; //empty array
var slider;
var checkbox;
var dropdown;
var input;
var counter = 0;
var vid1;

function setup() {
  
  createCanvas(400,400);
   // start it running
  var mysketch0 = new p5(s0);


  // Make a button from a div
  var divButton = createButton('Add new div');
  var buttonFun = createButton('Whatever');
  divButton.mousePressed(makeDiv);
  buttonFun.mouseOver(DrawStuff);
 
  buttonFun.mousePressed(DrawStuff);
  divButton.size(200);
  divButton.addClass("button");
  buttonFun.addClass("button");
  divButton.position(windowWidth / 2, 400);
  buttonFun.position(900, 900);

// vid1 = createVideo()

  // Make a slider
  slider = createSlider(1, 48, 12);
  slider.size(200, 400);
 

  var slideText = createP("Choose scale of div");
  slider.position(600, 200);
  slideText.position(600, 250);
  slideText.addClass("h1");


  // Make a checkbox
  checkboxR = createCheckbox('red');
  checkboxR.size(200, 200);
  checkboxP = createCheckbox('pink');
  checkboxP.size(200, 200);

  // Make a dropdown menu
  dropdown = createSelect();
  dropdown.option('date');
  dropdown.option('random number');
   dropdown.option('yes');
    dropdown.option('no');
     dropdown.option('probably');

  // Make a text input
  input = createInput('your name');

  // Make a button
  var clearButton = createButton('clear All');
  clearButton.mousePressed(clearDivs);
}

function draw(){
    var slideVal = createP("Scale of Div will be   " + slider.value());
     slideVal.position(600, 250);
  slideVal.addClass("h1");
}

// Call remove() on all new divs added
function clearDivs() {
  for (var i = 0; i < divs.length; i++) {
    divs[i].remove();
  }
}

// Make a new div
function makeDiv() {
  var div;

  // Check the dropdown
  if (dropdown.selected() === 'date') {
    div = createDiv(input.value() + ', this div was made at ' + Date());
  } else {
    div = createDiv(input.value() + ', here\'s a random number: ' + floor(random(100)));
  }
  // User the slider for font size
  div.style('font-size', slider.value() + 'pt');

  // Check the checkbox
  if (checkboxR.checked()) { //red
    div.style('background-color', '#D00');
  }
  if (checkboxP.checked()) { //pink
    div.style('background-color', '#f28f9a');
  }

  divs.push(div);
}

function DrawStuff() {
  fill(255, 0, 200);
  rect(40, 40, 300, 300);
  text("Hello")
}

//new canvas
var s0 = function(p) { //pass p to a function

  p.setup = function() {
    var canvas = p.createCanvas(400, 600);
    canvas.position(0,600);
  }

  p.draw = function() {
    p.background(random(150,200),random(160,255), random(200,255));
    p.ellipse(p.width / 2, p.height / 2, 20, 20);
  }
};