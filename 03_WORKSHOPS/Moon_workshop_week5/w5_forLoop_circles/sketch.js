var circle = {
  dia: 50,
  gap: 10
};

function setup() {
  createCanvas(600, 600);
  background(50);
  noStroke();
  fill(255);

  var howManyTimes = width / circle.dia;
  var startX = (circle.dia+circle.gap) / 2;
  var startY = (circle.dia+circle.gap) / 2;

  for (var x = 0; x < howManyTimes; x++) {
    for (var y = 0; y < howManyTimes; y++) {
      var posX = startX + (circle.dia+circle.gap) * x;
      var posY = startY + (circle.dia+circle.gap) * y;
      // dist(x1, y1, x2, y2);
      var distanceFromCenter = dist(width/2, height/2, posX, posY);
      var newDia = circle.dia * (width-distanceFromCenter) / width;
      // 50 * ??? / 600
      ellipse(
        posX, posY,
        newDia, newDia
      );
    }
  }

}

function draw() {
  // background(0);
  
  // // update values
  // var distanceFromCenter = dist(width/2, height/2, mouseX, mouseY);
  // fill(255);
  // text(distanceFromCenter, 10, 20);
  // text(floor(distanceFromCenter/width*100), 10, 50);
  
  // // display
  // fill(255,0,0);
  // ellipse(mouseX, mouseY, 50*(width-distanceFromCenter)/width, 50*(width-distanceFromCenter)/width);
  // stroke(255,0,0);
  // line(mouseX, mouseY, width/2, height/2);
}
















