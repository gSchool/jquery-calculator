
$(document).ready(function(){
  var number = "";
  var number1 = "";
  var number2 = "";
  var screenResult = "";
  var operators = ["+", "-", "*", "/"]
  $("span").not("#clear, #equals").click(function(){
   number += $(this).text();
		$("#screen").text(number);
  })

  $("#clear").click(function(){
    number = ""
    $("#screen").text(number);
  })

  $("#equals").click(function(){
    number=number.replace("x", "*")
    number=number.replace("\xF7", "/")
    count = 0
    for (var i =0; i < number.length; i++){
      for (var j = 0; j< operators.length; j++){
        if (number[i] === operators[j]){
          count++
          var oper = operators[j]
          var op = number.indexOf(operators[j])
          number1 = number.slice(0, op)
          number2 = number.slice(op+1, number.length)
          number1 = parseInt(number1)
          number2 = parseInt(number2)
          if (count !== 1){
            $("#screen").text("Error")
          }
          else if(oper === "-"){
            $("#screen").text(number1 - number2)
          }
          else if(oper === "*"){
            $("#screen").text(number1 * number2)
          }
          else if (oper === "/"){
            $("#screen").text(number1 / number2)
          }
          else if (oper === "+"){
            $("#screen").text(number1 + number2)
          }
          else {
            $("#screen").text("Error")
          }
        }
      }
    }
    if ($("#screen").text() === "Infinity"){
      $("#screen").text("Error")
    }
    if($("#screen").text() === "NaN"){
      $("#screen").text("Error")
    }
  })
})
