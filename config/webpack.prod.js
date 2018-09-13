const parts = require('./webpack.parts');
const merge = require('webpack-merge');
const path = require('path');

const PATHS = {
    app: path.join(__dirname, "src"),

    build: path.join(__dirname, "dist"),

};

module.exports = merge([
    parts.generateSourceMaps('nosources-source-map'),
    parts.clean(PATHS.build)
]);