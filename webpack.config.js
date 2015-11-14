var webpack = require("webpack");
var yargs   = require("yargs");
var path    = require("path");

var argv = yargs
	.boolean("p").alias("p", "optimize-minimize")
	.boolean("h").alias("h", "hot")
	.argv;

module.exports = {

	entry: {
		main: path.join(__dirname, "src", "app", "entrypoints", "main.js")
	},

	output: {
		path:       path.join(__dirname, "dist", "app"),
		filename:   "[name].js",
		publicPath: "/app/"
	},

	module: {
		loaders: [
			{
				test:    /fetch.js$/,
				loaders: ["exports?fetch=window.fetch.bind(window),Headers=window.Headers,Request=window.Request,Response=window.Response"]
			},

			{
				test:    /\.js$/,
				exclude: [/node_modules/],
				loaders: (function() {
					var loaders = [];

					if (argv.h) {
						loaders.push("react-hot");
					}

					loaders.push("babel");

					return loaders;
				})()
			},

			{
				test:    /\.styl$/,
				loaders: [
					"style",
					"css",
					"autoprefixer?browsers=last 2 version",
					"stylus"
				]
			},

			{
				test:    /\.css$/,
				loaders: [
					"style",
					"css",
					"autoprefixer?browsers=last 2 version"
				]
			},

			{
				test:    /\.(png|jpg|gif)$/,
				loaders: (function() {
					var loaders = [];

					loaders.push("url?limit=50000");

					return loaders;
				})()
			},

			{
				test:    /\.(ttf|eot|woff|svg)$/,
				loaders: [
					"file"
				]
			}
		]
	},

	resolve: {
		extensions:         ["", ".js"],
		root:               [
			path.join(__dirname, "src", "app")
		],
		modulesDirectories: ["web_modules", "node_modules", "src"]
	},

	cache:   !argv.p,
	debug:   !argv.p,
	devtool: !argv.p ? "source-map" : false,

	stats: {
		colors:  true,
		reasons: !argv.p
	},

	plugins: (function() {
		var plugins = [];

		plugins.push(
			new webpack.DefinePlugin({
				"process.env.NODE_ENV": JSON.stringify(argv.p ? "production" : "development"),
				"__DEV__":              !argv.p
			})
		);

		if (argv.p) {
			plugins.push(new webpack.optimize.DedupePlugin());
			plugins.push(new webpack.optimize.UglifyJsPlugin({
				compress: {
					warnings: false
				}
			}));
			plugins.push(new webpack.optimize.OccurenceOrderPlugin());
			plugins.push(new webpack.optimize.AggressiveMergingPlugin());
		}

		if (argv.h) {
			plugins.push(new webpack.NoErrorsPlugin());
		}

		return plugins;
	})()
};
