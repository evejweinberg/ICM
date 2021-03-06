var story1, story2, story3, story4, colorfield;
var tX,tY;
var onstory = 0;
var wordbox; //create a paragraph element



function preload() {
  story1 = new Story(1, '', 'assets/train1red.png', '', 'assets/video1.mov', 100, 200, 'assets/train1blue.png', false);
  story2 = new Story(2, '', 'assets/train2red.png', '', 'assets/video2.mov', 70, 350, 'assets/train2blue.png', false);
  story3 = new Story(3, '', 'assets/train3red.png', '', 'assets/video5.mov', 320, 130, 'assets/train3blue.png', false);
  story4 = new Story(4, '', 'assets/train4red.png', '', 'assets/video4.mov', 180, 800, 'assets/train4blue.png', false);
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

  function touched(){
  tX = mouseX || touchX;
  tY = mouseY || touchY;
  }

function checkmouse() {
touched();
  var p = colorfield.get(floor(tX), floor(tY));

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
function Story(num, audiofile, trainlineimage, transcript_file, videofile, x, y, trainlinealtimage, hasaudio, hastranscript) {
  this.x = x;
  this.y = y;
  this.num = num; //what we call it in here and what it is out there
  this.playing = false;
  this.video = createVideo(videofile); //load given .mov file
  this.video.hide(); //hide videos
  this.vidx = 300; //video's width
  this.vidy = 200; //video's height
  this.hasaudio = hasaudio;
  this.hastranscript = hastranscript;
  this.video.class('video'); //this does not work
  if (this.hasaudio){
  this.interview = loadSound(audiofile);
  }
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


  
  // if (typeof this.audiofile !== 'undefined' || this.audiofile !== null) { //if it exists
   if (this.hastranscript){
      this.transcript = loadStrings(transcript_file);
  }

  //////internal preload ends//////////

  this.splittranscript = function() {
  //   if (typeof this.transcript !== 'undefined' || this.transcript !== null) { //if it exists
  //   this.words = split(this.transcript[0], ' ');
  // }
  //     if (this.transcript !== '') { //if it exists
  //   this.words = split(this.transcript[0], ' ');//spliton the spaces
  // }
  

  }


  this.display = function() {

      image(this.trainimage, this.x, this.y); //draw train line to canvas



      if (onstory === this.num) { //replace this with num?
        this.trainimage = this.alttrainimage;
        console.log('mouse is over' + this.num)


        if (mouseIsPressed) {
          touched()
          console.log(this.num + 'is pressed');
          // this.displaytext();
          this.playvideo();
          // this.play();
          fill(0, 255, 255);
          noStroke();
          ellipse(tX, tY, 30 + ((cos(millis() / 300)) * 10), 30 + ((cos(millis() / 300)) * 10));
          image(this.alttrainimage, this.x, this.y); //draw train line to canvas ;
        }

      } else {
        if (audiofile !== ''){
        this.pause();
        }
        image(this.trainimage, this.x, this.y); //draw train line to canvas
      }

    } ///DISPLAY ENDS////

  this.playvideo = function() {
      if (!this.playing) {
        if (audiofile !== ''){
        this.interview.play();
        }
        this.video.loop();
        this.playing = true;

      }
      image(this.video, mouseX + 40, mouseY, this.vidx, this.vidy);

    } /////play ends/////

  this.pause = function() {
      this.video.pause();
      if (audiofile !== ''){
      this.interview.pause();
      }
      this.playing = false;


    } /////pause ends///////


  this.displaytext = function() {
    touched()
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
      wordbox.position(tX + random(-300, 300), tY);

    } //////////PARSE TEXT ENDS//////
}