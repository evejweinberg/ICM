var words = [];
var timings = [500, 900, 1000, 200,500,300,1400,6000,400,3000];
var transcript, splittran;

var index = 0;
var lastCue = 0;

function preload() {
  transcript = loadStrings('assets/story2.txt');
}

function setup() {
  p = createP();
  words = split(transcript[0], ' ');
  console.log(words);



}

function draw() {
  if (millis() - lastCue > timings[index]) {
    lastCue = millis();
    index = index + 1;
    if (index > words.length - 1) {
      index = 0;
    }
  }

  p.html(words[index]);

}