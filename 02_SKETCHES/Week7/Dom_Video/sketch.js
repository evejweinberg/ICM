var capture;
var curtainX = 0;
var showtime = false;
var showsOver = false;
var vidX = 110;
var caneX = 900;
var caneSpeed = -10;
var porkyOn = false;
var audioPlaying = true;
var vidPlaying = true;
var count = 0;
var booing = true;
var count2 = 0;



function setup() {
  createCanvas(1000, 625);
  capture = createCapture(VIDEO);
  capture.size(780, 585);
  capture.hide();
  ready = createButton('Ready!');
  ready.mousePressed(startShow);
  ready.position(470, 300);
  boo = createButton('Boo!');
  boo.mousePressed(endShow);
  boo.hide();
  boo.position(470, 580);

}

function playAudio() {
  if (audioPlaying) {
    // drumroll.play();
  }
  audioPlaying = false;
}


function playBoo() {
  if (booing) {
    // crowdBooing.play();
  }
  booing = false;
}

function startShow() {
  showtime = true;
}

function endShow() {
  showsOver = true;
}

function draw() {
  background(255);
   count2+=.1;
  
  image(capture, vidX, 0, 780, 585);//x,y,w,h
  vidX = sin(count2)*30;
  
  if (showtime === true) {
    ready.hide();
    boo.show();
    
    count++;
    if (curtainX < 400 && count > 90) {
      curtainX += 1;
    }
    if (showsOver) {
      boo.hide();//hide button
    
     
    }
   
  }
}