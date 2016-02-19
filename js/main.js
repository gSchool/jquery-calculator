$(function() {
  var expression = '';
  var numb = true;
  var switcha = false;

  $('.buttons').children().on('click', function(e) {
    var btnPressed = e.target.textContent

    if (btnPressed === '=') {
      if (switcha) {
        expression = eval(expression);
        numb = false;
        switcha = false;
      }
    } else if (btnPressed === 'C') {
      expression = '';
      numb = true;
      switcha = false;

    } else if (btnPressed === 'x') {
      expression += '*';
      switcha = true;

    } else if (btnPressed === '\xF7') {
      expression += '/';
      switcha = true

    } else if (btnPressed === '+') {
      expression += '+';
      switcha = true;

    } else if (btnPressed === '-') {
      expression += '-';
      switcha = true;

    } else {
      if (numb === true || switcha === true) {
        expression += (btnPressed);

      }
    }
    $('#screen').html(expression)
  });
});