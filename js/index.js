

$('.buttons').on('click', 'span', function(event) {
  // console.log($(event.target).text());

  const $clickedButton = $(event.target);
  const $screen = $('#screen');


  if (event.target.id === 'clear') {
    $screen.text('');
  }

  else if (event.target.id === 'equals') {
    console.log($screen.text());
    $screen.text( evaluate ( $screen.text() ) );
  }

  else {
    $screen.text($screen.text() + $clickedButton.text());
  }
});

console.log(eval('34'));

// let str = '2x3'
// str.replace('x', '*');
// console.log(str);



function evaluate(str) {

  if ( (/[\+\-\x\÷]{2}/).test(str) ) {
    return 'Error';
  }
  let newStr = str.replace('x', '*').replace('÷', '/');
  let evalStr = eval(newStr);
  console.log(typeof(evalStr));
  if (typeof(evalStr) === 'number' && evalStr !== Infinity) {
    return evalStr;
  } else {
    return 'Error';
  }
}



// console.log(evaluate('2+2'));
// console.log(evaluate('2*3'));
// console.log(evaluate('2x3'));
// console.log(evaluate('9÷3'));
