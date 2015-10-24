var sprite1;
var sprite;
var sprites = [];
var tooclose = false;

// function preload(){
//   // sprite = loadAnimation("assets/sprite1_00.png", "assets/sprite1_42.png");
// }

function setup() {
  createCanvas(250, 800);
  sprite1 = createImg('assets/sprite1.gif');
  // sprite = loadAnimation("assets/sprite1_00.png", "assets/sprite1_42.png");

  for (var i = 0; i < 50; i++) {
   sprites.push(new Jitter());
 
  }
}

function draw() {
  background(255, 0, 0);

  // animation(sprite,100,100);
  for (var i = 0; i < sprites.length; i++) {
  
    sprites[i].mouseDetect(); 
    if (tooclose === false){
      console.log('too close= false')
    sprites[i].display();
    }
  }
  console.log(sprites.length);

}

function Jitter() {
  this.x = random(-40, width + 40);
  this.y = random(-40, height + 40);
  this.speed = random(-3, 3);




  this.display = function() {


    this.rovex = cos(millis() / 500) * this.speed;
    this.rovey = sin(millis() / 500) * this.speed;

    sprite1.size(90, 90)

    this.x = this.x + this.rovex;
    this.y = this.y + this.rovey;
    sprite1.position(this.x, this.y);
    fill(0, 255, 0)
    rect(this.x, this.y, 40, 40);
    fill(255);
  }

  this.mouseDetect = function() {
    for (var i = 0; i < sprites.length; i++) {
      if (abs(sprites[i].x - this.x) < 10 && abs(sprites[i].y - this.y) < 10) {
      tooclose = true;
     }
    }
  }
}