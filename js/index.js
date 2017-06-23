
$('#buttons-container').on('click', 'span', printToScreen);
$('#equals').on('click', calculate);
$('#clear').on('click', clearScreen);

let entry = [];

function printToScreen(event) {
  const buttonPushed = $(event.target).text();
  if (buttonPushed !== 'C' && buttonPushed !== '=') {
    entry.push(buttonPushed);
    $('#screen').text(entry.join(''));
  }
}

function calculate(event) {
  const entryString = cleanEntryString();
  if (checkForValidExpression(entry)) {
    const result = eval(entryString);
    $('#screen').text(result);
    entry = [result];
  } else {
    $('#screen').text("Error");
    entry = [];
  }
}

function cleanEntryString() {
  const entryString = entry.join('').replace('÷', '/').replace('x', '*');
  return entryString;
}

function checkForValidExpression(entry) {
  const entryString = cleanEntryString();
  let patternMet = (/[0-9]+[\+\-\/\*]{1}[0-9]+([\+\-\/\*][0-9]+)?/).test(entryString);
  let divideByZero = /(\/0)/.test(entryString);
  if (patternMet && !divideByZero) {
    return true;
  } else {
    return false;
  }
}

function clearScreen() {
  $('#screen').text("");
  entry = [];
}
