//////USING EVAL IS NOT ALLOWED BUT HERE IS what im working on in its place

//////////////////////////////

//   function resetCalculator(curValue) {
//   $("#screen").val(curValue);
//   $(".operator").removeClass("pendingFunction");
//   $("#screen").data("isPendingFunction", false);
//   $("#screen").data("thePendingFunction", "");
//   $("#screen").data("valueOneLocked", false);
//   $("#screen").data("valueTwoLocked", false);
//   $("#screen").data("valueOne", curValue);
//   $("#screen").data("valueTwo", 0);
//   $("#screen").data("fromPrevious", false);
// }
//
// $("span").click(function(e){
// var but = $(this).text();
// console.log(but);
// console.log("anything");
// if ($("#screen").data("fromPrevious") == true) {
//
//     resetCalculator($(e.target).text());
//
// } else if (($("#screen").data("isPendingFunction") == true) && ($("#screen").data("valueOneLocked") == false)) {
//
//     $("#screen").data("valueOne", $("#screen").val());
//     $("#screen").data("valueOneLocked", true);
//
//     $("#screen").val($(e.target).text());
//     $("#screen").data("valueTwo", $("#screen").val());
//     $("#screen").data("valueTwoLocked", true);
//
// // Clicking a number AGAIN, after first number locked and already value for second number
// } else if (($("#screen").data("isPendingFunction") == true) && ($("#screen").data("valueOneLocked") == true)) {
//
//     var curValue = $("#screen").val();
//     var toAdd = $(e.target).text();
//
//     var newValue = curValue + toAdd;
//
//     $("#screen").val(newValue);
//
//     $("#screen").data("valueTwo", $("#screen").val());
//     $("#screen").data("valueTwoLocked", true);
//
// // Clicking on a number fresh
// } else {
//
//     var curValue = $("#screen").val();
//     if (curValue == "0") {
//         curValue = "";
//     }
//
//     var toAdd = $(e.target).text();
//
//     var newValue = curValue + toAdd;
//
//     $("#screen").val(newValue);
//
// }
//
// });
//
//     $("#cancel").click(function(){
//     resetCalculator("0");
// });
//
// $(".operator").click(function(){
//
// if ($("#screen").data("fromPrevious") == true) {
//     resetCalculator($("#screen").val());
//     $("#screen").data("valueOneLocked", false);
//     $("#screen").data("fromPrevious", false)
// }
//
// // Let it be known that a function has been selected
// var pendingFunction = $(this).text();
// $("#screen").data("isPendingFunction", true);
// $("#screen").data("thePendingFunction", pendingFunction);
//
// // Visually represent the current function
// $(".operator").removeClass("pendingFunction");
// $(this).addClass("pendingFunction");
// });
//
// $("#calc").click(function(){
//
// if (($("#screen").data("valueOneLocked") == true) && ($("#screen").data("valueTwoLocked") == true)) {
//
//     if ($("#screen").data("thePendingFunction") == "+") {
//         var finalValue = parseFloat($("#screen").data("valueOne")) +  parseFloat($("#screen").data("valueTwo"));
//     } else if ($("#screen").data("thePendingFunction") == "%u2013") {
//         var finalValue = parseFloat($("#screen").data("valueOne")) - parseFloat($("#screen").data("valueTwo"));
//     } else if ($("#screen").data("thePendingFunction") == "x") {
//         var finalValue = parseFloat($("#screen").data("valueOne")) * parseFloat($("#screen").data("valueTwo"));
//     } else if ($("#screen").data("thePendingFunction") == "/") {
//         var finalValue = parseFloat($("#screen").data("valueOne")) / parseFloat($("#screen").data("valueTwo"));
//     }
//
//     $("#screen").val(finalValue);
//     console.log(finalValue);
//
//     resetCalculator(finalValue);
//     $("#screen").data("fromPrevious", true);
//
// } else {
//     // both numbers are not locked, do nothing.
// }
//
// });
// console.log()
//
//
// });
  //////////////////////////////
