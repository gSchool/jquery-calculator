$(document).ready(function() {
    console.log("ready!");
    function calc(){
      var screen = $('#screen').text();
      var operator = " ";
      var num1 = " ";
      var num2 = " ";
      for (var i = 0; i < screen.length; i++) {
      if (screen[i]){
      }
    }



    $('span').click(function() {
        // The .attr() method gets the attribute value for only the first element in the matched set.
        if ($('span').attr('id') === "equals") {
            calc();
        } else if ($('span').attr('id') === "clear") {
            $('#screen').text(" ");
        } else {
            $('#screen').append($(span).text());
        }
    });
}

// The .attr() method gets the attribute value for only the first element in the matched set. To get the value for each element individually, use a looping construct such as jQuery's .each() or .map() method.
//
// Using jQuery's .attr() method to get the value of an element's attribute has two main benefits:
//
// Convenience: It can be called directly on a jQuery object and chained to other jQuery methods

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

// $(document).ready(function() {
//   $("form#add").submit(function(event) {
//     event.preventDefault();
//     var number1 = parseInt($("#add1").val());
//     var number2 = parseInt($("#add2").val());
//     var result = add(number1, number2);
//     $("#output").text(result);
//   });
// });

// We still need parseInt() because, like the information we gathered with prompt() dialog boxes, content gathered from form inputs is also always in string format, and our calculator's add() function requires numbers
