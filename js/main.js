$(function(){

  var $screen = $('#screen');

  $(".buttons").on('mousedown', function(e){

    function addToScreen(target){

      if($(e.target).is(target))
        $screen.append($(e.target).text());
    }

    addToScreen($("span:contains(0)"));
    addToScreen($("span:contains(1)"));
    addToScreen($("span:contains(2)"));
    addToScreen($("span:contains(3)"));
    addToScreen($("span:contains(4)"));
    addToScreen($("span:contains(5)"));
    addToScreen($("span:contains(6)"));
    addToScreen($("span:contains(7)"));
    addToScreen($("span:contains(8)"));
    addToScreen($("span:contains(9)"));

    addToScreen($(".operator:contains('*')"));
    addToScreen($(".operator:contains('/')"));
    addToScreen($(".operator:contains('+')"));
    addToScreen($(".operator:contains('-')"));
  });

  $('#calc').on('mousedown', function(){
    $screen.text(eval($screen.text()));
  });

  $('#cancel').on('mousedown', function(){
    $screen.empty();
  });
});
