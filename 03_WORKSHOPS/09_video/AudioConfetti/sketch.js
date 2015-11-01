var mic, fft, amplitude;
var specPlaying = false;
var ampPlaying = false;
var wavPlaying = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();

  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);
  amplitude = new p5.Amplitude();
  amplitude.setInput(mic);

}

function draw() {
  push();
  background(0);
  fill(255);
  textSize(30);
  textFont("Helvetica");
  text("AUDIO CONFETTI", 15, 40);
  pop();

  push();
  smooth();
  stroke(255);
  strokeWeight(2);
  specButton();
  wavButton();
  ampButton();
  pop();
  
  //hover Spec
  if (mouseX >= (width / 2) - 60 && mouseX <= (width / 2) - 40 && mouseY >= 15 && mouseY <= 30) {
    push();
    stroke(0);
    fill(255);
    specButton();
    textSize(10);
    text("FREQUENCY", (width / 2) - 80, 65);
    pop();
  }

  //play Spec
  if (specPlaying == true) {
    push();
    stroke(0);
    fill(255);
    specButton();
    pop();
    specViz();
  }

  //hover Wav 
  if (mouseX >= (width / 2) + 40 && mouseX <= (width / 2) + 60 && mouseY >= 15 && mouseY <= 50) {
    push();
    stroke(0);
    fill(255);
    wavButton();
    textSize(10);
    text("WAVELENGTH", (width / 2) + 15, 65);
    pop();
  }

  // play Wav  
  if (wavPlaying == true) {
    push();
    stroke(0);
    fill(255);
    wavButton();
    pop();
    wavViz();
  }

  //hover Amp
  if (mouseX >= (width / 2) - 10 && mouseX <= (width / 2) + 10 && mouseY >= 15 && mouseY <= 50) {
    push();
    stroke(0);
    fill(255);
    ampButton();
    textSize(10);
    text("AMPLITUDE", (width / 2) - 30, 65);
    pop();
  }

  // play Amp  
  if (ampPlaying == true) {
    push();
    stroke(0);
    fill(255);
    ampButton();
    pop();
    ampViz();
  }
}

function mousePressed() {
  if (mouseX >= (width / 2) - 60 && mouseX <= (width / 2) - 40 && mouseY >= 15 && mouseY <= 50) {
    specPlaying = !specPlaying;
  }

  if (mouseX >= (width / 2) - 10 && mouseX <= (width / 2) + 10 && mouseY >= 15 && mouseY <= 50) {
    ampPlaying = !ampPlaying;
  }

  if (mouseX >= (width / 2) + 40 && mouseX <= (width / 2) + 60 && mouseY >= 15 && mouseY <= 50) {
    wavPlaying = !wavPlaying;
  }


}

//visualizing frequency spectrum


function specButton() {
  ellipseMode(CENTER);
  ellipse((width / 2) - 50, 30, 30, 30);
  line((width / 2) - 60, 30, (width / 2) - 40, 30);
  line((width / 2) - 50, 20, (width / 2) - 50, 40);

}

function specViz() {
  var spectrum = fft.analyze();

  push();
  beginShape();
  for (i = 0; i < spectrum.length; i++) {
    var size = spectrum[i] / 15;
    fill(random(0, 255), random(0, 255), random(0, 255));
    noStroke();
    ellipse(i * 2, map(spectrum[i], 0, 255, height, 0), size, size);
  }
  endShape();
  pop();
}

//visualizing wavelength or sound over time

function wavButton() {
  ellipseMode(CENTER);
  ellipse((width / 2) + 50, 30, 30, 30);
  line((width / 2) + 60, 30, (width / 2) + 40, 30);
}


function wavViz() {
  var wave = fft.waveform();
  var shape =

    push();
  beginShape();
  for (var i = 0; i < wave.length; i++) {
    var waveX = map(i, 0, wave.length, 0, width);
    var waveY = map(wave[i], -1, 1, 0, height);
    noStroke();
    //blendMode(LIGHTEST);
    fill(random(0, 255), random(0, 255), random(0, 255));
    var bSize = waveY / 70;
    ellipse(waveX - bSize, waveY - bSize, bSize, bSize);
  }
  endShape();
  pop();
}

//visualizing amplitude or volume

function ampButton() {
  rectMode(CENTER);
  rect(width / 2, 30, 30, 30);
  line(width / 2 - 10, 20, width / 2 + 10, 40);
}


function ampViz() {
  var level = amplitude.getLevel();
  var aSize = map(level, 0, 1, 0, 200);
  var versions = 20;
  push();
  stroke(random(0, 255), random(0, 255), random(0, 255));
  strokeWeight(1);
  for (var y = 0; y < versions; y++) {
    for (var x = 0; x < versions; x++) {
      rect(10 + x * 100, 10 + y * 100, aSize, aSize);
    }
  }
  pop();
}