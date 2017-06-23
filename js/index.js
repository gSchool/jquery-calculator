// Handle calculator button clicks
function buttonClicked(event) {
  const btnText = event.target.innerText;

  if (btnText <= 9 && btnText >= 0) {
    appendScreen(btnText);
  }
  else if (btnText === "+" || btnText === "-" || btnText === "x" || btnText === "÷") {
    appendScreen(btnText);
  }
  else if(btnText === "C") {
    clearScreen();
  }
  else if(btnText === "=") {
    calculateResults();
  }
}

// Write passed text to the calc screen
function appendScreen(newText) {
  if (error) { return; }

  const currentText = $("#screen").text();
  $("#screen").text(currentText + newText);
}

// Clear the calculator screen and set the error flag to false.
function clearScreen() {
  error = false;
  $("#screen").text("");
}

// Equal button (or enter) was pressed,
function calculateResults() {
  const $screen = $("#screen");
  const screenText = $screen.text();

  let sanitizedText = sanitizeFormula(screenText);
  if (!error) {
    if (checkFormula(sanitizedText)) {
      // $screen.text(eval(sanitizedText));
      $screen.text(evaluate(sanitizedText));
    }
    else {
      error = true;
      $screen.text("Error");
    }
  }
}

// Convert ÷ and x to / and *
function sanitizeFormula(formula) {
  let sanitizedText = formula.replace(/÷/g, "/");
  sanitizedText = sanitizedText.replace(/x/g, "*");

  return sanitizedText;
}

// Checks for two operators in a row and divison by zero
function checkFormula(formula) {
  let operator = false;

  for (const char of formula) {
    if (char === "+" || char === "-" || char === "*" || char === "/") {
      if (operator) {
        return false;
      }

      operator = char;
    }
    else if (char === "0") {
      // If dividing by 0
      if (operator === "/") { return false; }
    }
    else {
      operator = false;
    }
  }

  if (checkLeadTrailCharacters(formula) === false) {
    return false;
  }

  return true;
}

// Check to make sure first and last characters are not operators (except leading minus for negative numbers)
function checkLeadTrailCharacters(formula) {
  const lead = formula[0];
  const trail = formula[formula.length-1];

  if (lead === "+" || lead === "*" || lead === "/") {
    return false;
  }

  if (trail === "+" || trail === "-" || trail === "*" || trail === "/") {
    return false;
  }

  return true;
}

// Handle keyboard input
function processInput(event) {
  if (event.key >= 0 && event.key <= 9) {
    appendScreen(event.key);
  }
  else if (event.key === "+" || event.key === "-" || event.key === "*" || event.key === "/") {
    appendScreen(event.key);
  }
  else if (event.key === "Enter") {
    calculateResults();
  }
  else if (event.key === "Escape") {
    clearScreen();
  }
  else if (event.key === "Backspace") {
    if (!error) {
      const $screen = $("#screen");
      $screen.text($screen.text().slice(0, -1));
    }
  }
}

// Evaluate a formula contained in a string.
function evaluate(formulaString) {
  while (formulaString.indexOf("*") != -1 || formulaString.indexOf("/") != -1) {
    formulaString = evalMultiDiv(formulaString);
  }

  formulaString = evalAddSubtract(formulaString);

  return formulaString;
}

// Evaluate add and subtract - Take into account negative numbers
function evalAddSubtract(formulaString) {
  let i = 0;
  let curNumber = "";
  let formulaOutput = [];

  while (i < formulaString.length) {
    if (formulaString[i] === "+") {
      formulaOutput.push(curNumber);
      curNumber = "";
    }
    else if (formulaString[i] === "-") {
      formulaOutput.push(curNumber);
      curNumber = "-";
    }
    else {
      curNumber += formulaString[i];
    }

    i++;
  }
  formulaOutput.push(curNumber);

  // Add remaining elements and insert the back into the front of the array
  while (formulaOutput.length > 1) {
    let num1 = Number(formulaOutput.shift());
    let num2 = Number(formulaOutput.shift());

    formulaOutput.unshift(num1 + num2);
  }

  return formulaOutput.join("");
}

// Evaluate multiplication and division
function evalMultiDiv(formulaString) {
  let prevNumber = "";
  let curNumber = "";
  let foundOperator;
  let i = 0;
  let j = 0;
  let k = 0;

  while (!curNumber && i < formulaString.length) {
    if (formulaString[i] === "*" || formulaString[i] === "/") {
      let seekingOperator = true;
      foundOperator = formulaString[i];
      j = i;

      while (seekingOperator) {
        j--;

        if (j >= 0) {
          if (!isOperator(formulaString[j])) {
            prevNumber += formulaString[j];
          }
          else {
            seekingOperator = false;
          }
        }
        else {
          seekingOperator = false;
        }
      }

      prevNumber = prevNumber.split("").reverse().join("");
      k = i;
      seekingOperator = true;

      while (seekingOperator) {
        k++;

        if (k < formulaString.length) {
          if (!isOperator(formulaString[k])) {
            curNumber += formulaString[k];
          }
          else {
            seekingOperator = false;
          }
        }
        else {
          seekingOperator = false;
        }
      }

    }

    i++;
  }

  let result = [];
  result.push(formulaString.slice(0, j+1));

  if (foundOperator === "*") {
    result.push(prevNumber * curNumber);
  }
  else if (foundOperator === "/") {
    result.push(prevNumber / curNumber);
  }

  result.push(formulaString.slice(k, formulaString.length));

  return result.join("");
}

// Check if the passed character is a math operator or not
function isOperator(char) {
  if (char === "+" || char === "-" || char === "*" || char === "/") {
    return true;
  }
  return false;
}

let error = false;

$(".buttons").click(buttonClicked);
$("body").keyup(processInput);
