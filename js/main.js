$(function() {
  var evaluated = false;
  var operated = false;
  var a = "";
  var b = "";
  var oper = "";
  $('span').not('.operator').on('click', function() {
    if (evaluated === false) {
    $("#screen").append($(this).text());
      if (operated === false) {
        a = a.concat($(this).text());
      }
      else {
        b = b.concat($(this).text());
      }
    }
  })
  $('.operator').not('#calc').not('#cancel').on('click', function() {
    operated = true;
    if (evaluated === true) {
      evaluated = false;
    }
    if ($(this).text() === '\u00f7') {
      $("#screen").append('/');
      oper = '/';
    }
    if ($(this).text() === 'x') {
      $("#screen").append('*');
      oper = '*';
    }
    else if (($(this).text() !== '=') && ($(this).text() !== '\u00f7')) {
    $("#screen").append($(this).text());
    oper = $(this).text();
  }
  })

  $('#calc').on('click', function() {
    var result = 0;
    var parsA = parseInt(a);
    var parsB = parseInt(b);
    switch (oper) {
      case "+":
        result = parsA + parsB;
        break;
      case "-":
        result = parsA - parsB;
        break;
      case "*":
        result = parsA * parsB;
        break;
      case "/":
        result = parsA / parsB;
        break;
      default:
        console.log("not working");
    }
    $("#screen").text(result).toString();
    operated = false;
    a = result.toString();
    b = "";
    oper = "";
    evaluated = true;
  })
  $('#cancel').on('click', function () {
    $("#screen").text("");
    evaluated = false;
    a = "";
  })
});
