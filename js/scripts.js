// backend logic
var i = "ping";
var o = "pong";
var pp = "pingpong";
var output;
var func = function stuff(){
  for(var number = 1; number <= output; number++){
        if(number % 15 === 0) {
        return pp;
      }else if(i % 5 === 0) {
      return o;
      }else if(i % 3 === 0) {
        return i;
      }else{
        return number;
      }
  }
 };

 // looping for










//frontend logic
$(document).ready(function(){
 $("#userInput").submit(function(event){
   event.preventDefault();
   $("#output").empty();
   var addTo = parseInt($("input#countTo").val());
   var output = countUp(countTo);

   output.forEach(function(item){
     $("#output").append('<li>' + item + '</li>');
   });

 });
});
