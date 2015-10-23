var circleX;
var circleY;
life = 0;
var directionX = -5;
speed = 2;


function setup() {
  createCanvas(200,200);
  circleX = width;
  circleY = 50;
  
}

function draw() {
  // background(255);
  
  colorMode(HSB,100);
  fill(life, 100,100);
  life = life+1;
  
  ellipse(circleX, 20,20,20);
  circleX = circleX + directionX*speed; //negative 1 every frame
  if (circleX < 0){
    directionX= -directionX; 
     }
  if (circleX > width){
    directionX = -directionX;
  }
  
  speed = speed+10;
  if (life == 100){
    life = 0;
  }
 
  
}