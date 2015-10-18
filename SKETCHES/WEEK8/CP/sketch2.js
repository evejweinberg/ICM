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

// function allData() { //we'll store the data into this object
//   this.comName;
//   this.howMany;
//   this.lat;
//   this.lng;
//   this.locID;
//   this.locName;
//   this.sciName;
// }

// function GetAllData() {
//   allData.comName = birddata.comName; //telling these variables where to get their values from
//   allData.howMany = birddata.howMany;
//   allData.lat = birddata.lat;
//   allData.lng = birddata.lng;
//   allData.locID = birddata.locID;
//   allData.locName = birddata.locName;
//   allData.sciName = birddata.sciName;
//   print(allData.sciName[8]);
// }

// for (var i=0; i<birdata.length; i++){
// var allthebirdinfo = new allData();
// }


function preload() {
  headerBG0 = createImg("assets/HeaderBG00.png");
  headerBG1 = createImg("assets/HeaderBG01.png");
  headerBG2 = createImg("assets/HeaderBG02.png");
  headerBG3 = createImg("assets/HeaderBG03.png");
  cpbg = createImg("assets/cpbg.jpg");
  cpbg.addClass("body");
  // for (var i = 0; i < headerBG.length; i++) {
  //   headerBG[i] = createImg("assets/HeaderBG0" + [i] + ".png");
  // }


  birddata = loadJSON("http://ebird.org/ws1.1/data/obs/geo/recent?lng=" + lng + "&lat=" + lat + "&back=30&dist=3&fmt=json");

} //////PRELOAD ENDS


function setup() {
  // for (var ch=0;ch<20;ch++){
  //     cloudheight[ch] = random(1200);
  // }

  createCanvas(width, height);
  background(0);
  print(birddata);
  imageObject = createImg('anim/intro.gif');
  imageObject.position(1050, 400);
  recentCount = createP('');
  recentCount.addClass('h2');
  textSciName = createP('');
  textSciName.addClass('h2');

  // for (var i = 0; i < data.length; i++) {
  //   var o = data[i];
  //   howmany[i] = new DrawRecent(o); //callback, call the function
  // }

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
  recentDescr = createDiv("*The word 'recent' means reported in the last 30 days").class("h3");

  dropdown = createSelect();
  dropdown.position(0, 420);
  dropdown.addClass("dropdown");
  for (var i = 0; i < birddata.length; i++) {
    dropdown.option(birddata[i].comName);
  }



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
      AmericanCrow();}
      else if (this.selected() == 'American Robin') {
      AmericanRobin();}
  })

  cloudDiv = createDiv('');
  cloudDiv1 = createDiv('');
  cloud = createImg('assets/cloud.png');
  cloud1 = createImg('assets/cloud.png');
  cloud.parent(cloudDiv);
  cloud1.parent(cloudDiv1);
  cloud1.size(700, 230);
}

function draw() {
  cloudmoveR = (millis() / 0);
  cloudheight = sin(millis() / 300) * 3;
  clear();
  var speed = 1200;
  recentCount.position(sin(millis() / speed) * 20 + 900, cos(millis() / speed) * 20 + 620);
  textSciName.position(sin(millis() / speed) * 20 + 1000, cos(millis() / speed) * 20 + 710);
  cloudDiv.position(-500+(millis() / 20) % 1900, 600 + cloudheight);
  cloudDiv1.position(-500+(millis() / 30) % 1900, 200 + cloudheight);
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
  imageObject.elt.src = 'anim/palmwarbler.gif';
  AssignManyfromComname();
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