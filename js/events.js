//define functions here


//getIt function
function getIt() {
  $('p').click(function() {
    alert "Hey!";
  }
)}

//frameIt function

function frameIt() {
  
  $('img').load(function() {
    addClass(".tasty")
    
  })
  return
}


$(document).ready(function(){
  
  getIt();
  frameIt();
  
})

