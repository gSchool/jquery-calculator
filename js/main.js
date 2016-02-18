$(document).ready(function(){

  var info;
  var answer = [];

  $('span').on('click', function(event){
    info = event.target.innerText;

    if(info !== '='){

      $('#screen').append(info);
      answer.push(info);
      console.log(answer);

    }

  });

  $('#calc').on('click', function(event){
    anstring = answer.join(" ");
    ans = eval(anstring)

    $('#screen').append(ans);
  });






});
