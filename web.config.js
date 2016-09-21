var webpack = require('webpack');
var path = require('path');

module.exports={
	devtools:'inline-source-map',
	entry:[
		'webpack-dev-server/client?http://127.0.0.1:8080',
		'webpack/hot/only-dev-server',
		'./src'
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
		loaders:{
			test:/\.jsx?$/,
			exclude:/node_modules/,
			loader:['react-hot','babel?presets[]=react,preset[]=es2015']
		}
	},
	plugins:{
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	}
};