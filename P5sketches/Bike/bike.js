class bike{
  
  var wheel1start = 0; //center of back wheel
  var wheeldist = 120;
  var wheelsize = 50;
  var top = wheel1start-wheelsize;
  var barlength = wheel1start+wheeldist/2;
  var seatwidth = 10;
   var strokeweight = 10;

function display() {
  
  strokeWeight(strokeweight);

stroke(d);
  fill(c);
  ellipse(wheel1start,wheel1start,wheelsize,wheelsize);

  ellipse(wheeldist,0,wheelsize,wheelsize);
  line(wheel1start, wheel1start, barlength, wheel1start); //bottom
  line(wheel1start, wheel1start, wheel1start+wheeldist/3, top); //towards seat
  line(wheel1start+wheeldist/3, top, barlength+wheel1start+wheeldist/3, top); //top
  line(barlength, wheel1start, wheel1start+wheeldist/3-5, top-12); //pedal to seat
  line(barlength, wheel1start, barlength+wheel1start+wheeldist/3, top); //pedals to handles
  line(barlength+wheel1start+wheeldist/3-5, top-12, wheeldist, wheel1start); //front wheel to handles
  line(wheel1start+wheeldist/3-5, top-12, wheel1start+wheeldist/3-5+seatwidth, top-12);//seat
  line(barlength+wheel1start+wheeldist/3, top-12, barlength+wheel1start+wheeldist/3+seatwidth, top-12);//handles
}

}