const nodeExternals = require("webpack-node-externals");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.config.common");
const LoadablePlugin = require("@loadable/webpack-plugin");

module.exports = merge(commonConfig("node"), {
  mode: "production",
  externalsPresets: { node: true },
  externals: ["@loadable/component", nodeExternals()],
  optimization: {
    minimize: false,
  },
  plugins: [new LoadablePlugin()],
});
