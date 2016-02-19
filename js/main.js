$(document).ready(function(){

  $( "body" ).on('click', function( event ) {

    var info = $(event.target).text();
      if(typeof Number(info) === 'number'){
          $('#screen').append(info);
      }

      if (event.target == '+'){
          calculation = calculation.join("");
        }

    });
});

    // console.log(calculation);
    //
    // if(event.target === '='){
    //
    // var sum = calculation.join("");
    //
    // $('#screen').append(res);
    //
    // var res = ( new Function( sum ) )();


//
// $(function() {
//   var scrn = document.getElementById('screen');
//   var show = document.createElement('p');
//   show.style.textAlign = 'right';
//   show.style.marginTop = '-4px';
//   var firstNum = '';
//   var opp = '';
//   var total = 0;
//   var disp = 0;
//   var last = 0;
//
//   $('span').on('click', function() {
//     if ($(this).attr('id') == 'cancel') {
//       scrn.removeChild(scrn.lastChild)
//       firstNum = '';
//       opp = '';
//       total = 0;
//       last = 0;
//       disp = 0;
//       return firstNum, opp, total, last;
//     }
//     if ($(this).attr('id') == 'calc') {
//       if (opp.substr(opp.length - 1) == 'x') {
//         if (scrn.hasChildNodes()) {
//           scrn.removeChild(scrn.lastChild);
//         }
//         disp = total * parseInt(firstNum);
//         last = disp;
//         show.innerText = disp;
//         scrn.appendChild(show)
//       }
//       if (opp.substr(opp.length - 1) == '-') {
//         if (scrn.hasChildNodes()) {
//           scrn.removeChild(scrn.lastChild);
//         }
//         disp = total - parseInt(firstNum);
//         last = disp;
//         show.innerText = disp;
//         scrn.appendChild(show)
//       }
//       if (opp.substr(opp.length - 1) == '+') {
//         if (scrn.hasChildNodes()) {
//           scrn.removeChild(scrn.lastChild);
//         }
//         disp = total + parseInt(firstNum);
//         last = disp;
//         show.innerText = disp;
//         scrn.appendChild(show);
//       }
//       if (opp.substr(opp.length - 1) == '\xF7') {
//         if (scrn.hasChildNodes()) {
//           scrn.removeChild(scrn.lastChild);
//         }
//         disp = total / parseInt(firstNum);
//         last = disp;
//         show.innerText = disp;
//         scrn.appendChild(show);
//       }
//     }
//     if ($(this).attr('class') == 'operator') {
//       if (last !== 0) {
//         opp += ($(this).text());
//         total = last;
//         firstNum = '';
//
//       } else {
//         opp += ($(this).text());
//         total = parseInt(firstNum);
//         firstNum = '';
//       }
//     } else {
//       if (scrn.hasChildNodes()) {
//         scrn.removeChild(scrn.lastChild);
//       }
//       firstNum += $(this).text()
//       show.innerText = firstNum;
//       scrn.appendChild(show);
//     }
//   })
// })
