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
  
}
$(document).ready(function(){
getIt()
frameIt()
// call functions here

});
