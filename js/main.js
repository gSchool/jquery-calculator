$(function(){
  var numberKeys = $('span');

  var numberScreen = '';
  var operator = '';
  var operandOne = 0;
  var operandTwo = 0;
  var clearBetweenOperands = true;
  var result = 0;

  $(numberKeys).on('click', function(){

    if($(this).hasClass('operator')){

      if($(this).text() === 'x'){
        operandOne = parseInt(numberScreen);
        operator = 'multiply';

      } else if($(this)[0].textContent == '÷'){
        operandOne = parseInt(numberScreen);
        operator = 'divide';

      } else if($(this).text() === '-'){
        operandOne = parseInt(numberScreen);
        operator = 'subtract';

      } else if($(this).text() === '+'){
        operandOne = parseInt(numberScreen);
        operator = 'add';


      } else if ($(this).attr('id') == 'calc'){
        operandTwo = parseInt(numberScreen);

        //calculate and put it up on screen
        switch(operator){
          case 'add':
            result = operandOne + operandTwo;
            break;
          case 'subtract':
            result = operandOne - operandTwo;
            break;
          case 'divide':
            result = operandOne / operandTwo;
            break;
          case 'multiply':
            result = operandOne * operandTwo;
            break;
        }

        //clear variables
        numberScreen = result;
        $('div#screen').text(numberScreen);
        operandOne = 0;
        operator = '';
        operandTwo = 0;
        clearBetweenOperands = true;

      } else if ($(this).attr('id') == 'cancel'){
        numberScreen = "";
        $('div#screen').text(numberScreen);
        operandOne = 0;
        operator = '';
        operandTwo = 0;

      } else {
        operator = 'divide';
        operandOne = parseInt(numberScreen);
      }

    } else { //you're just entering a number
      if(operator == ''){
        numberScreen += $(this).text();
        $('div#screen').text(numberScreen);

      } else {
        if(clearBetweenOperands){
          numberScreen = "";
          $('div#screen').text(numberScreen); //clear the screen
          clearBetweenOperands = false;
        }
        numberScreen += $(this).text();
        $('div#screen').text(numberScreen);
      }
    }
  });
});
