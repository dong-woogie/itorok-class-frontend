function isWebTarget(caller) {
  return Boolean(caller && caller.target === "web");
}

module.exports = (api) => {
  const web = api.caller(isWebTarget);
  const isProd = process.env.NODE_ENV === "production";

  return {
    presets: [
      [
        "@babel/preset-env",
        {
          targets: web ? "> 2%, not dead" : { node: "current" },
          corejs: web ? "core-js@3" : false,
          useBuiltIns: web ? "usage" : undefined,
          modules: false,
          shippedProposals: true,
        },
      ],
      "@babel/preset-react",
      "@babel/preset-typescript",
    ],
    plugins: [
      isProd && "@loadable/babel-plugin",
      "@babel/plugin-syntax-dynamic-import",
      "@babel/plugin-transform-runtime",
    ].filter(Boolean),
  };
};
