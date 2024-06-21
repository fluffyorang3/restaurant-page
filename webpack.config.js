const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,  // Corrected typo in the regex pattern for jpg
        type: 'asset/resource',
      }
    ]
  },
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    assetModuleFilename: '[name][ext]'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
    })
  ],
  mode: 'development',
};
