var globalcounter = 0;
var s;


function setup() {
  createCanvas(1000, 1000);
  s = new Square1(width / 2, height / 2, 100, 100, 300, 300);
  s2 = new Square2(width / 2, height / 2, 5000, 5000, 300, 300);
}

function draw() {
   print("GL is" + globalcounter);

globalcounter++;
  background(0);
  s.display();
  s.update();
    s2.display();
  s2.update();



  if (globalcounter < 119) {
    s.th = 500;
    s.tw = 500;
     s2.th = 200;
    s2.tw = 200;
  }

  if (globalcounter > 120 && globalcounter < 220) {
    print("hi")
   s.revolve = s.revolve+.03;
      s2.revolve =s2.revolve+ .01;
    s.th = 300;
    s.tw = 300;
      s2.th = 400;
    s2.tw = 400;
  }
  
  if (globalcounter > 221 && globalcounter < 400) {
    print("hi")
   s.revolve = s.revolve-.01;
      s2.revolve =s2.revolve- .005;
    s.th = 900;
    s.tw = 900;
      s2.th = 100;
    s2.tw = 100;
  }

}