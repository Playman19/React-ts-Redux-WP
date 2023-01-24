const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const GLOBAL_CSS_REGEXP = /\.global\.css$/;

module.exports = {
    
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
    },
    mode: "development",
    entry: ["./src/index.jsx"],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js"
    },
    devServer: {
        port: 3000
    },
    plugins: [
        new HtmlWebpackPlugin({template: "./src/index.html"}),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            //добавил
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            },
            {
                test: /\.(css|less)$/,
                use: ["style-loader","css-loader","less-loader"],
                exclude: GLOBAL_CSS_REGEXP
            },
            {
                test: GLOBAL_CSS_REGEXP,
                use: ["style-loader","css-loader"]
            },
            {
                test: /\.(jpeg|png|svg|jpg)/,
                use: ['file-loader']
            },
            {                           // по курсу
                test: /\.[tj]sx?$/,
                use: ['ts-loader']
            } 
        ]
    }
};