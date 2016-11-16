var calculator = (function () {
    var entry = '';
    var status = '';

    var commands = {
        '1': function () {
            entry = '1';
            status = '1';
            return true;
        },
        '+': function () {
            if (entry !== '') {
                return true;
            }
            return false;
        }
    };

    return {
        getEntry: function () {
            return entry || '0';
        },
        getStatus: function () {
            return status || '0';
        },
        inputCommand: function (name) {
            var command = commands[name];
            if (!command) {
                throw new Error('Invalid Command');
            }
            return command();
        }
    };
})();

module.exports = calculator;