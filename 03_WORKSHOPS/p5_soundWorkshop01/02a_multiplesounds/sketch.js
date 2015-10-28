var animalData = [
  {
    name: "cow",
    soundPath: "assets/cow.mp3"
  },
  {
    name: "dog",
    soundPath: "assets/dog.mp3"
  },
  {
    name: "wren",
    soundPath: "assets/wren.mp3"
  },
  {
    name: "lion",
    soundPath: "assets/lion.mp3"
  }
];

function preload() {
  for (var i = 0; i < animalData.length; i++) {
    var thisAnimal = animalData[i];
    thisAnimal.soundFile = loadSound( thisAnimal.soundPath );//pass this path into animalData
    makeButton(thisAnimal);
  }
}

function makeButton(animalData) {
  animalData.button = createButton( animalData.name );
  animalData.button.mousePressed( function() {
    animalData.soundFile.play();
  } );
}

function setup() {

}

function draw() {
  
}