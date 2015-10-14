// ICM 2015
// DOM Manipulation
// https://github.com/ITPNYU/ICM-2015

// create first sketch
var s0 = function(p) { //pass p to a function

  p.setup = function() {
    var canvas = p.createCanvas(400, 400);
    canvas.position(p.windowWidth/2-p.width/2,0);
  }

  p.draw = function() {
    p.background(200);
    p.ellipse(p.width / 2, p.height / 2, 20, 20);
  }
};

// start it running
var mysketch0 = new p5(s0);


// create second sketch
var s1 = function(p) {

  p.setup = function() {
    var canvas = p.createCanvas(400, 400);
    canvas.position(p.windowWidth/2-p.width/2,500);
  }

  p.draw = function() {
    p.background(200, 50, 150);
    for (var i = 0; i < 5; i++) {
      p.ellipse(50 * i, p.height * 0.25, 20, 20);
    }
  }
};

// start it running
var mysketch1 = new p5(s1);

var s2 = function(p) {

  p.setup = function() {
    var canvas = p.createCanvas(400, 400);
    canvas.position(p.windowWidth/2-p.width/2,300);
  }

  p.draw = function() {
    p.background(100, 200, 50);
    for (var i = 0; i < 5; i++) {
      p.ellipse(50 * i, p.height * 0.25, 20, 20);
    }
  }
};

// start it running
var mysketch2 = new p5(s2);

// function windowResized() {
//   // position canvas in middle of screen
//   p.size(width,300);
// }