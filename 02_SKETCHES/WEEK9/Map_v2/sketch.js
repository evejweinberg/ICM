//GLOBAL!!!!!
var interview1, interview2;
var speedSlider;
var volumeSlider;
// var train1, train2, train3;
var playingstory2 = false;
var playingstory4 = false;
var playingstory3 = false;
var playingstory1 = false;
var storyline2;
var colorfield;
var story4script;
var story4words = [];

function preload() {
  interview1 = loadSound("assets/story1.m4a"); //james murphy
  interview2 = loadSound("assets/story2.mp3"); //louie
  interview3 = loadSound("assets/story3.mp3"); //nothing
  interview4 = loadSound("assets/women.mp3"); //women
  video4 = loadSound("assets/video4.mov"); //women
  colorfield = loadImage("assets/Alllines.png");


} ////PRELOAD ENDS

function setup() {
  // background(255,0,200,10)
  var allMapStuff = createDiv('').class('map');
  // allMapStuff.class
  cursor(ARROW);

  var canvas = createCanvas(1367, 1655); //size of map
  canvas.position(0, 0).parent(allMapStuff).class('canvas');
  var header = createImg('assets/title.gif');
  var train1 = createImg('assets/train1red.png');
  var train2 = createImg('assets/train2red.png');
  var train3 = createImg('assets/train3red.png');
  var train4 = createImg('assets/train4red.png');

  story4script = loadStrings("assets/story4.txt");

  train4.mouseOver(function() {
    train4.elt.src = 'assets/train4blue.png';
  }).position(180, 810).addClass('trainlines').parent(allMapStuff);
  train4.mouseOut(function() {
    train4.elt.src = 'assets/train4red.png';
  });
  train3.mouseOver(function() {
    train3.elt.src = 'assets/train3blue.png';
  }).position(530, 270).addClass('trainlines');
  train3.mouseOut(function() {
    train3.elt.src = 'assets/train3red.png';
  });
  train1.mouseOver(function() {
    train1.elt.src = 'assets/train1blue.png';
  }).position(305, 275).addClass('trainlines');
  train1.mouseOut(function() {
    train1.elt.src = 'assets/train1red.png';
  });
  train2.mouseOver(function() {
    train2.elt.src = 'assets/train2blue.png';
  }).position(275, 445).addClass('trainlines');
  train2.mouseOut(function() {
    train2.elt.src = 'assets/train2red.png';
  });
  header.addClass('header');




  colorfield.loadPixels();


} ////SETUP ENDS////////



function draw() {
  // console.log("length:  " + story4script.length);
  clear();

  if (playingstory2 || playingstory1 || playingstory3 || playingstory4) {
    fill(0, 255, 255);
    noStroke();
    ellipse(mouseX, mouseY, 30, 30);

  }

  image(colorfield, 0, 0); //show underlying image
  // filter(GRAY);



} ////DRAW ENDS/////////

function playStory1() {
  if (!playingstory1) {
    interview1.play();
  }
  playingstory1 = true;

}

function pauseStory1() {
  interview1.pause();
  playingstory1 = false;

}

function playStory2() {
  if (!playingstory2) { //if not playing play, but now that you're playing, just loop and do nothing
    interview2.play();
  }
  playingstory2 = true;
}

function pauseStory2() {
  interview2.pause();
  playingstory2 = false;
}


function playStory3() {
  if (!playingstory3) {
    interview3.play();
  }
  playingstory3 = true;
}

function pauseStory3() {
  interview3.pause();
  playingstory3 = false;
}

function playStory4() {
  var wordcount = 0;
  var story4split = split(story4script[0], ' ');
  console.log(story4split); //break out each word of the script
  var story4p = createP(story4split[4]);
  // wordcount++;
  // console.log(wordcount)
  //replace the P DOM element every 4 seconds with a new word
  // if (millis()2000 % 3 == 0){

  // }

  // var u = createP(story4script);
  // console.log("script is:" +u.html)
  // story4words = u.split();
  // alert(story4words);

  for (var i = 0; i < story4script.length; i++) { //for entire length
    var t = createP(story4script[i], 5, 20 * i + 20); //write it out
    t.class('story');

  }
  // createP(story4script).class('story');

  if (!playingstory4) {
    interview4.play();
  }
  playingstory4 = true;
}

function pauseStory4() {
  interview4.pause();
  playingstory4 = false;
}


function mouseDragged() {

  var p = colorfield.get(floor(mouseX), floor(mouseY));
  // console.log(p)

  if (p[0] === 0 && p[1] === 255 && p[2] === 0) { //red

    playStory3();
    cursor(HAND)
  } else {
    pauseStory3();
    cursor(ARROW);
  }

  if (p[0] === 0 && p[1] === 255 && p[2] === 255) { //teal

    playStory2();
    cursor(HAND);
  } else {
    pauseStory2();
    cursor(ARROW);
  }

  if (p[0] === 0 && p[1] === 0 && p[2] === 255) { //blue

    playStory4();
    cursor(HAND);
  } else {
    pauseStory4();
    cursor(ARROW);
  }


  if (p[0] === 255 && p[1] === 0 && p[2] === 0) { //green
    fill(0, 255, 255);
    noStroke();
    ellipse(mouseX, mouseY, 30, 30);
    cursor(HAND)
    playStory1();
  } else {
    pauseStory1();
    cursor(ARROW);
  }




}










// function toggleStory2() {
//   playingstory2 =!playingstory2;
//   if (playingstory2){
//     interview2.play();
//   } else {
//     interview2.pause();
//   }
// }