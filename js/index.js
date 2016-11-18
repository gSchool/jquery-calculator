(function() {
  'use strict';

  const $screen = $('#screen');

  $('#clear').click(() => {
    $screen.text('');
  });

  $('#equals').click(() => {
    const arithExp = $screen.text();

    if (arithExp === 'Error') {
      return;
    }

    let nextArithExp;

    try {
      nextArithExp = eval(arithExp.replace('÷', '/').replace('x', '*'));
    }
    // Handle badly formatted expression
    catch (exception) {
      nextArithExp = 'Error';
    }

    // Handle divide by zero
    if (!Number.isFinite(nextArithExp)) {
      nextArithExp = 'Error';
    }

    // or...
    // nextArithExp = safeEval(arithExp);

    $screen.text(nextArithExp);
  });

  $('.buttons').on('click', 'span:not(#clear):not(#equals)', (event) => {
    const arithExp = $screen.text();

    if (arithExp === 'Error') {
      return;
    }

    const nextArithExp = arithExp + $(event.target).text();

    $screen.text(nextArithExp);
  });

  function safeEval(arithExp) {
    const regExp = /^(\-?\d+\.?\d*)(\+|\-|x|÷)(\-?\d+\.?\d*)$/;

    const matches = arithExp.match(regExp);

    if (matches === null) {
      return 'Error';
    }

    const operand1 = parseFloat(matches[1]);
    const operand2 = parseFloat(matches[3]);
    const operator = matches[2];

    let total;

    if (operator === '+') {
      total = operand1 + operand2;
    }
    else if (operator === '-') {
      total = operand1 - operand2;
    }
    else if (operator === 'x') {
      total = operand1 * operand2;
    }
    else if (operator === '÷') {
      if (operand2 === 0) {
        return 'Error';
      }

      total = operand1 / operand2;
    }

    return total;
  };
})();
