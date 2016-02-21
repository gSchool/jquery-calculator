$(document).ready(function(){
  $( "#button-container span" ).on('click', function( event ) {
    console.log(event);
    var info = $(event.target).text();
    var calcID = event.target.id;

if(calcID === 'cancel'){

  $('#screen').empty();

} else if(calcID === 'calc') {

  var formula = $('#screen').text();
  var newVar = eval(formula);

  var regex = /([\+\/\*\-])/;
  var splitFormula = formula.split(regex);

  if( splitFormula[1] === '+' ){
    var answer = parseInt(splitFormula[0]) + parseInt(splitFormula[2]);

      $('#screen').text(answer);

  } else if ( splitFormula[1] === '-' ){
    var answer = parseInt(splitFormula[0]) - parseInt(splitFormula[2]);

      $('#screen').text(answer);

  } else if ( splitFormula[1] === '*' ){
    var answer = parseInt(splitFormula[0]) * parseInt(splitFormula[2]);

      $('#screen').text(answer);

  } else if ( splitFormula[1] === '/' ){
    var answer = parseInt(splitFormula[0]) / parseInt(splitFormula[2]);

      $('#screen').text(answer);
  }

} else if ( $(event.target).text() === $('.operator:eq(1)').text() ){

    $('#screen').append('/');

  } else if ( $(event.target).text() === $('.operator:eq(2)').text() ){

    $('#screen').append('*');

  } else {
    $('#screen').append(info);

}

    });
});
