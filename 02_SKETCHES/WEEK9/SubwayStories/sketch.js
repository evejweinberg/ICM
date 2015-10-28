var story1, story2, story3, story4, colorfield;
var onstory = 0;
var wordbox; //create a paragraph element



function preload() {
  story1 = new Story(1, 'assets/story1b.m4a', 'assets/train1red.png', 'assets/story1.txt', 'assets/video1.mov', 100, 200, 'assets/train1blue.png');
  story2 = new Story(2, 'assets/story2.mp3', 'assets/train2red.png', 'assets/story2.txt', 'assets/video2.mov', 70, 350, 'assets/train2blue.png');
  story3 = new Story(3, 'assets/story3.mp3', 'assets/train3red.png', 'assets/story3.txt', 'assets/video3.mov', 320, 130, 'assets/train3blue.png');
  story4 = new Story(4, 'assets/story4blank.m4a', 'assets/train4red.png', 'assets/story4.txt', 'assets/video4.mov', 180, 800, 'assets/train4blue.png');
}


function setup() {
  console.log(story1.transcript);
  createCanvas(windowWidth, windowHeight);
  colorfield = loadImage("assets/Alllines.png");
  colorfield.loadPixels();


  wordbox = createP('').class('p');
  createP('Drag over the subway lines \n\r\n to hear the stories. These are PLACEHOLDER images and stories').class('instructions');


  story1.splittranscript();
  story2.splittranscript();
  story3.splittranscript();
  story4.splittranscript();
}

function draw() {
  clear();
  checkmouse();
  story1.display();
  story2.display();
  story3.display();
  story4.display();
  // image(colorfield,0,0)



} /////DRAW ENDS///////

function checkmouse() {
  var p = colorfield.get(floor(mouseX), floor(mouseY));

  if (p[0] === 0 && p[1] === 0 && p[2] === 255) { //blue
    onstory = 2;
    console.log('onstory2 = true')
  } else if (p[0] === 0 && p[1] === 255 && p[2] === 0) { //green
    onstory = 4;
    console.log('onstory4 = true')
  } else if (p[0] === 255 && p[1] === 0 && p[2] === 0) { //red
    onstory = 3;
    console.log('onstory3 = true')
  } else if (p[0] === 0 && p[1] === 255 && p[2] === 255) { //teal
    onstory = 1;
    console.log('onstory1 = true')
  } else {
    onstory = 0;
    console.log('all false, not over any lines')
  }
}

//////////////////////CONSTRUCTOR/////////////////
//////////////////////////////////////////////////
function Story(num, audiofile, trainlineimage, transcript_file, videofile, x, y, trainlinealtimage) {
  this.x = x;
  this.y = y;
  this.num = num; //what we call it in here and what it is out there
  this.playing = false;
  this.video = createVideo(videofile); //load given .mov file
  this.video.hide(); //hide videos
  this.vidx = 300; //video's width
  this.vidy = 200; //video's height
  this.video.class('video'); //this does not work
  this.interview = loadSound(audiofile);
  this.trainimage = loadImage(trainlineimage); //load given train line file
  this.alttrainimage = loadImage(trainlinealtimage);

  if (this.num == 1) {
    this.timings = [9, 20, 50, 100, 133, 150, 300, 500, 900, 1200, 2300, 4500];
  } else if (this.num == 2) {
    this.timings = [9, 20, 40, 200, 220, 133, 500, 900, 1200];
  } else if (this.num == 3) {
    this.timings = [9, 30, 60, 90, 200, 230, 400, 133, 500, 900, 1200];
  } else if (this.num == 4) {
    this.timings = [50, 150, 200, 250, 300, 100, 500, 700, 1600, 1900];
  }


  this.transcript = loadStrings(transcript_file);

  //////internal preload ends//////////

  this.splittranscript = function() {
    this.words = split(this.transcript[0], ' ');

  }


  this.display = function() {

      image(this.trainimage, this.x, this.y); //draw train line to canvas



      if (onstory === this.num) { //replace this with num?
        this.trainimage = this.alttrainimage;
        console.log('mouse is over' + this.num)


        if (mouseIsPressed) {
          console.log(this.num + 'is pressed');
          this.displaytext();
          this.playvideo();
          // this.play();
          fill(0, 255, 255);
          noStroke();
          ellipse(mouseX, mouseY, 30 + ((cos(millis() / 300)) * 10), 30 + ((cos(millis() / 300)) * 10));
          image(this.alttrainimage, this.x, this.y); //draw train line to canvas ;
        }

      } else {
        this.pause();
        image(this.trainimage, this.x, this.y); //draw train line to canvas
      }

    } ///DISPLAY ENDS////

  this.playvideo = function() {
      if (!this.playing) {
        this.interview.play();
        this.video.loop();
        this.playing = true;

      }
      image(this.video, mouseX + 40, mouseY, this.vidx, this.vidy);

    } /////play ends/////

  this.pause = function() {
      this.video.pause();
      this.interview.pause();
      this.playing = false;


    } /////pause ends///////


  this.displaytext = function() {
      this.index = 0;
      this.lastCue = 0;

      if (millis() - this.lastCue > this.timings[this.index]) {
        this.lastCue = millis();
        this.index = this.index + 1;
        if (this.index > this.words.length - 1) {
          this.index = 0;
        }
      }
      wordbox.html(this.words[this.index]);
      wordbox.position(mouseX + random(-300, 300), mouseY);

    } //////////PARSE TEXT ENDS//////
}