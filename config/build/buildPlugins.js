const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

function buildPlugins({paths}) {
    return [
        new HTMLWebpackPlugin({
            template: paths.html,
            favicon: paths.favicon,
            manifest: paths.manifest
        }),
        new CopyWebpackPlugin({
            patterns: [
                // {from: 'public/manifest', to: ''},
                // {from: 'public/images', to: 'assets/images'},
                // {from: 'public/robots', to: ''},
            ],
        }),
        new webpack.ProgressPlugin()
    ];
}

module.exports = {buildPlugins};
