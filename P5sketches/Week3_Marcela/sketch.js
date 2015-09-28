function Circle(_x, _y, _dia, _speed) { //new circle object
  this.x = _x; //did we make up the 'x' part?
  this.y = _y; //own version of a Y for each circle
  this.dia = _dia; //own version of a diameter

  if (random(1) < 0.5) { //half of the time(ish)
    this.speed = _speed; //speed is speeed, straight up
  } else {
    this.speed = _speed * -1; //otherwise, speed is negative speed
  }


  this.update = function() {  //functions inside the object
    this.x = this.x + this.speed;
    if (this.x > width + 15) {
      this.x = -15;
    } else if (this.x < -15) {
      this.x = width + 15;
    }
  }
  this.draw = function() {
    noStroke();
    ellipse(this.x, this.y, this.dia, this.dia); //
  }
}

var circles = []; //we're going to hav elaot of circles
var fontOpa;
var rectOpa;
var mePosX; //main circle position
var mePosY; //main circle position
var meDia;
var myOpac;
var distance;


function setup() {
  createCanvas(900, 600);
  for (var i = 0; i < 10; i++) { //ten new circles
    circles.push(new Circle(-15, i * 70 + 70, 30, random(3, 10))); //put them into the array, make them at (-15, moving 70 up each time, 30radius, random speed)
  }
  mePosX = width / 2; //start main dot here
  mePosY = height; //start main dot here
  meDia = 30;
  fontOpa = 200;
  rectOpa = 270;
  myOpac = 225;

}

function draw() {
  // draw background
  background(16, 42, 64);

  noStroke();
  fill(255, rectOpa);
  rectMode(CENTER);
  rect(width / 2, height / 2, 600, 420);


  for (var i = 0; i < circles.length; i++) { //vist all the circles
    distance = dist(mePosX, mePosY, circles[i].x, circles[i].y); //dist(mainBall, this circle)
    circles[i].update(); //if it goes off the screen, start it over
    fill(200, distance/2, distance);
    circles[i].draw();//no stroke and where to put the circle is an argument
    if (distance < meDia / 2 + 15) { //if the dist from this circle to the main ball is less than the circle plus 15
      background(244, 0, 73); //change background
      meDia += 3; //make diameter bigger by 3
    }

    if (mePosY < 0) { //if you make it to the top!

      rectMode(CENTER)
      fill(19, 61, 87);
      rect(500, 500, 1000, 1000);
      fill(110,189,241);
      textAlign(CENTER,CENTER);
      textSize(90);
      textFont("OpenSans");
      textStyle(BOLD);
      b = "YOU MADE IT!"
      text(b, 470, 260, 700, 250);
      

    }
    

    if (meDia > 1000) { //if the circle gets too big
      rectMode(CENTER)
      fill(19, 61, 87);
      rect(500, 500, 1000, 1000);
      fill(255);
      print("FAIL");
      fill(244, 0, 73);
      textAlign(CENTER,CENTER);
      textSize(90);
      textFont("OpenSans");
      textStyle(BOLD);
      c = "FAIL!"
      text(c, 470, 260, 700, 250);
      
      myOpac = 0;
    }
  }



  noStroke();
  fill(244, 0, 73,myOpac); 

  ellipse(mePosX, mePosY, meDia, meDia); //draw the main circle

  a = "Hello, Little Red Dot!"
  aa = "You have been chosen to fulfill a the very important mission"
  aaa = "You must get to the other side of the road!"
  aaaa = "Cross the street and don't let yourself killed. Use arrows to move."
  aaaaa = "If you feel strong enough,you can add some extra obstacles by clicking and dragging the mouse."
  aaaaaa = "Press 'shift' to exit this window."
  textSize(19);
  textFont("OpenSans");
  textStyle(BOLD);
  fill(244, 0, 73, fontOpa);
  text(a, 465, 260, 570, 250);
  fill(0, 31, 76, fontOpa);
  textStyle(NORMAL);
  text(aa, 465, 320, 570, 250);
  text(aaa, 465, 370, 570, 250);
  text(aaaa, 465, 420, 570, 250);
  text(aaaaa, 465, 490, 570, 250);
  text(aaaaaa, 465, 560, 570, 250);


}

function mouseDragged() { //if mouse is being held down and moving
  circles.push(new Circle(mouseX, mouseY, 30, random(3, 10))); //if mouse is moving, push new circles into the array, at the mouse and 
}

function keyPressed() {
  if (keyCode == UP_ARROW) { //if up arrow is pressed
    mePosY -= 10; //main ball Y variable decreases by 10
  } else if (keyCode == DOWN_ARROW) {
    mePosY += 10;
  } else if (keyCode == RIGHT_ARROW) {
    mePosX += 10;
  } else if (keyCode == LEFT_ARROW) {
    mePosX -= 10;
  } else if (keyCode == SHIFT) {
    fontOpa = 0;
    rectOpa = 0; //make center rect opacity zero
  
  }
}