
var equation = '';

$('.buttons').children().on('click', function(e) {

  if (e.target.textContent === '=') {
    equation = eval(equation);
  } else if (e.target.textContent === 'C') {
    equation = '';
  } else if (e.target.textContent === 'x') {
    equation += '*';
  } else if (e.target.textContent === '&divide;') {
    equation += '/';
  } else {
    equation += (e.target.textContent)
  }

  $('#screen').html(equation)
})
