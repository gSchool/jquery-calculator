$(document).ready(function(){

  var calcScreen = ""

  $('#clear').click(function(){
    calcScreen = ""
  })

  $('#equals').click(function(){
    var replaceTimes = calcScreen.replace("x", "*")
    var replaceDivide = replaceTimes.replace("÷", "/")
    calcScreen = eval(replaceDivide)
    console.log(calcScreen)
    $('#screen').text(calcScreen)
    // final line puts calcScreen on screen
  })

  $('span').not('#equals').click(function() {
    if(calcScreen === "C") {
      calcScreen = ""
    }
    var entered = $(this).text()
    calcScreen += entered

    $('#screen').text(calcScreen)
  })

})




//still need to...
//replace x with * and ÷ with / in equals function
//remove = from end of equals function
//
