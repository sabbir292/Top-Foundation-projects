const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: "development",
  entry: {
    bundle: path.resolve(__dirname, './src/index.js')
  },

  devtool:'inline-source-map',
  
  devServer:{
    static : {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 3000,
    open: true,
    compress: true,
    hot: true,
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
  plugins:[
    new HtmlWebpackPlugin({
      title: 'Webpack demo',
      clean: true,
      template: 'src/template.html',
    })
  ],

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
};