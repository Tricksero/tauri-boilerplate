const CopyPlugin = require('copy-webpack-plugin');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require('path');

module.exports = {
    mode: "development",
    //entry: './src/index.js',

    //output: {
    //path: path.resolve('dist'),
    //filename: 'bundle.js'
    //},

    entry: {
        base: path.resolve(path.resolve(__dirname, "src/ts/entry"), "index.ts"),
    }, // Your entry TypeScript file
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,

                options: {
                    outputPath: 'js/', // Output path for CSS files
                }
            },
            //{
            //test: /\.((c|sa|sc)ss)$/i,
            //use: [
            //MiniCssExtractPlugin.loader,
            //"css-loader",
            //"postcss-loader",
            //"sass-loader",
            //],
            //options: {
            //outputPath: 'css/', // Output path for CSS files
            //}
            //},

        ],
    },

    plugins: [
        // Other plugins...
        new CopyPlugin({
            patterns: [
                { from: 'src/templates', to: '' },
                { from: 'src/css/', to: 'css' },
                // You can add more patterns if you want to copy multiple files/directories
                // { from: 'another/source', to: 'another/destination' },
            ],
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
        }),

    ],

    module: {
    }
};
