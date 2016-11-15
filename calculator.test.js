describe('calculator', function() {
    var calculator;
    beforeEach(function() {
        jest.resetModules();
        calculator = require('./calculator');
    });

    it('should have an input with the value "0"', function() {
        expect(calculator.getInput()).toBe('0');
    });

    it('should have an output with the value "0"', function() {
        expect(calculator.getOutput()).toBe('0');
    });

    it('inputing digit 1 should return input "1"', function() {
        calculator.inputDigit(1);
        expect(calculator.getInput()).toBe('1');
    });

    it('inputing digit 1 should return output "1"', function() {
        calculator.inputDigit(1);
        expect(calculator.getOutput()).toBe('1');
    });

    it('inputing digits 1 and 2 should return input "12"', function() {
        calculator.inputDigit(1);
        calculator.inputDigit(2);
        expect(calculator.getInput()).toBe('12');
    });

    it('inputing digits 1 and 2 should return output "12"', function() {
        calculator.inputDigit(1);
        calculator.inputDigit(2);
        expect(calculator.getOutput()).toBe('12');
    });

    it('inputing digit 1 and operator "+" should return input "+"', function() {
        calculator.inputDigit(1);
        calculator.inputOperator('+');
        expect(calculator.getInput()).toBe('+');
    });

    it('inputing digit 1 and operator "+" should return output "1+"', function() {
        calculator.inputDigit(1);
        calculator.inputOperator('+');
        expect(calculator.getOutput()).toBe('1+');
    });

    it('inputing digit 1, operator "+" and digit 2 should return input "2"', function() {
        calculator.inputDigit(1);
        calculator.inputOperator('+');
        calculator.inputDigit(2);
        expect(calculator.getInput()).toBe('2');
    });

    it('inputing digit 1, operator "+" and digit 2 should return output "1+2"', function() {
        calculator.inputDigit(1);
        calculator.inputOperator('+');
        calculator.inputDigit(2);
        expect(calculator.getOutput()).toBe('1+2');
    });

    it('inputing digit 1, operator "+", digit 2 and operator "=" should return input "3"', function() {
        calculator.inputDigit(1);
        calculator.inputOperator('+');
        calculator.inputDigit(2);
        calculator.inputOperator('=');
        expect(calculator.getInput()).toBe('3');
    });

    it('inputing digit 1, operator "+", digit 2 and operator "=" should return output "1+2=3"', function() {
        calculator.inputDigit(1);
        calculator.inputOperator('+');
        calculator.inputDigit(2);
        calculator.inputOperator('=');
        expect(calculator.getOutput()).toBe('1+2=3');
    });
});