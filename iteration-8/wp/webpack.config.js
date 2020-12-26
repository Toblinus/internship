const path = require('path');
const HTMLWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

function css(...ext){
    return [MiniCssExtractPlugin.loader, 'css-loader', ...ext]
}

function js(...ext){
    return {
        loader: 'babel-loader',
        options: {
            presets: [
                '@babel/preset-env',
                ...ext
            ],
            plugins: [
                "@babel/plugin-proposal-class-properties"
            ]
        }                    
    }
}

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build')
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    devServer: {
        port: 4200
    },
    plugins: [
        new HTMLWebPackPlugin({
            template: './public/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: css()
            },
            {
                test: /\.(png|gif|svg)$/,
                use: ['file-loader']
            },
            {
                test: /\.(ttf|woff|eot)$/,
                use: ['file-loader']
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: js('@babel/preset-react')
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: js('@babel/preset-typescript', '@babel/preset-react')
            }
        ]
    }
}