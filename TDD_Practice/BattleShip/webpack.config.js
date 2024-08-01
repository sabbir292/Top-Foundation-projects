const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, './src/main.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        clean: true,
    },
    devtool: 'inline-source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        open: true,
        hot: true,
        compress: true,
        port: 3000,
        historyApiFallback: true,
    },
    module: {
        rules: [
          {
            test: /\.css/i,
            use: ['style-loader', 'css-loader']
          },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'BattleShip',
            template: './src/index.html'
        })
    ]
};
