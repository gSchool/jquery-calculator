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

    const nextArithExp = eval(arithExp.replace(/÷/g, '/').replace(/x/g, '*'));

    // or...
    // const nextArithExp = safeEval(arithExp);

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
    const regExp = /^(\-?\d+)(\+|\-|x|÷)(\-?\d+)$/;

    const matches = arithExp.match(regExp);

    if (matches === null) {
      return 'Error';
    }

    const operand1 = parseInt(matches[1]);
    const operand2 = parseInt(matches[3]);
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
