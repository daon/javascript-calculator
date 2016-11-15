var calculator = (function () {
    var input = '';
    var expression = [];

    var calculate = function (firstNumber, operation) {
        return function (secondNumber) {
            return operation(parseInt(firstNumber, 10), parseInt(secondNumber, 10));
        }
    };

    var operations = {
        '+': function (a, b) {
            return a + b;
        },
        '-': function (a, b) {
            return a - b;
        },
        '*': function (a, b) {
            return a * b;
        },
        '/': function (a, b) {
            return a / b;
        }
    };

    var getResult = function () {
        return expression.reduce(function (firstSymbol, secondSymbol) {
            if (typeof firstSymbol === 'function') {
                return firstSymbol(secondSymbol);
            }

            return calculate(firstSymbol, operations[secondSymbol]);
        });
    };

    var isOperator = function (input) {
        return operations.hasOwnProperty(input) || input === '=';
    };

    return {
        getInput: function () {
            return input || '0';
        },

        getOutput: function () {
            return expression.join('') + input || '0';
        },

        inputDigit: function (digit) {
            if (isOperator(input)) {
                expression.push(input);
                input = '';
            }
            input += digit.toString();
        },

        inputOperator: function (operator) {
            if (isOperator(input) && !isOperator(operator)) { return; }

            expression.push(input);
            if (operator === '=') {
                var result = getResult();
                expression.push(operator);
                input = result.toString();
            } else {
                input = operator;
            }
        },

    };
})();

module.exports = calculator;