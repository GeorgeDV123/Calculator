/*
const add = function(num1, num2) {
    result = num1 + num2;
    return(result);
};

const subtract = function(num1, num2) {
    result = num1 - num2;
    return(result);
};

const divide = function(num1, num2) {
    result = num1 / num2;
    return(result);
};

const mulitply = function(num1, num2) {
    result = num1 * num2;
    return(result);
};

*/

function operate(op, num1, num2) {
    if (op == "+") {
        result = num1 + num2;
        return(result);
    } else if (op == "-") {
        result = num1 - num2;
        return(result);
    } else if (op == "/") {
        result = num1 / num2;
        return(result);
    } else if (op == "*") {
        result = num1 * num2;
        return(result);
    }
}

operate("*", 5, 10)