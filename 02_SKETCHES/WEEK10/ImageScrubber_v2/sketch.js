var transcript;
// Video and button
var fingers;
var wordList = [];
var wordSize = [1, 3, 2, 3, 1, 2, 1, 2, 3, 1, 1, 3, 2, 3, 1, 2, 1, 2, 3, 1, 1, 3, 2, 3, 1, 2, 1, 2, 3, 1, 1, 3, 2, 3, 1, 2, 1, 2, 3, 1];
var button, words, wordindex;

// Dom element to show time in video
var time;

function preload() {
  transcript = loadStrings('assets/script3.txt');
}

function setup() {
  createCanvas(900, 400);
  // background(0);

  wordindex = 0;
  words = transcript[0].split(' ');

  // Start the video
  fingers = createVideo('assets/story1.mov');

  fingers.play();
  fingers.hide();

  for (var i = 0; i < words.length; i = i + .3) {
    fingers.addCue([i], addnewword);
  }
  fingers.addCue(7, addnewword);
  // fingers.addCue(8, addnewword);
  // console.log(second());





}


function draw() {
  clear();
  image(fingers, 0, 0, 960, 540);

}


function addnewword() {
  //this.index = 0;
  for (i in wordList){
    // if (this.position.x !== )//dont draw on top of another
  this.position = (random(400), random(400));
  }

  if (wordList.length > 4) {
    wordList[0].remove();
    wordList.splice(0, 1);
    console.log(wordList);

  }
  this.newword = words[wordindex];

  this.newparagraph = createElement('p3');
  wordList.push(this.newparagraph);
  this.newparagraph.html(this.newword);

  if (wordSize[wordindex] === 1) {
    this.newparagraph.style('font-size: 80px; font-family: verdana; margin:40px');
    this.newparagraph.position(this.position, this.position);
    console.log('word size is: ', 1);

  } else if (wordSize[wordindex] === 2) {
    // this.newparagraph.style('font-size: 20px; font-family: verdana; position: 30px');
    this.newparagraph.class('p1');
    this.newparagraph.position(this.position, this.position);
    console.log('word index: ', wordindex);
    console.log('word size is: ', 2);
  } else {
    this.newparagraph.style('font-size: 50px; font-family: verdana');
    this.newparagraph.position(this.position, this.position);
    console.log('word size is: ', 3);
  }

  wordindex++;
  console.log('word index: ', wordindex);
}