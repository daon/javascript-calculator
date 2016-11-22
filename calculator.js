var calculator = (function () {
    var inputs = [];
    var currentInput = 0;
    var expression = '0';
    var digitLimit = 8;
    var digitLimitError = 'Digit Limit Met';

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

    var isDigit = function(input) {
        return input >= 0 && input < 10;
    };

    var isNumber = function(input) {
        return typeof input === 'number' && !isNaN(input);
    };

    var isDigitLimitMet = function(input) {
        return input >  Math.pow(10, digitLimit-1);
    };

    var setExpression = function(input) {
        input = typeof input === 'string' ? input : currentInput;
        expression = inputs.join('') + input.toString();
    };

    var commands = {
        'AC': function() {
            inputs = [];
            currentInput = 0;
            setExpression();
        },
        'CE': function() {
            currentInput = 0;
            setExpression('');
        },
        '=': function() {
            if (inputs.length < 2  || isOperator(currentInput)) {
                return false;
            }
            inputs.push(currentInput);
            currentInput = getResult();
            setExpression('=' + currentInput.toString());
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

                setExpression();
            }
            else if (isDigit(input)) {
                if (isNumber(currentInput)) {
                    if (isDigitLimitMet(currentInput)) {
                        currentInput = 0;
                        expression = digitLimitError;
                        return;
                    }
                    currentInput = (currentInput * 10) + input;
                } else if (isOperator(currentInput)) {
                    inputs.push(currentInput);
                    currentInput = input;
                }

                setExpression();
            }

        }
    };
})();

module.exports = calculator;