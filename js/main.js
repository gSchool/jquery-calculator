$(function(){
	//add buttons clicked to the screen
	$(".buttons span").not('#calc').click(function(e){
		scr +=($(this).text());
		$("#screen").text(scr);
	});

	//to clear the screen
	$("#cancel").click(function(e){
		scr = "";
		$("#screen").text(scr);
	});

	//to set which operator was selected
	$(".operator").not('#calc').click(function(e){
		func = $(this).text();
	});

	$("#calc").click(function(e){
		equal();
	});
});


var func; //variable to hold which operator was selected
var scr = ""; //string for the screen


function equal(){
	if (func === "+"){ //if statement to choose which function
		spl = scr.split("+"); //split it to remove the symbol and create an array of the two strings
		add(spl);
	} else if (func === "-"){
		spl = scr.split("-");
		subtract(spl);
	} else if (func === "x"){
		spl = scr.split("x");
		multiply(spl);
	} else if (func === "÷"){
		spl = scr.split("÷");
		divide(spl);
	}
}


function add (array){
	scr= parseInt(array[0])+parseInt(array[1]);//chaning the array values from strings to integers
	$("#screen").text(scr);
}
function subtract (array){
	scr= parseInt(array[0])-parseInt(array[1]);
	$("#screen").text(scr);

}

function multiply (array){
	scr= parseInt(array[0])*parseInt(array[1]);
	$("#screen").text(scr);

}

function divide (array){
	scr= parseInt(array[0])/parseInt(array[1]);
	$("#screen").text(scr);

}




//function to log each click and put it in the screen
//click on functions
//doesnt run anything until