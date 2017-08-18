/* eslint-disable */
const webpack = require('webpack');

const browsers = [
  "last 3 versions",
  ">1%",
  "not ie < 10",
  "not OperaMini all"
];

const isProduction = process.env.NODE_ENV === 'production';
const jsFileExtension = isProduction ? '.min.js' : '.js';

const config = {
    entry: {
        'component': [
            './class'
        ],
        'component-editor': [
            './class-editor'
        ],
    },
    output: {
        path: __dirname,
        filename: `assets/[name]${jsFileExtension}`
    },
    externals: {
        react: 'React'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        modules: [
            '../modules',
            '..',
            './node_modules'
        ]
    },
    module: {
        rules: [
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
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        })
    ],
    devtool: 'source-map'
};

module.exports = config;
