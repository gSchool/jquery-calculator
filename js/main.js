$(function() {

  var $buttons = $('.buttons'),
      $calcScreen = $("#screen"),
      expression = "",
      currentOp = "";

  $buttons.on('click', 'span:not(#cancel, #calc)', function() {
    var $el = $(this);
    var isOp = $el.hasClass('operator');
    /* update the character view unless you clicked on an operator and the view is empty,
    OR, you clicked on an operator and an operator has already been set */
    if (!isOp || isOp && expression.length > 0 && !currentOp) {
      expression += $el.text();
      if (isOp) {
        currentOp = $el.text();
      }
    }
    $calcScreen.text(expression);
  });

  $buttons.on('click', '#calc', function() {
    var numArray = expression.split(currentOp),
        num1 = numArray[0].length > 0 ? parseInt(numArray[0]) : 0,
        defaultNum2 = currentOp === "+" || currentOp === "-" ? 0 : 1,
        num2 = numArray[1].length > 0 ? parseInt(numArray[1]) : defaultNum2;
    switch (currentOp) {
      case "+":
        $calcScreen.text(num1+num2);
        break;
      case "-":
        $calcScreen.text(num1-num2);
        break;
      case "x":
        $calcScreen.text(num1*num2);
        break;
      default:
        $calcScreen.text(num1/num2);
    }
    expression = $calcScreen.text();
    currentOp = "";
  });

  $buttons.on('click', '#cancel', function() {
    expression = "";
    currentOp = "";
    $calcScreen.text("");
  });

});