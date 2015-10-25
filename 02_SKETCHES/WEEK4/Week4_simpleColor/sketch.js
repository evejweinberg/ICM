var names = ["Dan", "Satbir", "Ian", "Eve"];
var positions = [40, 300, 60, 10];
var circle = [];
var c, d, b;



function setup() {
  createCanvas(700, 700);
  c = color(140, 255, 0);
  d = color(255, 0, 200);
  b = color(255, 0, 0);
   for (var i =0; i<100; i++){
  circle[i] = new Ball(c);
}
}

function draw() {
  // for (var i = 0; i <4; i++){
  //   var myText = names[i];
  //   text(myText, positions[i], 100+100*i);
  // }
  for (var i =0; i<100; i++){
  circle[i].move();
  circle[i].display();
  }
  
}

function MousePressed() {
  for (var i =0; i<100; i++){
  circle[i].c = b;
  }
}


function Ball(c) {
  this.c = c;
  print(c);
  this.radius = random(40);
  this.xpos = random(500);
  this.ypos = random(500);
  this.xdir = 1;
  this.ydir = 1;

  this.display = function() {
    fill(this.c);
    print(this.c);
    ellipse(this.xpos, this.ypos, this.radius, this.radius);
  }
  // this.moveUp = function() {
  //   this.ypos = this.ypos + 1;
  // }

  this.move = function() {
    this.xpos = this.xpos + 1;
    this.radius =this.radius - (random(.01,1));
    if (this.radius<0){
      this.radius = 0;
      
    }
  }
  
  if(this.xpos > width || this.xpos <0){
    xdir = !xdir;
  }

}