var angle = 0.0;var offset = 120;var scalar = 300;var speed = 0.05;var circlearray = [];function setup() {createCanvas(420, 420);background(204);for (var i=0;i<360;i++){  circlearray[i]=new CircleArray();}}function draw() {}function CircleArray(){ x = offset + cos(angle) * scalar;y = offset + sin(angle) * scalar;ellipse(x, y, 40, 40);angle += speed;}