var posX;
var posY;

function setup() {
  createCanvas(1000,700);
  noStroke();
  posX = 0;
  posY = 0;
  //angleMode(DEGREES);
}

function draw() {
  background(50, 10);
  
  fill(255);
  text(frameCount, 10 ,20);
  text(millis()*0.001, 10, 40);
  
  // sin -1 to 1
  // sin(value) * amplitude
  // cos(value) * amplitude
  
  // DEG: 0 - 360
  // RAD: 0 - 6.28..... (PI*2)
  
  // sin(changingValue*speed)*amplitude;
  
  // sineWave
  posY = height/2 + random(0.0, 1.0)*100;
  fill(255,0,0);
  ellipse(posX, posY, 10,10);
  
  // cosineWave
  // noise (0, 1.0)
  posY = height/2 + noise(posX*0.01)*100;
  fill(150,0,255);
  ellipse(posX, posY, 10,10);
  
  posX = posX + 1; // posX++; 
  if (posX > width) {
    posX = 0;
  }
}