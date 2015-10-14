var max;

function setup() {
  createCanvas(800, 800);
  background(50);
  fill(255);
  
  
  max = width; // also height becasue both values are the same
  
  
  var howManyTimes = 10;
  var interval = max/howManyTimes;
  
  for (var y = 0; y < howManyTimes; y++) {
    for (var x = 0; x < howManyTimes; x++) {
      
      var string = x + "," + y;
      text(string, 20 + x*interval, 30 + y*interval);
    }
  }
}

function draw() {

}