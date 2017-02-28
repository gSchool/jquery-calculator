var answer = "";
$(document).ready(function() {
    console.log("ready!");
    function calc(){
      answer = answer.replace('x','*');
      answer = answer.replace('\xF7', '/');
      var result = eval(answer);
      $('#screen').text(result);
    }



    $('span').click(function() {

        // The .attr() method gets the attribute value for only the first element in the matched set.
        if ($(this).attr('id') === "equals") {
            calc();
            console.log("calculator");
        } else if ($(this).attr('id') === "clear") {
          console.log("clear");
            $('#screen').text(" ");
        } else {
            answer += $(this).text();
            console.log(answer);
            $('#screen').text(answer);
        }
    });
});

// number variables
// var add = function(number1, number2) {
//   return number1 + number2;
// };
//
// var subtract = function(number1, number2) {
//   return number1 - number2;
// };
//
// var multiply = function(number1, number2) {
//   return number1 * number2;
// };
//
// var divide = function(number1, number2) {
//   return number1 / number2;
// };
