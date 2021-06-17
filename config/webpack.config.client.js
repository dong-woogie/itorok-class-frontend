const commonConfig = require("./webpack.config.common");
const { merge } = require("webpack-merge");
const LoadablePlugin = require("@loadable/webpack-plugin");

module.exports = merge(commonConfig("web"), {
  mode: "production",
  plugins: [new LoadablePlugin()],
});
