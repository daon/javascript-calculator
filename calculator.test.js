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

        it('should return "-1" when adding inputings 1, "-", 2 and "="', function() {
            calculator.addInput(1);
            calculator.addInput('-');
            calculator.addInput(2);
            calculator.addInput('=');
            expect(calculator.getCurrentInput()).toBe('-1');
        });

        it('should return "2" when adding inputings 1, "*", 2 and "="', function() {
            calculator.addInput(1);
            calculator.addInput('*');
            calculator.addInput(2);
            calculator.addInput('=');
            expect(calculator.getCurrentInput()).toBe('2');
        });

        it('should return "0.5" when adding inputings 1, "/", 2 and "="', function() {
            calculator.addInput(1);
            calculator.addInput('/');
            calculator.addInput(2);
            calculator.addInput('=');
            expect(calculator.getCurrentInput()).toBe('0.5');
        });

        it('should return "0" when adding inputings 1, "+", 2 and "AC"', function() {
            calculator.addInput(1);
            calculator.addInput('+');
            calculator.addInput(2);
            calculator.addInput('AC');
            expect(calculator.getCurrentInput()).toBe('0');
        });

        it('should return "0" when adding inputings 1, "+", 2 and "CE"', function() {
            calculator.addInput(1);
            calculator.addInput('+');
            calculator.addInput(2);
            calculator.addInput('CE');
            expect(calculator.getCurrentInput()).toBe('0');
        });

        it('should return "5" when adding inputings 1, "+", 2, "*", 3, "-", 4 and "="', function() {
            calculator.addInput(1);
            calculator.addInput('+');
            calculator.addInput(2);
            calculator.addInput('*');
            calculator.addInput(3);
            calculator.addInput('-');
            calculator.addInput(4);
            calculator.addInput('=');
            expect(calculator.getCurrentInput()).toBe('5');
        });

        it('should return "0" when adding more then 8 digits', function() {
            calculator.addInput(1);
            calculator.addInput(1);
            calculator.addInput(1);
            calculator.addInput(1);
            calculator.addInput(1);
            calculator.addInput(1);
            calculator.addInput(1);
            calculator.addInput(1);
            calculator.addInput(1);
            expect(calculator.getCurrentInput()).toBe('0');
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
        
        it('should return "1-2=-1" when adding inputs 1, "-", 2 and "="', function() {
            calculator.addInput(1);
            calculator.addInput('-');
            calculator.addInput(2);
            calculator.addInput('=');
            expect(calculator.getExpression()).toBe('1-2=-1');
        });

        it('should return "1*2=2" when adding inputs 1, "*", 2 and "="', function() {
            calculator.addInput(1);
            calculator.addInput('*');
            calculator.addInput(2);
            calculator.addInput('=');
            expect(calculator.getExpression()).toBe('1*2=2');
        });

        it('should return "1/2=0.5" when adding inputs 1, "/", 2 and "="', function() {
            calculator.addInput(1);
            calculator.addInput('/');
            calculator.addInput(2);
            calculator.addInput('=');
            expect(calculator.getExpression()).toBe('1/2=0.5');
        });

        it('should return "0" when adding inputings 1, "+", 2 and "AC"', function() {
            calculator.addInput(1);
            calculator.addInput('+');
            calculator.addInput(2);
            calculator.addInput('AC');
            expect(calculator.getExpression()).toBe('0');
        });

        it('should return "1+" when adding inputings 1, "+", 2 and "CE"', function() {
            calculator.addInput(1);
            calculator.addInput('+');
            calculator.addInput(2);
            calculator.addInput('CE');
            expect(calculator.getExpression()).toBe('1+');
        });

        it('should return "1+2*3-4=5" when adding inputings 1, "+", 2, "*", 3, "-", 4 and "="', function() {
            calculator.addInput(1);
            calculator.addInput('+');
            calculator.addInput(2);
            calculator.addInput('*');
            calculator.addInput(3);
            calculator.addInput('-');
            calculator.addInput(4);
            calculator.addInput('=');
            expect(calculator.getExpression()).toBe('1+2*3-4=5');
        });

        it('should return "Digit Limit Met" when adding more then 8 digits', function() {
            calculator.addInput(1);
            calculator.addInput(1);
            calculator.addInput(1);
            calculator.addInput(1);
            calculator.addInput(1);
            calculator.addInput(1);
            calculator.addInput(1);
            calculator.addInput(1);
            calculator.addInput(1);
            expect(calculator.getExpression()).toBe('Digit Limit Met');
        });
    });

});