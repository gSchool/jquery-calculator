$(document).ready(function() {
  console.log("ready!");

  //function to select the span elements
  $('span').on('click', function() {
    // this will equal the "text" in each span element
    var text = $(this).text();
    // this will convert the "text" in each span element to a number
    var num = parseInt(text);

    if (text === num) {
      $('#screen').append(num);
      // this will add a number to the end of the screen
    } else if (text === 'C') {
      $(text).hide(this);
      location.reload();
      // this will clear the screen display

    } else if (text === '=') {} else if (text === 'x') {
      text = '*';
      $('#screen').append(text);
      // this will allow calculator to multiply and add the "*" to the screen

    } else if (text === '÷') {
      text = '/';
      $('#screen').append(text);
      // this will allow calculator to divide and add the "/" to the screen

    } else {
      $('#screen').append(text);
    }
  });

  $('#equals').on('click', function() {
    var sum = 0;
    var screen = $('#screen').html();
    var screenArr = screen.split('');

    $(this).each(function() {
      sum = eval(screen);
      if (sum === isNaN || undefined) {
        $('#screen').html('ERROR');
      } else {
        $('#screen').html(sum);
      }
    });

  });

});
