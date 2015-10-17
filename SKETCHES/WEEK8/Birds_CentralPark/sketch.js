var data;
var lat = 40.785091;
var lng = -73.968285;
var dropdown;
var PalmWarbler;
var headerBG = [];


function preload() {

cpbg = createImage("/assets/cpbg.jpg").class(bg);
  headerBG0 = createImg("assets/HeaderBG00.png");
  headerBG1 = createImg("assets/HeaderBG01.png");
  headerBG2 = createImg("assets/HeaderBG02.png");
  headerBG3 = createImg("assets/HeaderBG03.png");
  // for (var i = 0; i < headerBG.length; i++) {
  //   headerBG[i] = createImg("assets/HeaderBG0" + [i] + ".png");
  // }


  data = loadJSON("http://ebird.org/ws1.1/data/obs/geo/recent?lng=" + lng + "&lat=" + lat + "&dist=3&fmt=json");
  PalmWarbler = loadAnimation("anim/PalmWarbler_00.png", "anim/PalmWarbler_04.png");
}

function setup() {
  createCanvas(700, 400);
  background(0);
  print(data);

  P1 = createDiv('The Birds Of');
  P2 = createDiv('Central Park');
  P3 = createDiv('This dataset came from the');
  P4 = createDiv('Cornell Lab of Ornithology');
  P4.mouseClicked(GetCornellURL);
  P1.position(42, 60).class("h1");
  P2.position(105, 130).class("h1");
  P3.position(42, 210).class("h2");
  P4.position(42, 240).class("h2");
  //headerBG1.parent(P1);
  headerBG1.position(40, 60);
  headerBG2.position(90, 130);
  headerBG3.position(40, 210);
  headerBG0.position(40, 245);

  dropdown = createSelect();
  dropdown.position(0, 300);
  dropdown.addClass("dropdown");
  for (var i = 0; i < data.length; i++) {
    dropdown.option(data[i].comName);
  }
}

function DrawPalmWarbler() {
  img = createImg('/anim/hiwa.gif');
}

function draw() {

}

function GetCornellURL(){
  
}