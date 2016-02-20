// $(function(){
//   var equation = [],
//       current = '';
//   $('span').on('click', function(event){
//
//     if(event.target.id === "calc"){
//
//     }
//     else{
//     $("#screen").text($(this).text())
//     equation.push($(this).text());
//     current = equation.join("")
//     }
//   })
//
// })

$(function(){
  var equation = '',
      number = true,
      clear = false;
  $('.buttons').children().on('click', function(event){
    var special = event.target.textContent;

    if(special === "="){
      if(number === true){
      equation = eval(equation);
      number = false;
      clear = false;
    } else if (special === "C"){
      equation = '';
      number = true;
      clear = false;
    }else if (special === "x"){
      equation += "*";
      clear = true;
    }else if (special === "&divide;"){
      equation += "/";
      clear = true;
    }else if (special === "+"){
      equation += "+";
      clear = true;
    }else if (special === "-"){
      equation += "-";
      clear = true;
    }else{
      if(number === true || clear === true){
      equation += event.target.textContent;
        }
      }
    }
    $("#screen").html(equation)
  })
})
