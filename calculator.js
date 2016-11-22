var calculator = (function () {
    var inputs = [];
    var currentInput = 0;
    var entry = '';
    var expression = '0';
    var isDecimal = true;
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

    var isDigitLimitMet = function() {
        return entry.length > digitLimit - 1;
    };

    var setExpression = function(input) {
        input = typeof input === 'string' ? input : currentInput;
        expression = inputs.join('') + input.toString();
    };

    var getResult = function () {
        return inputs.reduce(function (firstSymbol, secondSymbol) {
            if (typeof firstSymbol === 'function') {
                return firstSymbol(secondSymbol);
            }

            return calculate(firstSymbol, operators[secondSymbol]);
        });
    };

    var commands = {
        'AC': function() {
            inputs = [];
            currentInput = 0;
            entry = currentInput.toString();
            setExpression();
        },
        'CE': function() {
            currentInput = 0;
            entry = currentInput.toString();
            setExpression('');
        },
        '=': function() {
            if (inputs.length < 2  || isOperator(currentInput)) {
                return false;
            }
            inputs.push(currentInput);
            currentInput = getResult();
            entry = currentInput.toString();
            setExpression('=' + currentInput.toString());
            inputs = [];
        },
        '.': function() {
            if (isDecimal) {
                entry = (entry || '0') + '.';
                expression = entry;
                isDecimal = false;
            }
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

    var addDigit = function(input) {
        if (isNumber(currentInput)) {
            if (isDigitLimitMet(currentInput)) {
                currentInput = 0;
                entry = '0';
                expression = digitLimitError;
                return;
            }

            entry += input.toString();
            currentInput = (currentInput * 10) + input;
        } else if (isOperator(currentInput)) {
            inputs.push(currentInput);
            entry = input.toString();
        }

        currentInput = isDecimal ? parseInt(entry) : parseFloat(entry);
        setExpression();
    };

    var addOperator = function(input) {
        if (isOperator(currentInput)) {
            return false;
        }
        inputs.push(currentInput);
        currentInput = input;

        entry = currentInput.toString();
        setExpression();
    };

    return {
        getEntry: function () {
            return entry || '0';
        },

        getExpression: function () {
            return expression;
        },

        addInput: function (input) {
            if (isCommand(input)) {
                commands[input]();
            }
            else if (isOperator(input)) {
                addOperator(input);
            }
            else if (isDigit(input)) {
                addDigit(input);
            }
        },
    };
})();

module.exports = calculator;