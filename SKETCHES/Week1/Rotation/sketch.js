//coordinates variables
var quadX1 = 0;
var quadX2 = 42;
var quadY1 = 0;
var quadY2 = 42;
//space between squares
var espaco = 42.5;
//color
var cor = 0;
//transparency
var transparencia = 10;

function setup() {
  createCanvas(1270, 660);
}

function draw() {
  goThroughSquares();
}
  
  function goThroughSquares(){
  noStroke();
  for (quadX1 = 0; quadX1 <= 1260; quadX1 = quadX1 + espaco) {
    for (quadY1 = 0; quadY1 < 660; quadY1 = quadY1 + espaco) {
      if (mouseX >= quadX1 && mouseX < quadX1 + quadX2 && mouseY >= quadY1 && mouseY < quadY1 + quadY2) {
        noStroke();
        cor = 255;
        transparencia = 255;
      } else {
        cor = random(175, 200);
        transparencia = 15;
      }
      push();
      translate(quadX1, quadY1);//move the machine
      rotate(PI/6);//rotate the machine
      fill(cor,transparencia);
      rect(0,0, quadX2, quadY2);
      pop();
    }
  }
  }
 