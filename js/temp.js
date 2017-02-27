//get number from user
$('.buttons').click(function(event){
  //not button container or the operators
  if(!event.target.classList.contains("buttons") && !event.target.classList.contains("operator")){
      if(operator == ""){
        numOne += event.target.innerText;
      } else {
        numTwo += event.target.innerText;
      }
  //operators but not the equals or Clear buttons
  } else if(!event.target.classList.contains("buttons")
    && event.target.id !== 'clear'
    && event.target.id !== 'equals'
    && event.target.classList.contains("operator")){
      operator = event.target.innerText;
      //console.log(event.target.innerText);
    }
}
