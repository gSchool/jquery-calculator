$(function () {

  $('.buttons').on('click', function(event){

    var buttonStuff = event.target.innerHTML
    var answer = document.getElementById("screen").innerHTML;
    var superAnswer
    var divideSucksMyAss = document.getElementsByClassName("operator")[1].innerHTML


    if (buttonStuff ==="x") {
      $('#screen').append('*');
    } else if (buttonStuff == divideSucksMyAss)
      {$('#screen').append("/");
    } else {
    $("#screen").append(buttonStuff);
  }

    if ( buttonStuff === 'C' ) {
      $("#screen").empty();
    }

    if (buttonStuff === "=") {
      superAnswer = eval(answer);
      $('#screen').text(superAnswer)

    }

  })

});
