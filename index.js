var calScreen = $("#screen");
var prevNum ='';
var currentNum = '';
var operator = '';
var total = 0;
var currentScreen = '';
//buttons.
$(".buttons > span, #zero").not(".operator, .clear").click(function(){
  currentNum+=$(this).text();
  calScreen.text(currentScreen+currentNum);
})

//operator
$(".operator").not("#equals, #clear").click(function(){

  operator= $(this).text();
  prevNum=currentNum;
  currentNum ='';
  currentScreen=prevNum + operator;
  calScreen.text(currentScreen);

})

//equals
$("#equals").click(function(){

  if(operator ==="÷"){
    total = (parseInt(prevNum) / parseInt(currentNum)).toString();
  }
  else if(operator ==="+"){
    total = (parseInt(prevNum) + parseInt(currentNum)).toString();
  }
  else if(operator ==="-"){
    total = (parseInt(prevNum) - parseInt(currentNum)).toString();
  }
  else if(operator ==="x"){
    total = (parseInt(prevNum) * parseInt(currentNum)).toString();
  }


calScreen.text(total);
currentScreen ='';
currentNum ='';
prevNum = '';
})
//clear
$("#clear").click(function(){
  if($(this).text()==="C"){
    currentNum ='';
    prevNum =='';
    currentScreen='';
    operator='';
    calScreen.text('');
  }
});
