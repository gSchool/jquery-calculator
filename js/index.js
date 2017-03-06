var allSpans = document.querySelectorAll('span');
var multi = allSpans[1];
var divid = allSpans[2];
multi.textContent = "/";
divid.textContent = "*";
var calcMode = true;

$(document).ready(function(){
  $(allSpans).not('#clear').not('#equals').click(function(event){
    if(calcMode){
      $('#screen').append(this.textContent)
    }
  })
  $('#clear').click(function(event){
    $('#screen').html("")
    calcMode = true;
  })
  $('#equals').click(function(event){
    calcMode = false;
    var error = 0
    var $equation = $('#screen').html()
    console.log($equation)
    if($equation.length > 1){
      var splitter = $equation.split('');
      var len = splitter.length
      for(var i = 0; i < splitter.length - 1; i++){
        console.log("First char is: " + splitter[0])
        if(splitter[0] === "/" || splitter[0] === "*" || splitter[0] === "+" || splitter[0] === "-"){
          error++
        }
        if(splitter[len - 1] === "-" || splitter[len - 1] === "/" || splitter[len - 1] === "+" || splitter[len - 1] === "*"){
          error++
        }
        if(splitter[i] === "/" || splitter[i] === "*" || splitter[i] === "+" || splitter[i] === "-"){
          if(splitter[i+1] === "-" || splitter[i+1] === "*" || splitter[i+1] === "+" || splitter[i+1] === "/"){
            error++
          }
        }
      }
    }
    else{
      error++
      console.log("Expression was only one character")
    }
    $("#screen").html("")
    if(error > 0){
      $('#screen').html("ERROR")
    }
    else{
      $('#screen').html(eval($equation))
    }
})
})
