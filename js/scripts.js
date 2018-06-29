// backend logic
for (var number=1; number<=userinput; number++){
  if (number%3===0) {
    console.log (Ping);
  }
  else if (number%5===0) {
    console.log (pong);
  }
  else if (number%15===0) {
    console.log (pingpong);
  }
}










//frontend logic
$(document).ready (function(){
  var userinput;
  $("#submitform").submit(function(event){
     event.preventDefault()
     var number = $("#text-Input").val()
    $("#results").append("<li>"+number+"</li>")
    $("#text-Input").val("")
  })

})
//$(document).ready(function () {
//
//})
