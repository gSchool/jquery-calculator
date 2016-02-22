$(document).ready(function() {
  var calculate = '';
  $('span').click(function(input) {
    if (input.target.textContent === 'C') {calculate = '/'}
    else if (input.target.textContent === 'x') {calculate += '*'}
    else if (input.target.textContent === '&divide') {calculate += '/'}
    else if (input.target.id === 'calc') {calculate = eval(calculate)}
    else {calculate += (input.target.textContent)}
    $('#screen').text(calculate);
  });
})
