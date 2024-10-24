const { default: merge } = require("webpack-merge");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpackConfig = require("./webpack.config");

module.exports = merge(webpackConfig, {
	mode: "development",
	output: {
		filename: "[name].js",
	},
	devServer: {
		port: 9999,
		hot: true,
		open: false,
	},
	devtool: 'source-map',
	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].css",
		})
	]
});
