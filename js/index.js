$("span").not($("#equals, #clear")).click(function(){
  var $num = $(this);
  var $numText = $num.text();
  var $screenText = $("#screen").append($numText);
  console.log($screenText.text())
});

$("#clear").click(function(){
  return $("#screen").text("")
});

$("#equals").click(function(){
  var $numString = $("#screen").text().replace("÷", "/").replace("x", "*");
  if (eval($numString) == Infinity){
    $("#screen").text("Error")
  } else {
    $("#screen").text(eval($numString));
  }
  console.log($("#screen").text())
});
