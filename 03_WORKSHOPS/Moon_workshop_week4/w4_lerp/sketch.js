var posX, posX2, posY2;
var posY;

function setup() {
  createCanvas(600,600);
  noStroke();
  posX = 0;
  posY = 0;
}

function draw() {
  background(100);
  //  lerp(currentPos, targetPos, 0.0~1.0);
  // lerp(0, 10, 0.1); // 1
  // lerp(0, 10, 0.5); // 5
  //print( lerp(0, 20, 0.2) );
  
  posX = lerp(posX, mouseX, 0.05);
  posY = lerp(posY, mouseY, 0.05);
  
  //why doesn't this work?
  posY2 = lerp(0,500,.05*(millis()/100));
  posX2=30;
  print(posY2)
  constrain(posY2,0,500);
  
  fill(255,0,0);
  ellipse(posX, posY, 50, 50);
  ellipse(posX2,posY2, 50,50);//my circle
}