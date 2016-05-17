# jQuery Calculator

Use jQuery to build a basic calculator using the provided HTML and CSS.

![Example](screenshots/example.gif)

More specifically, the app should allow a user to do the following.

- Click an operand or operator to append its corresponding text to the screen.
  - If the screen displays the message `Error`, don't append anything.
- Click the `clear` button to remove all the text from the screen.
- Click the `equals` button to evaluate the arithmetic expression shown in the screen.
  - If the expression is in format `operand(+|-|x|÷)operand`, evaluate the expression and update the screen with the result.
  - If the expression isn't in the correct format or when attempting to divide by zero, update the screen with the message `Error`.

**NOTE:** Try to evaluate the expression without using the `eval()` function.

### Bonus

Add the ability to evaluate an expression with multiple operators.
