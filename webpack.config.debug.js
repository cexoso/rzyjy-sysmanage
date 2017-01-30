const webpack = require("webpack");
const path = require("path");
const CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

module.exports = {
    module: {
        loaders: [
            /*{
                        test: /\.jsx?$/,
                        loader: "react-hot!babel-loader?presets[]=react,presets[]=es2015",
                        include: path.join(__dirname, '/ts')
                    },*/
            {
                test: /\.tsx?$/,
                loader: "react-hot!babel-loader!awesome-typescript-loader",
                include: [
                    path.join(__dirname, '/ts'),
                    path.join(__dirname, '/node_modules/ts-react-app-infrastructure'),
                    path.join(__dirname, '/node_modules/ts-react-app-web')
                ]
            }, {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=8192',
                include: path.join(__dirname, '/img')

            }, {
                test: /\.(css|less)$/,
                loaders: ["style", "css", "less"],
                include: path.join(__dirname, '/less')

            }
        ],
        preLoaders: [{
            test: /\.js$/,
            loader: "source-map-loader",
            include: path.join(__dirname, '/ts')
        }, ]
    },
    entry: {
        vendor: [
            "lodash",
            "react",
            "redux",
            "react-dom",
            "react-router",
            "react-redux",
            'ts-react-app-infrastructure',
            'ts-react-app-web'
        ],
        app: [
            'webpack-dev-server/client?http://localhost:3000', // WebpackDevServer host and port
            'webpack/hot/dev-server', // "only" prevents reload on syntax errors
            "./ts/index.tsx"
        ]
    },
    output: {
        path: path.join(__dirname, '/bundle'),
        filename: "[name].bundle.js",
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
        new webpack.HotModuleReplacementPlugin(),
        new CommonsChunkPlugin({
            name: "vendor",
            minChunks: Infinity
        })
    ],
    devtool: 'inline-source-map'
};