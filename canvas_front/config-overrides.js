const paths = require('paths');


module.exports = function override(config, env) {
    config.output.filename = 'static/js/bundle.js'
    config.optimization={
        splitChunks: {
            cacheGroups: {default: false}
        },
        runtimeChunk: false,
    }
    config.plugins.filename = 'static/css/bundle.css'
    config.plugins.chunkFilename = 'static/css/bundle.css'
    return config
}