function buildDevServer (options) {
  return {
    historyApiFallback: true,
    port: options.port,
    open: true
  };
}

module.exports = { buildDevServer };
