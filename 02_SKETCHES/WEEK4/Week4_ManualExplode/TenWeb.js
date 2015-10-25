function TenWeb() {
  this.Extrarove = map(mouseX, 0, width, -90, 40);
  this.ExtraroveY = map(mouseY, 0, height, -70, 50);
  this.scootOver = 315;
  this.scootDown = 220;
  var rove1 = map(millis(), 0, 40, 0, PI / 3); //i'll figure this out later
  var rove2 = map(millis(), 0, 40, 0, PI / 4); //i'll figure this out later

  var Xadd =  this.scootOver+ this.Extrarove + cos(rove1) * 30;
  var Yadd = this.scootDown+this.ExtraroveY + sin(rove1) * 30;
  var Xadd2 = this.scootOver+this.Extrarove + cos(rove2) * 30;
  var Yadd2 = this.scootDown+this.ExtraroveY + sin(rove2) * 30;
  var Xadd3 = this.scootOver+this.Extrarove + cos(rove2) * 10;
  var Yadd3 = this.scootDown+this.ExtraroveY + sin(rove2) * 10;


  PointsZero = [
    createVector(550 + Xadd, 200 + Yadd),
    createVector(645 + Xadd, 190 + Yadd),
    createVector(745 + Xadd2, 270 + Yadd2),
    createVector(640 + Xadd2, 500 + Yadd2),
    createVector(590 + Xadd, 460 + Yadd2),
    createVector(520 + Xadd2, 300 + Yadd2),
  ]

  theseZeroEdges = [
    createVector(200, 0),
    createVector(910, 0),
    createVector(width, height),
    createVector(700, height),
    createVector(300, height),
    createVector(0, 500),
    createVector(0, 600),
  ]

  theseZeroInner = [
    createVector(600 + Xadd3, 305 + Yadd),
    createVector(630 + Xadd3, 260 + Yadd3),
    createVector(645 + Xadd3, 290 + Yadd3),
    createVector(625 + Xadd, 360 + Yadd)
  ]

  thesePts = [
    createVector(300 + Xadd3, 180 + Yadd3),
    createVector(400 + Xadd3, 140 + Yadd3),
    createVector(460 + Xadd2, 180 + Yadd2),
    createVector(460 + Xadd2, 500 + Yadd2),
    createVector(400 + Xadd3, 508 + Yadd2),
    createVector(397 + Xadd2, 183 + Yadd2),
    createVector(305 + Xadd3, 230 + Yadd3)
  ]

  theseEdges = [
    createVector(0, 10),
    createVector(210, 0),
    createVector(600, 0),
    createVector(900, height),
    createVector(300, height),
    createVector(0, height),
    createVector(0, 600)
  ]
  var numPoints = thesePts.length;
  var numZeroPoints = PointsZero.length; //8 values
  var theseZeroInnertotal = theseZeroInner.length;
  // fill(palettebluepink[3]);
  // beginShape();
  // thesePts[1];
  // thesePts[2];
  // thesePts[3];
  // thesePts[4];
  // thesePts[5];
  // thesePts[6];
  // endShape(CLOSE);

  for (var i = 0; i < numPoints; i++) {
    noStroke();
    fill(palettebluepink[i]);
    circleAtVector(thesePts[i], 10);
  }

  //draw 1
  for (var j = 0; j < numPoints; j++) {
    stroke(palettebluepink[j]);
    strokeWeight(letterstroke - 1);
    lineAtVector(theseEdges[j], thesePts[j]);
    strokeWeight(letterstroke + 3);
    lineAtVector(thesePts[j], thesePts[(j + 1) % numPoints]);

  }
  //draw 0
  for (var j = 0; j < numZeroPoints; j++) { //9
    stroke(palettebluepink[j % numZeroPoints]);
    strokeWeight(letterstroke - 1);
    lineAtVector(theseZeroEdges[(j) % numZeroPoints], PointsZero[(j) % numZeroPoints]);
    strokeWeight(letterstroke + 3);
    lineAtVector(PointsZero[(j) % numZeroPoints], PointsZero[(j + 1) % numZeroPoints]);
    fill(palettebluepink[j % numZeroPoints]);
    circleAtVector(PointsZero[j], 10);
  }
  //draw 0 inner circle
  for (var k = 0; k < theseZeroInnertotal; k++) { //9
    stroke(palettebluepink[k]);
    strokeWeight(letterstroke + 3);
    lineAtVector(theseZeroInner[k], theseZeroInner[(k + 1) % theseZeroInnertotal]);
    fill(palettebluepink[k]);
    circleAtVector(theseZeroInner[k], 10);
  }




  function circleAtVector(vector, diameter) {
    ellipse(vector.x, vector.y, diameter, diameter)
  }


  function lineAtVector(vectorStart, vectorEnd) {
    line(vectorStart.x, vectorStart.y, vectorEnd.x, vectorEnd.y)
  }




}