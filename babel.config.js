module.exports = function(api) {
  api.cache(true);

  const presets = [
    ["@babel/preset-env", {
      "useBuiltIns": "usage",
      "modules": false,
      "corejs": "2",
    }],
    ["@babel/preset-react"],
  ];

  const plugins = [
    ["babel-plugin-emotion", {
      sourceMap: true,
      autoLabel: true,
      labelFormat: '[filename]__[local]',
    }],
  ];

  return {
    presets,
    plugins,
  };
}
