$('#buttons-container').on('click', 'span', printToScreen);
$('#equals').on('click', calculate);
$('#clear').on('click', function() {
  $('#screen').text("");
  entry = [];
});

let entry = [];





  function printToScreen(event) {    

    if ($(event.target).text() !== "C" && $(event.target).text() !== "=") {
      entry.push($(event.target).text());
      $('#screen').text(entry.join(""));
    }
  }


function calculate(event) {
  for (char in entry) {
    if (char === "%") {
      char = '/'
    }
    if (char === 'x') {
      char ='*'
    }
  }
  $('#screen').text(eval(entry.join("")));
}



function handleOperator(event) {
  console.log( $(event.target).text() );
  switch ($(event.target).text()) {
    case 'C':
      break;
    case '=':
      break;
    case '%':
      entry.push('/');
      break;
    case 'x':
      entry.push('*');
      break;
    default:
      entry.push($(event.target).text());
  }
}
