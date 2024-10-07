const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const PATHS = {
	SRC: path.join(__dirname, "src"),
	DIST: path.join(__dirname, "dist"),
	PUBLIC: path.join(__dirname, "public"),
};

module.exports = {
	entry: path.resolve(PATHS.SRC, "index.js"),
	output: {
		filename: "[name].[fullhash].js",
		publicPath: '/',
		path: path.resolve(PATHS.DIST),
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
					},
				},
			},
			{
				test: /\.s[ac]ss$/,
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: { sourceMap: true, url: false },
					},
					"sass-loader",
				],
			},
			{
				test: /\.css$/,
				use: ["style-loader", {
					loader: "css-loader",
					options: { sourceMap: true, url: false },
				},],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(PATHS.PUBLIC, "index.html"),
			inject: "body",
		}),
	],
};