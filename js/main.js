$( document ).ready(function(e) {
	var n=[];
	var n2=[];
	var result;
	var op;
	var index=0;
	$("#one,#two,#three,#four,#five,#six,#seven,#eight,#nine,#zero").click(function(e){
		var str = $(this).text();
		$("#screen").append( str );
	});
	// operators

	$("#cancel").click(function(e){
		$("#screen").empty();
		n=[];
		n2=[];
		result=0;
	});

	$("#divide").click(function(e){
		n = $("#screen").text();
		$("#screen").append( "/" );
		op="/";
		index=n.length;
	});
	$("#multi,#sub,#sum").click(function(e){
		n = $("#screen").text();
		var str = $(this).text();
		$("#screen").append( str );
		op=str;
		index=n.length;
	});
	$("#calc").click(function(e){
		n2 = $("#screen").text().slice(index+1);
		switch(op) {
		    case "+":
		        result=parseInt(n)+parseInt(n2);
		        break;
		    case "-":
		        result=parseInt(n)-parseInt(n2);
		        break;
		    case "x":
		        result=parseInt(n)*parseInt(n2);
		        break;
		    case "/":
		        result=parseInt(n)/parseInt(n2);
		        break;
		    default:
		        break;
		}
		$("#screen").empty();
		$("#screen").append( result );
	});
});