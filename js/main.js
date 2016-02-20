$(document).ready(function () {
  var previouslyCalculated = false;

  $('span').on('click', function (event) {
    var answer = document.getElementById('screen').innerText;
    var info = event.target.innerText;
    var canDivide = document.getElementsByClassName('operator')[1].innerText;

    if (info === "x") $('#screen').append("*");
    else if (info == canDivide) $('#screen').append("/");

    else{
      if (!previouslyCalculated) {
        $('#screen').append(info);
      } else {
        if (info !== canDivide && info !== 'x' && info !== '+' && info !== '-'){
          $('#screen').empty();
          $('#screen').append(info);
          previouslyCalculated = false;
        }
      }

    if(info == "C") $('#screen').empty();

    if (info == "=") {
      var superAnswer = eval(answer);
      $('#screen').text(superAnswer);
      previouslyCalculated = true;
    }
  }

});
});
