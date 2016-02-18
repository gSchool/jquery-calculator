$(document).ready(function(){

  var info;
  var answer = [];
  var fin = [];

  $('span').on('click', function(event){
    info = event.target.innerText;
    var divide1 = document.getElementsByClassName('operator')[1].innerText;

    if(fin.length != 0){
      $('#screen').html("");
      fin.splice(0, 1);
    };

    if((info !== '=')&&(info !== 'C')&&(info !== 'x')&&(info !== divide1)){
      $('#screen').append(info);
      answer.push(info);
      console.log(answer);
    }else if(info == 'x'){
      $('#screen').append('x');
      answer.push('*');
    }else if(info == divide1){
      $('#screen').append('&divide;');
      answer.push('/');
    };
    console.log(fin);
  });

  $('#calc').on('click', function(event){
    anstring = answer.join("");
    ans = eval(anstring)
    $('#screen').html("");
    $('#screen').append(ans);
    answer.length = 0;
    fin.push('1');
    console.log(fin);
  });

  $('#cancel').on('click', function(event){
    $('#screen').html("");
    answer.length = 0;
  });

});
