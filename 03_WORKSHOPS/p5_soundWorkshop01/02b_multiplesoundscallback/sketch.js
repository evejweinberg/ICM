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


function setup() {
  for (var i = 0; i < animalData.length; i++) {
    makeAnimal(animalData[i]);
  }
}

//
function makeAnimal(animal) {
    animal.button = createButton ( animal.name );
    loadSound( animal.soundPath, gotSound);
  
    // callback when the sound has loaded
    function gotSound(sound) {
      sound.playMode('restart');
      animal.soundFile = sound;
      animal.button.mousePressed( function() {
        sound.rate(random(0,2));
        sound.play();
      });
    }  
}

function draw() {
  
}