$('#buttons-container').on('click', 'span', printToScreen);
$('#equals').on('click', calculate);
$('#clear').on('click', clearScreen);

let entry = [];

function printToScreen(event) {
  let buttonPushed = $(event.target).text();

  if (buttonPushed === "÷") {
    entry.push('/')
  } else if (buttonPushed === 'x') {
    entry.push('*')
  } else if (buttonPushed !== "C" && buttonPushed !== "=") {
    entry.push(buttonPushed);
  }
  $('#screen').text(entry.join(""));
}

function calculate(event) {
  let result = eval(entry.join(""));
  $('#screen').text(result);
  entry = [result];
}

function clearScreen() {
  $('#screen').text("");
  entry = [];
}
