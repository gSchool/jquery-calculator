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
