// var words = ["this", "is", "a", "test"];
// var timings = [500, 900, 1000, 200];
//var stories = [];
var story1, story2, story3, story4, colorfield;
var onstory1 = false;
var onstory2 = false;
var onstory3 = false;
var onstory4 = false;
var header


function preload() {
  story4 = new Story(4, 'assets/story4.mp3', 'assets/train4blue.png', 'assets/story4.txt', 'assets/video4.mov', 180, 800);
  story1 = new Story(1, 'assets/story1b.m4a', 'assets/train1blue.png', 'assets/story1.txt', 'assets/video1.mov', 100, 200);
  story2 = new Story(2, 'assets/story2.mp3', 'assets/train2blue.png', 'assets/story2.txt', 'assets/video2.mov', 70, 350);
  story3 = new Story(3, 'assets/story3.mp3', 'assets/train3blue.png', 'assets/story3.txt', 'assets/video3.mov', 320, 130);
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  colorfield = loadImage("assets/Alllines.png");
  colorfield.loadPixels();
  console.log(story1.transscript, story2.transscript, story3.transscript, story4.transscript);
  console.log(story4.num)

}

function draw() {
  clear();
  checkmouse();
  story1.display();
  story2.display();
  story3.display();
  story4.display();


} /////DRAW ENDS///////

function checkmouse() {
  image(colorfield, 0, 0);
  var p = colorfield.get(floor(mouseX), floor(mouseY));
  // console.log(p);

  if (p[0] === 0 && p[1] === 0 && p[2] === 255) { //blue
    onstory = 2;
    // onstory3 = false;
    // onstory1 = false;
    // onstory4 = false;
    console.log('onstory2 = true')
  } else if (p[0] === 0 && p[1] === 255 && p[2] === 0) { //green
    onstory = 4;
    // onstory3 = false;
    // onstory2 = false;
    // onstory1 = false;
    console.log('onstory4 = true')
  } else if (p[0] === 255 && p[1] === 0 && p[2] === 0) { //red
    onstory = 3;
    onstory2 = false;
    onstory1 = false;
    onstory4 = false;
    console.log('onstory3 = true')
  } else if (p[0] === 0 && p[1] === 255 && p[2] === 255) { //teal
    onstory = 1;
    // onstory3 = false;
    // onstory2 = false;
    // onstory4 = false;
    console.log('onstory1 = true')
  } else {
    onstory1 = false;
    onstory2 = false;
    onstory3 = false;
    onstory4 = false;
    console.log('all false, not over any lines')
  }
}

//////////////////////CONSTRUCTOR/////////////////
//////////////////////////////////////////////////
function Story(num, audiofile, trainlineimage, transcript, videofile, x, y) {
  this.x = x;
  this.y = y;
  this.num = num; //what we call it in here and what it is out there
  this.playing = false;
  this.transscript = loadStrings(transcript); //load given text file
  this.video = createVideo(videofile); //load given .mov file
  this.video.hide(); //hide videos
  this.vidx = 300; //video's width
  this.vidy = 200; //video's height
  this.video.class('video'); //this does not work
  this.interview = loadSound(audiofile);
  this.trainimage = loadImage(trainlineimage); //load given train line file
  


  this.display = function() {

      image(this.trainimage, this.x, this.y); //draw train line to canvas
      this.parsetext();
      this.wordbox.html(this.individualwords[this.index]); //draw the parsed text on the beat

      if (onstory === this.num) { //replace this with num?
        if (mouseIsPressed) {
          console.log('4 is pressed');
          image(this.video, mouseX + 40, mouseY, this.vidx, this.vidy);
          this.playing = true;
          // this.play();
          fill(0, 255, 255);
          noStroke();
          ellipse(mouseX, mouseY, 30 + (cos(millis() / 500 * 240)), 30 + (sin(millis() / 500 * 240)));
        }
      
      } else {
        this.video.pause();
      }



    } ///DISPLAY ENDS////

  this.playvideo = function() {
      if (!this.playing) {
        // this.interview.play();
        this.video.play();
        console.log('this video is playing');
        image(this.video, mouseX + 30, mouseY + 30, 300, 100);
      }
      this.playing = true;

    } /////play ends/////

  this.pause = function() {
      this.interview.pause();
      this.video.pause();
      this.playing = false;


    } /////pause ends///////


  this.parsetext = function() {
      this.wordbox = createP();
      this.individualwords = this.transscript;
      this.index = 0;
      this.lastCue = 0;
      if (this.num == 1) {
        this.timings = [9, 133, 500, 900, 1200];
      }
      if (this.num == 2) {
        this.timings = [9, 133, 500, 900, 1200];
      }
      if (this.num == 3) {
        this.timings = [9, 133, 500, 900, 1200];
      }
      if (this.num == 4) {
        this.timings = [100, 500, 700, 1600, 1900];
      }

      if (millis() - this.lastCue > this.timings[this.index]) {
        this.lastCue = millis();
        this.index = this.index + 1;
        if (this.index > this.individualwords.length - 1) {
          this.index = 0;
        }
      }

      

    } //////////PARSE TEXT ENDS//////
}