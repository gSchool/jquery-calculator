$(function(){

  var input = [],
      val1 = [],
      val2 = [],
      operator = '',
      output = 0,
      cScreen = $('#screen');

  $('span').not('#calc', '#cancel').click(function() {
    cScreen.append(this.innerText);
    input.push(this.innerText);
    if ($(this).hasClass('operator')) {
      operator = this.innerText;
    }
  })

  $('#cancel').click(function(){
    input = [];
    val1 = [];
    val2 = [];
    operator = '';
    output = 0;
    cScreen.empty();
  })

  $('#calc').click(function() {
    for (var i = 0; i < input.length; i++) {
      if (input[i]=== operator) {
        for (var j = 0; j < input.length; j++) {
          if (j < i) {
            val1.push(input[j]);
          } else if (j > i) {
            val2.push(input[j]);
          }
        }
      }
    }

    val1 = parseInt(val1.join(''), 10);
    val2 = parseInt(val2.join(''), 10);

    switch (operator) {
      case '+':
        output = val1+val2;
        break;
      case '-':
        output = val1-val2;
        break;
      case 'x':
        output = val1*val2;
        break;
      default:
        output = val1/val2;
        break;
    }

    cScreen.text(output);
    input = [];
    val1 = [];
    val1 = [output]
    val2 = [];
    operator = '';
    output = 0;

  })


})
