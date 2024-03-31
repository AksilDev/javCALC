function calcu(num1, num2, op) {
    switch (op) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return "Error: Division by zero!";
            }
        default:
            return "Error: Invalid operator!";
    }
}

function main() {
    var num1 = parseFloat(prompt("Enter first int: "));
    var num2 = parseFloat(prompt("Enter second ints: "));
    var op = prompt("Enter the operator (+, -, *, /): ");

    console.log(calcu(num1, num2, op));
}

main();