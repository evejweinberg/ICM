$(document).ready(function(){

  $.ajax({
    url: "lines.txt", // path to file
    dataType: 'text', // type of file (text, json, xml, etc)
    success: function(data) { // callback for successful completion
      $("#sentences").html(data);
    },
    error: function() { // callback if there's an error
      alert("error");
    }
  });     

});
$(document).ready(function(){
  $.ajax({
    url: "http://api.openweathermap.org/data/2.5/weather?id=5128581&units=imperial",
    dataType: 'json',
    success: function(data) {
      alert("Temperature is: " + data.main.temp );
    },
    error: function() {
      alert("error");
    }
  });        
});