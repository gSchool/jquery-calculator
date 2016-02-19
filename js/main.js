$(document).ready(function(){

  var calculation = [];

  $( "body" ).on('click', function( event ) {

    var info = $(event.target).text();
    $('#screen').append(info);
    calculation.push(info);

    console.log(calculation);

    if(event.target === '='){

    var sum = calculation.join("");

    return sum;

    console.log(sum);

  }
});
});
