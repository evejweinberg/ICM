var sprite1;
var sprite;
var sprites = [];
var tooclose = false;
var spriteLibrary = [];
var spriteAssets = [];
var frameNumber = 0;
var frameSlower = 0;
var sprite1Total = 58;

function preload(){
  
  for (var i=0; i < sprite1Total; i++){
    var sprite;
    if(i<10){
      sprite = "assets/sprite1_0" + i + ".png";
    }
    else {
      sprite = "assets/sprite1_" + i + ".png";
    }
    spriteLibrary.push(loadImage(sprite));
  }
}

function setup() {
  createCanvas(250, 800);
  // background(255, 0, 0);


  for (var i = 0; i < 50; i++) {
    
    sprites.push(new Jitter());
    // sprites[i].detect();
  }
}

function draw() {
 background(255, 0, 0);

  for (var i = 0; i < sprites.length; i++) {
    sprites[i].display();
  }


}


function Jitter() {
  this.startingFrame = floor(random(sprite1Total));

  var x = random(-40, width + 40);
  
  for (var sprite in sprites){
    
    
  
    
  }
  // if ((dist(sprites[i].x, sprites[i].y, this.x, this.y) < 60) && (sprites[i].x != this.x) && (sprites[i].y != this.y)) {

  // this.x = random(-40, width + 40);
  this.y = random(-40, height + 40);
  this.speed = random(-3, 3);

  this.display = function() {

    // if (this.tooclose === false) {

    this.rovex = cos(millis() / 500) * this.speed;
    this.rovey = sin(millis() / 500) * this.speed;


    this.x = this.x+ this.rovex;
    this.y = this.y+ this.rovey;
    // sprite1.position(this.x, this.y);
    fill(0, 255, 0)
    // var x = rect(this.x, this.y, 40, 40);
    image(spriteLibrary[floor(this.startingFrame)], this.x,this.y);
    fill(255);
    // frameSlower = frameNumber *.5;

    // if (frameSlower % 100 == 0){
      this.startingFrame = this.startingFrame + .5;
    // }
    if(this.startingFrame == sprite1Total){
      this.startingFrame = 0;
    }
  }

  // this.detect = function() {
  //   for (var i = 0; i < sprites.length; i++) {
  //     // if ((dist(sprites[i].x, sprites[i].y, this.x, this.y) < 60) && (sprites[i].x != this.x) && (sprites[i].y != this.y)) {
  //     //   this.tooclose = true;
  //     // }
  //   }
  // }
}