
var currentScreen = ""
var firstNum = 0
var operator = ""
var secondNum = 0

$('span').click(function() {
  var entry = $(this).text()
  if (entry === "\xF7" || entry === "+" || entry === "x" || entry === "-") {
    if (operator === "") {
      operator = entry
      currentScreen += entry
      $('#screen').text(currentScreen)
    }
    return
  }
  if (entry !== "=") {
    if (operator === "") {
      var entryStr = parseInt(entry)
      firstNum = (firstNum * 10 + entryStr)
    } else {
      var entryStr = parseInt(entry)
      secondNum = (secondNum * 10 + entryStr)
    }
    currentScreen += entry
    $('#screen').text(currentScreen)
  }
})


$('#clear').click(function() {
  currentScreen = ""
  firstNum = 0
  operator = ""
  secondNum = 0
  $('#screen').text(currentScreen)
});

$('#equals').click(function() {
  var answer
  switch(operator) {
    case "+":
      answer = firstNum + secondNum
      break;
   case "-":
       answer = firstNum - secondNum
       break;
   case "x":
       answer = firstNum * secondNum
       break;
   case "\xF7":
       answer = firstNum / secondNum
       break;
  }
    currentScreen = answer
    $('#screen').text(currentScreen)
    firstNum = answer
    operator = ""
    secondNum = 0
    if ($('#screen').text() === "Infinity"){
      $('#screen').text("Error")
    }
})
