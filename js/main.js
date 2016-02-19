$(document).ready(function() {

  var equation = "";

  $('span').on('click', function(event) {
    if (event.target.textContent === "C") {
      equation = "";
    } else if (event.target.textContent === "x") {
      equation += "*";
    } else if (event.target.textContent === "&divide;") {
      equation += "/";
    } else if (event.target.id === "calc") {
      equation = eval(equation);
    } else {
      equation += (event.target.textContent);
    }
    $('#screen').text(equation);
  });
})
