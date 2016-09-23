var path = require('path');

var DIST_DIR = path.resolve(__dirname,"dist");
var SRC_DIR = path.resolve(__dirname,"src");

module.exports = {
	entry:SRC_DIR + "/app/index.js",
	output:{
		path:DIST_DIR + "/app",
		filename:"bundle.js",
		publicPath:"/app/"
	},
	module:{
		loaders:[{
			tests:/\.js?$/,
			include:SRC_DIR,
			loader:"babel-loader",
			query:{
				presets:["react","es2015","stage-2"]
			}
		}]
	}
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