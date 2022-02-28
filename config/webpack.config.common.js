const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const Dotenv = require('dotenv-webpack')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const webpack = require('webpack')
const CompressionPlugin = require('compression-webpack-plugin')

function config(target) {
  const isWeb = target === 'web'

  return {
    entry: [isWeb ? path.join(__dirname, '../src/index.tsx') : path.join(__dirname, '../src/index.server.tsx')],
    output: isWeb
      ? {
          path: path.join(__dirname, '../build'),
          filename: 'static/js/[name].[contenthash:8].js',
          chunkFilename: 'static/js/[name].[contenthash:8].chunk.js',
          publicPath: '/',
        }
      : {
          path: path.join(__dirname, '../dist'),
          filename: 'server.js',
          libraryTarget: 'commonjs2',
          publicPath: '/',
        },
    target,
    devtool: 'source-map',
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.mjs', '.cjs'],
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx|mjs|js|jsx)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                caller: target,
                cacheDirectory: false,
              },
            },
          ],
        },
        {
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        },
        {
          oneOf: [
            {
              test: /\.(png|jpe?g|gif|ico)$/i,
              use: {
                loader: 'url-loader',
                options: {
                  limit: 10000,
                  publicPath: '/',
                  name: 'static/media/[name].[hash:8].[ext]',
                },
              },
            },
            {
              test: /\.(png|jpe?g|gif|ico)$/i,
              use: {
                loader: 'file-loader',
                options: {
                  emitFile: isWeb,
                  name: 'static/media/[name].[hash:8].[ext]',
                },
              },
            },
          ],
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
      ],
    },
    // optimization: {
    //   minimize: true,
    //   minimizer: [new CssMinimizerPlugin()],
    // },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'static/styles/[name].css',
      }),
      new CleanWebpackPlugin(),
      new Dotenv(),
      new webpack.IgnorePlugin({
        resourceRegExp: /^\.\/locale$/,
        contextRegExp: /moment$/,
      }),
      new CompressionPlugin(),
    ],
  }
}

module.exports = config
