var calculator = (function () {
    var inputs = [];
    var currentInput = 0;
    var expression = '0';

    var operators = {
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

    var isOperator = function (input) {
        return operators.hasOwnProperty(input);
    };

    var commands = {
        'AC': function() {
            inputs = [];
            currentInput = '0';
        },
        'CE': function() {
            currentInput = '0';
        },
        '=': function() {
            if (inputs.length < 2  || isOperator(currentInput)) {
                return false;
            }
            inputs.push(currentInput);
            currentInput = getResult();
            expression = inputs.join('') + '=' + currentInput.toString();
            inputs = [];
        },
        '.': function() {

        }
    };

    var isCommand = function (input) {
        return commands.hasOwnProperty(input);
    };

    var calculate = function (firstNumber, operator) {
        return function (secondNumber) {
            return operator(firstNumber, secondNumber);
        }
    };

    var getResult = function () {
        return inputs.reduce(function (firstSymbol, secondSymbol) {
            if (typeof firstSymbol === 'function') {
                return firstSymbol(secondSymbol);
            }

            return calculate(firstSymbol, operators[secondSymbol]);
        });
    };

    var isDigit = function(input) {
        return input >= 0 && input < 10;
    };

    var isNumber = function(input) {
        return typeof input === 'number' && !isNaN(input);
    };

    return {
        getCurrentInput: function () {
            return currentInput.toString();
        },

        getExpression: function () {
            return expression;
        },

        addInput: function (input) {
            if (isCommand(input)) {
                commands[input]();
            }
            else if (isOperator(input)) {
                if (isOperator(currentInput)) {
                    return false;
                }
                inputs.push(currentInput);
                currentInput = input;

                expression = inputs.join('') + currentInput.toString();
            }
            else if (isDigit(input)) {
                if (isNumber(currentInput)) {
                    currentInput = (currentInput * 10) + input;
                } else if (isOperator(currentInput)) {
                    inputs.push(currentInput);
                    currentInput = input;
                }

                expression = inputs.join('') + currentInput.toString();
            }

        }
    };
})();

module.exports = calculator;