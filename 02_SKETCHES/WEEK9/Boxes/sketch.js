var s0 = function(p) {

  p.setup = function() {
    p.createCanvas(200, 200);

    // p.devicePixelScaling(false);

    p.video = p.createCapture(p.VIDEO);
    p.video.size(p.width, p.height);
    var x = 100;
    var y = 100;
    var col;

    // p.video.hide();

    p.background(0);

  }

  p.draw = function() {
    p.video.loadPixels();
    for (var i = 0; i < 10; i++) {

      p.x = p.random(200);
      p.y = p.random(200);


      // var y = p.floor(p.random(video.height));

      p.col = p.get(p.x, p.y);

      p.noStroke();
      p.fill(p.col[0], 0, 0, 127);
      p.ellipse(p.x, p.y, 5, 5);

    }
  }
};
var s1 = function(p) {

  p.setup = function() {
    p.createCanvas(200, 200);
  }

  p.draw = function() {
    p.background(255, 0, 0);
    for (var i = 0; i < 5; i++) {
      p.ellipse(50 * i, p.height * 0.25, 20, 20);
    }
  }
};

var s2 = function(p) {
  var dir = 1;
  var speed = 2;
  var d = 50;
  var h = 200;

  p.setup = function() {
    p.createCanvas(200, h);

  }

  p.draw = function() {

    p.background(0, 0, 0);
    p.ellipse(p.width / 2, p.height / 2, d, d);
    d += dir * speed;
    if (d > h || d < 0) {
      dir = -dir;
    }

  }
};

var s3 = function(p) {
  p.preload = function(){
    sprite1 = p.createImg("assets/sprite1.gif");
  }

  p.setup = function() {
    p.createCanvas(200, 200);

  }

  p.draw = function() {

    p.background(255, 0, 0);
   p. sprite1.position(40,40);
    p.ellipse(p.width / 2, p.height / 2, 20, 20);
  }
};




// create second sketch

var mysketch0 = new p5(s0);
var mysketch1 = new p5(s1);

var mysketch2 = new p5(s2);
var mysketch3 = new p5(s3);