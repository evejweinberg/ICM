var button = {
  w: 100,
  h: 200,
  gap: 10
}
var howManyButtons = 5;

function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(50);

  var startX = 50;
  var startY = 50;

  for (var i = 0; i < howManyButtons; i++) {
    if (mouseX > startX + (button.w + button.gap) * i &&
      mouseX < startX + (button.w + button.gap) * i + button.w &&
      mouseY > startY &&
      mouseY < startY + button.h) {
      if (mouseIsPressed) {
        fill(255, 0, 0);
      } else {
        fill(255, 255, 0);
      }
    } else {
      fill(255);
    }
    rect(startX + (button.w + button.gap) * i, startY,
      button.w, button.h);
  }

}