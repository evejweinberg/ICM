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

//-----F-------
function LetterF(xPos, yPos) {
  push();
  translate(xPos, yPos);

  noFill();
  strokeWeight(letterstroke);
  stroke(palettebluepink[1]);

  line(0, 0, 0, letterheight);
  stroke(palettebluepink[0]);
  line(0, 0, letterwidth, 0); //top bar
  stroke(palettebluepink[3]);
  line(0, letterxheight, letterwidth, letterxheight); //bottombar
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
  stroke(palettebluepink[5]);
  rect(0, 0, letterwidth, letterheight, letterrounding, letterrounding, letterrounding, letterrounding);
  strokeWeight(letterstrokeB);
  stroke(240, 90);
  angleMode(DEGREES);
  arc(letterwidth / 2, letterheight / 3, letterwidth / 1.7, letterwidth / 1.7, 180, 360); //O
  pop();
}

//------N-----
function LetterN(xPos, yPos) {
  push();
  translate(xPos, yPos);

  noFill();
  strokeWeight(letterstroke);
  stroke(palettebluepink[5]);
  line(0, 0, 0, letterheight);
  stroke(palettebluepink[0]);
  line(0, 0, letterwidth, letterheight);
  stroke(palettebluepink[2]);
  line(letterwidth, 0, letterwidth, letterheight);
  strokeWeight(letterstrokeB);
  stroke(240, 90);
  line(letterwidth / 5, 0 + letterheight / 3, letterwidth / 5, letterheight); //N
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



//-----H-------
function LetterH(xPos, yPos) {
  push();
  translate(xPos, yPos);

  noFill();
  strokeWeight(letterstroke);
  stroke(palettebluepink[5]);
  line(0, 0, 0, letterheight); //left
  stroke(palettebluepink[6]);
  line(0, letterxheight, letterwidth, letterxheight); //top bar
  line(letterwidth, 0, letterwidth, letterheight); //right
  strokeWeight(letterstrokeB);
  stroke(240, 90);
  // line(letterwidth / 5, 0 + letterheight / 3, letterwidth / 5, letterheight * .8); //N
  pop();
}

//-----P-------
function LetterP(xPos, yPos) {
  push();
  translate(xPos, yPos);
  noFill();
  strokeWeight(letterstroke);
  stroke(palettebluepink[2]);
  line(0, 0, 0, letterheight); //left
  stroke(palettebluepink[0]);
  rect(0, 0, letterwidth, letterxheight, 0, letterrounding, letterrounding, 0);
  // line(0, letterxheight, letterwidth, letterxheight); //top bar
  // line(letterwidth, 0, letterwidth, letterheight); //right
  // strokeWeight(letterstrokeB);
  // stroke(240, 90);
  // line(letterwidth / 5, 0 + letterheight / 3, letterwidth / 5, letterheight * .8); //N
  pop();
}

//-----R-------
function LetterR(xPos, yPos) {
  push();
  translate(xPos, yPos);
  noFill();
  strokeWeight(letterstroke);
  stroke(palettebluepink[6]);
  line(0, 0, 0, letterheight); //left
  stroke(palettebluepink[7]);
  rect(0, 0, letterwidth, letterxheight, 0, letterrounding, letterrounding, 0); //rounded
  stroke(palettebluepink[0]);
  line(letterwidth * .7, letterxheight, letterwidth, letterheight);
  // line(0, letterxheight, letterwidth, letterxheight); //top bar
  // line(letterwidth, 0, letterwidth, letterheight); //right
  // strokeWeight(letterstrokeB);
  // stroke(240, 90);
  // line(letterwidth / 5, 0 + letterheight / 3, letterwidth / 5, letterheight * .8); //N
  pop();
}

//-----T-------
function LetterT(xPos, yPos) {
  push();
  translate(xPos, yPos);

  noFill();
  strokeWeight(letterstroke);
  stroke(palettebluepink[6]);
  line(0, 0, letterwidth, 0); //top
  stroke(palettebluepink[6]);
  // line(0, letterheight, letterwidth, letterheight); //bottom
  stroke(palettebluepink[3]);
  line(letterwidth / 2, 0, letterwidth / 2, letterheight); //long
  stroke(palettebluepink[2]);
  // line(0, letterxheight, letterwidth, letterxheight); //center
  // strokeWeight(letterstrokeB);
  // stroke(240, 90);
  // line(letterwidth / 5, 0 + letterheight / 3, letterwidth / 5, letterheight * .8); //N
  pop();
}

//------W-----
function LetterW(xPos, yPos, linecolor) {
  push();
  translate(xPos, yPos);

  noFill();
  strokeWeight(letterstroke);
  stroke(palettebluepink[0]);
  line(0, 0, 0, letterheight); //left
  stroke(palettebluepink[2]);
  line(0, letterheight, letterwidth * .6, letterxheight); //across bottom left
  stroke(palettebluepink[5]);
  line(letterwidth, 0, letterwidth, letterheight); //right
  stroke(palettebluepink[3]);
  line(letterwidth, letterheight, letterwidth * .4, letterxheight); //across bottom left
  // strokeWeight(letterstrokeB);
  // stroke(240, 90);
  // line(letterwidth / 5, 0 + letterheight / 3, letterwidth / 5, letterheight); //N
  pop();
}