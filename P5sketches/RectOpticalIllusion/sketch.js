
function Square() { //create a new function
	this.life = 100; //add 'this.' before the variable so you can use it outside of the function
	this.x = width/2; //display on a random
	this.y = height/2;
	this.size = 20+frameCount; //need to scale this up
	
	this.display = function() {


		// fill(255, map(this.life, 100, 0, 255, 0));
		fill(255);
		rectMode(CENTER);
		rect(this.x, this.y, 30*this.life, 30*this.life);
		push();
		scale(this.size, this.size);
		
		pop();
		
		fill(255);
		text(this.life, this.x, this.y);
		this.life ++;
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