$(function(){
  var str = '';

  $('span').on('click', function(e) {
    var button = $(e.target).text();
    $('#screen').append(button)
    console.log('input', button);
    if(button == "x"){
      str += '*';
      $('#screen').empty();
    } else if(button == "C"){
      str = '0';
      $('#screen').empty();
    } else if(button == "÷"){
      str += '/';
      $('#screen').empty();
    } else if (button == '='){
      $('#screen').empty();
      function calc(str) {
        return new Function('return ' + str)();
      }
      $('#screen').append( calc(str) );
    } else {
      str += button;
    }
  })
})
