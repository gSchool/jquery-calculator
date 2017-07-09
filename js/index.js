
let $buttons = $('.buttons').children();
let $operands = $('.operator');
let $equals = $('#equals');
let $clear = $('#clear');
let $screen = $('#screen');
let isReadyForOperand = false;
let usefulString = '';

$buttons.on('click', write);
$equals.off('click', write);
$clear.off('click', write);
$clear.on('click', clear);
$equals.on('click', evaluate);

function write(event) {
  if ($screen.text() !== 'Error') {
    if (!$(event.target).hasClass('operator') || isReadyForOperand) {
      $(event.target).clone().appendTo($screen);
      updateUsefulString($(event.target).text());
      isReadyForOperand = true;
      if ($(event.target).hasClass('operator')) {
        isReadyForOperand = false;
      }
    }
  }
}

function updateUsefulString(value) {
  if (value === 'x') {
    usefulString += '*';
  } else if (value === '÷') {
    usefulString += '/';
  } else {
    usefulString += value;
  }
}

function evaluate() {
  if ($screen.text() !== 'Error') {
    if (isReadyForOperand) {
      let total = eval(usefulString);
      clear();
      if (total === Infinity || total === -Infinity) {
        total = 'Error';
      }
      $screen.append(total);
      usefulString = total.toString();
    }
  }
}

function clear() {
  $screen.empty();
  usefulString = '';
}
