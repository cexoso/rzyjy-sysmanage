const webpack = require("webpack");
const path = require("path");
const CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

const timestamp = new Date().getTime().toString();
const outpath = "[name].bundle.js";

module.exports = {
    module: {
        loaders: [{
            test: /\.tsx?$/,
            loader: "babel-loader!ts-loader",
            include: [
                path.join(__dirname, '/ts'),
                path.join(__dirname, '/node_modules/ts-react-app-infrastructure'),
                path.join(__dirname, '/node_modules/ts-react-app-web')
            ]
        }, {
            test: /.(png|jpg|gif)$/,
            loader: 'url-loader?limit=8192',
            include: path.join(__dirname, '/img')

        }, {
            test: /\.(css|less)$/,
            loaders: ["style", "css", "less"],
            include: path.join(__dirname, '/less')

        }]
    },
    entry: {
        vendor: [
            "lodash",
            "iscroll",
            "react",
            "redux",
            "react-dom",
            "react-router",
            "react-redux",
            'react-iscroll',
            'ts-react-app-infrastructure',
            'ts-react-app-web'
        ],
        app: [
            "./ts/index.tsx"
        ]

    },
    output: {
        path: path.join(__dirname, '/bundle'),
        filename: outpath,
        publicPath: '/bundle/'
    },
    resolve: {
        extensions: ['', ".ts", ".tsx", ".js", ".jsx"]
    },
    compiler: {
        stats: {
            colors: true
        }
    },
    plugins: [
        new CommonsChunkPlugin({
            name: "vendor",
            minChunks: Infinity
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};