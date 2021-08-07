const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = (env, options) => {
  return {
    entry: ['babel-polyfill', './js/index.js'],
    output: {
      path: path.resolve(__dirname, 'js'),
      filename: options.mode === 'production' ? 'bundle.min.js' : 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
      ],
    },
  };
};
