
var equation = '';
var showEquation = '';

$('.buttons').children().on('click', function(e) {

  if (e.target.textContent === '=') {
    equation = eval(equation);
    showEquation = equation
  } else if (e.target.textContent === 'C') {
    equation = '';
    showEquation = '';
  } else if (e.target.textContent === 'x') {
    equation += '*';
    showEquation += 'x'
  } else if (e.target.textContent === '\xF7') {
    equation += '/';
    showEquation += '\xF7'
  } else {
    equation += (e.target.textContent)
    showEquation += (e.target.textContent)
  }
  $('#screen').html(showEquation)
})
