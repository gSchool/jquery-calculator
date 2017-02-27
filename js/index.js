$(document).ready(function(){
  var numOne = "";
  var numTwo = "";
  var operator = "";
  var total = 0;

  //get number from user
  $('.buttons').click(function(event){
    //click number NOT the button container or the operators
    if(!event.target.classList.contains("buttons") && !event.target.classList.contains("operator")){
        if(operator == ""){
          numOne += event.target.innerText;
          screenUpdate(numOne, "", "");
        } else {
          numTwo += event.target.innerText;
          screenUpdate(numOne, operator, numTwo);
        }
    //operators but not the equals or Clear buttons
    } else if(!event.target.classList.contains("buttons")
      && event.target.id !== 'clear'
      && event.target.id !== 'equals'
      && event.target.classList.contains("operator")){
        operator = event.target.innerText;
        screenUpdate(numOne, operator, "")
    //press the clear button
    } else if(event.target.id === 'clear'){
      numOne = "";
      numTwo = "";
      operator = "";
      screenUpdate("", "", "");
    //press teh equals button
    } else if(event.target.id === 'equals'){
      if(numOne === "" || operator === "" || numTwo === ""){
        screenUpdate("error","","");
      }else if (operator === "÷" && numTwo === "0"){
        screenUpdate("error", "", "");
      } else {
        switch(operator){
          case "+":
            total = (Number(numOne) + Number(numTwo));
            break;
          case "-":
            total = (Number(numOne) - Number(numTwo));
            break;
          case "÷":
            total = (Number(numOne) / Number(numTwo));
            break;
          case "x":
            total = (Number(numOne) * Number(numTwo));
            break;
          default:
        }
        numOne = total;
        numTwo = "";
        operator = "";
        screenUpdate(total, "", "");
      }
    }
  })


})

function screenUpdate(a, b, c){
  $('#screen').html(a + b + c);
}
