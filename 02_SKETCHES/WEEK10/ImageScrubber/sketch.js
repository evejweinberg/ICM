var wordbox; //create a paragraph element
var story1, story2, story3, story4;
var stories = [];
var boxrad = 20; //scrubbox
var boxdiam = 40;
var linelength = 600;
var spritestory1, spritestory2;
var sprite1Library = []; //png sequence
var sprite2Library = []; //png sequence
var scrubw = 200;
var scrubh = 120;
var amplitude;
var song, vol;
var fft;
var gd;
var ratetochange;
var changethismuch;

function preload() {
  for (var i = 0; i < linelength; i++) { //load all the image names
    if (i < 10) { //for 1 digit ones, add the zero
      spritestory1 = "assets/story1/story1_00" + i + ".png";
      spritestory2 = "assets/story2/story2_00" + i + ".png";
    } else if (i > 9 && i < 100) { //for images 10-99
      spritestory1 = "assets/story1/story1_0" + i + ".png";
      spritestory2 = "assets/story2/story2_0" + i + ".png";

    } else { //100 and over//you can do anothe rif the images go past 999
      spritestory1 = "assets/story1/story1_" + i + ".png";
      spritestory2 = "assets/story2/story2_" + i + ".png";
    }
    sprite1Library.push(loadImage(spritestory1)); //push them all into an array
    sprite2Library.push(loadImage(spritestory2)); //push them all into an array
  }
  story1 = new Story(1, 'assets/line1.png', true, 'assets/script3.txt', true, ' ', false, 'assets/story1.m4a', true, 250, 400);
  story2 = new Story(2, 'assets/line1.png', true, 'assets/script2.txt', true, 'assets/story2.mov', true, ' ', false, 250, 700);

  stories.push(story1);
  stories.push(story2);


  ///LOAD STORY 1/////




}

function endloadingBG() {
  document.getElementById("bg").className = "mainbg";
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  endloadingBG();
  wordbox = createP('').class('p');
  cursor(HAND);
  for (var story in stories) {
    stories[story].splitwords();
  }




}

function draw() {
  clear();
  var isHovered = false;

  // var isHovered = false;

  for (var story in stories) {
    stories[story].display();
    if (stories[story].mouseHovered) {
      isHovered = true;
    }
  }



  if (isHovered) {
    cursor(HAND);
  } else {
    cursor(ARROW)
  }
}

