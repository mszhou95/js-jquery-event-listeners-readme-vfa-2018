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

//pressIt function

function pressIt() {
  
  $('#typing').keydown(function(key) {
    
    if(key.which == 71) {
      alert("g was pressed");
    }
  })
}

//submitIt function
function submitIt() {
  
  
}

$(document).ready(function(){
  
  getIt();
  frameIt();
  pressIt();
})

