//Variables
let $screen = $('#screen');
let usefulScreen = '';
let recentlyEvaluated = false;

//Event Listeners
$('#buttons-container').on('click', 'span', write);


//Functions
function write(event) {
  let input = event.target.innerHTML;
  if (input === "=") {
    screenReplace();
  } else if (input === "C") {
    clearScreen();
  } else {
    if (recentlyEvaluated && !$(event.target).hasClass('operand')) {
      clearScreen();
    }
    recentlyEvaluated = false;
    $(event.target).clone().appendTo($screen);
    if (input === 'X') {
      usefulScreen += '*';
    } else if (input === '÷') {
      usefulScreen += '/';
    } else {
      usefulScreen += input;
    }
    console.log(usefulScreen);
  }

}
//replaces old screen w/ new screen following eval()
function screenReplace() {
  let answer = eval(usefulScreen);
  if (typeof answer !== 'number' || answer === Infinity || answer === -Infinity) {
    $screen.empty().append($('<span>').innerHTML = 'Error');
  } else {
    let $span = $('<span>');
    $span.append(answer.toString());
    clearScreen();
    $span.appendTo($screen);
  }
  recentlyEvaluated = true;
}

function clearScreen() {
  $screen.empty();
  usefulScreen = '';
}
