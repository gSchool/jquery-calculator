// $(document).ready(function () {
//
//   var info;
//   var screen = [];
//   var answer = [];
//
//   $('span').on('click', function (event) {
//     info = event.target.textContent;
//     var canDivide = document.getElementsByClassName('operator')[1].innerText;
//
// //not sure what this is for.
//     if (answer.length != 0){
//       $('#screen').html("");
//       answer.splice()
//     } ;
// ///
//   if (info !== canDivide && info !== 'x' && info !== 'C' && info !== '=') {
//     $('#screen').append(info);
//     answer.push(info);
//   } else if (info == 'x') {
//     $('#screen').append('x');
//     answer.push('*');
//   } else if (info == canDivide) {
//     $('#screen').append('&divide;');
//     answer.push('/');
//   }
//   });
//
//   $('#calc').on('click', function (event) {
//     answerString = answer.join("");
//     answerNumber = eval(answerString);
//     $('#screen').html("");
//     $('#screen').append(answerNumber);
//     screen.length= 0;
// //whats happening here.
//     answer.push('1');
//     console.log(answer);
//   });
//
//   $('#cancel').on('click', function (event){
//     $('#screen').html("");
//     answer = 0;
//   });
// });

// $(document).ready(function(){
//
//   var info;
//   var answer = [];
//   var fin = [];
//
//   $('span').on('click', function(event){
//     info = event.target.innerText;
//     var divide1 = document.getElementsByClassName('operator')[1].innerText;
//
//     if(fin.length != 0){
//       $('#screen').html("");
//       fin.splice(0, 1);
//     };
//
//     if((info !== '=')&&(info !== 'C')&&(info !== 'x')&&(info !== divide1)){
//       $('#screen').append(info);
//       answer.push(info);
//       console.log(answer);
//     }else if(info == 'x'){
//       $('#screen').append('x');
//       answer.push('*');
//     }else if(info == divide1){
//       $('#screen').append('&divide;');
//       answer.push('/');
//     };
//     console.log(fin);
//   });
//
//   $('#calc').on('click', function(event){
//     anstring = answer.join("");
//     ans = eval(anstring)
//     $('#screen').html("");
//     $('#screen').append(ans);
//     answer.length = 0;
//     fin.push('1');
//     console.log(fin);
//   });
//
//   $('#cancel').on('click', function(event){
//     $('#screen').html("");
//     answer.length = 0;
//   });
//
// });
