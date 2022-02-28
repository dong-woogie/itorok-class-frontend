function isWebTarget(caller) {
  return Boolean(caller && caller.target === 'web')
}

function isWebpack(caller) {
  return Boolean(caller && caller.name === 'babel-loader')
}

module.exports = (api) => {
  const web = api.caller(isWebTarget)
  const webpack = api.caller(isWebpack)
  const production = process.env.NODE_ENV === 'production'

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: web ? '> 2%, not dead' : { node: 'current' },
          modules: false,
        },
      ],
      '@babel/preset-react',
      '@babel/preset-typescript',
    ],
    plugins: [
      production && '@loadable/babel-plugin',
      '@babel/plugin-transform-flow-strip-types',
      '@babel/plugin-syntax-dynamic-import',
      [
        '@babel/plugin-transform-runtime',
        {
          corejs: 3,
          proposals: true,
        },
      ],
      [
        'babel-plugin-styled-components',
        {
          ssr: true,
          displayName: false,
        },
      ],
    ].filter(Boolean),
  }
}
