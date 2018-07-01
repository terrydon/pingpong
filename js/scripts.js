// backend logic
var countUp = function(countTo){
 var result = [];
 // for loop
 for(var i = 1; i <= countTo; i++){
     var index = result.indexOf(i);
     // using if else if statement

     if(i % 15 === 0) {
       result.splice(index, 0);
       result.push('pingpong');
     }else if(i % 5 === 0) {
       result.splice(index, 0);
       result.push('pong');
     }else if(i % 3 === 0) {
       result.splice(index, 0);
       result.push('ping');
     }else{
       result.push(i);
     }
 }

 return result;
};









//frontend logic
$(document).ready(function(){
 $("#userInput").submit(function(event){
   event.preventDefault();
   $("#output").empty();
   var countTo = parseInt($("input#countTo").val());
   var output = countUp(countTo);

   output.forEach(function(item){
     $("#output").append('<li>' + item + '</li>');
   });

 });
});
