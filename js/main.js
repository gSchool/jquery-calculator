
var innerArray = []
var array = []
var operator = ""
var prevOperator = ""

$(document).ready(function(){

  $('span:not(.operator)').on('click', function(){
    innerArray.push($(this).text());
    })

  $('.operator').on('click', function(){
    if (array.length == 0){
    array[0] = parseInt(innerArray.join(''))
  } else {
    array[1] = parseInt(innerArray.join(''))
  }
    innerArray = [];
    prevOperator = operator;
    operator = $(this).text();

  if (operator == "C"){
    array = [];
  }

  });

  $('.operator').on('click', function(){
    if (array.length == 2){
      switch(prevOperator){
        case "+":
        array[0] = (array[0] + array[1]);
        break;
        case "-":
        array[0] = (array[0]) - (array[1]);
        break;
        case "x":
        array[0] = (array[0]) * (array[1]);
        break;
        case "divide":
        array[0] = ((array[0]) / (array[1]));
        break;
      }
      array.pop();
    }
  });



  $(document).on('click', function(){
    if ((array.length) == 1 && innerArray.length == 0){
      console.log('array[0] test: ' + array[0]);
      $('#screen').text(array[0]);
    } else {
    $('#screen').text((innerArray).join(''));
  }
})



  $(document).on('click', function(){
    console.log("inner array:" + innerArray.join(''));
    console.log("array[0]: " + array[0])
    console.log("operator: " + operator)
    console.log("array.length: " + array.length)
  });




});
