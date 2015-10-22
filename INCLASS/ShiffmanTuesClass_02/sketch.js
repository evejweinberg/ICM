// var weather = {
//   temp: 702,
//   status: "raining"
// }

// var rain = 0;
// var x = 0;
// var counter = 0;
var space;

// function preload(){
//   weather = loadJSON('weather.json');
// }

function setup() {
  createCanvas(600, 800);
  loadJSON('http://api.open-notify.org/astros.json', gotData, 'jsonp');
  //console.log(weather);
  // x = random(300);
  background(0);


}

function gotData(data) { //fill this var with the data
  space = data;
  print(space);
  // createP(weather.status);
  
  
}

function draw() {
clear();
if (space){
  for (var i=0; i<space.number;i++){
    fill(255);
    ellipse(200,100*i+30,10,10);
    fill(0);
    text(space.people[i].name,230,100*i+30);
  }
  
  
  
  
  
  
}
}