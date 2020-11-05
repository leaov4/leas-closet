'use strict'

const { resolve } = require('path')

module.exports = {
    entry: ['babel-polyfill', './client/app'],
    output: {
      path: __dirname,
      filename: 'bundle.js'
    },
    mode: 'development',
    context: __dirname,
    devtool: 'source-map',
    resolve: {
      extensions: ['.js', '.jsx']
    },
    module: {
      rules: [
        {
          test: /jsx?$/,
          include: resolve(__dirname, './client'),
          loader: 'babel-loader'
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        }
      ]
    }
  }
  