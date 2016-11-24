(function(calculator) {
    var eventHandler = function(event) {
        var element = event.target;

        if (!element) return;

        if (element.hasAttribute('data-input')) {
            var input = element.getAttribute('data-input');
            calculator.addInput(input);            
        }
    };

    document.addEventListener('click', eventHandler, false);

})(calculator);