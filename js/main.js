$(document).ready(function(){
  $('.buttons > span').click(function(){
  $('#screen').append($(this).text())
})
  $("#zero").click(function(){
    $('#screen').append($(this).text())
  })
  var evaluate = "";
  $('#calc').click(function(){
    evaluate = $('#screen').text();
    evaluate = evaluate.replace("=", " ");
    evaluate = evaluate.replace("x", "*");
    evaluate = evaluate.replace("\u00F7", "/");
    var total = eval(evaluate);
    //console.log(total);
    $('#screen').append(total).text();
  })
  $("#cancel").click(function(){
    $('#screen').text("");
  })
});
