const parts = require('./webpack.parts');
const merge = require('webpack-merge');

module.exports = merge([
    parts.devServer()
]);