
var debug=process.env.NODE_ENV !== "production";
var webpack = require('webpack')

var path = require('path');
var DIST_DIR = path.resolve(__dirname,"dist");
var SRC_DIR = path.resolve(__dirname,"src");

module.exports = {
	context:__dirname,
	devtool: debug ? "inline-sourcemap" : null,
	entry:SRC_DIR + "/js/index.js",
	output:{
		path:DIST_DIR,
		filename:"bundle.js"		
	},
	module:{
		loaders:[{
			tests:/\.js?$/,
			include:SRC_DIR,
			exclude:/(node_modules|bower_components)/,
			loader: 'babel',
			query:{
				presets:["react","es2015","stage-0"]
			}
		}]
	},
	resolve: {
    	extensions: ['', '.js', '.jsx']
  	},	
	plugins: debug ? []:[
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsplugin({mangle:false, sourcemap:false}),
	],
};
/*module.exports={
	devtools:'inline-source-map',
	entry:[
		'webpack-dev-server/client?http://127.0.0.1:8080',
		'webpack/hot/only-dev-server',
		'./app'
	],
	output:{
		path:path.join(_dirname,'public'),
		filename:'bundle.js'
	},
	resovle:{
		modulesDirectories:['node_modules','src'],
		extensions:['','.js']
	},
	module:{
		loaders:[
		{
			test:/\.jsx?$/,
			exclude:/node_modules/,
			loaders:['react-hot','babel?presets[]=react,presets[]=es2015']
		}
		]
	},
	plugins:{
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	}
};*/