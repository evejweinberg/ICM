var data;
var lat = 40.785091;
var lng = -73.968285;
var dropdown;
var PalmWarbler;


function preload() {

  //img = loadImage("anim/Duck.png");
  data = loadJSON("http://ebird.org/ws1.1/data/obs/geo/recent?lng=" + lng + "&lat=" + lat + "&dist=3&fmt=json");
  PalmWarbler = loadAnimation("anim/PalmWarbler_00.png", "anim/PalmWarbler_04.png");
}

function setup() {
  createCanvas(700, 400);
  background(0);
  print(data);

  dropdown = createSelect();
  dropdown.position(width - 400, 300);
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