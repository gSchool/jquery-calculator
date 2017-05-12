$(document).ready(function(){
  let $screen = $('#screen');
  let screenText = '';
  //event listener for pressing buttons
  $(this).click(function(event){
    let target = event.target;
    if(target.id == 'clear'){
      screenText = '';
    } else if(target.id == 'equals'){
        screenText = evaluate(screenText);
    } else if($(target).is('span') && screenText !== 'Error'){
      screenText += target.innerText;
    }
    $screen.val(screenText);
  });
  //event listener for using keypress inputs while cursor inside calculator screen
  $screen.keyup(function(event){
    if(event.key == 'Escape'){
      screenText = '';
    } else if(event.key == 'Enter'){
      screenText = evaluate(screenText);
    } else if(screenText !== 'Error'){
      screenText = $screen.val();
    }
    $screen.val(screenText);
  });
});

function isValid(screenInput){
  let validRegex = /^\d+[-+x\u00F7]\d+$/;
  let divideByZeroRegex = /\u00F70+$/;
  return (validRegex.test(screenInput) && !divideByZeroRegex.test(screenInput));
}

function evaluate(equation){
  if(!isValid(equation)){
    return 'Error';
  }

  let operands = equation.match(/\d+/g);
  let operator = equation.match(/[-+x\u00F7]/);
  let operand1 = parseInt(operands[0]);
  let operand2 = parseInt(operands[1]);

  if(operator == '+'){
    return operand1 + operand2;
  } else if(operator == '-'){
    return operand1 - operand2;
  } else if(operator == 'x'){
    return operand1 * operand2;
  } else {
    return operand1/operand2;
  }
}
