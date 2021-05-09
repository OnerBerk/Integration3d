// @remove-on-eject-begin
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';

const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const resolve = require('resolve');
const PnpWebpackPlugin = require('pnp-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const safePostCssParser = require('postcss-safe-parser');
const ManifestPlugin = require('webpack-manifest-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');
const paths = require('./paths');
const modules = require('./modules');
const getClientEnvironment = require('./env');
const ModuleNotFoundPlugin = require('react-dev-utils/ModuleNotFoundPlugin');
const ForkTsCheckerWebpackPlugin = require('react-dev-utils/ForkTsCheckerWebpackPlugin');
const typescriptFormatter = require('react-dev-utils/typescriptFormatter');
// @remove-on-eject-begin
const getCacheIdentifier = require('react-dev-utils/getCacheIdentifier');
// @remove-on-eject-end
const postcssNormalize = require('postcss-normalize');

const appPackageJson = require(paths.appPackageJson);
const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false';
const shouldInlineRuntimeChunk = process.env.INLINE_RUNTIME_CHUNK !== 'false';
const isExtendingEslintConfig = process.env.EXTEND_ESLINT === 'true';
const imageInlineSizeLimit = parseInt(process.env.IMAGE_INLINE_SIZE_LIMIT || '10000');
const useTypeScript = fs.existsSync(paths.appTsConfig);

const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

module.exports = function(webpackEnv) {
    const isEnvDevelopment = webpackEnv === 'development';
    const isEnvProduction = webpackEnv === 'production';

    const isEnvProductionProfile =
        isEnvProduction && process.argv.includes('--profile');

    const env = getClientEnvironment(paths.publicUrlOrPath.slice(0, -1));

    const getStyleLoaders = (cssOptions, preProcessor) => {
        const loaders = [
            isEnvDevelopment && require.resolve('style-loader'),
            isEnvProduction && {
                loader: MiniCssExtractPlugin.loader,
                options: paths.publicUrlOrPath.startsWith('.')
                    ? { publicPath: '../../' }
                    : {},
            },
            {
                loader: require.resolve('css-loader'),
                options: cssOptions,
            },
            {
                loader: require.resolve('postcss-loader'),
                options: {
                    ident: 'postcss',
                    plugins: () => [
                        require('postcss-flexbugs-fixes'),
                        require('postcss-preset-env')({
                            autoprefixer: {
                                flexbox: 'no-2009',
                            },
                            stage: 3,
                        }),
                        postcssNormalize(),
                    ],
                    sourceMap: isEnvProduction && shouldUseSourceMap,
                },
            },
        ].filter(Boolean);
        if (preProcessor) {
            loaders.push(
                {
                    loader: require.resolve('resolve-url-loader'),
                    options: {
                        sourceMap: isEnvProduction && shouldUseSourceMap,
                    },
                },
                {
                    loader: require.resolve(preProcessor),
                    options: {
                        sourceMap: true,
                    },
                }
            );
        }
        return loaders;
    };

    return {
        mode: isEnvProduction ? 'production' : isEnvDevelopment && 'development',
        // Stop compilation early in production
        bail: isEnvProduction,
        devtool: isEnvProduction
            ? shouldUseSourceMap
                ? 'source-map'
                : false
            : isEnvDevelopment && 'cheap-module-source-map',
        entry: [
            isEnvDevelopment &&
            require.resolve('react-dev-utils/webpackHotDevClient'),
            paths.appIndexJs,
        ].filter(Boolean),
        output: {
            path: isEnvProduction ? paths.appBuild : undefined,
            pathinfo: isEnvDevelopment,
            library:'MyApp',
            filename: 'static/js/bundle.min.js',
            libraryTarget: 'var',
            umdNamedDefine: true,
            // TODO: remove this when upgrading to webpack 5
            futureEmitAssets: true,
            publicPath: paths.publicUrlOrPath,
            devtoolModuleFilenameTemplate: isEnvProduction
                ? info =>
                    path
                        .relative(paths.appSrc, info.absoluteResourcePath)
                        .replace(/\\/g, '/')
                : isEnvDevelopment &&
                (info => path.resolve(info.absoluteResourcePath).replace(/\\/g, '/')),
            jsonpFunction: `webpackJsonp${appPackageJson.name}`,
            globalObject: 'this',
        },
        optimization: {
            minimize: isEnvProduction,
            minimizer: [
                new TerserPlugin({
                    terserOptions: {
                        parse: {
                            ecma: 8,
                        },
                        compress: {
                            ecma: 5,
                            warnings: false,
                            comparisons: false,
                            inline: 2,
                        },
                        mangle: {
                            safari10: true,
                        },
                        keep_classnames: true,
                        keep_fnames: true,
                        output: {
                            ecma: 5,
                            comments: false,
                            ascii_only: true,
                        },
                    },
                    sourceMap: shouldUseSourceMap,
                }),
                new OptimizeCSSAssetsPlugin({
                    cssProcessorOptions: {
                        parser: safePostCssParser,
                        map: shouldUseSourceMap
                            ? {
                                inline: false,
                                annotation: true,
                            }
                            : false,
                    },
                    cssProcessorPluginOptions: {
                        preset: ['default', { minifyFontValues: { removeQuotes: false } }],
                    },
                }),
            ],
            runtimeChunk: false,
        },
        resolve: {
            modules: ['node_modules', paths.appNodeModules].concat(
                modules.additionalModulePaths || []
            ),
            extensions: paths.moduleFileExtensions
                .map(ext => `.${ext}`)
                .filter(ext => useTypeScript || !ext.includes('ts')),
            alias: {
                'react-native': 'react-native-web',
                ...(isEnvProductionProfile && {
                    'react-dom$': 'react-dom/profiling',
                    'scheduler/tracing': 'scheduler/tracing-profiling',
                }),
                ...(modules.webpackAliases || {}),
            },
            plugins: [
                PnpWebpackPlugin,
                new ModuleScopePlugin(paths.appSrc, [paths.appPackageJson]),
            ],
        },
        resolveLoader: {
            plugins: [
                PnpWebpackPlugin.moduleLoader(module),
            ],
        },
        module: {
            strictExportPresence: true,
            rules: [
                { parser: { requireEnsure: false } },
                {
                    test: /\.(js|mjs|jsx|ts|tsx)$/,
                    enforce: 'pre',
                    use: [
                        {
                            options: {
                                cache: true,
                                formatter: require.resolve('react-dev-utils/eslintFormatter'),
                                eslintPath: require.resolve('eslint'),
                                resolvePluginsRelativeTo: __dirname,
                                ignore: isExtendingEslintConfig,
                                baseConfig: isExtendingEslintConfig
                                    ? undefined
                                    : {
                                        extends: [require.resolve('eslint-config-react-app')],
                                    },
                                useEslintrc: isExtendingEslintConfig,
                            },
                            loader: require.resolve('eslint-loader'),
                        },
                    ],
                    include: paths.appSrc,
                },
                {
                    oneOf: [
                        {
                            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                            loader: require.resolve('url-loader'),
                            options: {
                                limit: imageInlineSizeLimit,
                                name: 'static/media/[name].[hash:8].[ext]',
                            },
                        },
                        // Process application JS with Babel.
                        // The preset includes JSX, Flow, TypeScript, and some ESnext features.
                        {
                            test: /\.(js|mjs|jsx|ts|tsx)$/,
                            include: paths.appSrc,
                            loader: require.resolve('babel-loader'),
                            options: {
                                customize: require.resolve(
                                    'babel-preset-react-app/webpack-overrides'
                                ),
                                // @remove-on-eject-begin
                                babelrc: false,
                                configFile: false,
                                presets: [require.resolve('babel-preset-react-app')],
                                // Make sure we have a unique cache identifier, erring on the
                                // side of caution.
                                // We remove this when the user ejects because the default
                                // is sane and uses Babel options. Instead of options, we use
                                // the react-scripts and babel-preset-react-app versions.
                                cacheIdentifier: getCacheIdentifier(
                                    isEnvProduction
                                        ? 'production'
                                        : isEnvDevelopment && 'development',
                                    [
                                        'babel-plugin-named-asset-import',
                                        'babel-preset-react-app',
                                        'react-dev-utils',
                                        'react-scripts',
                                    ]
                                ),
                                // @remove-on-eject-end
                                plugins: [
                                    [
                                        require.resolve('babel-plugin-named-asset-import'),
                                        {
                                            loaderMap: {
                                                svg: {
                                                    ReactComponent:
                                                        '@svgr/webpack?-svgo,+titleProp,+ref![path]',
                                                },
                                            },
                                        },
                                    ],
                                ],
                                // This is a feature of `babel-loader` for webpack (not Babel itself).
                                // It enables caching results in ./node_modules/.cache/babel-loader/
                                // directory for faster rebuilds.
                                cacheDirectory: true,
                                // See #6846 for context on why cacheCompression is disabled
                                cacheCompression: false,
                                compact: isEnvProduction,
                            },
                        },
                        // Process any JS outside of the app with Babel.
                        // Unlike the application JS, we only compile the standard ES features.
                        {
                            test: /\.(js|mjs)$/,
                            exclude: /@babel(?:\/|\\{1,2})runtime/,
                            loader: require.resolve('babel-loader'),
                            options: {
                                babelrc: false,
                                configFile: false,
                                compact: false,
                                presets: [
                                    [
                                        require.resolve('babel-preset-react-app/dependencies'),
                                        { helpers: true },
                                    ],
                                ],
                                cacheDirectory: true,
                                // See #6846 for context on why cacheCompression is disabled
                                cacheCompression: false,
                                // @remove-on-eject-begin
                                cacheIdentifier: getCacheIdentifier(
                                    isEnvProduction
                                        ? 'production'
                                        : isEnvDevelopment && 'development',
                                    [
                                        'babel-plugin-named-asset-import',
                                        'babel-preset-react-app',
                                        'react-dev-utils',
                                        'react-scripts',
                                    ]
                                ),
                                sourceMaps: shouldUseSourceMap,
                                inputSourceMap: shouldUseSourceMap,
                            },
                        },
                        {
                            test: cssRegex,
                            exclude: cssModuleRegex,
                            use: getStyleLoaders({
                                importLoaders: 1,
                                sourceMap: isEnvProduction && shouldUseSourceMap,
                            }),
                            sideEffects: true,
                        },
                        {
                            test: cssModuleRegex,
                            use: getStyleLoaders({
                                importLoaders: 1,
                                sourceMap: isEnvProduction && shouldUseSourceMap,
                                modules: {
                                    getLocalIdent: getCSSModuleLocalIdent,
                                },
                            }),
                        },
                        {
                            test: sassRegex,
                            exclude: sassModuleRegex,
                            use: getStyleLoaders(
                                {
                                    importLoaders: 3,
                                    sourceMap: isEnvProduction && shouldUseSourceMap,
                                },
                                'sass-loader'
                            ),
                            sideEffects: true,
                        },
                        {
                            test: sassModuleRegex,
                            use: getStyleLoaders(
                                {
                                    importLoaders: 3,
                                    sourceMap: isEnvProduction && shouldUseSourceMap,
                                    modules: {
                                        getLocalIdent: getCSSModuleLocalIdent,
                                    },
                                },
                                'sass-loader'
                            ),
                        },
                        {
                            loader: require.resolve('file-loader'),
                            exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
                            options: {
                                name: 'static/media/[name].[hash:8].[ext]',
                            },
                        },
                        // ** STOP ** Are you adding a new loader?
                        // Make sure to add the new loader(s) before the "file" loader.
                    ],
                },
            ],
        },
        plugins: [
            // Generates an `index.html` file with the <script> injected.
            new HtmlWebpackPlugin(
                Object.assign(
                    {},
                    {
                        inject: true,
                        template: paths.appHtml,
                    },
                    isEnvProduction
                        ? {
                            minify: {
                                removeComments: true,
                                collapseWhitespace: true,
                                removeRedundantAttributes: true,
                                useShortDoctype: true,
                                removeEmptyAttributes: true,
                                removeStyleLinkTypeAttributes: true,
                                keepClosingSlash: true,
                                minifyJS: true,
                                minifyCSS: true,
                                minifyURLs: true,
                            },
                        }
                        : undefined
                )
            ),
            new InterpolateHtmlPlugin(HtmlWebpackPlugin, env.raw),
            new ModuleNotFoundPlugin(paths.appPath),
            new webpack.DefinePlugin(env.stringified),
            isEnvDevelopment && new webpack.HotModuleReplacementPlugin(),
            isEnvDevelopment && new CaseSensitivePathsPlugin(),
            isEnvDevelopment &&
            new WatchMissingNodeModulesPlugin(paths.appNodeModules),
            isEnvProduction &&
            new MiniCssExtractPlugin({
                filename: "static/css/bundle.min.css",
            }),
            new ManifestPlugin({
                fileName: 'asset-manifest.json',
                publicPath: paths.publicUrlOrPath,
                generate: (seed, files, entrypoints) => {
                    const manifestFiles = files.reduce((manifest, file) => {
                        manifest[file.name] = file.path;
                        return manifest;
                    }, seed);
                    const entrypointFiles = entrypoints.main.filter(
                        fileName => !fileName.endsWith('.map')
                    );

                    return {
                        files: manifestFiles,
                        entrypoints: entrypointFiles,
                    };
                },
            }),
            new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
            isEnvProduction &&
            new WorkboxWebpackPlugin.GenerateSW({
                clientsClaim: true,
                exclude: [/\.map$/, /asset-manifest\.json$/],
                importWorkboxFrom: 'cdn',
                navigateFallback: paths.publicUrlOrPath + 'index.html',
                navigateFallbackBlacklist: [
                    // Exclude URLs starting with /_, as they're likely an API call
                    new RegExp('^/_'),
                    new RegExp('/[^/?]+\\.[^/]+$'),
                ],
            }),
            // TypeScript type checking
            useTypeScript &&
            new ForkTsCheckerWebpackPlugin({
                typescript: resolve.sync('typescript', {
                    basedir: paths.appNodeModules,
                }),
                async: isEnvDevelopment,
                useTypescriptIncrementalApi: true,
                checkSyntacticErrors: true,
                resolveModuleNameModule: process.versions.pnp
                    ? `${__dirname}/pnpTs.js`
                    : undefined,
                resolveTypeReferenceDirectiveModule: process.versions.pnp
                    ? `${__dirname}/pnpTs.js`
                    : undefined,
                tsconfig: paths.appTsConfig,
                reportFiles: [
                    '**',
                    '!**/__tests__/**',
                    '!**/?(*.)(spec|test).*',
                    '!**/src/setupProxy.*',
                    '!**/src/setupTests.*',
                ],
                silent: true,
                // The formatter is invoked directly in WebpackDevServerUtils during development
                formatter: isEnvProduction ? typescriptFormatter : undefined,
            }),
        ].filter(Boolean),
        // Some libraries import Node modules but don't use them in the browser.
        // Tell webpack to provide empty mocks for them so importing them works.
        node: {
            module: 'empty',
            dgram: 'empty',
            dns: 'mock',
            fs: 'empty',
            http2: 'empty',
            net: 'empty',
            tls: 'empty',
            child_process: 'empty',
        },
        // Turn off performance processing because we utilize
        // our own hints via the FileSizeReporter
        performance: false,
    };
};
