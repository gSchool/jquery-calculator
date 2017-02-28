var equation = '';

$('span').not('#equals').click(function() {
 equation += $(this).text();
 $('#screen').text(equation)
})

$('#clear').click(function() {
  equation = ''
  $('#screen').text(equation)
})

$('#equals').click(function() {
  var mult = equation.replace('x', '*')
  var divide = mult.replace('\xF7', '/')
  var answer = eval(divide)

  if(divide.includes('/' + '0')) {
    $('#screen').text('Error')
  }
  else {
    $('#screen').text(answer)
  }
})
