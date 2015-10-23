/* 
  This sketch is an opportunity to play with object creation and interaction.
  I wanted to create a soothing, spacelike environment with particles and 
  waves that appear upon clicking.
  
  When the mouse is clicked a series of circles of varying size and color will 
  be generated and ejected in various directions.  The number of balls
  generated is randomized at launch and is between 2 and 5.  The balls 
  bounce should bounce off the edges of the screen.  
  When two balls collide, they add their sizes together to create a single larger
  ball.  The balls modulate their size and opacity based on the audio waveform.
  
  I followed several of Dan Shiffman's tutorials from Nature of Code,
  specifically his example on particles, to create the Ball, Wave,
  and System objects and methods for object interaction.
  
  The Balls and Waves are contained within a System object that manages display,
  interaction, and removal of objects.
*/

// TODO: Make the background an object that reacts to taps as well.

// ERROR: getting this message: 154: Uncaught TypeError: Cannot read property 'display' of undefined
// seemingly randomly.  It happens sometimes, not others.  Can't figure it out.
// My guess is that

// This parameter controls the number of cirlces to generate around a click
var numberOfCirclesToGenerate;

// Vars to hold the ball objects and the system object
var balls;
var system;

// Vars for sound objects
var ambientSound;
var ampAnalyzer;
var tapSound;
var tapReverb;

// Temp slider to control speed at which the balls move
var tempSlider;
var temp;

// Preload ensures that all objects are fully loaded before setup is run
// This ensures our audio files are available when we need them
function preload() {
  // Background and tap sounds loaded here, using p5.sound methods
  ambientSound = loadSound("assets/ambient.wav");
  tapSound = loadSound("assets/waterDrop.wav");
}

function setup() {
  createCanvas(1280,720);
  
  tempSlider = createSlider(1,10,1);
  tempSlider.position(1140,700);
  
  // Randomly generate a different number of balls each launch
  numberOfCirclesToGenerate = random(2,5);

  // Set angle modes to degrees to make my life easier
  angleMode(DEGREES);
  
  // Create an amplitude analyzer object to get volume levels 
  // from the background sound byte.
  ampAnalyzer = new p5.Amplitude();
  ampAnalyzer.setInput(ambientSound);
  ambientSound.loop();
  ambientSound.play();
  
  // Tap sound is run through reverb to change it's feel
  // Create a new reverb object, disconnect the sound so that it won't play as is
  // then process the sound through the reverb object
  tapReverb = new p5.Reverb();
  tapSound.disconnect();
  tapReverb.process(tapSound,1,50);

  // The plan was to create a custom background object with methods that allow for the 
  // background to morph and change, but didn't have time to get to it
  bkg = new CustomBackground(0,0,80);
  
  // Set balls to an empty array, and a instantiate a new System object
  balls = [];
  system = new System();
}

// Because most of the work happens in the System object, the draw method is relatively 
// simple.  It first triggers the background to pulse, then runs the system, which controls
// the balls and waves
function draw() {
  bkg.pulse();
  temp = tempSlider.value();
  system.run()
}

// When the mouse is clicked, add balls and waves to the system, play the tap sound,
// now filtered through reverb.
function mouseClicked() {
  if (mouseX < 1260 && mouseX > 20 && mouseY > 20 && mouseY < 700) {
    system.addBalls();
    // system.addWaves();
    tapSound.play();
  }
  
  // bkg.wave(mouseX,mouseY);
}

// Custom background object
// TODO: add a method to create a wave like effect when 
// mouse is clicked
function CustomBackground(r,g,b) {
  // properties for RGB, and a pulse direction.
  this.r = r;
  this.g = g;
  this.b = b;
  this.pulseDirection = 0;
}

// TODO: I could accomplish this more cleanly with a sin() function, I think
CustomBackground.prototype.pulse = function() {
  // Set background color to bkg object's RGB values
  fill(this.r,this.g,this.b);
  rect(0,0,1280,720);
  // background(this.r,this.g,this.b);
  
  // read the b value, and adjust the pulse direction accordingly.
  if (this.b === 0) {
    // dir = UP, numbers should increment
    this.pulseDirection = 1;
  } else if (this.b === 80) {
    // dir = DOWN, numbers should decrement
    this.pulseDirection = 0;
  }
  // depending on pulse direction, change RGB values
  if (this.pulseDirection == 1) {
    // Pulse goes up, so RGB values go up
    this.r+= 0.5; this.g+=0.5; this.b+=0.5;
  } else if (this.pulseDirection === 0) {
    // Pulse goes down, so RGB values go down
    this.r-=0.5; this.g-=0.5; this.b-=0.5;
  }
}

// TODO: Implement background distortion
CustomBackground.prototype.wave = function(x,y) {
  // Draw three ellipses.  I probalby need to add these to the system...
}

