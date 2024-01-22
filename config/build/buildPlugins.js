const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

function buildPlugins ({ paths }) {
  return [
    new HTMLWebpackPlugin({
      template: paths.html,
      favicon: paths.favicon,
      manifest: paths.manifest
    }),
    new webpack.ProgressPlugin()
  ];
}

module.exports = { buildPlugins };
