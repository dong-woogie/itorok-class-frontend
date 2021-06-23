const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const Dotenv = require('dotenv-webpack')

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
      extensions: ['.ts', '.tsx', '.js', '.mjs'],
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx|mjs|js)$/,
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
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'static/styles/[name].css',
      }),
      new CleanWebpackPlugin(),
      new Dotenv(),
    ],
  }
}

module.exports = config
