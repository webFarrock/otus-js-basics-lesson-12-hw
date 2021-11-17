module.exports = (api) => {
  return {
    plugins: ['@babel/plugin-transform-runtime'],
    presets: [
      [
        '@babel/preset-env',
        {
          useBuiltIns: 'entry',
          targets: api.caller((caller) => caller && caller.target === 'node')
            ? { node: 'current' }
            : { chrome: '58', ie: '11' },
        },
      ],
    ],
  };
};
