$(function() {
  var evaluated = false;
  $('span').not('.operator').on('click', function() {
    if (evaluated === false) {
    $("#screen").append($(this).text());
  }
  })
  $('.operator').on('click', function() {
    if (evaluated === true) {
      evaluated = false;
    }
    if ($(this).text() === '\u00f7') {
      $("#screen").append('/');
    }
    if ($(this).text() === 'x') {
      $("#screen").append('*');
    }
    else if (($(this).text() !== '=') && ($(this).text() !== '\u00f7')) {
    $("#screen").append($(this).text());
  }
  })
  $('#calc').on('click', function() {
    var str = $("#screen").text().toString();
    $("#screen").text(eval(str));
    evaluated = true;
  })
  $('#cancel').on('click', function () {
    $("#screen").text("");
  })
});
