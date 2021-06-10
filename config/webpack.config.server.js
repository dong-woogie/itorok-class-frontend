const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const LoadablePlugin = require("@loadable/webpack-plugin");
const nodeExternals = require("webpack-node-externals");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
  return {
    mode: "production",
    entry: ["@babel/polyfill", path.join(__dirname, "../src/index.server.tsx")],
    output: {
      path: path.join(__dirname, "../dist"),
      filename: "server.js",
      libraryTarget: "commonjs2",
      publicPath: "/dist",
    },
    target: "node",
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".mjs"],
    },
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
                      useBuiltIns: undefined,
                      corejs: false,
                      targets: { node: "current" },
                      modules: "commonjs",
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
                  emitFile: false,
                  publicPath: "/",
                  name: "static/media/[name].[hash:8].[ext]",
                },
              },
            },
          ],
        },
        {
          test: /\.css$/,
          use: {
            loader: [MiniCssExtractPlugin.loader, "css-loader"],
            options: {},
          },
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
    externalsPresets: { node: true },
    externals: ["@loadable/component", nodeExternals()],
    optimization: {
      minimize: false,
    },
  };
};
