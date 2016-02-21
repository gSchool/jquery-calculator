$(document).ready(function(){

  $( "#button-container span" ).on('click', function( event ) {
    console.log(event);
    var info = $(event.target).text();
    var calcClass = event.target.className;
    var calcID = event.target.id;


if(calcID === 'cancel'){

  $('#screen').empty();

} else if(calcID === 'calc') {

  var formula = $('#screen').text();
  var newVar = eval(formula);
  console.log(newVar);
  console.log(formula);

} else {
  $('#screen').append(info);
}



    });
});
