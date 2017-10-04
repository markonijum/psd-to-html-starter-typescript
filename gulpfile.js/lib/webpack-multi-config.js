const config = require('../config/scripts');
const root = require('../config/index');
const path = require('path');
const webpack = require('webpack');
const webpackManifest = require('./webpackManifest');

const webpackExports = (env) => {
    const filenamePattern = env === 'production' ? '[name]-[hash].js' : '[name].js';

    const webpackConfig = {
        devtool: 'inline-source-map',
        cache: false,
        entry: config.ts.entry,
        resolve: {
            extensions: ['.ts', '.tsx', '.js']
        },
        output: {
            path: path.resolve(config.dest),
            publicPath: '/js/',
            filename: filenamePattern,
        },
        module: {
            loaders: [
                {
                    test: /\.jsx?$/,
                    loader: 'babel-loader',
                    query: {
                        // https://github.com/babel/babel-loader#options
                        cacheDirectory: true,
                        presets: [
                            ['env', {
                                targets: {
                                    browsers: ['last 2 versions'],
                                },
                            }],
                          'react'  
                        ],
                    },
                    exclude: /(node_modules|bower_components)/,
                },
                { test: /\.tsx?$/, loader: 'ts-loader' }
            ],
        },
        plugins: [],
    };

    if (env === 'development') {
        webpackConfig.devtool = 'source-map';
        webpack.debug = true;
    }

    if (env === 'production') {
        webpackConfig.plugins.push(
            webpackManifest('/js/', root.buildPath),
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify('production'),
                },
            }),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false,
                    drop_console: true,
                },
                output: {
                    comments: false,
                },
            }),
            new webpack.NoEmitOnErrorsPlugin(),
        );
    }

    return webpackConfig;
};

module.exports = webpackExports;
