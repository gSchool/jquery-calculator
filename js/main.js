$(document).ready(function(){

  var equation = "";

  $('span').on('click', function(event){
    if(event.target.innerText === "=") {
      console.log(eval(equation));
      console.log("hi!");
    }
    if(event.target.innerText === "C") {
      equation = "";
      console.log(equation);
    }
    if(event.target.innerText === "x") {
      equation += "*";
      console.log(equation);
    }
    if(event.target.innerText === "&divide;") {
      equation += '\/';
      console.log(equation);
    }
    var target = $(event.target);
    if (Number(target.text())) {
      equation += target.text();
      console.log(equation);
    }
  });
})
