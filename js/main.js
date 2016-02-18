$(document).ready(function () {

  $('span').on('click', function (event) {
    var answer = document.getElementById('screen').innerText;
    var info = event.target.innerText;
    var canDivide = document.getElementsByClassName('operator')[1].innerText;

    if (info === "x") {
      $('#screen').append("*");
    }

    else if (info == canDivide) {
      $('#screen').append("/");
    }
    else
     $('#screen').append(info);

    if(info == "C"){
      $('#screen').empty();
    }

    if (info == "=") {
      var superAnswer = eval(answer);
      $('#screen').text(superAnswer);
    }

  });

});
