
// http://openweathermap.org/appid
//they give you the base and you add '&APPID=yourkey'
//look for this on Luaren's github for Thursday's class

var bubbles = [];
var dataChi;
var input;
var button;
var speed =0;

function setup() {
  input = createInput();
  button = createButton("Go");
  
  createCanvas(600, 400);
  noLoop();
  noStroke();
  button.mousePressed(submit);
 

}

function submit(){
  var location = input.value();
  	loadJSON('http://api.openweathermap.org/data/2.5/forecast/daily?USA&APPID=5617057952ec4677480fd2bceb74cfc4q=chicago', ChiWeather);

}

function draw() {
  background(255);
    var move = random(-1*speed,1*speed)
  ellipse(10,10+move,300,300);

}

function ChiWeather(dataComingIn){
  print(dataComingIn);
  print(dataComingIn.city);
  var humidity = dataComingIn.main.humidity;
  var speed = dataComingIn.wind.speed;
  fill(0,humidity);

}
