var path = require('path');

var ROOT = path.resolve(__dirname);

module.exports = {
    entry: './src/main.js',
    devtool: 'cheap-module-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        sourceMapFilename: 'bundle.map',
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 9000
    }
}