$(document).ready(function() {

//if button clicked is a number, store first and second number in two variables
//if button is operator, store value in variable
//update screen to show the values
//if button is equals, perform calculation

  var numString = '';
  var num1, num2;

  $('#button-container').on('click', 'span', function(){

    //extract button class and text
    var buttonClass = $(this).attr("class");
    var buttonId = $(this).attr('id');
    var buttonText = $(this).text();
    var screen = $('#screen');

    if (buttonId === "calc"){
      //check for addition
      if (numString.includes("+")){
        numString = numString.split("+");
        num1 = parseInt(numString[0]);
        num2 = parseInt(numString[1]);
        screen.text(num1 + num2);
      }

      //check for subraction
      if (numString.includes("-")){
        numString = numString.split("-");
        num1 = parseInt(numString[0]);
        num2 = parseInt(numString[1]);
        screen.text(num1 - num2);
      }

      //check for multiplication
      if (numString.includes("x")){
        numString = numString.split("x");
        num1 = parseInt(numString[0]);
        num2 = parseInt(numString[1]);
        screen.text(num1 * num2);

      }

      if (numString.includes("÷")){
        numString = numString.split("÷");
        num1 = parseInt(numString[0]);
        num2 = parseInt(numString[1]);
        screen.text(num1 / num2);

      }


      console.log(numString);

    } else if (buttonId === "cancel"){
      screen.text("");
      numString = '';
    } else {
      numString += buttonText;
      screen.text(numString);
    }


  });
});
