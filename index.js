$(document).ready(function(){
let calScreen = $("#screen");
let prevNum ='';
let currentNum = '';
let operator = '';
let total = 0;
let currentScreen = '';

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

//clear all function
function clearAll(){
  currentNum ='';
  prevNum =='';
  currentScreen='';
  operator='';
  calScreen.text('');
}

//equals button
$("#equals").click(function(){
Ops(operator)
clearAll();
calScreen.text(total);

})

//operator function
function Ops(s){
  if(s ==="÷"){
    total = (parseInt(prevNum) / parseInt(currentNum)).toString();
  }
  else if(s ==="+"){
    total = (parseInt(prevNum) + parseInt(currentNum)).toString();
  }
  else if(s ==="-"){
    total = (parseInt(prevNum) - parseInt(currentNum)).toString();
  }
  else if(s ==="x"){
    total = (parseInt(prevNum) * parseInt(currentNum)).toString();
  }
}

//clear
$("#clear").click(function(){
  if($(this).text()==="C"){
    clearAll();
  }
});
})
