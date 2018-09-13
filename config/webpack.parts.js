const {
    CheckerPlugin
} = require('awesome-typescript-loader');
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

exports.devServer = ({host, port} = {}) => ({
    devServer: {
        stats: "errors-only",
        host,
        port,
        open: true,
        overlay: true
    }
});

exports.generateSourceMaps = ({
    type
}) => ({
    devtool: type,
});

exports.typeScript = () => ({
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    }
});

exports.clean = path => ({
    plugins: [new CleanWebpackPlugin([path])]
});

exports.html = options => ({
    plugins: [
        new HtmlWebpackPlugin(options)
    ]
});