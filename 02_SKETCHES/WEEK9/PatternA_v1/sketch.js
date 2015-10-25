var sprite1;
var sprite;
var sprites = [];
var tooclose = false;



function setup() {
  createCanvas(250, 800);
    background(255, 0, 0);
  // sprite1 = createImg('assets/sprite1.gif');

  var images = ["sprite1.gif","sprint2.gif" ];
  
  div = createDiv("").addClass("wrapper");
  
  for (var i = 0; i <5; i++){
    sprite1 = createImg('assets/' + images[0]).addClass("giffy").style("margin-top",random(180) + "px");
    sprite1.parent(div);
  }
  // sprite1 = createImg('assets/sprite1.gif');
    // sprite1.position(10,10).size(90,90);

//   for (var i = 0; i < 50; i++) {
//     // sprites[i] = new Jitter();
//     // if ((dist(sprites[i].x, sprites[i].y, this.x, this.y) < 60) && (sprites[i].x != this.x) && (sprites[i].y != this.y)) {
//     //   tooclose = true;
//     // }
//     // if (tooclose === false) {
//     sprites[i] = new Jitter();
//     // }
// }

}

function draw() {

  // // animation(sprite,100,100);
  // for (var i = 0; i < sprites.length; i++) {
  //   sprites[i].display();
  // }
  // console.log(sprites.length);

}

function Jitter() {
  this.x = random(-40, width + 40);
  this.y = random(-40, height + 40);
  this.speed = random(-3, 3);

  this.display = function() {

    if (this.tooclose === false) {

      this.rovex = cos(millis() / 500) * this.speed;
      this.rovey = sin(millis() / 500) * this.speed;

      sprite1.size(90, 90)

      this.x = this.x;
      this.y = this.y;
      sprite1.position(this.x, this.y);
      fill(0, 255, 0)
      rect(this.x, this.y, 40, 40);
      fill(255);
    }
  }

  // this.detect = function() {
  //   for (var i = 0; i < sprites.length; i++) {
  //     // if ((dist(sprites[i].x, sprites[i].y, this.x, this.y) < 60) && (sprites[i].x != this.x) && (sprites[i].y != this.y)) {
  //     //   this.tooclose = true;
  //     // }
  //   }
  // }
}