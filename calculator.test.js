describe('calculator', function() {
    var calculator;
    beforeEach(function() {
        jest.resetModules();
        calculator = require('./calculator');
    });

    it('should display entry "0""', function () {
        var entry = calculator.getEntry();
        expect(entry).toBe('0');
    });

    it('should display status "0"', function () {
        var status = calculator.getStatus();
        expect(status).toBe('0');
    });

    it('inputting command "1" should return true', function () {
        var inputSucceeded = calculator.inputCommand(1);
        expect(inputSucceeded).toBe(true);
    });

    it('inputting command "+" should return false', function () {
        var inputSucceeded = calculator.inputCommand('+');
        expect(inputSucceeded).toBe(false);
    });

    it('inputting command "12" should throw error "Invalid Command"', function () {
        var result = function () { return calculator.inputCommand(12) };
        expect(result).toThrowError('Invalid Command');
    });

    it('inputting command "1" should display entry "1"', function () {
        calculator.inputCommand(1);
        var entry = calculator.getEntry();
        expect(entry).toBe('1');
    });

    it('inputting command "1" should display status "1"', function () {
        calculator.inputCommand(1);
        var status = calculator.getStatus();
        expect(status).toBe('1');
    });

    it('inputting commands "1", "+" should return true', function () {
        calculator.inputCommand(1);
        var inputSucceeded = calculator.inputCommand('+');
        expect(inputSucceeded).toBe(true);
    });
});