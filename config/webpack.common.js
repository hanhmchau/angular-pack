const parts = require('./webpack.parts');
const merge = require('webpack-merge');

module.exports = merge([{
        entry: {
            main: './src/index.ts'
        }
    },
    parts.typeScript(),
    parts.html({
        title: 'Sharks'
    })
]);