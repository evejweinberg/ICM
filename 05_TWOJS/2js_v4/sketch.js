$(document).ready(function() {
  
var two = new Two().appendTo(document.body);
var el = $('#assets2 svg')[0];
var shape = two.interpret(el).center();
var keys = Object.keys(shape.children);
var child = shape.children[keys[0]];
shape.opacity= 20;

two.bind('update', function(frameCount) {
    if (keys.length > 0) {
        if (child.opacity > 0.999) {
            keys.shift();
            child = shape.children[keys[0]];
        }
        if (child) child.opacity += 0.1;
        
    }
    else if (shape.scale > 0) {
        shape.scale -= 0.01;
    }
    else {
        shape.opacity= 0;
        shape.scale = 1;
        keys = Object.keys(shape.children);
        child = shape.children[keys[0]];
    }
}).play();

});