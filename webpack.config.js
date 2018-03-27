const path = require('path');

const config = {

  mode: 'development',

  entry: './src/scripts/main.js',

  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'pilot.bundle.js',
  },

  module: {
    rules: [
      { 
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};

module.exports = config;
