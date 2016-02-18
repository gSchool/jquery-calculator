$(document).ready(function(){

  var equation = "";

  $('span').on('click', function(event){
    if(event.target.textContent === "=") {
      console.log(eval(equation));
    } else if(event.target.textContent === "C") {
      equation = "";
      console.log(equation);
    } else if(event.target.textContent === "x") {
      equation += "*";
      console.log(equation);
    } else if(event.target.textContent === "&divide;") {
      equation += "/";
      console.log(equation);
    } else {
      equation += (event.target.textContent);
      console.log(equation);
    }
    // GET SCREEN WORKING
    // $('#screen').textContent = equation;
  });
})
