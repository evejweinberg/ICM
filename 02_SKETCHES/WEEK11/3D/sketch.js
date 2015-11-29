//there are 5 types of materials
// basicMaterial(250, 0, 0);
// normalMaterial();
// ambientMaterial(250);
  // specularMaterial(250);
  var near=.1;
  var far=100;
  var rSlider;
  var moveupslow=0;


function setup(){
  createCanvas(710, 400, WEBGL);
      // perspective(60 / 180 * PI, width/height, .1, far);
       rSlider = createSlider(-1800, 4000, 4000);
  rSlider.position(20, 20);

  img = loadImage("assets/earth_day.jpg");
}

function draw(){
  camera(0, moveupslow, rSlider.value());
  moveupslow=map(rSlider.value(),-1800, 4000,-1000,-400);

   background(0);
   fill(0,130,255);
  // rect(0,width/2,500,500);
  // orbitControl();
   near=near-5;
   far=far-35;
  
   var locY = (mouseY / height - 0.5) * (-2);
  var locX = (far) * 2;
  
  for(var i = -1; i < 1; i++){
    for(var j = -2; j < 14; j++){
      push();
      translate(140+i*360, 0, -1000+j*560);
      // texture(255,0,0);
      box(40, 40*j, 40);
      pop();
    }
  }

  ambientLight(50);
  directionalLight(200, 0, 0, 0.25, 0.25, 0.25);
  pointLight(255, 255, 255, locX, locY, 0);
  pointLight(0, 0, 0, -locX, -locY, 0);
  
  // background(250);
  translate(0, 0, 0);
  normalMaterial();  
  translate(0, 260, 0);
  push();
  rotateX(80);
  
  // fill(00,160,50);
  plane(100,5000);
  pop();
 

 
 
  translate(0, 0, -900);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(img);
  sphere(200);
  pop();
}