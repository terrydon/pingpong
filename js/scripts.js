// backend logic

var func = function (stuff){

  var i = "ping";
  var o = "pong";
  var pp = "pingpong";
  var result = [];


  for(var number = 1; number <= stuff; number++){ //using for loop
      if(number % 15 === 0) { // using elseif statement
        result.push(pp);
      }else if(number % 5 === 0) {
      result.push(o);
    }else if(number % 3 === 0) {
        result.push(i);
      }else{
        result.push(number);
      }

  }
  return result;
 };


//frontend logic
/*$(document).ready(function() {
 $("form#submitform").submit(function(event){
   event.preventDefault();
   var user = $("#text-Input").val();

   var numbers = func(user);
   numbers.forEach(function (number) {
      $("#output").append('<li>' + number + '</li>');
   })



 });
});*/
$(document).ready(function () {
  $("form#submitform").submit(function (event) {
    event.preventDefault();

    var user = $("#text-Input").val();
    var numbers = func(user);

    numbers.forEach(function (number) {
       $("#output").append('<li>' + number + '</li>');
    })

  })
})
