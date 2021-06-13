function isWebTarget(caller) {
  return Boolean(caller && caller.target === "web");
}

module.exports = (api) => {
  const web = api.caller(isWebTarget);
  console.log(api);
  return {
    presets: [
      "@babel/preset-typescript",
      "@babel/preset-react",
      [
        "@babel/preset-env",
        {
          useBuiltIns: web ? "entry" : undefined,
          corejs: web ? "core-js@3" : false,
          targets: !web ? { node: "current" } : undefined,
          modules: false,
        },
      ],
    ],
    plugins: ["@loadable/babel-plugin", "@babel/plugin-syntax-dynamic-import"],
  };
};
