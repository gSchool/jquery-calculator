$( document ).ready(function(e) {
// variables
	var result,op;
// click listener of numbers
	$("span:not(.operator)").click(function(e){
		var str = $(this).text();
		$("#screen").append( str );
	});
// click listener for operators
	$("#cancel").click(function(e){
		$("#screen").empty();
		result=0;
	});

	$(".operator:not(#calc):not(#cancel)").click(function(e){
		var str = $(this).text();
		$("#screen").append(str);
		op=str;
	});

	$("#calc").click(function(e){
		var num=$("#screen").text().split(op);
		switch(op) {
		    case "+":
		        result=parseInt(num[0])+parseInt(num[1]);
		        break;
		    case "-":
		        result=parseInt(num[0])-parseInt(num[1]);
		        break;
		    case "x":
		        result=parseInt(num[0])*parseInt(num[1]);
		        break;
		    case "\u00f7":
		        result=parseInt(num[0])/parseInt(num[1]);
		        break;
		    default:
		        break;
		}
		$("#screen").empty();
		$("#screen").append( result );
	});
});