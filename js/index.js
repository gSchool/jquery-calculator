$(document).ready(function(){

  var currentString = ''

  $('span').not('#equals').click(function(){
    currentString += $(this).text();
    $('#screen').text(currentString)
    console.log(currentString)
  })

  $('#clear').click(function(){
    currentString = ''
    $('#screen').text(currentString)
  })

  $('#equals').click(function(){
     var replace = currentString.replace('x', '*')
     var replace2 = replace.replace('\xF7', '/')
     var answer = eval(replace2)
    $('#screen').text(answer)
    if ($('#screen').text()===('Infinity')){
      $('#screen').text('error')
    }

  })
})
