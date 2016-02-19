var capture = '0';
var reset = false;

$('.buttons span').click(function() {
  var button = $(this).text();
  if (button == 'C') {
    capture = '';
    $('#screen').text(capture);
  } else if (button != '=' && button != 'x' && button != '+' && button != '-' && button != '\u00F7') {
    if (reset == true) {
      capture = '';
      capture = capture + button;
      $('#screen').text(capture);
      reset = false;
    } else {
      capture = capture + button;
      $('#screen').append(button);
    }
  } else if (button == '+') {
    capture = capture + '+';
    $('#screen').append('+');
    reset = false;
  } else if (button == '-') {
    capture = capture + '-';
    $('#screen').append('-');
    reset = false;
  } else if (button == 'x') {
    capture = capture + '*';
    $('#screen').append('*');
    reset = false;
  } else if (button == '\u00F7') {
    capture = capture + '/';
    $('#screen').append('/');
    reset = false;
  } else if (button == '=') {
    $('#screen').html(eval(capture));
    reset = true;
  }
});
