// $("#buttons-container").on("click", "span", cbButtons);
$("div .buttons span").on("click", cbButtons);

$screen = $("div #screen");
strScreen = "";

bScreenShowsEval = false;

function cbButtons(event) {
  strButton = $(event.target).text();
  console.log("enter cb: " + strScreen);
  //prevent useer from entering bad first signs
  if(strScreen==="" && (strButton==="÷" || strButton==="x" || strButton==="+"))
  {
    return;
  }

  if(strButton==="C") {
    console.log("clear");
    strScreen = "";
    screen(strScreen);
  } else if(strButton==="=") {
    console.log("eval");

    //---switch out "x" and "÷" with "*" and "/" so eval will work
    strScreen = strScreen.replace(/÷/gi, "/");
    strScreen = strScreen.replace(/x/gi, "*");
    //---

    //check for divide by zero Err
    evalResult = eval(strScreen);
    if(evalResult===Infinity) {
      screen("error");
      strScreen = ""; //clear existing eval string
      return
    }

    strScreen = eval(strScreen);
    screen(strScreen);
    bScreenShowsEval=true;

  } else {
    console.log(strButton);
    //button could be a number or operator
    //so if it is number, then clear if showing eval.
    toggleScreenClear();
    strScreen+=strButton;
    screen(strScreen);
  }
}

function screen(str) {
  $screen.text(str);
}

function toggleScreenClear() {
  if(["1","2","3","4","5","6","7","8","9","0"].indexOf(strButton) === -1) {
    bScreenShowsEval=false;
    return;
  }

  if(bScreenShowsEval) {
    strScreen="";
    screen(strScreen);
    bScreenShowsEval=false;
  }
}
