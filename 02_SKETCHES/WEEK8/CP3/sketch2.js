var birddata;
var lat = 40.785091;
var lng = -73.968285;
var dropdown;
var headerBG = [];
var howmany = [];
var imageObject;
var recentCount;
var cloudmoveR = -1200;
var cloudheight = 200;
var howMany = 0;
var textSciName, sciName;
var selectedBird;
var musicPlaying = true;
var musicbutton, song;
var cloud = [];
var mycursor;
var wiggleOn = false;
var dissapear;



function preload() {
  dissapear = loadAnimation("anim/disappear0.png", "anim/disappear17.png");
  // mycursor = createImg("assets/mycursor.png");
  headerBG0 = createImg("assets/HeaderBG00.png");
  headerBG1 = createImg("assets/HeaderBG01.png");
  headerBG2 = createImg("assets/HeaderBG02.png");
  headerBG3 = createImg("assets/HeaderBG03.png");
  cpbg = createImg("assets/cpbglrg.jpg");
  cpbg.style("background-size","100%");
  // cpbg.addClass("body");
  song = loadSound("assets/sfbg.mp3");
  birddata = loadJSON("http://ebird.org/ws1.1/data/obs/geo/recent?lng=" + lng + "&lat=" + lat + "&back=30&dist=3&fmt=json");

} //////PRELOAD ENDS


function setup() {

  createCanvas(windowWidth, windowHeight);

  song.loop();
  background(0);
  print(birddata);
  imageObject = createImg('anim/disappear0.png');
  
  imageObject.position(1050, 400);
  recentCount = createP('');
  recentCount.addClass('h2');
  textSciName = createP('');
  textSciName.addClass('h2');


  musicbutton = createButton('♪♫');
  musicbutton.mousePressed(musictoggle).class('musicbutton');

  P1 = createDiv('The Birds Of');
  P2 = createDiv('Central Park');
  P3 = createDiv('Data set provided by');
  myLink = createA('https://confluence.cornell.edu/display/CLOISAPI/Home', 'Cornell Lab of Ornithology', '_blank');
  P1.position(42, 60).class("h1");
  P2.position(105, 130).class("h1");
  P3.position(48, 230).class("h2");
  headerBG1.position(40, 60);
  headerBG2.position(90, 130);
  headerBG3.position(40, 230);
  headerBG0.position(40, 265);
  myLink.position(48, 260).class("h2");
  recentDescr = createDiv("*The word 'recent' means reported in the last 30 days");
recentDescr.class("recent");
  dropdown = createSelect();
  dropdown.position(0, 420);
  dropdown.addClass("dropdown");
  for (var i = 0; i < birddata.length; i++) {
    dropdown.option(birddata[i].comName);
    
  }
  
    cloudDiv = createDiv('');
  cloudDiv1 = createDiv('');
  cloud = createImg('assets/cloud.png');
  cloud1 = createImg('assets/cloud.png');
  cloud.parent(cloudDiv);
  cloud1.parent(cloudDiv1);
  cloud1.size(700, 230);
  cloud.size(1100, 400);
  
dropdown.changed(function() {
    if (this.selected() == 'American Coot') {
      AmericanCoot();
    } else if (this.selected() == 'Yellow-rumped Warbler') {
      YellowRumpedWarbler();
    } else if (this.selected() == 'Blue Jay') {
      BlueJay();
    } else if (this.selected() == 'Chipping Sparrow') {
      ChippingSparrow();
    } else if (this.selected() == 'Song Sparrow') {
      SongSparrow();
    } else if (this.selected() == 'Swamp Sparrow') {
      SwampSparrow();
    } else if (this.selected() == 'Northern Flicker') {
      NorthernFlicker();
    } else if (this.selected() == 'American Crow') {
      AmericanCrow();
    } else if (this.selected() == 'American Robin') {
      AmericanRobin();
    }
  })

}//setup ends
// function mousePressed() {
//   //rewind on mouse pressed - change frame to 0
//   dissapear.play();
// }
  function draw() {

  clear();
  if(mouseIsPressed)
    dissapear.play();
  else
    dissapear.stop();
  animation(dissapear, 500, 500);
  cloudsMove((millis() / 40) % 1900, 0);
  var speed = 1200;
  recentCount.position(sin(millis() / speed) * 20 + 900, cos(millis() / speed) * 20 + 620);
  textSciName.position(sin(millis() / speed) * 20 + 1000, cos(millis() / speed) * 20 + 710);
  // mycursor.elt.position(mouseX, 600);

}

function AssignManyfromComname() {
  selectedBird = dropdown.selected(); //whatever is selected is temporarily stored in this variable
  for (var i = 0; i < birddata.length; i++) { //iterate through data
    if (birddata[i].comName === selectedBird) { //
      howMany = birddata[i].howMany;
      sciName = birddata[i].sciName;
      // break;
    }
  }
  recentCount.elt.textContent = "Recent Spottings:" + howMany;
  textSciName.elt.textContent = "Scientific Name:" + sciName;
}

function AmericanCoot() {
  imageObject.elt.src = 'anim/hiwa.gif';
  AssignManyfromComname();
}


function ChippingSparrow() {
  imageObject.elt.src = 'anim/songsparrow.gif';
  AssignManyfromComname();
}

function YellowRumpedWarbler() {
  // birdartyrw = createImg('anim/YellowRump.png');
  // birdartyrw.position(850,180);
  imageObject.mouseOver(wiggletoggle);
  imageObject.mouseOut(wiggletoggle);
  imageObject.elt.src = 'anim/YellowRump.png';
  imageObject.position(850, 180);
  AssignManyfromComname();
  //createVideo("https://www.youtube.com/embed/_dCvmakTebE");

}

function BlueJay() {
  imageObject.elt.src = 'anim/07_vogel.gif';
  AssignManyfromComname();
}

function SwampSparrow() {
  imageObject.elt.src = 'anim/peacock.gif';
  AssignManyfromComname();
}

function SongSparrow() {
  imageObject.elt.src = 'anim/07_vogel.gif';
  AssignManyfromComname();
}

function NorthernFlicker() {
  imageObject.elt.src = 'anim/peacock.gif';
  AssignManyfromComname();
}

function AmericanCrow() {
  imageObject.elt.src = 'anim/peacock.gif';
  AssignManyfromComname();
}

function AmericanRobin() {
  imageObject.elt.src = 'anim/peacock.gif';
  AssignManyfromComname();
}

function musictoggle() {
  print("music toggled");
  musicPlaying = !musicPlaying;
  if (musicPlaying === true) {
    song.stop();
  } else {
    song.play();
  }
}

function cloudsMove(x, y) {
  this.y = y;
  this.x = x;
  cloudheight = sin(millis() / 300) * 3;
  cloudDiv.position(-500 + this.x, this.y + 600 + cloudheight);
  cloudDiv1.position(-500 + this.x, this.y + cloudheight);
}


function wiggletoggle() {
  wiggleOn = !wiggleOn;
  if (wiggleOn) {
  birdartyrw.position(850 + random(-5, 5), 180);
  print(WIGGLING)
}
}

// function wiggleOff (){
//   birdartyrw.position(850,180);
// }



