const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const LoadablePlugin = require("@loadable/webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
  return {
    mode: "production",
    entry: ["@babel/polyfill", path.join(__dirname, "../src/index.tsx")],
    output: {
      path: path.join(__dirname, "../build"),
      filename: "static/js/[name].[contenthash:8].js",
      chunkFilename: "static/js/[name].[contenthash:8].chunk.js",
      publicPath: "/",
    },
    target: "web",
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".mjs"],
    },
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /.(ts|tsx|mjs|js)/,
          use: [
            {
              loader: "babel-loader",
              options: {
                presets: [
                  "@babel/preset-typescript",
                  "@babel/preset-react",
                  [
                    "@babel/preset-env",
                    {
                      useBuiltIns: "entry",
                      corejs: "core-js@3",
                      targets: undefined,
                      modules: false,
                    },
                  ],
                ],
                plugins: [
                  "@loadable/babel-plugin",
                  "@babel/plugin-syntax-dynamic-import",
                  "babel-plugin-graphql-tag",
                ],
              },
            },
          ],
        },

        {
          oneOf: [
            {
              test: /\.(png|jpe?g|gif|ico)$/i,
              use: {
                loader: "url-loader",
                options: {
                  limit: 10000,
                  publicPath: "/",
                  name: "static/media/[name].[hash:8].[ext]",
                },
              },
            },
            {
              test: /\.(png|jpe?g|gif|ico)$/i,
              use: {
                loader: "file-loader",
                options: {
                  name: "static/media/[name].[hash:8].[ext]",
                },
              },
            },
          ],
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "[name].css",
      }),
      new CleanWebpackPlugin(),
      new LoadablePlugin(),
    ],
    optimization: {
      minimize: true,
    },
  };
};
