function calculate(num1, num2, op) {
    switch (op) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return "Infinity";
            }
            return num1 / num2;
        default:
            return "Unsupported operator";
    }
}

function main() {
    console.log(calculate(5, 3, '+'));
    console.log(calculate(10, 4, '-')); 
    console.log(calculate(6, 2, '*')); 
    console.log(calculate(8, 2, '/')); 
    console.log(calculate(10, 0, '/')); 
}


main();