// Ball object - instantiated with position and angle for placement
function Ball(pos, theta) {
  this.position = pos;
  
  // Velocity property is a vector based on angle at which the ball was created
  this.velocity = {x:cos(theta)/2, y: sin(theta)/2}
  // Balls have an initial size of 12
  this.size = 12;
}

// .prototype causes inheritance, so display() is added to the
// particle object that is created.  It also
// inherits properties and methods within Ball
Ball.prototype.display = function() {
  
  // Get volume of background sound, scale size and colors based on volume
  var vol = ampAnalyzer.getLevel();
  
  // Fill the ball, and change the alpha based on sound volume levels
  fill(255,255,255, 255 - 1000*vol);
  // draw the ellipse, and change it's size based on volume levels
  ellipse(this.position.x,this.position.y,this.size + vol*100,this.size + vol*100);
}

// Update method just updates position of the ball
Ball.prototype.update = function() {
  this.position = {x: this.position.x+this.velocity.x*temp, y: this.position.y+this.velocity.y*temp};
}

// Method to determine edge bouncing
Ball.prototype.checkEdge = function() {
  
  // If ball touches a horizontal edge...
  if (this.position.x < (this.size/2) || this.position.x > width - (this.size/2)) {
    // Reverse x-direction
    this.velocity.x = -this.velocity.x;
  }
  // If it touches a vertical edge
  if (this.position.y < (this.size/2) || this.position.y > height - (this.size/2)) {
    // Reverse y-direction
    this.velocity.y = -this.velocity.y;
  }
}

// This method causes the balls to combine into large balls.
Ball.prototype.annihilate = function(balls, thisBall) {

  // Iterate through all the balls on screen
  for (var i = 0; i < balls.length; i++) {
    // If two are significantly close (within radii of each other), 
    // combine them and remove one from the array
    if ((abs(this.position.x - balls[i].position.x) < (this.size/2)) 
      && ((this.position.x - balls[i].position.x) !== 0) 
      && (abs(this.position.y - balls[i].position.y) < (this.size/2)) 
      && ((this.position.y - balls[i].position.y) !== 0)) {
      
      this.size = this.size + balls[i].size;
      system.addWaves(balls[i].position.x, balls[i].position.y);
      balls.splice(i,1);
    }
  }
}

// A Wave object
function Wave(x,y,waveWidth,waveHeight) {
  this.x = x;
  this.y = y;
  this.waveWidth = waveWidth;
  this.waveHeight = waveHeight;
  this.lifetime = 0;  // lifetime is counted to know when to remove each wave
}

// Display method strokes and draws the ellipses based on Wave properties
Wave.prototype.display = function() {
  noFill();
  stroke(100,100,100);
  strokeWeight(2);
  ellipse(this.x,this.y,this.waveWidth, this.waveHeight);
}

// Update method just increments property values so objects draw in the correct
// positions
Wave.prototype.update = function() {
  this.waveWidth += 3;
  this.waveHeight += 3;
  this.lifetime++;
}

// System manages the balls and waves, and thus has properties of arrays
function System() {
  this.balls = [];
  this.waves = [];
}

// Add balls to the system by spacing the balls around the mouse click
// and instantiating new balls with position and theta info
// new balls are added to the Balls array
System.prototype.addBalls = function() {
  var rad = 20;
  var theta = 0;
  for (var i = 0; i < numberOfCirclesToGenerate; i++) {
    
    // Divide 360 evenly depending on the number of balls created on each click
    theta += 360/numberOfCirclesToGenerate;
    
    // Create position objects for balls using polar coords
    var pos = {x: mouseX+rad*cos(theta), y: mouseY+rad*sin(theta)};
    
    // Add balls to existing ball array
    this.balls.push(new Ball(pos, theta));
  }
}

// Similarly, add waves at point of click
System.prototype.addWaves = function(x,y) {
  for (var i = 0; i < 3; i++) {
    // New waves added to waves array with varying sizes
    this.waves.push(new Wave(x, y, i*60, i*60));
  }
}

// This method controls triggers all methods required to update the balls and waves
// It updates positions, checks for edges, combines balls if necessary, and displays 
// everything again.
System.prototype.run = function() {
  // Loop through all the balls
  for (var i = 0; i < this.balls.length; i++) {
    
    // These are Ball methods that control ball behavior and display
    this.balls[i].update();
    this.balls[i].checkEdge();
    this.balls[i].annihilate(this.balls, balls[i]);
    this.balls[i].display();
  }
  
  // Loop through all the waves
  for (var j = 0; j < this.waves.length; j++) {
    
    // THese are Wave methods
    this.waves[j].update();
    this.waves[j].display();
    if (this.waves[j].lifetime > 550) {
      // If the wave has existed for long enough, remove it from the waves array
      // so it no longer draws
      this.waves.splice(j,1);
    }
  }
}


// TODO: have a background frequency playing.
// when the user taps the screen, the mouse coordinates
// change the frequency in a bouncy in and out manner
// and eventually the frequency comes back to it's steady state

