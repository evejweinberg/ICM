var oscArray = [];
var voiceCount = 5;
var voiceIndex = 0;

function setup() {
  for (var i = 0; i < voiceCount; i++) {

    var osc = new p5.Oscillator();
    osc.start();
    osc.amp(0);

    oscArray.push( osc );
  }  
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
}

function releaseNote() {
  oscArray[voiceIndex].amp(0, 1);

  voiceIndex++;
  voiceIndex = voiceIndex % voiceCount;
}