const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const LoadablePlugin = require("@loadable/webpack-plugin");

module.exports = (env) => {
  return {
    mode: "production",
    entry: path.join(__dirname, "../src/index.tsx"),
    output: {
      path: path.join(__dirname, "../build"),
      filename: "static/js/[name].[contenthash:8].js",
      chunkFilename: "static/js/[name].[contenthash:8].chunk.js",
    },
    target: "web",
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".mjs"],
    },
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /.(ts|tsx)/,
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
                    },
                  ],
                ],
                plugins: ["@loadable/babel-plugin"],
              },
            },
          ],
        },
      ],
    },
    plugins: [new CleanWebpackPlugin(), new LoadablePlugin()],
  };
};
