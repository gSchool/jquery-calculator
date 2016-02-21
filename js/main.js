$(document).ready(function(){

  $( "#button-container span" ).on('click', function( event ) {
    console.log(event);
    var info = $(event.target).text();
    console.log(info);
    var hiddenInfo = '';
    var calcID = event.target.id;


if(calcID === 'cancel'){

  $('#screen').empty();

} else if(calcID === 'calc') {

  var formula = $('#screen').text();
  var newVar = eval(formula);
  // console.log(newVar);
  // console.log(formula);
  $('#screen').text(newVar);

  // var regex = /([\+\x\\u00F7\-])/;
  // var a = formula.split('[\+\x\u00F7\-]');
  //
  // console.log(a);



} else {
  $('#screen').append(info);

  if (info === '\u00F7') {
           += '/';
      } else if (buttons[i].innerHTML === 'x') {
         result.innerHTML  += '*';
      } else {
         result.innerHTML  += buttons[i].innerHTML;
      }

}



    });
});
