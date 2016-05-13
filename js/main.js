$(function(){

  var $buttons = $('span');
  var operator = null;
  var operatorUsedBefore = false;

  $buttons.on('click', function(){
    var isOperator = $(this).hasClass('operator');
    var button = $(this);
    var display = $('#screen');


    if (button.text() === 'C') {
      display.text("");
    }

    if (button.text() === '=') {
      operatorUsedBefore = false;
      var expression = display.text().split(operator);

      if (operator === "+"){
        var result = parseInt(expression[0]) + parseInt(expression[1]);
        display.text(result);
      }

      if (operator === "-"){
        var result = parseInt(expression[0]) - parseInt(expression[1]);
        display.text(result);
      }

      if (operator === "x"){
        var result = parseInt(expression[0]) * parseInt(expression[1]);
        display.text(result);
      }

      if (operator === "\xF7"){
        var result = parseInt(expression[0]) / parseInt(expression[1]);
        display.text(result);
      }

    }

    if (isOperator && !operatorUsedBefore){
      if (button.text() !== 'C' && button.text() !== '='){
      operatorUsedBefore = true;
      operator = button.text();
      display.append(button.text());
      }
    }

    if(!isOperator) {
      display.append(button.text());
    }
  });
});
