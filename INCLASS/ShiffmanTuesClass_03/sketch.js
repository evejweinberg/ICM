var fullURL = "http://api.wordnik.com:80/v4/word.json/staple/frequency?useCanonical=false&startYear=2005&endYear=2012&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5";

var url = "http://api.wordnik.com:80/v4/word.json/"
var condition1 = '/frequency?useCanonical=false&startYear=2005&endYear=2012&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
var input;
var wordstuff;



function setup() {
  createCanvas(1200,200);
  
  createP('Words 2005 to 2012').class('h1');
  input = createInput('apple');
  var button = createButton('submit');
  button.mousePressed(getData);
  background(140,140,0);
}

function getData(data) { //fill this var with the data
  data = loadJSON(url + input.value() + condition1, gotData);
}

function gotData(data) {
  wordstuff = data;
  print(data);
  createP(input.value() + " : " + data.totalCount);
  for (var i = 0; i < 5; i++) {
    years = createP(data.frequency[i].year + " : " + data.frequency[i].count);
    years.style("color", "red");
    stroke(0);
    ellipse(30 * i, 30 * i, data.frequency[i].count, data.frequency[i].count);
  }


}


function draw() {
  //clear();
  // if (wordstuff) {
  //   print("got data")
  //   fill(255, 0, 200);
  //   ellipse(300, 300, data.totalCount, data.totalCount)
  // }
}