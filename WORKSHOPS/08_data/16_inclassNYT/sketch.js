// http://developer.nytimes.com
var newsItems = [];
var nextBatch;
var previousBatch;
var batch = 1;  //the only send you 10 at a time
var queryField;
var printPageSlider;
var printPageField;

function setup() {
  createCanvas(800, 400);
  stroke(0)
  fill(127);

  previousBatch = createButton("Previous Batch");
  previousBatch.mousePressed(previousBatchFunction);
  nextBatch = createButton("Next Batch");
  nextBatch.mousePressed(nextBatchFunction);
  queryField = createInput("obama");
  queryField.changed(askForArticles);
  printPageSlider = createSlider(1,50,50);
  printPageField = createInput(50);
  askForArticles();
}

function askForArticles() {
  //nice to have this as a function because it is called from several places.
  //get rid of existing articles before getting more
  for (var i = 0; i < newsItems.length; i++) {
    newsItems[i].remove();
  }
  //reset print page filter
   printPageField.value( 50);
   printPageSlider.value(50 );
  //requested a key here  http://developer.nytimes.com/
  //tested queries here  http://developer.nytimes.com/io-docs
  var url = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + queryField.value() +  "&api-key=686c52b27721b60706a1cd86dc63e395:13:22989233&page=" + batch;
  loadJSON(url, createNewItemObjects);
}


function createNewItemObjects(data) {
  // console.log(data)
  //They send you an array of JSON.  For each item make a new object
  var docs = data.response.docs;
  for (var i = 0; i < docs.length; i++) {
    newsItems[i] = new NewsItem(random(width), i * 50 + 50, docs[i]);
  }
}

function draw() {
  background(255);
  printPageField.value( printPageSlider.value());  //update the field that shows the slider value
  for (var i = 0; i < newsItems.length; i++) {
    if (newsItems[i].getPrintPage() <= printPageField.value()){  //only move the ones that were closer to front page
      //the usual
      newsItems[i].move();
      newsItems[i].check();
      newsItems[i].show();
    }
  }
}

function nextBatchFunction() {
  //they send you 10 at a time so you can ask for more
  for (var i = 0; i < newsItems.length; i++) {
    newsItems[i].remove();  //get rid of old ones.
  }
  newsItems = [];
  batch++;
  askForArticles()
}

function previousBatchFunction() {
   //they send you 10 at a time so you can ask for more
  batch--;
  if (batch < 0) batch = 0;
  askForArticles()
}

//This is a constructor function that will be just like the bouncing ball with a few additions.
function NewsItem(x, y, data) {
  this.xpos = random(width);
  this.ypos = y;
  this.xdir = 1;
  this.ydir = 0;
  this.data = data;
  this.link = createA(data.web_url, data.print_page + ":" + data.snippet, '_top');
  this.link.style("width", "10000px");

  this.move = function() {
    this.xpos = this.xpos + this.xdir;
    this.ypos = this.ypos + this.ydir;
  }

  //pull out the page number it was printed on in the paper
  this.getPrintPage = function(){
    if (data.print_page == null) return 50;
    else return int(data.print_page);
  }

  this.check = function() {
    if (this.xpos < 0 || this.xpos > width) {
      this.xdir = -this.xdir;
    }
    if (this.ypos < 0 || this.ypos > height) {
      this.ydir = -this.ydir;
    }
  }
  this.remove = function() {
    this.link.remove();
  }

  this.show = function() {
    this.link.position(this.xpos, this.ypos);
  }

}