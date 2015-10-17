// var palettebluepink;
// //i can make another color palette !
// var shuffledPalette;




function callColorPalette(palette){


this.setup = function() {
//define palette as an empty array?

  this.palettebluepink = [
    color(248, 73, 41), //red
    color(69, 97, 220), //blue
    color(59, 50, 89), //drk blue
    color(251, 151, 162), //pink
    color(201, 208, 234), //light
    color(240, 206, 181), //tan
    color(81, 216, 236),
    color(61, 77, 191) //drk blue
  ]

  // shuffledPalette = shufflePalette(palettebluepink); //this variable equals the return of this function
  // print(shuffledPalette);
} 

this.randomColorPicker = function (myPalette) { //access one random element and return it, i can change the array inside 'myPalette' when i call it

  var randomIndex = floor(random(myPalette.length)); //give me an int between 0 and my color palette's length
  // print(randomIndex);
  var randomColor = myPalette[randomIndex]; //this references my argument, remember that I can pull from any palette later
  return randomColor; //give me a line from that array
}


//not ready for this:
// function shufflePalette(myPalette) { //pass a palette and return a shuffled version of the palette
//   myPalette = myPalette.slice(0); //create a clone so I dont empty the palette. slice(0) returns all the elements. WTF?
//   var newColorOrder = []; //make an empty array
//   while (myPalette.length > 0) { //do this as long as there are more things in the array
//     var randomIndex = floor(random(myPalette.length)); // new variable, an int, from zero to my argument's length 
//     // print("randomIndex " + randomIndex);
//     var randomColor = myPalette.splice(randomIndex, 1).pop(); // extract an array of size 1 and starting at randomIndex, remove the only element it has and store it in 'randomColor'
//     newColorOrder.push(randomColor); // push the object into the new array
//     // print("randomColor " + randomColor);

//   }
//   return newColorOrder; //when done running, give me the new array. Now where do we use this in the setup/draw?
// }



}



