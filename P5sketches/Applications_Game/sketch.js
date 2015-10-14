var friesAll = [];


var playing = false;
var mouth;
var apple;
var cookie;
var donut;
var eggplant;
var fries;
var grapes;
var hamburger;
var pineapple, pineapple2;
var pizza;
var poo;
var index;
var food;
var counter;
var song;
var currentScore = 0;

//load the music
function preload() {
  // soundFormats('mp3');
  // song = loadSound("assets/kokomo.mp3");
  
  for (var i =0; i<6; i++){
    friesAll[i] = loadImage("assets/fry0"+i+".png");
  }
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(247, 184, 177);

  //play the music
  // song.play();

  //create mouth
  // mouth = loadImage("assets/mouth.png");

  //introduce variables with their parameters - their arguments for the function
  // apple = new Food("assets/apple.png", 7, 10, false);
  // cookie = new Food("assets/cookie.png", 5, -10, false);
  // donut = new Food("assets/donut.png", 8, 10, false);
  // eggplant = new Food("assets/eggplant.png", 7, 10, false);
  // fries = new Food("assets/fries.png", 6, -10, false);
  // grapes = new Food("assets/grapes.png", 5, 10, false);
  // hamburger = new Food("assets/hamburger.png", 5, -10, false);
  // pineapple = new Food("assets/pineapple.png", 5, 10, false);
  // pizza = new Food("assets/pizza.png", 6, -10, false);
  // poo = new Food("assets/poo.png", 5, 100, true);
  // pineapple2 = new Food("assets/pineapple.png", 0, 10, false);
  // pineapple3 = new Food("assets/pineapple.png", 0, 10, false);


}

function draw() {
  //counter = second();
 

  //Code to start the game. First part is the first screen. 
  if (playing === false) {
    //background(247, 184, 177);
    background(251,133,246);
     image(friesAll[1]);
    textSize(20);
    text("USE YOUR MOUSE TO MOVE THE MOUTH. CATCH HEALTHY FOOD TO GAIN POINTS.", 200, 200);
    fill(255);
    noStroke();
    rect(500, 300, 200, 100);
    textSize(20);
    fill(0);
    text("CLICK TO PLAY", 520, 358);
    // pineapple2.y = 300;
    // pineapple2.x = 300;
    // pineapple2.display();
    // pineapple3.y = 300;
    // pineapple3.x = 800;
    // pineapple3.display();
    frameRate(30);


    //code to start the play part of the game
  } else {
    fill(251,133,246);
    rect(0, 0, width, height);
    fill(255);
    noStroke()
    rect(900, 100, 200, 100);
    fill(0);
    textSize(20);
    text("SCORE", 960, 140);
    text(currentScore, 960, 170);
    image(mouth, mouseX, 400);

    /*call the functions to display the items, check if they fall off screen
    or were eaten, and change the score if they were eaten*/
    apple.display();
    apple.check();
    apple.score();
    cookie.display();
    cookie.check();
    cookie.score();
    donut.display();
    donut.check();
    donut.score();
    // eggplant.display();
    // eggplant.check();
    // eggplant.score();
    // fries.display();
    // fries.check();
    // fries.score();
    // grapes.display();
    // grapes.check();
    // grapes.score();
    // hamburger.display();
    // hamburger.check();
    // hamburger.score();
    // pineapple.display();
    // pineapple.check();
    // pineapple.score();
    // pizza.display();
    // pizza.check();
    // pizza.score();
    // poo.display();
    // poo.check();
    // poo.score();

    //if statement to check if you won the game.
    if (currentScore == 100) {
      noLoop();
      background(255);
      fill(0);
      textSize(70);
      text("You win!", 440, 325);
    }
  }

}

//main function for the game that sets up all of the parameters for each object.
function Food(f, s, p, ip) {

  this.x = int(random(0, width));
  this.y = random(-50, 0);
  this.img = loadImage(f);
  this.speed = s;
  this.points = p;
  this.isPoo = ip;

  //put objects on the screen and animate them
  this.display = function() {
    image(this.img, this.x, this.y);
    this.y = this.y + this.speed;
  }

  //check to see if the object is no longer on the screen and needs to be reset.
  this.check = function() {
      if (this.y > height) {
        this.reset();
      }
    }
    //the reset funtion to put the object back at a beginning position
  this.reset = function() {
    this.y = 0;
    this.x = int(random(0, width));
  }

  //changes the score if the mouth touches food and ends game if poo is eaten.
  this.score = function() {
    if (dist(this.x, this.y, mouseX + 20, 420) < 40) {
      currentScore = currentScore + this.points;
      background(255);
      if (this.isPoo) {
        noLoop();
        fill(0);
        textSize(70);
        text("Gross. You ate shit.", 300,350);
      } else {
        this.reset();
      }
    }
  }


}

//function to start the game if the button is pressed.
function mousePressed() {
  if (mouseX > 500 && mouseX < 700 && mouseY > 300 && mouseY < 400) {
    playing = !playing;
    print("playing or not")
  }
}