//////////////////////CONSTRUCTOR/////////////////
//////////////////////////////////////////////////
function Story(num, lineimage, haslineimage, transcriptfile, hastranscript, videofile, hasvideo, audio, hasaudio, x, y) {

  this.x = x;
  this.y = y;
  this.mouseHovered = false;
  this.num = num; //what we call it in here and what it is out there
  this.playing = false;
  this.playingaudio = false;
  this.hasvideo = hasvideo;
  this.hasaudio = hasaudio;
  this.haslineimage = haslineimage;
  this.hastranscript = hastranscript;
  this.boxposition = this.x;
  this.scrubframe = 0;
  this.vidshrink = 0;
  this.words = [];
  this.index = 0;
  this.lastCue = 0;
  this.boxrotation = 0;
  this.pos2 = mouseX;
  this.pos1 = mouseX;
  this.lastcheck = 0;


  if (this.hasvideo) {
    // console.log('has video')
    this.video = createVideo(videofile); //load given .mov file
    this.video.hide(); //hide videos
    this.vidx = 600; //video's width
    this.vidy = 940; //video's height
    this.vidw = 900; //video's width
    this.vidh = 600; //video's height
    // create a new Amplitude analyzer
    this.analyzer = new p5.Amplitude();
    // Patch the input to an volume analyzer
    this.analyzer.setInput(this.video);
  }

  if (this.hasaudio) {
    this.audio = loadSound(audio);
  }
  if (this.haslineimage) {
    fill(255, 7, 100);
    this.lineimage = loadImage(lineimage); //load given train line file
  }
  if (this.hastranscript) {
    this.transcript = loadStrings(transcriptfile);
  }

  this.splitwords = function() {
    this.words = this.transcript[0].split(' '); //split on the spaces

  }
  var box = loadImage('assets/box.png');

  if (this.num == 1) {
    this.imagestoscrub = sprite1Library;
    this.wordtimings = [
      [3, 3],
      [10, 1],
      [50, 2],
      [70, 2],
      [90, 1],
      [180, 3],
      [250, 2],
      [260, 1],
      [300, 3],
      [340, 1],
      [370, 1],
      [440, 2],
      [480, 1],
      [500, 1],
      [530, 3],
      [570, 3],
      [600, 2],
      [620, 1],
      [640, 3],
      [700, 2],
      [800, 1],
      [900, 3],
      [920, 2],
      [940, 2],
      [960, 2],
      [980, 2],
      [1000, 2],
      [1020, 1],
      [1060, 2],
      [1090, 1],
      [2050, 3],
      [2070, 1],
      [2090, 3]
    ];
  } else if (this.num == 2) {
    this.imagestoscrub = sprite2Library;
    this.wordtimings = [
      [3, 3],
      [10, 1],
      [50, 2],
      [70, 2],
      [90, 1],
      [100, 3],
      [200, 2],
      [220, 4],
      [300, 3],
      [400, 1],
      [600, 3],
      [800, 1],
      [900, 3],
      [920, 2],
      [940, 2],
      [960, 2],
      [980, 2],
      [1000, 2],
      [1020, 1],
      [1060, 2],
      [1090, 1],
      [2050, 3],
      [2070, 1],
      [2090, 3]
    ];
  }

  this.pause = function() {
      if (this.hasvideo) {
        this.video.pause();
        this.playing = false;
      }

      if (this.hasaudio) {
        this.audio.pause();
        this.playingaudio = false;
      }
    } /////pause ends///////

  this.display = function() {
    image(this.lineimage, this.x, this.y - 30); //draw line to canvas
    if (this.boxposition < this.x - boxrad) {
      this.boxposition = this.x - boxrad;
    }
    if (this.boxposition > this.x + linelength + boxrad) {
      this.boxposition = this.x + linelength + boxrad;
    }
    push();
    translate(this.boxposition + boxrad, this.y);
    rotate(this.boxrotation);
    image(box, 0 - boxrad, 0 - boxrad, boxdiam, boxdiam);
    pop();
    // image(box, this.boxposition,this.y-boxrad, boxdiam, boxdiam);

    if (mouseX > this.x && mouseX < (this.x + linelength) && mouseY > (this.y - boxrad) && mouseY < (this.y + boxrad)) {
      // if (onstory === this.num) { //replace this with num?
      this.mouseHovered = true;
      this.boxrotation = this.boxrotation + .08;
      this.playvideo();
      this.displaytext();
      this.vidshrink = 0;
      this.boxposition = mouseX;



      this.scrubframenum = floor(this.boxposition - this.x);
      if (this.scrubframenum > 599) {
        this.scrubframenum = 599;
      }
      image(this.imagestoscrub[this.scrubframenum], this.boxposition - (scrubw / 2), this.y - (scrubh + 30), scrubw + this.vidshrink, scrubh + this.vidshrink);


    } else {
      this.mouseHovered = false;
      this.pause();
      this.boxrotation = this.boxrotation;

    }

  }
  this.playvideo = function() {
      if (this.hasvideo) {
        if (!this.playing) { //if not playing
          this.video.loop(); //hit play
          this.playing = true; //set playing to true
          // this.vol = this.analyzer.getLevel();
          // this.threshhold = (floor(1000 * this.vol));
        }
        image(this.video, this.vidx, this.vidy, this.vidw, this.vidh);

      }

      if (this.hasaudio) {
        if (!this.playingaudio) {
          this.audio.loop();
          this.getmousedist();
          this.playingaudio = true;
          // this.playing = true;
        }
      }

    } /////play ends/////

  this.displaytext = function() {
      this.every10frames = floor((this.scrubframenum / 10));
      wordbox.html(this.words[this.every10frames]);
      // console.log(this.every10frames);
      if (this.every10frames % 2 === 0) {
        wordbox.class('p1').position(500, 50); //why is this not working
      } else if (this.every10frames % 2 === 1) {
        wordbox.class('p2').position(500, 50);
      }

      /////////TRY VOLUME THRESHHOLD///////
      // if ( this.threshhold > 35){
      //   wordbox.html(this.words[this.index]);
      //   wordbox.class('p2').position(500, 50);
      //   this.index++;
      // }
      // console.log(wordbox.class);
      // else  {
      //   wordbox.position(500, 50).class('p3');
      // }



      // if (millis() - this.lastCue > this.wordtimings[this.index][0]) {
      //   this.lastCue = millis();
      //   this.index = this.index + 1;
      //   if (this.index > this.words.length - 1) {
      //     this.index = 0;
      //   }
      // }
      // wordbox.html(this.words[this.index]);

      // if (this.wordtimings[this.index][1] == 1) {
      //   wordbox.position(400, 50).class('p1');
      // } else if (this.wordtimings[this.index][1] == 2) {
      //   wordbox.position(500, 50).class('p2');
      // } else if (this.wordtimings[this.index][1] == 3) {
      //   wordbox.position(400, 50).class('p3');
      // }

    } //////////PARSE TEXT ENDS//////


  this.getmousedist = function() {
    if (this.hasaudio) {
      // this.audio.rate(changethismuch);
      ratetochange = (this.pos2 - this.pos1);
      changethismuch = map(ratetochange, -300, 300, -2, 2);

      if (millis() - this.lastcheck > 1) {
        this.pos1 = mouseX;
        this.lastckeck = millis();
      }



    }

  }

} //constructor ends