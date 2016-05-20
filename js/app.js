(function() {
  'use strict';

  var $screen = $('#screen');

  $('#clear').on('click', function() {
    $screen.text('');
  });

  $('#equals').on('click', function() {
    var screen = $screen.text();

    if (screen === 'Error') {
      return;
    }

    var regexp = /^(\-?\d+)(\+|\-|x|÷)(\-?\d+)$/;

    var matches = screen.match(regexp);

    if (matches === null) {
      $screen.text('Error');
      return;
    }

    var operand1 = parseInt(matches[1], 10);
    var operand2 = parseInt(matches[3], 10);
    var operator = matches[2];
    var total;

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
        $screen.text('Error');
        return;
      }

      total = operand1 / operand2;
    }

    var nextScreen = total.toString();

    $screen.text(nextScreen);
  });

  $('.buttons').on('click', 'span:not(#clear):not(#equals)', function(event) {
    var screen = $screen.text();

    if (screen === 'Error') {
      return;
    }

    var nextScreen = screen + event.target.textContent;
    $screen.text(nextScreen);
  });
})();
