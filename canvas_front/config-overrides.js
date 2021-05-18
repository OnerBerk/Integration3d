const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserMinimizer = require('terser-webpack-plugin');

module.exports = function override(config, env) {
    config.output.filename = 'static/js/bundle.js'
    config.optimization={
        splitChunks: {cacheGroups: {default: false}},
        runtimeChunk: false,
        minimizer:[
            new TerserMinimizer({
                terserOptions: {
                    mangle: {
                        keep_classnames: true,
                        keep_fnames: true,
                    }
                }
            })
        ],
    }
    config.plugins.push(new MiniCssExtractPlugin({
        filename: 'static/css/main.css',
    }))
    return config
}