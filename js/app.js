(function() {
  'use strict';

  var $screen = $('#screen');

  $('#clear').on('click', function() {
    $screen.text('');
  });

  $('#equals').on('click', function() {
    var screen = $screen.text();

    if (screen === 'Error') {
      return;
    }

    var total = eval(screen.replace(/÷/g,'/').replace(/x/g,'*'));

    var nextScreen = total.toString();

    $screen.text(nextScreen);
  });

  $('.buttons').on('click', 'span:not(#clear):not(#equals)', function(event) {
    var screen = $screen.text();

    if (screen === 'Error') {
      return;
    }

    var nextScreen = screen + event.target.textContent;
    $screen.text(nextScreen);
  });
})();
