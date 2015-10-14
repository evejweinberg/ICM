var myTriangle = {
  w: 30,
  h: 30
};

function setup() {
  createCanvas(600, 600);
  background(50);
  fill(255);
  noStroke();

  var howManyTimes = width / myTriangle.w;

  for (var y = 0; y < howManyTimes; y++) {
    for (var x = 0; x < howManyTimes; x++) {
      // let's get posX,posY
      // with the triangle's width and height
      var posX = myTriangle.w * x;
      var posY = myTriangle.h * y;
      
      // draw triangle
      triangle(
        posX, posY,
        posX, posY + myTriangle.h,
        posX + myTriangle.w, posY + myTriangle.h
      );

    }
  }

}

function draw() {

}