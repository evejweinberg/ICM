/**
 * Example: Use an oscillator to create a Note class,
 * scheduling a bassline using p5.Part as a looper
 */

var stepIndex = 0;
var bassline = [47, 0, 49, 54,
                42, 0, 49, 0,
                45, 0, 49, 0,
                47, 0, 47, 0,
                45, 0, 47, 0,
                42, 0, 45, 0,
                40, 0, 47, 0,
                42, 0, 52, 0];
var myNote;

var looper;

function setup() {
	createCanvas(windowWidth, windowHeight);
  background(255, 255, 220);

  myNote = new Note('sine');

  
  looper = new p5.Part();
  looper.setBPM(160);
  looper.onStep(playNext);
  looper.loop();
}

function playNext() {
  var note = bassline[stepIndex % bassline.length];
  if (note > 0) {
    myNote.play(0, note, 0.5);
  }
  stepIndex++;
}

/**
 * draft of a "note" class
 */
var Note = function(type) {
  this.osc = new p5.Oscillator();
  this.env = new p5.Env(0.01, 0.5, 0.5, 0.5, 0.3);
  this.osc.amp(0);
  this.osc.start();

  // type defaults to 'sine' but can be 'triangle' 'square' or 'sawtooth'
  this.osc.setType(type);

  // set the ramp time envelope for noteOn (attack) and noteOff (release)
  this.attackTime = 0.01;
  this.releaseTime = 0.3;
  this.sustainTime = 0.5;

  this.noteOn = function(timeFromNow, midiNote, vol) {
    var level = vol || 0.5;
    this.osc.freq( midiToFreq(midiNote) );
    this.env.triggerAttack(this.osc, timeFromNow);
  }

  this.noteOff = function(timeFromNow) {
    console.log(timeFromNow);
    this.env.triggerRelease(this.osc, timeFromNow);
  };

  this.play = function(timeFromNow, midiNote, vol) {
    this.noteOn(timeFromNow, midiNote, vol);
    this.noteOff(timeFromNow + this.sustainTime);
  }
};