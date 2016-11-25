var app = (function(root, calculator) {
    'use strict';
    
    var app = {};
    var supports = !!document.querySelector && !!root.addEventListener;
    var calculatorElement;
    var entryElement;
    var expressionElement;
    var initClass = 'js-calculator-app';

    var eventHandler = function(event) {
        var element = event.target;

        if (!element) return;

        if (element.hasAttribute('data-input')) {
            var input = element.getAttribute('data-input');
            calculator.addInput(input);
            var entry = calculator.getEntry();
            var expression = calculator.getExpression();

            entryElement.textContent = entry;
            expressionElement.textContent = expression;
        }
    };

    app.destroy = function() {
        document.documentElement.classList.remove(initClass);
        document.removeEventListener('click', eventHandler, false)
    };

    app.init = function(selectors) {
            if (!supports) { return; }
            selectors = selectors || '#calculator';

            app.destroy();

            document.documentElement.classList.add(initClass);
            
            calculatorElement = document.querySelector(selectors);
            entryElement = calculatorElement.querySelector('.entry');
            expressionElement = calculatorElement.querySelector('.expression');

            document.addEventListener('click', eventHandler, false);
    };

    return app;
})(window, calculator);

if (document.readyState === 'complete') {
    app.init('#my-calculator');
} else {
    document.addEventListener('DOMContentLoaded', function() {
        app.init('#my-calculator');
    }, false);
}
