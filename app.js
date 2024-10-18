let numButtons = document.querySelectorAll(".numbers button"); 
let operatorButtons = document.querySelectorAll(".operators button");
let display = document.querySelector(".screen h2");
let expression = '';

// Handling number buttons
numButtons.forEach(button => {
    button.addEventListener("click", () => {
        // Append the clicked number to the expression and update the display
        expression += button.innerText;
        display.innerText = expression;
    });
});

// Handling operator buttons
operatorButtons.forEach(opButton => {
    opButton.addEventListener("click", () => {
        const operator = opButton.innerText;
        
        // Convert 'x' to '*' for multiplication
        if (operator === "x") {
            expression += '*';
        } else if (operator === "=") {
            try {
                // Evaluate the expression using eval and display the result
                let result = eval(expression);
                display.innerText = result;
                expression = result.toString(); // Store the result for further operations
            } catch (error) {
                display.innerText = "Error";  // Handle any invalid expression
                expression = '';  // Reset expression in case of error
            }
        } else {
            expression += operator;
              // Append the operator to the expression
        }
        
        display.innerText = expression;
    });
});
let openBracket = document.querySelector(".open-bracket");
let closeBracket = document.querySelector(".close-bracket");

openBracket.addEventListener("click", () => {
    expression += '(';
    display.innerText = expression;
});

closeBracket.addEventListener("click", () => {
    expression += ')';
    display.innerText = expression;
});
// Clear display when AC is clicked
let AC = document.querySelector(".AC");
AC.addEventListener("click", () => {
    display.innerText = "";
    expression = '';  // Reset the expression
});

// Delete the last character when DEL is clicked
let del = document.querySelector(".del");
del.addEventListener("click", () => {
    expression = expression.slice(0, -1);  // Remove last character from the expression
    display.innerText = expression;
});
