const {
    CheckerPlugin
} = require('awesome-typescript-loader');
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

exports.devServer = ({
    host,
    port
} = {}) => ({
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
        rules: [{
            test: /\.tsx?$/,
            loader: ['awesome-typescript-loader', 'angular2-template-loader']
        }]
    }
});

exports.raw = ({
    include,
    exclude
} = {}) => ({
    module: {
        rules: [{
            test: /\.(css|html)?$/,
            include,
            exclude,
            loader: 'raw-loader'
        }]
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

exports.splitChunks = () => ({
    optimization: {
        splitChunks: {
            chunks: "initial"
        }
    }
});

exports.loadCSS = ({
    include,
    exclude
} = {}) => ({
    module: {
        rules: [{
            test: /styles.css$/,
            include,
            exclude,
            use: ["style-loader", "css-loader"],
        }, ],
    },
});

exports.extractGlobalCSS = ({
    include,
    exclude
} = {}) => {
    const plugin = new MiniCssExtractPlugin({
        filename: "[name].css"
    });

    return {
        module: {
            rules: [{
                test: /\.css$/,
                include,
                exclude,
                use: [
                    MiniCssExtractPlugin.loader, "css-loader"
                ]
            }]
        },
        plugins: [plugin]
    };
};