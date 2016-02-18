var equation = '';
var numOkay = true
var optTrue = false

$('.buttons').children().on('click', function(e) {
  var clk = e.target.textContent

  if ( clk === '=') {
    if (optTrue) {
      equation = eval(equation);
      numOkay = false;
      optTrue = false;
    }
  } else if (clk === 'C') {
    equation = '';
    numOkay = true;
    optTrue = false;

  } else if (clk === 'x') {
    equation += '*';
    optTrue = true;

  } else if (clk === '\xF7') {
    equation += '/';
    optTrue = true

  } else if (clk === '+') {
    equation += '+';
    optTrue = true;

  } else if (clk === '-') {
    equation += '-';
    optTrue = true;

  } else {
    if (numOkay === true || optTrue === true) {
      equation += (clk);

    }
  }
  $('#screen').html(equation)
})
