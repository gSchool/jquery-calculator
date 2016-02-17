$(document).ready(function () {

  var value= '0';
  var lastval;
  var memory = [0, '+', 0];

  $('span').on('click', function (e) {
    lastval = $(e.target).text();
    $('#screen').empty();
    $('#screen').append(mem(lastval));
  });

  function mem ( lastval ) {
    if ( !isNaN(lastval) ){
      value += lastval;
    }else{
      memory[2] = +value;
      value = '';
      return operate(memory);
      memory[1] = lastval;
      value = '';
    }
    return value;
  };

  function operate ( arr ) {
    
    if( arr[1] === '+'){
      memory[1] = lastval;
      return arr[0] = arr[0] + arr[2];

    }if( arr[1] === '-'){
      memory[1] = lastval;
      return arr[0] = arr[0] - arr[2];

    }if( arr[1] === 'x'){
      memory[1] = lastval;
      return arr[0] = arr[0] * arr[2];

    }if( arr[1] === '/'){
      memory[1] = lastval;
      return arr[0] = arr[0] / arr[2];

    }if( arr[1] === '='){
      memory[1] = lastval;
      return arr[0];

    }if(arr[1] === 'C'){
      memory = [0, '+', 0];
      return memory[0]
    }
  }
});
