$(document).ready(function(){

  var info;
  var answer = [];

  $('span').on('click', function(event){
    info = event.target.innerText;

    $('#screen').append(info);
    answer.push(info);
    console.log(answer);

  });





});
