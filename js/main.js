$(function(){

  var screen = $('#screen');

  $(".buttons").children().on('mousedown', function(e){

    if($(e.target).is($('#calc')))
      screen.text(eval(screen.text()));

    else if($(e.target).is($('#cancel')))
      screen.empty();

    else
      screen.append($(e.target).text());
  });
});
