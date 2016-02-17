$(function() {
  var screen = document.getElementById('screen');
  var total = 0;
  var firstNum = '';
  var opp = '';
  var disp = 0;

  $('span').on('click', function(e){
    if($(this).attr('id') == 'cancel'){
      firstNum = '';
      opp = '';
      total = 0;
      return firstNum, opp, total;
    }
    if($(this).attr('id') == 'calc'){
      if( opp == 'x' ){
        disp = total * parseInt(firstNum);
        console.log(disp + 'fuckyeah');
      }
      if( opp == '-' ){
        disp = total - parseInt(firstNum);
        console.log(disp + 'fuckyeah');
      }
      if( opp == '+' ){
        disp = total + parseInt(firstNum);
        console.log(disp + 'fuckyeah');
      }
      if( opp == '\xF7' ){
        disp = total / parseInt(firstNum);
        console.log(disp + 'fuckyeah');
      }
    }
    if($(this).attr('class') == 'operator') {
      opp += ($(this).text());
      total = parseInt(firstNum);
      firstNum = '';
      console.log(opp + 'h');
      
    } else {
      firstNum += $(this).text();
      console.log(firstNum + 'f');
    }
  })
})
