//define functions here

function getIt() {
  $('p').on("click", function() {
    alert("Hey!");
    return;
  })
}

function frameIt() {
  $('img').on('load', function() {$('img').addClass('tasty')})
}

function pressIt() {
  $('form').on('keydown', function(key) {
    if(key.which == )
  })
}
$(document).ready(function(){
getIt()
frameIt()
// call functions here

});
