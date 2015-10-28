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
  noFill();
  var waveform = fft.waveform();

  beginShape();
  for (var i = 0; i < waveform.length; i++) {
    stroke(0);
    var y = map(waveform[i], -1, 1, height, 0);
    vertex(i, y);
  }
  endShape();
}