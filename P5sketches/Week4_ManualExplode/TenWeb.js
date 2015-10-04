function TenWeb() {
  thesePts = [];
  this.pt1 = createVector(300, 200);
  this.pt2 = createVector(400, 150);
  this.pt3 = createVector(430, 180);
  this.pt4 = createVector(430, 500);
  this.pt5 = createVector(400, 508);
  this.pt6 = createVector(397, 183);
  this.pt7 = createVector(305, 210);
  this.pt1Edge = createVector(0, 10);
  this.pt2Edge = createVector(210, 0);
  this.pt3Edge = createVector(600, 0);
  this.pt4Edge = createVector(700, 0);
  this.pt5Edge = createVector(900, height);
  this.pt6Edge = createVector(0, height);
  this.pt7Edge = createVector(0, 600);
  this.diam = 7;
  this.mult = .1;
  this.mult += .1;


  this.pt1.x = (sin(this.mult)) * 10;
  strokeWeight(letterstroke);
  stroke(palettebluepink[1]);
  // for (var i = 1; i < 7; i++) {
  //     line(0, 10, this.pt["i"].x, this.pt["i"].y);
  //   line(200, 0, this.pt["i"].x, this.pt["i"].y);
  // }
  stroke(palettebluepink[0]);
  line(0, 10, this.pt1.x, this.pt1.y);
  fill(palettebluepink[0]);
  // ellipse(this.pt1Edge,this.diam,this.diam);
  stroke(palettebluepink[2]);
  line(210, 0, this.pt2.x, this.pt2.y);
  fill(palettebluepink[2]);
  // ellipse(this.pt2Edge,this.diam,this.diam);
  stroke(palettebluepink[3]);
  line(600, 0, this.pt3.x, this.pt3.y);
  stroke(palettebluepink[4]);
  line(700, 0, this.pt4.x, this.pt4.y);
  stroke(palettebluepink[5]);
  line(900, height, this.pt5.x, this.pt5.y);
  stroke(palettebluepink[6]);
  line(0, height, this.pt6.x, this.pt6.y);
  stroke(palettebluepink[1]);
  line(0, 600, this.pt7.x, this.pt7.y);
  noFill();
  beginShape();
  vertex(this.pt1.x, this.pt1.y);
  stroke(palettebluepink[2]);
  vertex(this.pt2.x, this.pt2.y);
  vertex(this.pt3.x, this.pt3.y);
  stroke(palettebluepink[4]);
  vertex(this.pt4.x, this.pt4.y);
  vertex(this.pt5.x, this.pt5.y);
  vertex(this.pt6.x, this.pt6.y);
  vertex(this.pt7.x, this.pt7.y);
  endShape(CLOSE);



}