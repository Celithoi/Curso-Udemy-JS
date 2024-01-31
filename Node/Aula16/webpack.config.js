const webpack = require('webpack'); // CommonJS
const path = require('path');

module.exports = {
    mode: 'development',
    entry:'./frontend/main.js',
    output: {
        path: path.resolve(__dirname,'public','assets','js'),
        filename: 'bundle.js'
    },
    module:{
        rules:[{
            exclude: /node_modules/,
            test: /\.js$/,
            use:{
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                }
            },
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
    devtool: 'source-map',
};
