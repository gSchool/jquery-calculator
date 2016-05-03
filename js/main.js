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
    evaluate = evaluate.replace("++", "+");
    evaluate = evaluate.replace("--", "-");
    evaluate = evaluate.replace("=", " ");
    evaluate = evaluate.replace(/x/g, "*");
    evaluate = evaluate.replace("\u00F7", "/");
    var total = eval(evaluate);
    if(total === Infinity) {
      total = "Undefined";
    }
    else {
      total = total;
    }
    $('#screen').text(total);
})
  $("#cancel").click(function(){
    $('#screen').text("");
  })
});
