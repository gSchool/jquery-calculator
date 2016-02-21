$(function () {

  $("#button-container span").on('click', function(event) {
    console.log(event)

    var info = $(event.target).text();
    var calcClass = event.target.className;
    var calcId = event.target.id;


    if(calcId === 'cancel') {

      $('#screen').empty();

    } else if(calcId === 'calc') {

      var formula = $('#screen').text();
      var newVar = eval(formula);
      console.log(newVar);
      console.log(formula);
      $('#screen').text(newVar);

    } else {
      $('#screen').append(info);
    }


  });

})
