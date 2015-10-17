function colors(){
  palettebluepink = [
    color(248, 73, 41), //red
    color(69, 97, 220), //blue
    color(59, 50, 89), //drk blue
    color(251, 151, 162), //pink
    color(201, 208, 234), //light blue
    color(240, 206, 181), //tan
    color(81, 216, 236),
    color(61, 77, 191) //drk blue
  ]
}

//------A-----------
function LetterA(xPos, yPos) {
  this.xPos = xPos;
  this.yPos = yPos;
  push();
  translate(this.xPos, this.yPos);
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

//-----B-------
function LetterB(xPos, yPos) {
  this.xPos = xPos;
  this.yPos = yPos;
  push();
  translate(this.xPos, this.yPos);
  noFill();
  strokeWeight(letterstroke);
  stroke(palettebluepink[2]);
  line(0, 0, 0, letterheight); //left
  stroke(palettebluepink[0]);
  rect(0, 0, letterwidth, letterxheight, 0, letterrounding, letterrounding, 0); //top round
  stroke(palettebluepink[4]);
  rect(0, letterxheight, letterwidth, letterxheight, 0, letterrounding, letterrounding, 0); //bottom round
  pop();
}
//-----C---------
function LetterC(xPos, yPos) { //define arguments and then use them inside the function to be updated in draw
  this.xPos = xPos;
  this.yPos = yPos;
  push();
  translate(this.xPos, this.yPos);
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

//---------D--------
function LetterD(xPos, yPos) {
  this.xPos = xPos;
  this.yPos = yPos;
  push();
  translate(this.xPos, this.yPos);
  noFill();
  strokeWeight(letterstroke);
  stroke(palettebluepink[5]);
  rect(0, 0, letterwidth, letterheight, 0, letterrounding, letterrounding, 0);
  pop();
}


//-----E-------
function LetterE(xPos, yPos) {
  this.xPos = xPos;
  this.yPos = yPos;
  push();
  translate(this.xPos, this.yPos);

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
  this.xPos = xPos;
  this.yPos = yPos;
  push();
  translate(this.xPos, this.yPos);

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

//-----G---------
function LetterG(xPos, yPos) {
  this.xPos = xPos;
  this.yPos = yPos;
  push();
  translate(this.xPos, this.yPos);

  noFill();
  strokeWeight(letterstroke);
  stroke(palettebluepink[1]);
  angleMode(DEGREES);
  arc(letterwidth / 2, letterheight / 2.5, letterwidth, letterheight * .8, 180, 350);
  stroke(palettebluepink[2]);
  arc(letterwidth / 2, letterheight - letterheight / 2.5, letterwidth, letterheight * .8, 360, 180);
  stroke(palettebluepink[7]);
  line(letterwidth / 2, letterxheight, letterwidth, letterxheight); //cross line
  stroke(palettebluepink[4]);
  line(0,letterheight * .45, 0, letterheight * .55); //left straight line
  pop();
}

//-----H-------
function LetterH(xPos, yPos) {
  this.xPos = xPos;
  this.yPos = yPos;
  push();
  translate(this.xPos, this.yPos);

  noFill();
  strokeWeight(letterstroke);
  stroke(palettebluepink[5]);
  line(0, 0, 0, letterheight); //left
  stroke(palettebluepink[6]);
  line(0, letterxheight, letterwidth, letterxheight); //top bar
  stroke(palettebluepink[1]);
  line(letterwidth, 0, letterwidth, letterheight); //right
  strokeWeight(letterstrokeB);
  stroke(240, 90);
  // line(letterwidth / 5, 0 + letterheight / 3, letterwidth / 5, letterheight * .8); //N
  pop();
}

//-----I-------
function LetterI(xPos, yPos) {
  this.xPos = xPos;
  this.yPos = yPos;
  push();
  translate(this.xPos, this.yPos);

  noFill();
  strokeWeight(letterstroke);
  stroke(palettebluepink[6]);
  line(0, 0, letterwidth, 0); //top
  line(0, letterheight, letterwidth, letterheight); //bottom
  stroke(palettebluepink[3]);
  line(letterwidth / 2, 0, letterwidth / 2, letterheight); //long
  stroke(palettebluepink[2]);
  // line(0, letterxheight, letterwidth, letterxheight); //center
  // strokeWeight(letterstrokeB);
  // stroke(240, 90);
  // line(letterwidth / 5, 0 + letterheight / 3, letterwidth / 5, letterheight * .8); //N
  pop();
}

//-----J-------
function LetterJ(xPos, yPos) {
  this.xPos = xPos;
  this.yPos = yPos;
  push();
  translate(this.xPos, this.yPos);

  noFill();
  strokeWeight(letterstroke);
  stroke(palettebluepink[6]);
  line(0, 0, letterwidth, 0); //top
  stroke(palettebluepink[4]);
  // arc(0, letterxheight, letterwidth, letterxheight, PI + (QUARTER_PI / 3), OPEN);
  angleMode(DEGREES);
 arc(letterwidth / 2, letterheight - letterheight / 2.5, letterwidth, letterheight * .8, 360, 180);
  stroke(palettebluepink[3]);
  line(letterwidth, 0, letterwidth, letterxheight); //long
  stroke(palettebluepink[2]);
  pop();
}

//-----K-------
function LetterK(xPos, yPos) {
  this.xPos = xPos;
  this.yPos = yPos;
  push();
  translate(this.xPos, this.yPos);
  noFill();
  strokeWeight(letterstroke);
  stroke(palettebluepink[6]);
  line(0, 0, 0, letterheight); //left
  stroke(palettebluepink[7]);
  line(0, letterxheight, letterwidth, 0); //towards top
  stroke(palettebluepink[0]);
  line(letterwidth * .5, letterheight*.4, letterwidth, letterheight); //bottom
  pop();
}

//-----L-------
function LetterL(xPos, yPos) {
  this.xPos = xPos;
  this.yPos = yPos;
  push();
  translate(this.xPos, this.yPos);

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

//------M-----
function LetterM(xPos, yPos) {
  this.xPos = xPos;
  this.yPos = yPos;
  push();
  translate(this.xPos, this.yPos);

  noFill();
  strokeWeight(letterstroke);
  stroke(palettebluepink[0]);
  line(0, 0, 0, letterheight); //left
  stroke(palettebluepink[2]);
  line(0, 0, letterwidth * .6, letterxheight); //across bottom left
  stroke(palettebluepink[5]);
  line(letterwidth, 0, letterwidth, letterheight); //right
  stroke(palettebluepink[3]);
  line(letterwidth, 0, letterwidth * .4, letterxheight); //across bottom left
  // strokeWeight(letterstrokeB);
  // stroke(240, 90);
  // line(letterwidth / 5, 0 + letterheight / 3, letterwidth / 5, letterheight); //N
  pop();
}

//------N-----
function LetterN(xPos, yPos) {
  this.xPos = xPos;
  this.yPos = yPos;
  push();
  translate(this.xPos, this.yPos);

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


//------O------
function LetterO(xPos, yPos) {
  this.xPos = xPos;
  this.yPos = yPos;
  push();
  translate(this.xPos, this.yPos);
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


//-----P-------
function LetterP(xPos, yPos) {
  this.xPos = xPos;
  this.yPos = yPos;
  push();
  translate(this.xPos, this.yPos);
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


//------Q------
function LetterQ(xPos, yPos) {
  this.xPos = xPos;
  this.yPos = yPos;
  push();
  translate(this.xPos, this.yPos);
  rectMode(CORNER);
  ellipseMode(CENTER);
  noFill();
  strokeWeight(letterstroke);
  stroke(palettebluepink[5]);
  rect(0, 0, letterwidth, letterheight, letterrounding, letterrounding, letterrounding, letterrounding);
  stroke(palettebluepink[0]);
  line(letterwidth / 2, letterxheight, letterwidth, letterheight);
  strokeWeight(letterstrokeB);
  stroke(240, 90);
  angleMode(DEGREES);
  arc(letterwidth / 2, letterheight / 3, letterwidth / 1.7, letterwidth / 1.7, 180, 360); //O
  pop();
}

//-----R-------
function LetterR(xPos, yPos) {
  this.xPos = xPos;
  this.yPos = yPos;
  push();
  translate(this.xPos, this.yPos);
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


//-----S-------
function LetterS(xPos, yPos) {
  this.xPos = xPos;
  this.yPos = yPos;
  push();
  translate(this.xPos, this.yPos);
  noFill();
  strokeWeight(letterstroke);
  stroke(palettebluepink[2]);
  bezier(letterwidth, 0, 0, 0, letterwidth, letterheight, 0, letterheight); //temporary
  pop();
}

//-----T-------
function LetterT(xPos, yPos) {
  this.xPos = xPos;
  this.yPos = yPos;
  push();
  translate(this.xPos, this.yPos);

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

//------U-----------
function LetterU(xPos, yPos) {
  this.xPos = xPos;
  this.yPos = yPos;
  push();
  translate(this.xPos, this.yPos);
  noFill();

  strokeWeight(letterstroke);
  stroke(palettebluepink[6]);
  line(0, 0, 0, letterxheight);
  stroke(palettebluepink[1]);
  line(letterwidth, 0, letterwidth, letterxheight);
  stroke(palettebluepink[0]);
  angleMode(DEGREES);
  stroke(palettebluepink[4]);
  arc(letterwidth / 2, letterheight - letterheight / 2.5, letterwidth, letterheight * .8, 360, 180);

  pop();
}

//------V-----------
function LetterV(xPos, yPos) {
  this.xPos = xPos;
  this.yPos = yPos;
  push();
  translate(this.xPos, this.yPos);
  noFill();

  strokeWeight(letterstroke);
  stroke(palettebluepink[6]);
  line(letterwidth / 2, letterheight, 0, 0);
  stroke(palettebluepink[1]);
  line(letterwidth / 2, letterheight, letterwidth, 0);

  pop();
}

//------W-----
function LetterW(xPos, yPos) {
  this.xPos = xPos;
  this.yPos = yPos;
  push();
  translate(this.xPos, this.yPos);

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

//------X-----
function LetterX(xPos, yPos) {
  this.xPos = xPos;
  this.yPos = yPos;
  push();
  translate(this.xPos, this.yPos);

  noFill();
  strokeWeight(letterstroke);
  stroke(palettebluepink[5]);
  line(letterwidth, 0, 0, letterheight);
  stroke(palettebluepink[0]);
  line(0, 0, letterwidth, letterheight);
  stroke(palettebluepink[2]);
  strokeWeight(letterstrokeB);
  stroke(240, 90);
  line(letterwidth / 5, 0 + letterheight / 3, letterwidth / 5, letterheight); //N
  pop();
}

//-----Y---------
function LetterY(xPos, yPos) {
  this.xPos = xPos;
  this.yPos = yPos;
  push();
  translate(this.xPos, this.yPos);

  noFill();
  strokeWeight(letterstroke);
  stroke(palettebluepink[0]);
   angleMode(DEGREES);
  
  arc(letterwidth / 2, 0, letterwidth, letterheight * .8, 360,180);
  stroke(palettebluepink[1]);
  line(letterwidth / 2, letterheight, letterwidth / 2,letterheight * .4); //left straight line
  pop();
}

//-----Z-------
function LetterZ(xPos, yPos) {
  this.xPos = xPos;
  this.yPos = yPos;
  push();
  translate(this.xPos, this.yPos);

  noFill();
  strokeWeight(letterstroke);
  stroke(palettebluepink[6]);
  line(0, 0, letterwidth, 0); //top
  stroke(palettebluepink[2]);
  line(0, letterheight, letterwidth, letterheight); //bottom
  stroke(palettebluepink[3]);
  line(letterwidth, 0,0,letterheight); //across


  pop();
}