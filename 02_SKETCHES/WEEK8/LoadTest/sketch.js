function setup() {
  createCanvas(600, 400);
  background(240,240,240);
  fill(0);
  textSize(20);
  
  loadJSON("data.json", drawData);//callback drawData
  loadStrings("r.txt", doText);//callback doText
  
}

function doText(dato) {
  for (var i = 0; i < dato.length; i++) {
    fill(0);
    text(dato[i], 5, 20 * i + 20);
  }
}

function drawData(dato) {
  // person 1 bubble
  fill(155, 30, 180, 180);
  ellipse(250, 200, dato.person1.age * 5, dato.person1.age * 5); // person1.age = 30
  fill(255);
  text(dato.person1.name, 210, 200); // person1.name = Morgan
  text(dato.person1.fear,100,100);

  // person 2 bubble
  fill(180, 180, 34, 180);
  ellipse(350, 200, dato.person2.age * 5, dato.person2.age * 5); // person2.age = 32
  fill(255);
  text(dato.person2.name, 330, 200); // person2.name = Joss
  text(dato.person2.desire,200,100);
}