$(document).ready(function() {
var math = ""

  alert("i'm working!");
  $('.buttons > span').click(function() {
  $('#screen').append($(this).text());
});
  $('.buttons.operator').click(function() {
  $('#screen').append($(this).text());
});
$('#cancel').click(function() {
$('#screen').empty();
});

$('#zero').click(function() {
  $('#screen').append($(this).text());


})

$("#calc").click(function() {
  math = $("#screen").text();
  math =  math.replace('=', '');
  math = math.replace('x', '*');
  math = math.replace('\u00F7','/');
  console.log(math = eval(math));
  $("#screen").text(math);

});



});
