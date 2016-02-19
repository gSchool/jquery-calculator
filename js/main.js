$(function(){
  $('span').on('click', function(e) {
    var calcButton = $(e.target).text();
    var screenContent = +$('#screen').text();
    var arr = [];
    function translateOp(operator) {
      if( operator == '*' ) var multi = '*';
      if( operator == '÷' ) var divi = '/';
      if( operator == '+' ) var add = '+';
      if( operator == '-' ) var sub = '-';
    }
    prevInput = true;
    if ( prevInput ) {
      if ( $.isNumeric(+calcButton) == true ) $('#screen').append(calcButton);
      else if ( calcButton == 'C' ) $('#screen').empty();
      else {
        arr.push(screenContent);
        $('#screen').empty();
        translateOp();
        $('#screen').append(calcButton);
        arr.push(screenContent);
        $('#screen').empty();
        console.log(arr);
      }
      prevInput = false
    }
    else {
      arr.push(screenContent);
      $('#screen').empty();
      if ( $.isNumeric(+calcButton) == true ) $('#screen').append(calcButton);
      else if ( calcButton == 'C' ) $('#screen').empty();
      // else ( calcButton == '=' ) {
      //   $('#screen').append(function() {
      //     return +arr[0] +arr[3]
      //   })
      // }
    }
  })
})


// bud's code:
// $(document).ready(function () {
//   var previouslyCalculated = false;
//
//   $('span').on('click', function (event) {
//     var answer = document.getElementById('screen').innerText;
//     var info = event.target.innerText;
//     var canDivide = document.getElementsByClassName('operator')[1].innerText;
//
//     if (info === "x") $('#screen').append("*");
//     else if (info == canDivide) $('#screen').append("/");
//
//     else{
//       if (!previouslyCalculated) {
//         $('#screen').append(info);
//       } else {
//         if (info !== canDivide && info !== 'x' && info !== '+' && info !== '-'){
//           $('#screen').empty();
//           $('#screen').append(info);
//           previouslyCalculated = false;
//         }
//       }
//
//     if(info == "C") $('#screen').empty();
//
//     if (info == "=") {
//       var superAnswer = eval(answer);
//       $('#screen').text(superAnswer);
//       previouslyCalculated = true;
//     }
//   }
//
// });
// });
