const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
//const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');


module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new CompressionPlugin({
      filename: '[path]bundle.js.gz[query]',
      algorithm: 'gzip',
      test: /\.(js|css)$/i,
    })
  ]
});
