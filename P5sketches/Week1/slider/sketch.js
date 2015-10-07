var rSlider;
var x,y;
var Sliderspeed = 1;

function setup() {
  // create canvas
  createCanvas(710, 400);
  textSize(15)
  noStroke();
  x = 40;

  // create sliders
  rSlider = createSlider(0, width, 100); // min, max, startingpoint
  rSlider.position(width/2, height*.95);

}

function draw() {
  var r = rSlider.value();

  background(r, 100,100);
  fill(255);
 ellipse(x+r,20,10,10);
}



  
  //   this.x += random(-this.speed, this.speed);
  //   this.y += random(-this.speed, this.speed);
  // };