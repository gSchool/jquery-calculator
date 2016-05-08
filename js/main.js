$(document).ready(function(){

  $('span').click(function(){
    if($(this).is('#cancel')){
      $('#screen').empty();
    }else if ($(this).is('#calc')) {
      var expression = $('#screen').text();
      var input1 = 0;
      var input2 = 0;
      var evaluator;
      var answer;
      for(var x = 0; x < expression.length; x++){
        if(expression[x] === '\xF7' || expression[x] === 'x' || expression[x] === '-' || expression[x] === '+'){
          evaluator = expression[x];
        }
      }
      expression = expression.split(evaluator);
      if(evaluator === '\xF7'){
        answer = Number(expression[0]) / Number(expression[1]);
      }else if(evaluator === 'x'){
        answer = Number(expression[0]) * Number(expression[1]);
      }else if(evaluator === '-'){
        answer = Number(expression[0]) - Number(expression[1]);
      }else if(evaluator === '+'){
        answer = Number(expression[0]) + Number(expression[1]);
      }
      $('#screen').empty();
      $('#screen').append(answer);
    }else {
      $(this).clone().appendTo($('#screen'));
    }
  });



});
