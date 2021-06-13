const commonConfig = require("./webpack.config.common");
const { merge } = require("webpack-merge");

module.exports = merge(commonConfig("web"), {
  production: "production",
});
