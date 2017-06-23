// variables
let screen = $("#screen");

// event handlers ----------
//grabs the buttons, runs whatButt
$('.buttons').on('click', 'span', whatButt);



function whatButt(event){
  let button = event.target.innerText;
  if (button === "x"){
    screenUpdate("*");
  }
  else if (button === "÷"){
    screenUpdate("/");
  }
  else if (button === "="){
    doMathSon(screen);
  }
  else if (button === "C"){
    onClear();
  }
  else{
  screenUpdate(button);
  }
}

function screenUpdate(button) {
  let oldScreen = screen.text();
  screen.text(oldScreen + button);
}

function doMathSon(screen){
  let screenText = screen.text();
  let testCase = (/[\+\-\/\*]{2}/).test(screenText);
  if(testCase){
    screen.text("Error");
  }
  else if (eval(screenText) === Infinity){
    screen.text("Error");
  }
  else {
  screen.text(eval(screenText));
  }
}

function onClear(){
  screen.text("");
}
