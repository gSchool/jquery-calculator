var firstNum;
var nextNum;
var finalNum;
var screenNum = [];
var operator;

//Converts the array for the display to a number
function combineNum(array){
	var stringArray = [];
	var number = 0;
	for (var i = 0; i < array.length; i++){
		stringArray.push(array[i].toString());
		number += stringArray[i];
	}
	return (Number(number));
}

$(document).ready(function() { 



	//First number click.
  $("span").not(".operator").click(function() { 
    screenNum.push(Number(this.innerHTML));
    $("#screen").html(screenNum); 
  });

  $(".operator").not("#cancel").not("#calc").click(function(){
		if (firstNum){
			nextNum = combineNum(screenNum);			
		}
		else { 
			firstNum = combineNum(screenNum);
		}	
		operator = this.innerHTML;	
		$('#screen').html(operator);
		screenNum = [];
  });		

 	$("#calc").click(function(){
		nextNum = combineNum(screenNum);
		if (operator === "+"){
			finalNum = firstNum + nextNum;
		}
		else if (operator === "-"){
			finalNum = firstNum - nextNum;
		}
		else if (operator === "x"){
			finalNum = firstNum * nextNum;
		}
		else {
			finalNum = firstNum / nextNum;
		}
		screenNum = finalNum;
		$("#screen").html(screenNum); 
		operator = "";
		firstNum = finalNum;
		nextNum = 0;
		screenNum = [];
  });
  //cancel button
  $("#cancel").click(function(){
  	firstNum = 0; 
  	nextNum = 0; 
  	finalNum = 0;
  	screenNum = [];
  	operator = "";
  	$("#screen").html(screenNum); 
  }); 		

});