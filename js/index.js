function screenAdd(a, b, c) {
  $ ("#screen").html(a + b + c)
}

$("document").ready(function() {
  var firstNumber = "";
  var secondNumber = "";
  var operator = "";
  var result = 0;

  $ (".buttons").click(function(event) {
      if (!event.target.classList.contains("buttons") && !event.target.classList.contains("operator")) {
        if (operator === "") {
          firstNumber += event.target.innerText;
          screenAdd(firstNumber, "", "");
        } else {
          secondNumber += event.target.innerText
          screenAdd(firstNumber, operator, secondNumber);
        }
      } else if (!event.target.classList.contains("buttons") && event.target.id !== "clear"
                  && event.target.id !== "equals" && event.target.classList.contains("operator")) {
          operator = event.target.innerText;
          screenAdd(firstNumber, operator, "");
      } else if (event.target.id === "clear") {
          firstNumber = "";
          secondNumber = "";
          screenAdd("", "", "");
      } else if (event.target.id === "equals") {
          if (operator === "÷" && secondNumber === "0") {
            result = "Error";
            screenAdd(result, "", "")
          } else {
            switch(operator) {
              case "+":
                result = Number(firstNumber) + Number(secondNumber);
                break;
              case "-":
                result = Number(firstNumber) - Number(secondNumber);
                break;
              case "x":
                result = Number(firstNumber) * Number(secondNumber);
                break;
              case "÷":
                result = Number(firstNumber) / Number(secondNumber);
                break;
              default:
                screenAdd("Error", "", "")
            }
          }
          firstNumber = result;
          secondNumber = "";
          operator = "";
          screenAdd(result, "", "")
      }
    })
  })
