$(document).ready(function() {

    // adds operand or operator to screen

    $('.buttons > span').click(function() {
        if (isDone) {
            reset()
        }
        $('#screen').append($(this).text())
    });

    $('#zero').click(function() {
        if (isDone) {
            reset()
        }
        $('#screen').append($(this).text())
    });

    // clear's screen
    $('#clear').click(function() {
        $('#screen').text(" ")
    });

    $('#equals').click(function() {
        //  console.log($('#screen').text());
        calculateEquals();
        isDone = true

    });

    $(document).keydown(function(e) {
        if (e.keyCode == 13) {
            calculateEquals();
            isDone = true

            // console.log("return");
            // $('#screen').text(mathString)
        }

    });


});


var calculateEquals = function() {
    var mathString = $('#screen').text();
    // console.log(mathString);
    mathString = mathString.replace('=', '');
    mathString = mathString.replace('x', '*');
    mathString = mathString.replace('÷', '/');
    mathString = eval(mathString);
    // console.log(mathString);
    $('#screen').text(mathString)
}


var isDone = false;

var reset = function () {
    $('#screen').text(" ")
    isDone = false;
}
