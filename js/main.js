$( document ).ready(function() {
  var $this = $('this');
  var $buttons = $('.buttons');
  var selected;

  $buttons.on('click', function(event) {
    var $screen = $('#screen').html();

    selected = event.target;
    selected = $(selected).text();
    
    if (selected === 'C') {
      $('#screen').text('');
    }
      else if (selected === '=') {
        var result = eval($screen);

        $('#screen').text(result);
      }
      else if (selected === 'x') {
        $('#screen').append('*');
      }
      else if (selected === '\u00F7') {
        $('#screen').append('/');
      }
      else {
        $('#screen').append(selected);
      }
    })
});


    // if (selected === $("span:not(.operator)")) {
    //   number += selected.text();
    //   $screen.text(number);
    // }
    //
    // if( selected === $("span:not(.operator)")) { //append first numbers to screen
    //   console.log(selected);
      // $this.text(screenText += number);
      // console.log(number);
      // $screen.text(number);
      // return number

  // })

  //
  // $(".operator)").click(function(e) { //append operator and set first num
  //   if ($this !== $('cancel')) && $this !== $("calc")) {
  //     $screen.append($this);
  //     firstNum = parseInt(number);
  //   }
  // })
  //     // perform operator functions on numbers on the screen
    // } else if (selected = operator[i]) {
    //   for (var i = 0; i < 11; i++) {
    //     $screen.val($screen + [i]);
    //   }
    // }
    // else if (selected = 'C') {
    //   $screen.val(0);
    // }
    // else {
    //   $screen.append(selected);
    // }

// select all except operator = $buttons:not('.operator');
//
// math function will run firstNum operator secondNum and push result to $screen then rest firstNum, secondNum, operator to null.

//when you click on a number check if  firstNum is null. If it is, add clicked num to it. If it is not, add num to secondNum.

//when you click on operator check if operator is null, if not, add op to it.
