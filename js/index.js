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
  let evalStr = screen.text();
  screen.text(eval(screen.text()));
}

function onClear(){
  screen.text("");
}
