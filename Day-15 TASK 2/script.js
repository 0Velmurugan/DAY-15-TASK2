let display = document.getElementById('display');
let expression = '';

function appendToDisplay(value) {
    expression += value;
    display.value = expression;
}

function clearDisplay() {
    expression = '';
    display.value = '';
}

function calculateResult() {
    try {
        const result = eval(expression);
        display.value = result;
        expression = result.toString();
    } catch (error) {
        alert("Invalid expression");
        clearDisplay("");
    }
}

// Event listener for handling keyboard input
document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (/[\d+\-*/.=]/.test(key)) {
        appendToDisplay(key);
    } else {
        alert("Only numbers and operators (+, -, *, /) are allowed.");
    }
});