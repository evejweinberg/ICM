var letterwidth = 160;
var letterheight = 240;
var letterxheight = 130;
var letterrounding = 80;
var letterstroke = 7;
var letterstrokeB = letterstroke - 3;
var palettebluepink;
// var globalcounter=0;

function setup() {

  createCanvas(windowWidth, windowHeight);

  alphabet = [0, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

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

function draw() {

  background(255);


  LetterA(0, 0);
  LetterB(letterwidth, 0);
  LetterC(letterwidth * 2, 0);
  LetterD(letterwidth * 3, 0);
  LetterE(letterwidth * 4, 0);
  LetterF(letterwidth * 5, 0);
  LetterG(letterwidth * 6, 0);
  LetterH(letterwidth * 7, 0);
  LetterI(letterwidth * 8, 0);
  LetterJ(letterwidth * 9, 0);
 LetterK(letterwidth * 10, 0);
  LetterL(letterwidth * 11, 0);
  LetterM(letterwidth * 12, 0);
  LetterN(0, 250);
  LetterO(letterwidth, 250);
  LetterP(letterwidth * 2, 250);
  LetterQ(letterwidth * 3, 250);
  LetterR(letterwidth * 4, 250);
  LetterS(letterwidth * 5, 250);
  LetterT(letterwidth * 6, 250);
  LetterU(letterwidth * 7, 250);
  LetterV(letterwidth * 8, 250);
  LetterW(letterwidth * 9, 250);
 LetterX(letterwidth * 10, 250);
  LetterY(letterwidth * 11, 250);
   LetterZ(letterwidth * 12, 250);
  

  noLoop();
}