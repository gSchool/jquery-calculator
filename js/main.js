$(function() {
  $('span').not('.operator').on('click', function() {
    $("#screen").append($(this).text());
  })
  $('.operator').on('click', function() {
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
  })
  $('#cancel').on('click', function () {
    $("#screen").text("");
  })
});
