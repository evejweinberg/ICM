var t = ' ';
var temp = ' ';
x = 0;

function setup() {
  createCanvas(1000, 1000);
 
 
}

function draw() {
  background(255);
  textAlign(CENTER);
  text(t, 500, 500);
  ellipse(x,50,10,10);
  x++;

}

function keyTyped() {
  t = t + key;
  temp = key;
  
}

function keyPressed() {
  if (keyCode == UP_ARROW) {
    print("Up");
    t = ' ';
  } 
  if (keyCode == DOWN_ARROW){
     saveCanvas('myCanvas', 'jpg');
     noLoop();
  }
}