function setup() {
  createCanvas(600, 600);
}


function draw() {
  background(50);
  fill(255);

  var triWidth = 60;
  var triHeight = 60;

  var howManyTimes = width / triWidth;

  for (var y = 0; y < howManyTimes; y++) {
    for (var x = 0; x < howManyTimes; x++) {
      var posX = triWidth * x;
      var posY = triWidth * y;
      var newWidth = triWidth; //comment this line out this and check the one below
      //var newWidth = triWidth * abs(sin(frameCount*0.02));
      triangle(posX, posY,
        posX, posY + triHeight,
        posX + newWidth, posY + triHeight );
    }
  }
}