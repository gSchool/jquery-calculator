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

  // console.log(newVar);
  // console.log(formula);
  // $('#screen').text(newVar);

 var regex = /([\+\/\*\-])/;
  var a = formula.split(regex);

  console.log(a);

} else if ( $(event.target).text() === $('.operator:eq(1)').text() ){

    $('#screen').append('/');

  } else if ( $(event.target).text() === $('.operator:eq(2)').text() ){

    $('#screen').append('*');

  } else {
    $('#screen').append(info);


}



    });
});


//
//
// if (info === $('.operator:eq(1)').text()) {
//     $(hiddenScreen).append('/');
//     } else if (info === $('.operator:eq(2)').text()) {
//       hiddenScreen += '*';
//     }
