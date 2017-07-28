$(document).ready(function(){

  $('.button').click(function(){
    $('#screen').append($(this).text())
  })

  $('.operator').click(function(){
    $('#screen').append($(this).text())
  })

  $('#clear').click(function(){
    $('#screen').html("");
  })

  $('#equals').click(function(){
    var value = $('#screen').text().slice(0,$('#screen').text().split("").length-1)

    var divide = value.replace(/\÷/, "/")
    divide = divide.replace(/\x/, "*")

    //notes - regex need to be on separate lines, however, just set it equal to itself
    //and include the other thing that needs to be replaced on two separate lines and now
    //it will replace it both characters with the appropriate character.

    var answer = eval(divide);

    $('#screen').append(answer)
  })
})
