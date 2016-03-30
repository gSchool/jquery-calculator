function calcEvents(){
  var numbers = "";
  $('span').each(function(){
    $(this).on('click', function (){
      if (($(this).text()) === "="){
        function equals(fn) {
          return new Function('return ' + fn)();
          }
        var result = equals(numbers)
        $('#screen').text(result)
      }else if (($(this).text()) === "C"){
        numbers = ""
        $('#screen').text(numbers)
      } else{
      numbers = numbers + ($(this).text())
      $('#screen').text(numbers)
      }
    })
  })

}

calcEvents();
