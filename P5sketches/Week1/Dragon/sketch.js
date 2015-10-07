var letterwidth;
var letterheight;
var letterxheight;
var lettergap;
var letterrounding;
var letterstroke;
var lettercount;
var typecolor;

function setup() {
  createCanvas(displayWidth,displayHeight);

  letterwidth=30;
  letterheight=50;
  letterxheight=25;
  lettergap=10;
  letterrounding=20;
  letterstroke = 7;
  lettercount=30;
  typecolor = color(255,255,255);
  
  
  for(var i=0; i<lettercount; i++){
    letterspace[i] = letterwidth*i+gap*i;
    //create a new list of variables called letterposX for all 30 letters
  }

  
}

function draw() {
  background(0);

  strokeWeight(letterstroke);
  // fill(typecolor);
  //---------D--------
  rect(0, 0, letterwidth, letterheight, 0, 30, 30, 0);
  //----R-------------
  rect(0,0,0,0);
  
  
  
}