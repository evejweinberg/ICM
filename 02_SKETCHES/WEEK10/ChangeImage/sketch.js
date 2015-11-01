function setup() {
  createCanvas(500,500)
  
}

function draw() {
  
}

function changeImage() {
    var mysquare = document.getElementById('imgsq');
    if (mysquare.src.match("2")) {
        mysquare.src = "assets/sq1.png";
    } else {
        mysquare.src = "assets/sq2.jpg";
    }
}