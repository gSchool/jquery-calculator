
var number = ""

          function displayNum(){
            $("span").on("click", function(){
              if ($(this).text() == "="){
                var result = eval(number);
                console.log(result);
                $("#screen").text(result);
              }
              else if ($(this).text() == "C") {
                  $("#screen").text("");
              }
              else if ($(this).text() == "X") {
                //.console.log(number);
                var multiply = '*'
                number = number + multiply;
               }
               else if ($(this).text() == "/") {
                 //.console.log(number);
                 var divide = '/'
                 number = number + divide;
                }

              else{

              number = number + $(this).text();
              $("#screen").text(number);
              }


            })
          };

          displayNum();
