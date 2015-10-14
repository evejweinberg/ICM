var slider;
var par;
var button;
var toggleBtn = false;


function setup() {
  createCanvas(300, 300);
  par = createP("Shir. A very excitable person. Can be extremely awesome and funny. Can make a group of sad people happy. Great with kids. Guy: Hey did you see Shir today? Girl: Ya! She told the funniest joke! Guy: Really? Sucks that i missed it. I didn't see her in class and it was so boring. She is really awesome.");
  //createSlider(min,max,beginningValue);
  par.style("color", "#F99");
  par.style("background", "#000");
  par.style("font-family", "Verdana");
  par.style("width", "200px");
  par.style("position", "absolute");
  par.style("top", "10px");
  par.style("left", "100px");
  slider = createSlider(0, 255, 100);
  slider.style("width", "1000px");
  button = createButton("PRESS");
}

function draw() {
  background(slider.value());
  //button.mousePressed( MUST PUT A FUNCTION );
  button.mousePressed(changeText);
}

function changeText() {
  if (toggleBtn) {
    button.html("DON'T PRESS");
  } else {
    button.html("PLEASE DON'T PRESS");
  }
  toggleBtn = !toggleBtn;
}











