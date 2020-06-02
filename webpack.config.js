'use strict'

const path = require('path')

module.exports = {
  entry: path.join(__dirname, 'src', 'index'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
		publicPath: '/static/'
  },
  module: {
    loaders: [{
      teste: /\.js$/,
      exclude: /node_modules/,
      include: /src/,
      loader: 'babel'
    }]
  }
}
