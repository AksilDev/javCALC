// works basta website online javaS compiler
//
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
                return "Error in da Division";
            }
        default:
            return "Error Invalid opertor";
    }
}

function main() {
    var num1 = parseFloat(prompt("Enter first : "));
    var num2 = parseFloat(prompt("Enter seconds : "));
    var op = prompt("Enter operator (+, -, *, /): ");

    console.log(calcu(num1, num2, op));
}

main();