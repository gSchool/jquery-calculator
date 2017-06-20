$(document).ready(function () {
  $('.buttons > span').click(function() {
    console.log("click");
    $('#screen').append($(this).text())
  });

  $('#zero').click(function() {
    $('#screen').append($(this).text())
  });

  $('#clear').click(function() {
    $('#screen').text(" ")
  });

  $('#equals').click(function() {
    calculate()
  });
})

function calculate() {
  var mathString = $('#screen').text();
  mathString = checkString(mathString)
  console.log(mathString);
  mathString = mathString.replace('=', '');
  mathString = mathString.replace('x', '*');
  mathString = mathString.replace('÷', '/');
  console.log(mathString);
  if (mathString != "Error") {
    mathString = eval(mathString)
  }
  if (mathString === Infinity) {
    mathString = "Error"
  }
  console.log(mathString);
  $('#screen').text(mathString)
}

function checkString (mathString) {
  console.log(mathString);
  if (isNaN(mathString[0]) || isNaN(mathString[mathString.length - 2])) {
    return "Error"
  } else {
    return mathString
  }
}
