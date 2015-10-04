var x = 0,
  y = 0,
  s = 0,
  c = 0,
  g = 0,
  f = 0,
  a = 0,
  b = 0,
  c = 0,
  d = 0,
  e = 0,
  h = 0,
  i = 0,
  j = 0,
  k = 0,
  l = 0,
  m = 0,
  n = 0,
  o = 0;

var easing = 0.05;
var easingg = 0.07;
var easingNew = 0.09;
var asingNew = 0.01;
var singNew = 0.03;
var ingNew = 0.08;
var test = 0.1;
var testt = 0.023;
var e;
var lineposX = 0;
var lineposY = 0;
var poY = 20;
var poX = 20;



function setup() {
  createCanvas(800, 800);

  e = random(50, 255);
}

function draw() {

  background(0);

  for (var ellipseposY = 20; ellipseposY <= width; ellipseposY += 50) {
    for (var ellipseposX = 20; ellipseposX <= width; ellipseposX += 50) {
      ellipseposX = ellipseposX + 0.5;
      ellipse(ellipseposX, ellipseposY, 10, 10)

    }
  }

  if (ellipseposX > width) {
    ellipseposX = 0;
  }

 
var targetX = mouseX;
  var dx = targetX - x;
  x += dx * easing;

  var targetY = mouseY;
  var dy = targetY - y;
  y += dy * easing;

  // fill(0,255, 100);
  // ellipse(x, y, 66, 66);


  // var ds = targetX - s;
  // s += ds * easingNew;
  // var dc = targetY - c;
  // c += dc * easingNew;
  // fill(255, 100);
  // ellipse(s, c, 26, 26);

  // var df = targetX - f;
  // f += df * easingNew;
  // var dg = targetY - g;
  // g += dg * asingNew;
  // fill(255, 150);
  // ellipse(f, g, 45, 45);

  // var da = targetX - a;
  // a += da * easingNew;
  // var db = targetY - b;
  // b += db * singNew;
  // fill(255, 100);
  // ellipse(a, b, 15, 15);


  // var loo = targetX - h;
  // h += loo * test;
  // var lo = targetY - i;
  // i += lo * singNew;
  // fill(200, 100);
  // ellipse(h, i, 22, 22);



  // var as = targetX - j;
  // j += as * testt / 1.5;
  // var ad = targetY - k;
  // k += ad * testt / 1.5;
  // fill(200, 100);
  // ellipse(j, k, 32, 32);



  // var xl = targetX - l;
  // l += xl * easingg;

  // var xr = targetY - m;
  // m += xr * easingg;
  // fill(200, 23, 100);
  // ellipse(l, m, 10, 10);


  var cir = map(millis(), 1, 380, 0, PI / 2);

  var circl = map(millis(), 0, 440, 0, PI / 3);

  var cic = map(millis(), 0, 440, 0, PI / 3 - HALF_PI);

  var ci = map(millis(), 0, 220, 0, PI / 5);

  var circle = map(millis(), 0, 360, 0, PI / 4);

  noStroke;
 
//   ellipse(cos(cir) * 100 + width / 3, sin(cir) * 100 + width / 2, 50, 50);

// ellipse(cos(cir) * 120 + width / 2, sin(cir) * 120 + width / 2, 20, 20);
//   fill(0,255, 67);
//   ellipse(cos(circl) * 340 + mouseX, sin(circl) * 340 + mouseY, 30, 30);

//   fill(0,255, 0);
//   ellipse(cos(ci) * 610 + width / 5, sin(ci) * 210 + width / 2, 40, 40);
  fill(255,0,0);
  ellipse(cos(circl) * 340 + width / 2, sin(circl) * 340 + width / 2, 30, 30);


  fill(255, 0,0);
  ellipse(cos(cic) * 210 + width / 2, sin(circl) * 210 + width / 2, 70, 70);





}