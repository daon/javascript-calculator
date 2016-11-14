var calculator = (function () {
    var input = '';
    var expressions = [];
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
    }

    return {
        getInput: function () {
            return input || '0';
        },

        getOutput: function () {
            return expressions.join('') + input || '0';
        },

        inputDigit: function (digit) {
            if (isOperator(input)) {
                expressions.push(input);
                input = '';
            }
            input += digit.toString();
        },

        inputOperator: function (operator) {
            if (isOperator(input) && !isOperator(operator)) { return; }

            expressions.push(input);
            input = operator;
        }

    };
})();

module.exports = calculator;