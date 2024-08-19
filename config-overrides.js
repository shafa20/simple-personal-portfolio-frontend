// config-overrides.js
const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      stream: require.resolve('stream-browserify'),
      buffer: require.resolve('buffer/')
    };
    return config;
  }
);
