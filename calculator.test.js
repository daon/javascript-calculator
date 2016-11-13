var calculator = require('./calculator');

describe('calculator', function() {

    describe('add', function() {

        it('adding 1 + 2 should return sum equal 3', function() {
            expect(calculator.add(1, 2)).toBe(3);
        });

        it('adding -1 + 2 should return sum equal 1', function() {
            expect(calculator.add(-1, 2)).toBe(1);
        });

        it('adding string + 2 should throw TypeError', function() {
            expect(function() {
                return calculator.add('string', 2)
            })
            .toThrowError('Argument must be of type number.');
        });

        it('adding 1 + string should throw TypeError', function() {
            expect(function() {
                return calculator.add(1, 'string')
            })
            .toThrowError('Argument must be of type number.');
        });

        it('adding undefined + 2 should throw TypeError', function() {
            expect(function() {
                return calculator.add(undefined, 2)
            })
            .toThrowError('Argument must be of type number.');
        });

        it('adding 1 + undefined should throw TypeError', function() {
            expect(function() {
                return calculator.add(1, undefined)
            })
            .toThrowError('Argument must be of type number.');
        });

        it('adding NaN + 2 should throw TypeError', function() {
            expect(function() {
                return calculator.add(NaN, 2)
            })
            .toThrowError('Argument must be of type number.');
        });

        it('adding 1 + NaN should throw TypeError', function() {
            expect(function() {
                return calculator.add(1, NaN)
            })
            .toThrowError('Argument must be of type number.');
        });
    });

    describe('subtract', function() {

    });

    describe('multiply', function() {

    });

    describe('divide', function() {

    });

});