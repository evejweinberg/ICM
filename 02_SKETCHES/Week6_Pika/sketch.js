//stray cats, coming next, movement, basket, different cats, 
//drag cats, flip
//randomnames on the bar

var angle;
var cat1;
var catlist=[];
var input;
var button;
var namelist=[];
var firstname="StrayCat";
var grass;
var pika;
var savedtime;

function setup() {
  createCanvas(500,300);
  input = createInput(firstname);
  //name???
  input.position(520,10);
  input.changed(inputChanged);
  button = createButton('Name this cat!');
  button.mousePressed(savenames);
  button.position(520,50);
  savedtime = millis();
}

function preload(){
  // grass = loadImage('grass.jpg');
  grass = loadImage('grass.png');
  pika = loadImage('pika.gif');
  pikasound = loadSound('pikasound.mp3')
}

function draw() {
  
  background(50);
  //image(grass,0,0,591.5,311.5);
  image(grass,0,0);
  // image(pika,100,100,pika.width/5,pika.height/5);
  for(var i=0; i<catlist.length;i++){
    catlist[i].display(); 
    catlist[i].bounce();
    catlist[i].shivering();
    push();
    translate(catlist[i].posx,catlist[i].posybase+catlist[i].posy);
    textAlign(CENTER);
    text(namelist[i],0,-18);
    pop();
   }
  
  // push();
  // scale(-1,1);
  // image(pika,-100,100,pika.width/5,pika.height/5);
  // pop();
   
  var pasttime = millis()-savedtime;
  if(pasttime > 1000) {
    for(var j=0; j<catlist.length;j++){
      catlist[j].move();
    }
    savedtime = millis();
  }
}

// function mousePressed(){
//   var c = new cat(mouseX,mouseY,2,20,20);
//   catlist.push(c);
// }

function savenames(){
  //namelist.push(firstname);
  namelist.push(input.value());
  //print(namelist[namelist.length-1]);
  var c = new cat(random(-100,150),random(-80,150),2,20,20);
  catlist.push(c);
  pikasound.setVolume(0.8);
  pikasound.play();
  
  // for(var i =0;i<namelist.length;i++){
  //   print(namelist[i]);
  // }
}

function inputChanged(){
  if(firstname != input.value() && input.value().length>0){
    firstname = input.value();
  }
}




function cat(tempposx,tempposybase,tempspeed,tempsizex,tempsizey) {
  this.posx=tempposx;
  this.posy=0;
  this.posybase=tempposybase;
  this.posyexact;
  this.speed=tempspeed;
  this.sizex=tempsizex;
  this.sizey=tempsizey;
  this.bouncecount=0;
  this.gravity = 0.1;
  this.bouncestopcount=0;
  this.bouncestopdis=random(1,5);
  this.direction=1;
  this.shivercount==1
  
  this.display=function(){
    // ellipse(this.posx,this.posybase+this.posy,this.sizex,this.sizey);
    image(pika,this.posx-35,this.posybase+this.posy-12,pika.width/5,pika.height/5);
  }
  
  this.bounce=function(){
    this.posyexact=this.posy+this.posybase;
    if(this.posyexact>=this.posybase+100) {
     this.speed = this.speed*-0.95;
     this.bouncecount+=1;
    }
    if(this.bouncecount<=2){
    this.posx+=1;
    this.posy+= this.speed;
    this.speed += this.gravity;
    }
    if(this.bouncecount>2){
     this.posyexact=this.posybase+100;
     this.bouncestopcount+=1;
     if(this.bouncestopcount<=2){
       this.posx+=this.bouncestopdis;
      }
     this.bouncecount=3;
    }
  }
  
  this.move=function(){
    if(this.bouncecount==3){
      
      this.flip = floor(random(0,2));
      
      if(this.flip == 1){
        this.direction = this.direction*-1
      }
      
      if(this.direction==1){
        this.posx+=3;
      }
      else if(this.direction==-1){
        this.posx-=3;
      }   
    }
  }
  
  this.shivering=function(){
    var d = dist(mouseX,mouseY,this.posx,this.posy);
    if(d<pika.width/10 && mouseIsPressed){
      this.posx=mouseX;
      this.posy=mouseY-this.posybase;
      print("dragged");
    }
  }
  
  
  
}



