// var colorA = color(248, 73, 41);//pink
// var colorB = color(69, 97, 220);//blue
// var colorC = color(59, 50, 89); //drk blue
// var colorD = color(251, 151, 162);//tan?
// var colorE = color(251, 248, 234);//lightB
// var colorF = color(240, 206, 181); //light
// var randomArray = [
//   '248, 73, 41','69, 97, 220', '59, 50, 89'
// ];
var colors = ['red', 'green', 'blue', 'orange', 'yellow'];



function Square() { //create a new function
	this.life = 100; //add 'this.' before the variable so you can use it outside of the function
	this.x = random(width); //display on a random
	this.y = random(height);
	this.size = random(20,200);
	
	this.display = function() {


		fill(255, map(this.life, 100, 0, 255, 0));
		rect(this.x, this.y, 30, 30);
		push();
		scale(this.size, this.size);
		triangle(100, 100, 300, 100, 200, 300);
		pop();
		
		fill(255);
		text(this.life, this.x, this.y);
		this.life --;
	}
}

var squares = [];

function setup() {
	createCanvas(500, 500);
	// for (var i = 0; i < 30; i++){
	// 	var s = new Square();
	// 	squares.push(s);
	// }
}

function draw() {
	if (frameCount % 30 == 0) {
		var s = new Square();
		squares.push(s);
	}
	
	background(0);
	//for (var i = 0; i < squares.length; i++) {
	for (var i = squares.length-1; i >= 0; i--) {
		var s = squares[i];
		s.display();
		if (s.life < 0){
			squares.splice(i, 1);
		}
	}
}