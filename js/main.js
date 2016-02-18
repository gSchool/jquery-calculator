$(function(){
  $('span').on('click', function(e){
    var calcButton = $(e.target).text();
    if ( jQuery.isNumeric(+calcButton) == true ) {
      $('#screen').append(calcButton);
    }
  })
})
