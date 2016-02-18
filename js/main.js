$(document).ready(function(){

  var equation = "";

  $('span').on('click', function(event){
    if(event.target.textContent === "=") {
      eval(equation);
    }
    if(event.target.textContent === "C") {
      equation = "";
      console.log(equation);
    }
    if(event.target.textContent === "x") {
      equation += "*";
      console.log(equation);
    }
    if(event.target.textContent === "&divide;") {
      equation += "/";
      console.log(equation);
    }
    // if (Number(event.target.text())) {
    //   equation += event.target.text();
    //   console.log(equation);
    // }
// $('#screen')
  });
})
