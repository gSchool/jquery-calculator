$(document).ready(function(){

  $( "#button-container span" ).on('click', function( event ) {
    console.log(event);
    var info = $(event.target).text();
    var calcClass = event.target.className;
    var calcID = event.target.id;
$('#screen').append(info);

if(calcID === 'cancel'){

  $('#screen').empty();

} if else(calcID === 'calc') {

  

}



    });
});
