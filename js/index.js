$(document).ready(function() {

  var operands = $("span:not(.operator)");
  var operators = $(".operator");
  var equals = $("#equals")
  var clear = $("#clear");
  var display = $("#screen");
  // var zero = $("#zero");
  var operating = false;
  var justEvaluated = false;
  var evaluating = false;

  var operations = {
    sum: function(x, y) {
      return x + y;
    },
    subtract: function(x, y) {
      return x - y;
    },
    multiply: function(x, y) {
      return x * y;
    },
    divide: function(x, y) {
      return x / y;
    }
  };

  operands.on("click", function() {
    if (evaluating) {
      display.text(null);
      evaluating = false;
    }
    var textValue = $(this).text();
    display.append(textValue);
  });

  operators.on("click", function() {
    if (!operating && !evaluating && display.text()) {
      var textValue = $(this).text();
      if (textValue === "x") {
        textValue = "*";
      }
      display.append(textValue);
      operating = true;
    }
  });

  equals.on("click", function() {
    if (!evaluating) {
      var currentOp;
      var result;
      var operation = display.text();
      console.log(operation);
      for (var i = 0; i < operation.length; i++) {

        if (operation.charAt(i) !== "0" && !parseInt(operation.charAt(i), 10)) {
          currentOp = operation.charAt(i);
        }
      }

      var normalOp = operation.split(currentOp);
      console.log(normalOp);
      var x = parseInt(normalOp[0], 10);
      var y = parseInt(normalOp[1], 10);
      switch (currentOp) {
        case "+":
          result = operations.sum(x, y);
          break;
        case "-":
          result = operations.subtract(x, y);
          break;
        case "*":
          result = operations.multiply(x, y);
          break;
        case "÷":
          result = operations.divide(x, y);
          break;
        default:
          result = "Error";
      }

      if (result !== Infinity) {
        var normalResult = result.toString();
        display.text(normalResult);
      } else {
        display.text("ERROR");
      }


      operating = false;
      evaluating = true;
    }
  });

  clear.on("click", function() {
    display.text(null);
    operating = false;
    evaluating = false;
  });
});

//
