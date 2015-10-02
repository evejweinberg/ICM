var letterwidth;
var letterheight;
var letterxheight;
var lettergap;
var letterrounding;
var letterstroke;
var lettercount;
var typecolor;
var letterstrokeB;
var letterTotal = 25;
var letterpos = [];


//-----C---------
function LetterC(xPos, yPos) { //define arguments and then use them inside the function to be updated in draw
  push();
  translate(xPos, yPos);
  ellipseMode(CENTER);
  noFill();
  strokeWeight(letterstroke);
  angleMode(DEGREES);
  stroke(palettebluepink[6]);
  arc(letterwidth / 2, letterheight / 2.5, letterwidth, letterheight * .8, 180, 350);
  stroke(palettebluepink[0]);
  arc(letterwidth / 2, letterheight - letterheight / 2.5, letterwidth, letterheight * .8, 360, 180);
  stroke(palettebluepink[2]);
  line(0, letterheight * .4, 0, letterheight * .6); //left straight line
  strokeWeight(letterstrokeB);
  stroke(240, 90);
  angleMode(DEGREES);
  arc(letterwidth / 2, letterheight / 3, letterwidth / 1.7, letterwidth / 1.7, 180, 360); //G
  pop();
}


//------A-----------
function LetterA(xPos, yPos) {
  push();
  translate(xPos, yPos);
  noFill();

  strokeWeight(letterstroke);
  stroke(palettebluepink[1]);
  line(letterwidth / 2, 0, 0, letterheight);
  stroke(palettebluepink[6]);
  line(letterwidth / 2, 0, letterwidth, letterheight);
  stroke(palettebluepink[5]);
  line(letterwidth * .26, letterxheight, letterwidth * .66, letterxheight); //crossbar
  pop();
}



//------O------
function LetterO(xPos, yPos, linecolor) {
  push();
  translate(xPos, yPos);
  rectMode(CORNER);
  ellipseMode(CENTER);
  noFill();
  strokeWeight(letterstroke);
  stroke(linecolor);
  rect(0, 0, letterwidth, letterheight, letterrounding, letterrounding, letterrounding, letterrounding);
  strokeWeight(letterstrokeB);
  stroke(240, 90);
  angleMode(DEGREES);
  arc(letterwidth / 2, letterheight / 3, letterwidth / 1.7, letterwidth / 1.7, 180, 360); //O
  pop();
}

//------N-----
function LetterN(xPos, yPos, linecolor) {
  push();
  translate(xPos, yPos);

  noFill();
  strokeWeight(letterstroke);
  stroke(linecolor);
  line(0, 0, 0, letterheight);
  stroke(linecolor);
  line(0, 0, letterwidth, letterheight);
  stroke(linecolor);
  line(letterwidth, 0, letterwidth, letterheight);
  strokeWeight(letterstrokeB);
  stroke(240, 90);
  line(letterwidth / 5, 0 + letterheight / 3, letterwidth / 5, letterheight); //N
  pop();
}

//-----F-------
function LetterF(xPos, yPos) {
  push();
  translate(xPos, yPos);

  noFill();
  strokeWeight(letterstroke);
  stroke(palettebluepink[1]);
  print(palettebluepink[4]);
  line(0, 0, 0, letterheight);
  stroke(palettebluepink[0]);
  line(0, 0, letterwidth, 0); //top bar
  stroke(palettebluepink[3]);
  line(0, letterxheight, letterwidth, letterxheight); //bottombar
  pop();
}

//-----L-------
function LetterL(xPos, yPos) {
  push();
  translate(xPos, yPos);

  noFill();
  strokeWeight(letterstroke);
  stroke(palettebluepink[5]);
  line(0, 0, 0, letterheight);
  stroke(palettebluepink[6]);
  line(0, letterheight, letterwidth, letterheight); //top bar
  strokeWeight(letterstrokeB);
  stroke(240, 90);
  line(letterwidth / 5, 0 + letterheight / 3, letterwidth / 5, letterheight * .8); //N
  pop();
}

//-----E-------
function LetterE(xPos, yPos) {
  push();
  translate(xPos, yPos);

  noFill();
  strokeWeight(letterstroke);
  stroke(palettebluepink[5]);
  line(0, 0, 0, letterheight);
  stroke(palettebluepink[6]);
  line(0, letterheight, letterwidth, letterheight); //bottom
    stroke(palettebluepink[3]);
  line(0, 0, letterwidth, 0); //top
    stroke(palettebluepink[2]);
  line(0, letterxheight, letterwidth, letterxheight); //center
  strokeWeight(letterstrokeB);
  stroke(240, 90);
  line(letterwidth / 5, 0 + letterheight / 3, letterwidth / 5, letterheight * .8); //N
  pop();
}

//-----H-------
function LetterH(xPos, yPos) {
  push();
  translate(xPos, yPos);

  noFill();
  strokeWeight(letterstroke);
  stroke(palettebluepink[5]);
  line(0, 0, 0, letterheight);//left
  stroke(palettebluepink[6]);
  line(0, letterxheight, letterwidth, letterxheight); //top bar
  line(letterwidth, 0, letterwidth, letterheight);//right
  strokeWeight(letterstrokeB);
  stroke(240, 90);
  // line(letterwidth / 5, 0 + letterheight / 3, letterwidth / 5, letterheight * .8); //N
  pop();
}