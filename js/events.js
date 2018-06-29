//define functions here


//getIt function
function getIt() {
  $('p').click(function() {
    alert("Hey!");
  }
)}

//frameIt function

function frameIt() {
  
  $('img').load(function() {
    addClass(".tasty");
    
  })
}

function pressIt() {
  
  $('#typing').keydown(function(key) {
    
    if(key.which == 71) {
      alert("g was pressed");
    }
  })
}

$(document).ready(function(){
  
  getIt();
  frameIt();
  pressIt();
})

