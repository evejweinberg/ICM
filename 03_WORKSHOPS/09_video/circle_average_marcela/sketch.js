var video;
var gridSize = 10;

function setup() {

  createCanvas(960, 720);
  video = createCapture(VIDEO);
  video.hide();
  noStroke();
  background(50);
}

function mousePressed() {
  var c = video.get(mouseX, mouseY);
  print(c);
}

function draw() {
  video.loadPixels();

  var w = video.width;
  var h = video.height;

  // this is this cool mouse effect

  gridSize = round(map(mouseX, 0, width, 1, 4)) * 10; //10 20 30 40


  for (var y = 0; y < h; y += gridSize) {
    for (var x = 0; x < w; x += gridSize) {


      //get avg in the grid Size
      var sumR = 0;
      var sumG = 0;
      var sumB = 0;
      var count = 0;

      // small y and small x just to get the average color values from each ellipsis 

      for (var sY = 0; sY < gridSize; sY++) {
        for (var sX = 0; sX < gridSize; sX++) {

          //index of that one long line that is later formed as rows and columns
          var index = w * (y + sY) + (x + sX);
          
          sumR += video.pixels[index * 4]; // index * 4 is R value 
          sumG += video.pixels[index * 4 + 1];
          // sumG = sumG + video.pixels[index * 4 + 1];
          sumB += video.pixels[index * 4 + 2];
          count++;
        }
      }


      var avrR = sumR / count;
      var avrG = sumG / count;
      var avrB = sumB / count;

      //mapping the video size to the bigger canvas

      var mappedX = map(x, 0, w, 0, width) + random(-5, 5); //ellipse pos
      var mappedY = map(y, 0, h, 0, height) + random(-5, 5);
      var mappedW = map(gridSize, 0, w, 0, width);   // ellipse width
      var mappedH = map(gridSize, 0, h, 0, height);  // ellipse height

      fill(avrR, avrG, avrB);
      //ellipse(x + gridSize / 2, y + gridSize / 2, gridSize, gridSize);
      ellipse(mappedX + mappedW / 2, mappedY + mappedH / 2, mappedW, mappedH);

      //CMY 
      //   if (x < w*1/3){
      //     video.pixels[index * 4 + 0] = 0;
      //   }
      //   else if (x >= w*1/3 && x < w*2/3){
      //     video.pixels[index * 4 + 1] = 0;
      //   }
      //   else {
      //     video.pixels[index * 4 + 2] = 0;
      // }
    }
  }
  video.updatePixels();

}