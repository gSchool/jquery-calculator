var $numbers =$('span').not('.operator'),
$operators=$('span').filter('.operator').not('#equals').not('#clear'),
$equals=$('#equals'),
$screen=$('#screen'),
$clear=$('#clear'),
num1='',
num2='',
operator=''

function clearNum(){
num1='',
num2='',
operator=''

}

function throwError(){
  $screen.text('Error')
  clearNum()
}




$(document).ready(function() {
  $numbers.click(function(){
    if(operator){
      num2 +=$(this).text()
      $screen.text(num1+ operator+ num2)
    }else{
      num1 += $(this).text()
      $screen.text(num1)
    }

  })

  $operators.click(function(){
    if(operator){
      throwError()
    }else{
      operator= $(this).text()
      $screen.text(num1+ operator)
    }

  })
$equals.click(function(){
  if(operator && num2 ==='') {
    throwError()
  }else{
    switch(operator){
      case '+':
        $screen.text(parseInt(num1)+parseInt(num2))
        clearNum()
      break
      case '-':
        $screen.text(parseInt(num1)-parseInt(num2))
        clearNum()
      break
      case 'x':
        $screen.text(parseInt(num1)*parseInt(num2))
        clearNum()
      break
      case '÷':
        if(parseInt(num1)/parseInt(num2)=== Infinity)
          throwError()
        else
          $screen.text(parseInt(num1)/parseInt(num2))

          clearNum()
          break




    }

  }

})

$clear.click(function(){
  clearNum()
  $screen.text('')
})




});
