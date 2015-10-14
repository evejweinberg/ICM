var rectangle = {
  w: 40,
  h: 40,
  gap: 10
};


function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(50);
  noFill();
  stroke(255);

  var howManyTimes = 5;
  var startX = (rectangle.w + rectangle.gap)*2 + rectangle.w/2;
  var startY = (rectangle.h + rectangle.gap)*2 + rectangle.h/2;
  
  push();
  translate(width/2, height/2);
  rotate( frameCount*0.01 );
  for (var y = 0; y < howManyTimes; y++) {
    for (var x = 0; x < howManyTimes; x++) {

      rect(-startX + x * (rectangle.w + rectangle.gap),
        -startY + y * (rectangle.h + rectangle.gap),
        rectangle.w,
        rectangle.h)

    }
  }
  noStroke();
  fill(255, 0, 0);
  ellipse(0, 0, 10, 10);
  stroke(255,0,0);
  line(0, 0, startX, startY);
  pop();
  
  text(frameCount, 10, 20);
}




