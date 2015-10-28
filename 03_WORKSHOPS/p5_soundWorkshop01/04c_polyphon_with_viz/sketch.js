var oscArray = [];
var voiceCount = 5;
var voiceIndex = 0;

var fft;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();

  for (var i = 0; i < voiceCount; i++) {
    var osc = new p5.Oscillator();
    osc.start();
    osc.amp(0);
    oscArray.push( osc );
  }  

  fft = new p5.FFT();
}

function draw() {
  background(0,20);

  var waveform = fft.waveform();
  
  beginShape();
  for (var i = 0; i < waveform.length; i++) {
    var x = map(i, 0, waveform.length, 0, width);
    var y = map(waveform[i], -1, 1, height, 0);
    vertex(x, y);
  }
  endShape();
}

function mousePressed() {
  playNote();
}

function mouseReleased() {
  releaseNote();
}

function playNote() {
  var midiNote = round( random(55,72) );
  var freq = midiToFreq(midiNote);
  var osc = oscArray[voiceIndex];
  osc.freq(freq);
  osc.amp(1, 0.1);

  stroke(random(255), random(255), random(255));
}

function releaseNote() {
  oscArray[voiceIndex].amp(0, 1);

  voiceIndex++;
  voiceIndex = voiceIndex % voiceCount;
}