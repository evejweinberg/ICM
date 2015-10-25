// var sprite1;
// var sprite;
var sprites = []; //all jitter objects go in here
var spriteLibrary = []; //png sequence
var aFills = []; //png sequence
var spriteAssets = [];
var frameNumber = 0;
var frameSlower = 0;
var sprite1Total = 58;
var sprite;
var aFill, aLines;
var globalCounter = 0;
var transition = false;
var roveBothax, roveBothay, roveBothbx, roveBothby;

function preload() {//load all images here
  aLines = loadImage("assets/alines.png");
  for (var i = 0; i < 3; i++) {
    aFill = "assets/Afill_000" + i + ".png"; //store the name of the images
    aFills.push(loadImage(aFill)); //push images into this array
  }

  for (var i = 0; i < sprite1Total; i++) {//load all the image names

    if (i < 10) {//for 1 digit ones, add the zero
      sprite = "assets/sprite1_0" + i + ".png";
    } else {//for 2 digit ones dont
      sprite = "assets/sprite1_" + i + ".png";
    }
    spriteLibrary.push(loadImage(sprite));//push them all into an array
    //these will be called inside the jitter object
  }
}

function setup() {
  var fp = createDiv('');
  var fpimg = createImg("assets/fp_00.png");
  fpimg.parent(fp).size(60, 90);
  fp.position(90, 500).mouseOver(BreakOut).mouseOut(BreakOut);
  createCanvas(250, 800);
  for (var i = 0; i < 50; i++) {
    sprites.push(new Jitter());
    //push 50 jitters, each one with animations looping inside
  }
}

function BreakOut() {
  transition = !transition;
}

function draw() {
  globalCounter = globalCounter + .4;
  
  if (transition === true) {
  roveBothax = cos(millis() / 10) * 7;
  roveBothay = sin(millis() / 10) * 7;
  roveBothbx = sin(millis() / 10) * 7;
  roveBothby = cos(millis() / 10) * 7;
  }
    if (transition === false) {
  roveBothax = cos(millis() / 200) * 5;
  roveBothay = sin(millis() / 200) * 5;
  roveBothbx = sin(millis() / 180) * 3;
  roveBothby = cos(millis() / 160) * 3;
  }
  background(255, 0, 0);



  // for (var sprite in sprites){
  //   sprites[sprite].display();
  // }

  for (var i = 0; i < sprites.length; i++) {
    sprites[i].display();
  }
  image(aFills[floor(globalCounter % 3)], 35 + roveBothax, 150 + roveBothay);
  image(aLines, 30 + roveBothbx, 150 + roveBothby);


}


function Jitter() {
  this.startingFrame = floor(random(sprite1Total));
  var spriteNumber = sprites.length;


  this.x = (spriteNumber % 5) * 90;

  this.y = floor(spriteNumber / 5) * 90;
  this.rh = random(20, 70);

  this.speed = random(-1, 1);

  this.display = function() {

    if (transition === true) {
      
      this.scaleup = cos(millis() / 100) * 40;
      this.rw = this.rh + this.scaleup;
      this.rovex = cos(millis() / 50) * this.speed;
      this.rovey = sin(millis() / 50) * this.speed;
      this.x = this.x + this.rovex;
      this.y = this.y + this.rovey;

     

    } 
    if (transition === false){

      this.scaleup = cos(millis() / 500) * 20;
      this.rw = this.rh + this.scaleup;
      this.rovex = cos(millis() / 500) * this.speed;
      this.rovey = sin(millis() / 500) * this.speed;
      this.x = this.x + this.rovex;
      this.y = this.y + this.rovey;
      

      
    }
    image(spriteLibrary[floor(this.startingFrame)], this.x, this.y, this.rw, this.rw);
      this.startingFrame = this.startingFrame + .5;
    
    if (this.startingFrame == sprite1Total) {
        this.startingFrame = 0;
      }
  }


}