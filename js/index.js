$(document).ready(function(){

  var currentString = ""
  var answer = 8
  var lastClick = false

  $("span").not('#equals').click(function(){
    if (currentString === 'error'){
      $('#screen').text(currentString)
    }
      else
        if (lastClick === true && $(this).hasClass('operator')){
          currentString = 'error'
          $('#screen').text(currentString)
        }
      else {
        currentString += $(this).text();
        $("#screen").text(currentString)
        if ($(this).hasClass('operator')){
          lastClick = true
        }
          else {
            lastClick = false
          }
      }

  })


  $("#clear").click(function(){
    currentString = ''
    $("#screen").text(currentString)
  })

  $('#equals').click(function(){
    if (currentString === 'error'){
      $('#screen').text(currentString)
    }
    else
      if (lastClick === true){
        currentString = 'error'
        $('#screen').text(currentString)
    }
    var replaceX = currentString.replace('x','*')
    var total = replaceX.replace('\xF7','/')
    var answer = eval(total)
    currentString = answer
      $('#screen').text(answer)
      if ($('#screen').text()==="Infinity" ){
        currentString = 'error'
        $('#screen').text(currentString)
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
