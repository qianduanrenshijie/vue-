 var htmlwp = require('html-webpack-plugin');

 module.exports = {
 	entry: './src/main.js', //入口文件
 	output: {
 		path: __dirname + '/build',
 		filename: 'build.js',
 	},
 	module:{
 		loaders:[
	 		{
	 			test:/\.css$/, //打包css文件
	 			loader:'style-loader!css-loader',
	 		},
	 		{
	 			test:/\.less$/, //打包less文件
	 			loader:'style-loader!css-loader!less-loader',
	 		},
	 		{
	 			test:/\.(jpg|png|gif|$)/,//url打包
	 			loader:'url-loader?limit=40000',
	 		},
	 		{
	 			test:/\.vue$/,
	 			loader:'vue-loader'
	 		}
 		]
 	},
 	plugins:[
        new htmlwp({
          title: '首页',  //生成的页面标题<head><title>首页</title></head>
          filename: 'index.html', //webpack-dev-server在内存中生成的文件名称，自动将build注入到这个页面底部，才能实现自动刷新功能
          template: 'index1.html' //根据index1.html这个模板来生成(这个文件请程序员自己生成)
        })
    ]
 }
