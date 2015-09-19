var palettebluepink;
//i can make another color palette !
var shuffledPalette;


function setup() {
  createCanvas(300, 300);


  palettebluepink = [
    color(248, 73, 41), //red
    color(69, 97, 220), //blue
    color(59, 50, 89), //drk blue
    color(251, 151, 162), //pink
    color(251, 248, 234), //light
    color(240, 206, 181) //tan
  ]

  shuffledPalette = shufflePalette(palettebluepink); //this variable equals the return of this function
   print(shuffledPalette);
}

function draw() {
  background(255);
  for (var i = 0; i < 20; i++) {
    stroke(shuffledPalette[i % 6]);
    strokeWeight(4);
    line(0 * i, i * 0, 40 * i, 70);
 

  }

  // LetterF(0, 10);
  // LetterF(100, 10);



} ///////////////DRAW ENDS///////////////////////DRAW ENDS////////////////////////

function shufflePalette(myPalette) { //pass a palette and return a shuffled version of the palette
  myPalette = myPalette.slice(0); //create a clone so I dont empty the palette. slice(0) returns all the elements WTF
  var newColorOrder = []; //make an empty array
  while (myPalette.length > 0) {
    //pick a random pill from our array and put it in slot 1
    var randomIndex = floor(random(myPalette.length)); //pick a random element
    print("randomIndex" +randomIndex);
    var randomColor = myPalette.pop(randomIndex); //return the object that i'm popping out of the array
    newColorOrder.push(randomColor); //push is a function
     print("randomColor" + randomColor);

  }
  return newColorOrder; //give me the goods

}

function randomColorPicker(myPalette) { //access one random element and return it

  var randomIndex = floor(random(myPalette.length)); //give me an int between 0 and my color palette's length
  print(randomIndex);
  var randomColor = myPalette[randomIndex]; //this references my argument, so I can pull from any palette later
  return randomColor; //give me something
}


//-----F-------
// function LetterF(xPos, yPos) { //we use these inside the function then change them in draw. we never have to define them just use them
//   push();
//   translate(xPos, yPos); //we use these inside the function then change them in draw
//   stroke(shuffledPalette random(palette.length));
//   noFill();
//   strokeWeight(letterstroke);
//   line(0, 0, 0, letterheight);
//   stroke(typecolor);
//   line(0, 0, letterwidth, 0); //top bar
//   stroke(typecolor);
//   line(0, letterxheight, letterwidth, letterxheight); //bottombar
//   pop();
// }