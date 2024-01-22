const { buildPlugins } = require('./buildPlugins');
const { buildLoaders } = require('./buildLoaders');
const { buildResolvers } = require('./buildResolvers');
const { buildDevServer } = require('./buildDevServer');

function buildWebpackConfig (options) {
  const { paths, mode, isDev } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: 'js/awomy.js',
      chunkFilename: '[contenthash:32].chunk.js',
      path: paths.build,
      clean: true
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options)
    },
    resolve: buildResolvers(options),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined
  };
}

module.exports = { buildWebpackConfig };
