module.exports = {
  ignore: ['src/**/*.test.ts', 'bin/**/*.test.js', 'src/**/*.spec.ts', 'bin/**/*.spec.js', 'src/**/test/**'],
  presets: [['@babel/preset-env', { targets: { node: 'current' } }], '@babel/preset-typescript'],
  plugins: [
    'babel-plugin-transform-typescript-metadata',
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
  ],
}
