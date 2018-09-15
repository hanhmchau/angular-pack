const parts = require('./webpack.parts');
const merge = require('webpack-merge');
const path = require('path');

const PATHS = {
    app: path.join(__dirname, "src/app"),
    build: path.join(__dirname, "dist")
};

module.exports = merge([
    parts.generateSourceMaps('nosources-source-map'),
    parts.splitChunks(),
    // parts.extractGlobalCSS({
    //     exclude: PATHS.app
    // }),
    parts.clean(PATHS.build),
]);