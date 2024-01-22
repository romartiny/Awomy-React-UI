const path = require('path');
const { buildWebpackConfig } = require('./config/build/buildWebpackConfig');

module.exports = (env) => {
  const paths = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    favicon: path.resolve(__dirname, 'public', 'mk135vca6891c09712vn124nbokasc.ico'),
    manifest: path.resolve(__dirname, 'public', 'manifest.json')
  };

  const PORT = env.port || 3000;
  const mode = env.mode || 'development';
  const isDev = mode === 'development';

  return buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT
  });
};
