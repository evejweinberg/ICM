var amp;
var mic;
var canChange = true;

function setup() {
  createCanvas(300,300);
  amp = new p5.Amplitude();//by dafault it listens to any sound in your sketch
  mic = new p5.AudioIn();
  mic.start();
  amp.setInput(mic); //if you might want another audio source, set this one to mic
  bgColor = color(255,0,0);
}

function draw() {
  background(bgColor);
  
  var level = amp.getLevel();
  var y = map(level,0,1,height, 0);
  stroke(0);
  strokeWeight(9);
  // line(100,0, 100,y*100);
  ellipse(width/2,y,120,120);
  noStroke();
  text(level, 20,20);
  amp.smooth(.95);//decay rate of 95%, it defaults to 1
  threshhold = .03;
  if (level>threshhold && canChange){
    bgColor = color(random(255),random(255),random(255));
    canChange = false;
  } else if (level<threshhold){
    canChange = true;
  }
  
}