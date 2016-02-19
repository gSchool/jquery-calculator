$(document).ready(function(){

  var info;
  var answer = [];
  var reset = [];

  $('span').on('click', function(event){
    info = event.target.textContent;
    var division = document.getElementsByClassName('operator')[1].textContent;

    // Why??
    if(reset.length != 0) {
      $('#screen').html("");
      answer = [];
      reset.splice(0,1);
    };

    if((info !== '=')&&(info !== 'C')&&(info !== 'x')&&(info !== division)) {
      $('#screen').append(info);
      answer += info;
      console.log(answer);
    } else if (info === 'x') {
      $('#screen').append('x');
      answer += '*';
      console.log(answer);
    } else if (info === division) {
      $('#screen').append('&divide;')
      answer += '/';
      console.log(answer);
    };
  });

  $('#calc').on('click', function(event){
    answer = eval(answer);
    console.log(answer);
    $('#screen').text(answer);
    answer = [];
    reset.push('1');
  });

  $('#cancel').on('click', function(){
    $('#screen').text('');
    answer = [];
  });
});
