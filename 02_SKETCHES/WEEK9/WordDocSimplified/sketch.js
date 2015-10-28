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

} ////PRELOAD ENDS

function setup() {

  var canvas = createCanvas(1367, 1655); //size of map
  canvas.position(0, 0).parent(allMapStuff).class('canvas');

  story4script = loadStrings("assets/story4.txt");


} ////SETUP ENDS////////



function draw() {

  clear();

var wordcount = 0;
var story4split = split(story4script[0], ' ');
console.log('length' + story4split.length); //break out each word of the script
// var story4p = createP(story4split[4]);
// wordcount++;
// console.log(wordcount)
//replace the P DOM element every 4 seconds with a new word
// if (millis()2000 % 3 == 0){

// }

// var u = createP(story4script);
// console.log("script is:" +u.html)
// story4words = u.split();
// alert(story4words);

for (var i = 0; i < story4split.length; i++) { //for entire length
  var t = createP(story4script[i], 5, 20 * i + 20); //write it out
  t.class('story');
}

} ////DRAW ENDS/////////


