const nodeExternals = require("webpack-node-externals");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.config.common");

module.exports = merge(commonConfig("node"), {
  mode: "production",
  externalsPresets: { node: true },
  externals: ["@loadable/component", nodeExternals()],
  optimization: {
    minimize: false,
  },
});
