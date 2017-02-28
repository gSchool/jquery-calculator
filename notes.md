Div screen
  - has to take values from numbers keys
  - has to store values somewhere (maybe in a string?)
  - has to be accessed to with clear function to wipe out what ever is stored there previously and ready it for next input

The number buttons
  - have to be tied to individual values
  - will be constants to be called on
  - ???do i need to assign these values or can I access their numbers they are already given in the spans???
    - get said span content and populate it in div container when clicked.

The operators
  - x will execute a multiply function
  - divide will execute division function
  - - will execute subtraction function
  - + will execute addition function
  - C will execute a function that targets what ever I am using to hold all my data at div screen and wipe it clean. I am guessing I can find a way to make it just substitute a string with an empty value.
  ???does this mean I should already have an empty string in the div container???
  - = will have to return result of any function to the div screen
    - actually equals need to be the one to execute the function my notes above will be wrong. The operators will only need to be a function to do each thing.
    - I think this means each operator would look like this: function multiply(){
      anynumber * anynumber
    }
    - which means in this case equals would be: return multiply
    - but because there are multiple operators we need to I think create a listener on equals that listens for last pressed operator and runs the function then returns it to the div screen.
    -this makes me feel like when I click a number and it is pushed to the div screen there needs to be a listener for either another number to be pressed or an operator
    -if the operator is pressed we need to wait until another number is pressed and then find a way to grab those two numbers and apply them to the clicked operator. I am still unsure where I am going to store things in the div screen and because of that I am unsure of the best way to access that data.

  TESTING/THE PROCESS
1) I want to see if I can just start out small and figure out a way that when a number is clicked it is auto stored in the div container.

$(document).ready(function(e) {
  $('#1').click (function(){
  var $one = $('#1');
  console.log($one);
  })
  })
}
 - ok so it took me like 20 minutes to figure out how to do that. At least I now know how to find what I am doing by console logging. Baby steps.
2)Now that I know the syntax for isolating #1 I want to figure out how to gets its value and then transplant it to div screen.
- ok just figured out how to access the content of the span and it required using (this) and .text.

$('#1').click (function(){
var one = $(this).text();
console.log(one);
})
})

3) This will be figuring out how to actually take the value of my variable one and put it in the container. I suspect i need to make the display container a variable and have to set its value to and empty string.
  - well I figured out how to get it on the screen i just added the value of one to the screen when clicked but right now it is only putting in the value of one. I need to set all the number buttons to specific id's and then make them one variable based on a click here is were I am at so far

  $(document).ready(function(e) {
    $('#1').click (function(){
      var one = $(this).text();
      console.log(one);
      $('#screen').text(one)
    });
  });
4) set all the spans with number values to an id with the corresponding number.
5)I am going to try and figure out how to make the numbers stay on the #screen after I click a new number
  - so here is the issue I am running into I can't get the variable one to stay in the screen. I have tried multiple methods and none of them work
   $('#srceen').text($('#screen').text() + one)
    - nothing pops in screen
   $('#srceen').text($('#screen').text(one) )
    - I get what ever number I click on in between the divs holding screen but the value wont stay
    -LOL IDIOT LEARN TO SPELL SCREEN SHOUT OUT TO COURTNEY AND THE VALUE OF BREAKS
    $('#screen').text($('#screen').text('') + one);
    - this returns [object Object] and whatever number was clicked. I dont want an object I want a string.
    -need to figure out how to make that a string so I can store new vals and keep old vals and also erase it with the C operator
    $('#screen').text($('#screen').text() + one)
      - This one works after I removed the '' from the content of text() I dont know why but it was creating a new object and not a string. Ask about this in class.
  
