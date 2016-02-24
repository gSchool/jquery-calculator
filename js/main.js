
var selectedOperator;
var selectedNumber;
var togetherNum;
var firstNum;
var firstThing = true;
var secondThing;
var secondNum;
var result;

var itsMath = {
	"+": function (x, y) { return x + y; },
    "-": function (x, y) { return x - y; },
    "x": function (x, y) { return x * y; },
    "÷": function (x,y)  {return x / y;},
    "&divide;": function (x,y)  {return x / y;}
};


$(function(){

// Getting Numbers
$("span").not(".operator").click(function(){
	if(firstThing){
		if(selectedNumber === undefined){
			selectedNumber = this.innerText;
			$("#screen").text(selectedNumber);
		} else {
			togetherNum = this.innerText;
			selectedNumber = selectedNumber+togetherNum;
			$("#screen").text(selectedNumber);
		}
		firstNum= parseInt(selectedNumber);


	} else {
		console.log("hi");
		if(selectedNumber === undefined){
			selectedNumber = this.innerText;
			$("#screen").text(firstNum + selectedOperator + selectedNumber);
		} else {
			togetherNum = this.innerText;
			selectedNumber = selectedNumber+togetherNum;
			$("#screen").text(firstNum+ selectedOperator + selectedNumber);
			
		}
		secondNum = parseInt(selectedNumber);
		
	}
});

$(".operator").not("#cancel").not("#calc").click(function(){
	selectedOperator = this.innerText;
	$("#screen").text(firstNum+ selectedOperator);
	firstThing = !firstThing;
	selectedNumber = undefined;

});


$("#calc").click(function(){
	result = itsMath[selectedOperator](firstNum,secondNum);
	$("#screen").text(result);


});

$("#cancel").click(function(){
	selectedNumber = undefined;
	selectedOperator = undefined;
	togetherNum = undefined;
	$("#screen").text("");
	firstNum= undefined;
	firstThing = true;
	secondThing= undefined;
	secondNum= undefined;
	result= undefined;

});

});

