// var weather = {
//   temp: 702,
//   status: "raining"
// }

// var rain = 0;
// var x = 0;
// var counter = 0;
var weather;

// function preload(){
//   weather = loadJSON('weather.json');
// }

function setup() {
  createCanvas(500, 500);
  loadJSON('weather.json', gotData);
  //console.log(weather);
  // x = random(300);


}

function gotData(data) { //fill this var with the data
  weather = data;
  createP(weather.status);
  
  
}

function draw() {
  background(0);
  if (weather) {
    ellipse(sin(millis()/1000)*20+weather.temp, cos(millis()/1000)*20+weather.temp, weather.temp, weather.temp);

  } else {
    console.log("bad weather");
  }

}