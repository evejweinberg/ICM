$(document).ready(function() {
  
var el = document.getElementById("main"),
    two = new Two({ 
        fullscreen: true
    });
 
two.appendTo(el);


new Two.Polygon();

});