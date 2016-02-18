$(function(){
  // alert("document ready")
      var str = '';
      var output = $('#screen')

    $('.buttons span').on('click',function(){
      var input = ($(this).html());
      output.html(input)
      if(input === "x"){
        str += '*';
      } else if(input === "C"){
        str = '0';
        output.html(0);
      } else if(input === "%"){
        str += '/';  
      } else if (input === '='){    
        console.log('result: ', eval(str))
        output.html(eval(str))
      } else {
        str += input;
      }
      // output.html(str)
      console.log(str)
    });
  })
  // $()


      // } else if(input === "+"){
      //   str += '+';      
      // } else if(input === "+"){
      //   str += '+';
      // var digit = parseInt($(this).html());
      // console.log($(this).html());
      //string 
      // var digit = parseInt($(this).html());
      // var operator = ($(this).html());
      // if(digit === "x"){
      //   inputs.push('*');
      // } else if(digit === "+"){
      //   inputs.push('\+');
      // } else if (digit === "-"){
      //   inputs.push('\-');
      // } else if (digit === "%"){
      //  inputs.push('\&divide');
      // } else if (digit === "C"){
      //   inputs.push('inputs[] && inputs[]')
      // } else if(digit === "\="){

      // }
      // if(!isNaN(digit)){
      //   inputs.push(digit);
      // }else (inputs.push(operator));
      // only push numbers to inputs
      // console.log(inputs);
      // console.log(inputs);



    // $('.buttons .operators').on('click',function(){
      // if()
    // });
    // handles operators
    // $('.buttons .operators')...
    // check $(this).html() value and use if()s to do appropriate arithmetic 

// });




