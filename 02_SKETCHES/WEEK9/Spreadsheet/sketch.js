// A2Z F15
// Daniel Shiffman
// https://github.com/shiffman/A2Z-F15

// This sheet
// | ----------------|
// | label  | number |
// | ----------------|
// | apple  | 9      |
// | ----------------|
// | pear   | 4      |
// | ----------------|
// | orange | 3      |
// | ----------------|

// Turns into:

// [ { label: apple, number: 9 }, { label: pear, number: 4 }, { label: orange, number: 3 } ]

function setup() {
  var url = 'https://docs.google.com/spreadsheets/d/1RQO3y7s1nPlszHxPxd6m7UENhYb37QuMymcbQznqJro/pubhtml?gid=0&single=true';

  var settings = {
    key: url,            // The url of the published google sheet
    callback: gotData,   // A callback for when the data comes in
    simpleSheet: true    // This makes things simpler for just a single worksheet of rows
  }

  // Make the request
  Tabletop.init(settings);

  // The data comes back as an array of objects
  // Each object contains all the data for one row of the sheet
  // See comment above
  function gotData(data) {
    // Look at the data in the console 
    console.log(data);

    // Make an HTML list
    var gotobutton = createButton('watch');
    // var list = createElement('ol');
    // list.parent('data');
    for (var i = 0; i < data.length; i++) {
      var item = createElement('li', data[i].name + ': ' + data[i].link);
      gotobutton.mousePressed(gotoVideo);
      // item.parent(list);
    }
  }
}

function gotoVideo(){
  
}

