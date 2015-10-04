var snow;
var noiseValue;


function setup() {
  createCanvas(800, 600);
  noStroke();
  
  snow = {
    x : width/2,
    y : 0,
    xSpeed : 0,
    ySpeed : 1
  };
}

function draw() {
  background(50);


  // random
  //snow.xSpeed = random(-0.5,0.5) * 5;
  
  // sin
  //snow.xSpeed = sin(frameCount*0.05) * 1;
  
  // noise
  // noise amplitude: 0.0~1.0
  // note that "-0.5" to set the range from -0.5 to 0.5
  snow.xSpeed = (noise(frameCount*0.05)-0.5) * 5;
  
  snow.x = snow.x + snow.xSpeed;
  snow.y = snow.y + snow.ySpeed;
  
  fill(255);
  ellipse(snow.x, snow.y, 10, 10);


  // update snow.y
  if (snow.y > height) {
    snow.y = 0;
  }
}