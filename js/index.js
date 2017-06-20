$(document).ready(function(e) {
  $('#1,#2,#3,#4,#5,#6,#7,#8,#9,#zero').click (function(){
    var one = $(this).text();
    console.log(one);
    $('#screen').text($('#screen').text() + one);
  });
});

};
