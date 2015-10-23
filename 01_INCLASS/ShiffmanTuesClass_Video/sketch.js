var vide0;
function setup() {
  createCanvas(320,240);
  background(0);
  video = createCapture(VIDEO);
  video.size(320,240);
  vide.hide();
}

function draw() {
  background(200,200,10);
  image(video,0,0,mouseX, mouseY);
  // video.size(200*cos(millis()/1000),200*sin(millis()/1000));
  
  
}