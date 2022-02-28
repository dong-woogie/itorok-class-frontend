const commonConfig = require('./webpack.config.common')
const { merge } = require('webpack-merge')
const LoadablePlugin = require('@loadable/webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = merge(commonConfig('web'), {
  mode: 'production',
  plugins: [new LoadablePlugin()],
})
