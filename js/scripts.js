// backend logic
for (var number=1; number<=userinput; number++){
  if (number%3===0) {
    return Ping
  }
  else if (number%5===0) {
    return pong
  }
  else if (number%15===0) {
    return pingpong
  }
}










//frontend logic
$(document).ready (function(){
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
