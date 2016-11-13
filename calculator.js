var calculator = (function () {

    var isNumber = function (n) {
        return typeof n === 'number' && !isNaN(n);
    };

    return {
        add: function (a, b) {
            if (!isNumber(a) || !isNumber(b)) {
                throw new TypeError('Argument must be of type number.');
            }

            return a + b;
        }
    };
})();

module.exports = calculator;