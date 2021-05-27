const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = (env) => {
  return {
    mode: "production",
    entry: path.join(__dirname, "../src/index.server.tsx"),
    output: {
      path: path.join(__dirname, "../dist"),
      filename: "server.js",
    },
    target: "node",
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".mjs"],
    },
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
                      useBuiltIns: undefined,
                      corejs: false,
                      targets: { node: "current" },
                    },
                  ],
                ],
                plugins: [],
              },
            },
          ],
        },
      ],
    },
    plugins: [new CleanWebpackPlugin()],
  };
};
