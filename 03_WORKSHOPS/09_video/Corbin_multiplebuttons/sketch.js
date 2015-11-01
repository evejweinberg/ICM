
var playing = false;
var wallpaper;
var button;
var currentVideo = false;
var img;
var y = 0;


var videoIndex = [{
  path: 'assets/wallpaper.mov',
  buttonLabel: 'start journey'
}, {
  path: 'assets/scene1.mov',
  buttonLabel: 'get in the car'
}, {
  path: 'assets/scene2.mov',
  buttonLabel: 'film yourself'
}, {
  path: 'assets/scene3.mov',
  buttonLabel: 'take a look around'
}, {
  path: 'assets/scene4.mov',
  buttonLabel: 'supposed evidence'
}, {
  path: 'assets/scene5.mov',
  buttonLabel: 'trailing'
}, {
  path: 'assets/scene6.mov',
  buttonLabel: 'stopped'
}, {
  path: 'assets/scene7.mov',
  buttonLabel: 'what do you do?'
}, {
  path: 'assets/scene8.mov',
  buttonLabel: 'imagination'
}]
var test = function () {
  print("it works");
}

function setup() {
  var canvas = createCanvas(700,400);
  canvas.position(600,100);
  
  
  //load image
//setup all buttons, one by one
  for (var i = 0; i < videoIndex.length; i++) {
    var vidObj = videoIndex[i]; //create a new variable, temportary variable for one loop at a time

    var vid = createVideo(vidObj.path); //vid = 1.path
    vid.size(450, 450);
    vid.volume(1)
    vid.playing = false; //not playing yet
    vid.hide();//not showing yet

    var btn = createButton(vidObj.buttonLabel);//create button

    (function(videoElt) {
      btn.mousePressed(function() {
         toggleVid(videoElt);
        // print("hi i am here");
        // test ();
      });
    })(vid);
  }
  


}
//}

function draw() {
  //background(255,145,0)

  if (currentVideo) {
    image(currentVideo, 0, 0, width, height);
  }

}

function checkbtn(){
  print("i am here");
}
// plays or pauses the video depending on current state
function toggleVid(hiddenVideo) {

 
  if (!hiddenVideo.playing) {
    hiddenVideo.loop();
    hiddenVideo.playing = true;
  } else {
    hiddenVideo.pause();
    hiddenVideo.playing = false;
  }

  currentVideo = hiddenVideo;

}