var song, analyzer, video;

// function preload() {
//   // song = loadSound('assets/lucky_dragons_-_power_melody.mp3');
//   // video = createVideo('assets/story1.mov');
// }

function setup() {
  video = createVideo('assets/story1.mov');
  createCanvas(710, 200);
  video.loop();

  // create a new Amplitude analyzer
  analyzer = new p5.Amplitude();

  // Patch the input to an volume analyzer
  analyzer.setInput(video);
}

function draw() {
  background(255);


  // Get the overall volume (between 0 and 1.0)
  var vol = analyzer.getLevel();
  fill(127);
  stroke(0);
    console.log(floor(1000*vol));

  // Draw an ellipse with size based on volume
  ellipse(width/2, height/2, 10+vol*200, 10+vol*200);
}