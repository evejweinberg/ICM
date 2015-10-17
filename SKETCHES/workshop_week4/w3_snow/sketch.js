var snow = {
  x: 0,
  y: 0,
};

function setup() {
  createCanvas(500, 700);
  noStroke();
}

function draw() {
  background(0);

  //snow.x = width/2 + random(-1,1)*5; 
  //snow.x = width / 2 + sin(frameCount * 0.05) * 10;
  snow.x = width / 2 + noise(frameCount * 0.02) * 50;

  fill(255);
  ellipse(snow.x, snow.y, 10, 10);

  snow.y++;
  if (snow.y > height) {
    snow.y = 0;
  }
}