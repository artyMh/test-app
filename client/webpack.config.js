import HtmlWebpackPlugin from 'html-webpack-plugin';
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './app/index.html',
    filename: 'index.html',
    inject: 'body'
});

export default {
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'index_bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.woff$/, loader: "url-loader?limit=10000&mimetype=application/font-woff&name=[path][name].[ext]" },
            { test: /\.woff2$/, loader: "url-loader?limit=10000&mimetype=application/font-woff2&name=[path][name].[ext]" },
            { test: /\.(eot|ttf|svg|gif|png)$/, loader: "file-loader" }
        ]
    },
    devServer: {
		proxy: {
			"/": "http://127.0.0.1:3001",
		}
	},
    plugins: [HtmlWebpackPluginConfig]
};
