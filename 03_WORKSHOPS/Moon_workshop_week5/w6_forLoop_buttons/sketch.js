var button = {
  w: 50,
  h: 80,
  gap: 10
};

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(50);
  var startX = 100;
  var startY = 100;
  var howManyButtons = 100;
  for (var i = 0; i < howManyButtons; i++) {

    // update values first
    var posX = startX + (button.w + button.gap) * i;
    var posY = startY;

    // and check
    if (mouseX > posX && mouseX < posX + button.w &&
      mouseY > posY && mouseY < posY + button.h
    ) {
      if (mouseIsPressed) {
        fill(255,0,0);
      } else {
        fill(255, 255, 0);
      }
    } else {
      fill(255);
    }

    // and then use
    rect(posX, posY, button.w, button.h);
  }







}