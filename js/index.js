$(document).ready(function(){

  // var num1 = ''
  // var num2 = ''
  // var op = ''

  // Number(num1) + op +

  var currentString = ""
  var answer = 8
  $("span").not('#equals').click(function(){
    currentString += $(this).text();
    $("#screen").text(currentString)
  })


  $("#clear").click(function(){
    currentString = '';
    $("#screen").text(currentString)
  })

  $('#equals').click(function(){
    var replaceX = currentString.replace('x','*')
    var total = replaceX.replace('\xF7','/')
    var answer = eval(total)
    currentString = answer
      $('#screen').text(answer)
      if ($('#screen').text()==="Infinity" ){
        $('#screen').text('error')
      // for (var i = 0; i < currentString.length; i++){
      //   if (currentString.charAt(i)===currentString.charAt(i-1)){
      //     $('#screen').text('error')
      //   }
      // }
      }



  })



})

// function updateScreen(a,b,c){
//   $('#screen').html(a+b+c)
// }
