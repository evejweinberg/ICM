function setup() {
  createCanvas(500,500);
  background(50);
  fill(255);
  
  var startX = 100;
  var startY = 100;
  var interval = 30;
  
  // left
  for (var i=0; i<10; i++) {
    text(i, 100, 100 + 30*i);
    //rect(100, 100 + 30*i, 15,15);
  }
  
  // right
  for (var i=100; i<400; i+=30) {
    text(i, 300, i);
    //rect(300, i, 15,15);
  }
  
}

function draw() {
  
}