var myFont;
var oneheart;
textheight = 0;
circDiam =20;


function preload() {
  myFont = loadFont('assets/futura_book.otf');
  oneheart = loadImage("assets/heart.svg");
}

function Heart(xloc,yloc,size){
    image(oneheart, 0,0);
}


function setup() {
  createCanvas(1200,1200);
  fill('#ED225D');
  textFont(myFont);
  textSize(36);
  text('Yello', 10, 50);
}

function draw() {
  // background(255);
  text(mouseX, 500,textheight=textheight+1);
  fill((random(0,255)), (random(0,255)),(random(0,255)));

  image(oneheart, mouseX,mouseY);
 
  
  // for (var i=0; i<40; i++){
  // Heart(10,i+200,20);
  // ellipse(10,i+100,20,20);
  // }
  
  if(mouseY < 100){
    circDiam = random(120,220);
  } else if(mouseY > 100 && mouseY < 400){
    circDiam = random(50,80);
  }else {
    circDiam = random(10,30);
  }
 
}

