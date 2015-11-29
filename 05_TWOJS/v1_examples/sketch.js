$(document).ready(function() {
  
  var direction = 0.055;

  var elem = document.getElementById('draw-shapes').children[0];
  //'two' is a new 'two.js' function added to the end of 'elem'
  var two = new Two({
    width: 485,
    height: 300
  }).appendTo(elem);
  
  var path = two.makePath(2, 2,400, 30, 900, 3000, open);
  //RETURNS a Two.Path object
  path.stroke='red';
  path.linewidth = 15;
  console.log(two.frameCount)
  if (two.frameCount > 200){
    path.stroke='orange';
  }

  // two has convenience methods to create shapes.
  var orangecircle = two.makeCircle(-72, 0, 250);
  var circ2 = two.makeCircle(0, 0, 50);
  var rect = two.makeRectangle(73, 0, 400, 100);

  // The object returned has many stylable properties:
  orangecircle.fill = '#FF8000';
  orangecircle.stroke = 'orangered'; // Accepts all valid css color
  orangecircle.linewidth = 15;
  
  circ2.fill = '#000';
  circ2.stroke='red';

  rect.fill = 'rgb(0, 200, 255)';
  rect.opacity = 0.75;
  rect.stroke='yellow';

  // Groups can take an array of shapes and/or groups.
  var group = two.makeGroup(orangecircle, rect, circ2);
  
  

  // And have translation, rotation, scale like all shapes.
  group.translation.set(two.width / 2, two.height / 2);
  group.rotation = Math.PI;
  group.scale = .5;
  group.stroke='blue';
 


  two.bind('update', function(frameCount) {
  // This code is called everytime two.update() is called.
  // Effectively 60 times per second.
  console.log(direction)
  if (group.scale > .97) {
   direction=-.05;
    // group.scale = group.rotation = 0;//start over at 0
  } else if (group.scale < 0.5) {
   direction=.05;
    // group.scale = group.rotation = 0;//start over at 0
  }
  var t = (1 - group.scale) * direction;//.025//.05//
  group.scale += t;//scale up .025 = .05
}).play();  // Finally, start the animation loop

});