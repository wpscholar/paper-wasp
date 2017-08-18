/* eslint-disable */

const autoprefixer = require('autoprefixer');
const DashboardPlugin = require('webpack-dashboard/plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const mediaQueryPacker = require('css-mqpacker');
const webpack = require('webpack');

const browsers = require('./browsers.json');

const isProduction = process.env.NODE_ENV === 'production';
const showDashboard = process.env.DASHBOARD === 'yes';

const cssFileExtension = isProduction ? '.min.css' : '.css';
const jsFileExtension = isProduction ? '.min.js' : '.js';

const extractCSS = new ExtractTextPlugin(`assets/css/[name]${cssFileExtension}`);

const config = {
    entry: {
        'paper-wasp': [
            './source/js/polyfills/object-assign.js',
            './source/js/polyfills/array-from.js',
            './source/js/paper-wasp',
            './source/scss/paper-wasp.scss',
        ],
        'paper-wasp-editor': [
            'sanitize-html',
            './source/js/polyfills/object-assign.js',
            './source/js/polyfills/array-from.js',
            './source/scss/paper-wasp-editor.scss',
            './source/js/paper-wasp-editor'
        ],
        'paper-wasp-component-registry': [
            './source/js/paper-wasp-component-registry'
        ]
    },
    output: {
        path: __dirname,
        filename: `assets/js/[name]${jsFileExtension}`
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        modules: [
            './source/js/modules',
            './source/js/components',
            './node_modules',
            './bower_components'
        ]
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: extractCSS.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader?-url',
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: () => [autoprefixer({browsers}), mediaQueryPacker()]
                            }
                        },
                    ]
                })
            },
            {
                test: /\.(scss|sass)$/,
                use: extractCSS.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader?sourceMap&-url',
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: () => [autoprefixer({browsers}), mediaQueryPacker()]
                            }
                        },
                        'sass-loader?sourceMap&outputStyle=compact'
                    ]
                })
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        ['babel-preset-env', {modules: false, targets: {browsers: browsers}}],
                        'babel-preset-flow'
                    ],
                    plugins: [
                        'transform-class-properties',
                        'transform-object-rest-spread'
                    ]
                }
            },
            {
                test: /\.jsx$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        ['babel-preset-env', {modules: false, targets: {browsers: browsers}}],
                        'babel-preset-react',
                        'babel-preset-flow'
                    ],
                    plugins: [
                        'transform-class-properties',
                        'transform-object-rest-spread'
                    ]
                }
            },
            {
                test: require.resolve('react'),
                use: 'expose-loader?React',
            },
            {
                test: require.resolve('react-dom'),
                use: 'expose-loader?ReactDOM'
            },
            {
                test: require.resolve('sanitize-html'),
                use: 'expose-loader?sanitizeHtml',
            },
            {
                test: require.resolve('lodash'),
                use: ['imports-loader?define=>false&window=>{}']
            }
        ]
    },
    plugins: [
        extractCSS,
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        })
    ],
    devtool: 'source-map'
};

if (showDashboard) {
    config.plugins.push(new DashboardPlugin());
}

module.exports = config;
