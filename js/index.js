var currentScreen = "";
var currentHas = false;

$('span').not('#equals').click(function() {
  currentScreen += $(this).text();
  if ($(this).hasClass('operator')) {
    if (currentHas === true) {
      currentScreen = "Error"
      $('#screen').text(currentScreen);
      return 1
    } else {
      currentHas = true;

    }
  } else {
    currentHas = false;
  }
  $('#screen').text(currentScreen);
});

$('#clear').click(function() {
  currentScreen = "";
  $('#screen').text(currentScreen);
})

$('#equals').click(function() {
  var changeMultiplication = currentScreen.replace('x', '*')
  var changeDivision = changeMultiplication.replace('\xF7', '/')
  var finalAnswer = eval(changeDivision)
  currentScreen = finalAnswer;
  $('#screen').text(finalAnswer);
})
