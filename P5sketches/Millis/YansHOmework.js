
var cR = (250,250,250);
var cL = (250,250,250);
var backcolor =(0,0,0);
var isOverCircleR;
var isOverCircleL;
var fr= 0.7;
var backdiskColor=(20,20,20,200);
function preload(){
  drum = loadSound('assets/drum.wav');
  electro = loadSound('assets/stick.mp3');
  player = loadImage('assets/player.png');
  Leftdisk = loadImage('assets/leftdisk.png');
  Rightdisk = loadImage('assets/rightdisk.png');
}

function setup() {
  createCanvas(screen.width, screen.height);
  angleMode(DEGREES);  
  backdiskColor = color(random(0,200),random(0,200),random(0,200));
 
}

function draw() {
 frameRate(fr);
  //background color
  backcolor= color(random(100,200),random(100,200),random(100,200));
  tablecolor= color(50,100,150,60);
  background(backcolor);

  
  //tabletop color
  noStroke();
  fill(tablecolor);
  rect(0,windowHeight-100,windowWidth,500);
  
  //player body
  image(player,windowWidth/2-200, windowHeight-400+30,400,400-30);
  
  //backdisk
  backdisk();
      //leftdisk&rightdisk rotation
 // frameRate(100);
   rotation();

  //rightbutton
   rightbutton();

   //leftbutton
  leftbutton();
  
  //MAKE SURE ARROW IS ACTIVE INSIDE THE RIGHT BUTTON
  //get distance between mouse and circle
  var distanceR = dist(mouseX, mouseY,windowWidth/2+115,windowHeight-340);
  //if the disctance less than the circle's radius
  if(distanceR<20)
  {
    isOverCircleR = true;
  } else{
    isOverCircleR = false;
  }
 
  //MAKE SURE ARROW IS ACTIVE IN LEFT BUTTON
  var distanceL = dist(mouseX, mouseY, windowWidth/2-115,windowHeight-340);
  if(distanceL<20)
  {
    isOverCircleL = true;
  }  else{
    isOverCircleL = false;
  }


  if(isOverCircleR == true)
  {
    cR = (random(250),random(250),random(250));
    cursor(HAND);
  } 
  
   else if(isOverCircleL == true)
   { 
     
     cL = (random(250),random(250),random(250));
     cursor(HAND);
   }
   
   else
   {
     cR= (250,250,250);
     cL = (250,250,250);
     cursor(ARROW);
   }

  }


function mousePressed()
{
   sparkling();
  //RIGHT BUTTON
  if(isOverCircleR == true)
  { 
   drum.playMode('sustain');
   drum.play();
 
  }
  
   //LEFT BUTTON
   else if(isOverCircleL == true)
   {
     electro.playMode('sustain');
     electro.play();
   }
   else
   {
     drum.pause();
     electro.pause();
   }
  
   
}


//rightbutton
  function rightbutton(){
  stroke(200);
  fill(cR);
  ellipse(windowWidth/2+115,windowHeight-340,40,40);
}                 

//rightdisk
 function rightdisk(){
  /* noStroke();
   fill(0);
   ellipse(windowWidth/2+115,windowHeight-340,220,220);  */
   image(Leftdisk,-122,-122,250,250);
  
 }
 
 //leftbutton
 function leftbutton(){
    stroke(200);
    fill(cL);
    ellipse(windowWidth/2-115,windowHeight-340,40,40);
 }
//leftdisk
function leftdisk(){
 
  //  image(Leftdisk,-125,-125,250,250);
      image(Leftdisk,-122,-122,250,250);
 }

//backdisk
 function backdisk(){
   //right
   noStroke();
   fill(backdiskColor);
   ellipse(windowWidth/2+115,windowHeight-340,100,100);
   //left
   ellipse(windowWidth/2-115,windowHeight-340,100,100);
  
 }
 
 function rotation(){
  //rotateleft
   push();
   translate(windowWidth/2-117,windowHeight-340);
   rotate(frameCount);
   leftdisk();
   pop();
   
  //rotateright
    push();
    translate(windowWidth/2+115,windowHeight-340);
    rotate(frameCount);
    rightdisk();
    pop();
 }  
 
function sparkling(){
  var totalPts = 300;
  var steps =totalPts + 1; 
  var rand = 0;
   frameRate(1);
  for (var i = 1; i<steps; i++){
    noStroke();
    fill(255);
     ellipse((width/steps)*i, (height/4)+random(-rand, rand),2,2);
     ellipse((width/steps)*54, (height/4)+random(-rand, rand)/random(10),2,2)
      ellipse((width/steps)*57, (height/4)+random(-rand, rand)/random(20),2,2)
      ellipse((width/steps)*60, (height/4)+random(-rand, rand)/random(50),2,2)
      ellipse((width/steps)*63, (height/4)+random(-rand, rand)/random(30),2,2)
      ellipse((width/steps)*50, (height/4)+random(-rand, rand),2,2);
      ellipse((width/steps)*154, (height/4)+random(-rand, rand)/random(10),2,2)
      ellipse((width/steps)*157, (height/4)+random(-rand, rand)/random(20),2,2)
      ellipse((width/steps)*160, (height/4)+random(-rand, rand)/random(50),2,2)
      ellipse((width/steps)*163, (height/4)+random(-rand, rand)/random(30),2,2)  
     rand+=random(-2,2);

  }
}
