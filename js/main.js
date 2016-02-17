$(function () {

  $('.buttons').on('click', function(event){

    var buttonStuff = event.target.innerHTML

    if ( buttonStuff < 10 ) {

      $("#screen").append(buttonStuff);

    }

    if ( buttonStuff === 'C' ) {

      $("#screen").empty();

    }

    if ( event.target.className === 'operator' && buttonStuff !== 'C') {
      $("#screen").append(buttonStuff);

    };

  })

});
