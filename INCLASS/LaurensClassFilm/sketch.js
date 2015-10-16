var data;

function preload() {
  data = loadJSON("films.json");
}

function setup() {
  createCanvas(600, 400);
  print(data);
  var director = data[0].director; //the first object's director
  // text(director, 100,100);
  // text(data[0].year,100,300);

  for (var i = 0; i < data.length; i++) {
    text(data[i].director, 100 * i, 200);
    text(data[i].title, 100 * i, 300);
    text(data[i].year, 100 * i, 400);
    createP('title'+ data[i].title+ 'rating' + data[i].rating);
    
 }
}

function draw() {
  // console.log(data);
  // background(120, 180, 200);


  //
  // You can access JSON values by using a '.' followed by the key
  //
  // data.person1.name = "Morgan"
  // data.person2.name = "Joss"
  //


}