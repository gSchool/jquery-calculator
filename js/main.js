$(function(){

  var opChosen = null;
  var storedValue = null;
  $("#screen").text('0');

  $('.buttons').on('click', function(event){
    var clicked = event.toElement;
    var currentValue = $('#screen').text();

    if($(clicked).hasClass('operator')){
      var operator = $(clicked).text();

      if (operator === '=' && storedValue ){
        $('#screen').text(performOp(storedValue, currentValue, opChosen));
        clearState();
      }else if (operator === 'C') {
        clearScreen();
        clearState();
      }else{
        if(opChosen && storedValue){
          $('#screen').text(performOp(storedValue, currentValue, opChosen));
          clearState();
        }
        opChosen = operator;
      }
    }else if(clicked.tagName === "SPAN"){
      if(opChosen && !storedValue){
        storedValue = currentValue;
        currentValue = ""
      }
      number = $(clicked).text();
      if(currentValue === '0' && number === '0') return;
      if(currentValue === '0') currentValue = '';
      $("#screen").text(currentValue += number);
    }

    function clearScreen(){
      $('#screen').text("0");
    }

    function performOp(num1, num2, op){
      if(op === '+') return Number(num1) + Number(num2);
      if(op === '-') return Number(num1) - Number(num2);
      if(op === "\u00f7") return Number(num1) / Number(num2);
      if(op === 'x') return Number(num1) * Number(num2);
    }

    function clearState(){
      opChosen = null;
      storedValue = null;
    }



  });


});
