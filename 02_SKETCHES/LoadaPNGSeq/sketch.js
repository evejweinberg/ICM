// var sprite1;
// var sprite;
var sprites = []; //all jitter objects go in here
var spriteLibrary = []; //create a place to hold your png sequence
var abgAll = [];
var abgAllDom = [];
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

function preload() { //LOAD ALL IMAGES IN PRELOAD

  for (var i = 0; i < linelength; i++) { //load all the image names
    if (i < 10) { //for 1 digit ones, add the zero
      sprite = "assets/story1/story1_00" + i + ".png";
    } else if (i => 10 && i < 100) { //for images 10-99
      sprite = "assets/story1/story1_0" + i + ".png";
    } else {//100 and over//you can do anothe rif the images go past 999
      sprite = "assets/story1/story1_" + i + ".png";
    }
    spriteLibrary.push(loadImage(sprite)); //push them all into an array
    //these will be called inside the jitter object
  }

  // for (var i = 0; i < sprite1Total; i++) { //load all the image names

  //   if (i < 10) { //for 1 digit ones, add the zero
  //     sprite = "assets/sprite1_0" + i + ".png";
  //   } else { //for 2 digit ones dont
  //     sprite = "assets/sprite1_" + i + ".png";
  //   }
  //   spriteLibrary.push(loadImage(sprite)); //push them all into an array
  //   //these will be called inside the jitter object
  // }
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
  background(255, 0, 0);
  bgCollage();

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





  // for (var sprite in sprites){
  //   sprites[sprite].display();
  // }

  for (var i = 0; i < sprites.length; i++) {
    sprites[i].display();
  }

  image(aFills[floor(globalCounter % 3)], 35 + roveBothax, 150 + roveBothay);
  image(aLines, 30 + roveBothbx, 150 + roveBothby);


}

function bgCollage(x, y) {
  this.x = x;
  this.y = y;
  this.rove = sin(millis()) * 6;
  this.scoot = cos(millis() / 900) * 20;


  if (transition === true) {
    image(abgAll[6], 40 + this.rove, 40 + this.rove);
    image(abgAll[5], 40 + this.rove, 200 + this.rove);
    image(abgAll[0], 0 + this.rove, 0 + this.rove);
    image(abgAll[1], 200 + this.rove, -10 + this.rove);
    image(abgAll[2], -10 + this.rove, 130 + this.rove);
    image(abgAll[3], 120 + this.rove, 400 + this.rove);
    // abgAllDom[0].position(0, 300);
    // abgAllDom[1].position(10, 10);
    // abgAllDom[2].position(20, 70);
  }

  if (transition === false) {


    if (dist(mouseX, mouseY, 80, 80) < 40) {
      image(abgAll[6], 40 + this.scoot, 40 + this.scoot);
    } else {
      image(abgAll[6], 40, 40);

    }

    if (dist(mouseX, mouseY, 80, 240) < 40) {
      image(abgAll[5], 40 + this.scoot, 200 + this.scoot);
    } else {
      image(abgAll[5], 40, 200);

    }


    image(abgAll[0], 0, 0);
    image(abgAll[1], 200, -10);
    image(abgAll[2], -10, 130);
    image(abgAll[3], 120, 400);
  }

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
    if (transition === false) {

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