// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 20-13: FFT

var mic;

var fft;

function setup() {
  createCanvas(512, 360);

  mic = new p5.AudioIn();

  // Create the FFT analyzer
  fft = new p5.FFT();
  fft.setInput(mic);
  mic.start();
  
}

function draw() {
  background(200);

  var spectrum = fft.analyze();

  for (var i = 0; i < spectrum.length; i++) {
    stroke(0);
    // The FFT range is between 0 and 1, we map it to pixels
    var y = map(spectrum[i], 0, 255, height, 0);
    line(i, height, i, y);
  }
}