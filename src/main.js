var app = require('./app/app');

if (document.readyState === 'complete') {
    app.init('#my-calculator');
} else {
    document.addEventListener('DOMContentLoaded', function() {
        app.init('#my-calculator');
    }, false);
}