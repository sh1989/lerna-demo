const webpack = require('webpack');
const path = require('path');

const config = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        test: /\.js$/,
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]__[hash:base64:5]'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    modules: [
      'node_modules',
      path.join(__dirname, 'src')
    ]
  },
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/'
  }
};

module.exports = config;
