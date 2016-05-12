
var $buttons = $('span');
var operator = null;
var operatorUsedBefore = false;

$buttons.on('click', function() {
  var isOperator = $(this).hasClass('operator');
  var button = $(this);
  var display = $('#screen');

  if (!isOperator) {
    display.append(button.text());

  }

  if (button.text() === 'C') {
    display.text("");
  }


  if (button.text() === '=') {
    var expression = display.text().split(operator);
    display.text("");

    console.log("its working");

        if (operator === "+") {
          var result = parseInt(expression[0]) + parseInt(expression[1]);
          display.text(result);
        }

        if (operator === "\xF7") {
          var result2 = parseInt(expression[0]) / parseInt(expression[1]);
          display.text(result2);
          console.log("its working");
        }

        if (operator === "-") {
          var result3 = parseInt(expression[0]) - parseInt(expression[1]);
          display.text(result3);
        }

        if (operator === "x") {
          var result4 = parseInt(expression[0]) * parseInt(expression[1]);
          display.text(result4);
        }

    operatorUsedBefore = false;
    operator = null;
    isOperator = false;
  }


  if (isOperator && !operatorUsedBefore) {
    if (button.text() !== "C" && button.text() !== "=") {
      operatorUsedBefore = true;
      operator = button.text();
      display.append(button.text());
    }

  }

});
