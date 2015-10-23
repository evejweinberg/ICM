var trails = {
  x:0, y:0,w:50,h:50
  };

function setup() {
  createCanvas(displayWidth,displayHeight);
  
}

function RectFade(xloc, yloc, size, num) {
    rect(trails.x,trails.y,trails.w = trails.w-1,trails.w = trails.w-1 );
   
      
  
  
}

function draw() {
  background(0);
  
  if (mouseX < 50) {
    cursor(CROSS);
  } else {
    cursor(HAND);
  }
  rectMode(CENTER);
  rect(trails.x,trails.y,trails.w = trails.w-1,trails.w = trails.w-1);
   if(trails.w==0){
  
    }
  
}

function mousePressed() {
   remove(); 
   run.RectFade();
}