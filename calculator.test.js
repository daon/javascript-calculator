describe('calculator', function() {
    var calculator;
    beforeEach(function() {
        jest.resetModules();
        calculator = require('./calculator');
    });

    describe('getCurrentInput', function() {
        it('should return "0" when no inputs have been made', function() {
            expect(calculator.getCurrentInput()).toBe('0');
        });

        it('should return "1" when adding input 1', function() {
            calculator.addInput(1);
            expect(calculator.getCurrentInput()).toBe('1');
        });

        it('should return "12" when adding inputs 1 and 2', function() {
            calculator.addInput(1);
            calculator.addInput(2);
            expect(calculator.getCurrentInput()).toBe('12');
        });

        it('should return "+" when adding inputs 1 and "+"', function() {
            calculator.addInput(1);
            calculator.addInput('+');
            expect(calculator.getCurrentInput()).toBe('+');
        });

        it('should return "2" when adding inputs 1, "+" and 2', function() {
            calculator.addInput(1);
            calculator.addInput('+');
            calculator.addInput(2);
            expect(calculator.getCurrentInput()).toBe('2');
        });

        it('should return "3" when adding inputs 1, "+", 2 and "="', function() {
            calculator.addInput(1);
            calculator.addInput('+');
            calculator.addInput(2);
            calculator.addInput('=');
            expect(calculator.getCurrentInput()).toBe('3');
        });
    });

    describe('getExpression', function() {
        it('should return "0" when no inputs has beens made', function() {
            expect(calculator.getExpression()).toBe('0');
        });
    
        it('should return "1" when adding input 1', function() {
            calculator.addInput(1);
            expect(calculator.getExpression()).toBe('1');
        });

        it('should return "12" when adding inputs 1 and 2', function() {
            calculator.addInput(1);
            calculator.addInput(2);
            expect(calculator.getExpression()).toBe('12');
        });

        it('should return "1+" when adding inputs 1 and "+"', function() {
            calculator.addInput(1);
            calculator.addInput('+');
            expect(calculator.getExpression()).toBe('1+');
        });

        it('should return "1+2" when adding inputs 1, "+" and 2', function() {
            calculator.addInput(1);
            calculator.addInput('+');
            calculator.addInput(2);
            expect(calculator.getExpression()).toBe('1+2');
        });

        it('should return "1+2=3" when adding inputs 1, "+", 2 and "="', function() {
            calculator.addInput(1);
            calculator.addInput('+');
            calculator.addInput(2);
            calculator.addInput('=');
            expect(calculator.getExpression()).toBe('1+2=3');
        });
    });

});