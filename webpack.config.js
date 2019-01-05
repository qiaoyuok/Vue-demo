const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: path.join(__dirname,'./src/main.js'), //入口，表示要使用webpack打包的那个文件
  output:{  //输出文件相关配置
    path:path.join(__dirname,'./dist') , // 指定打包好的文件 输出到哪个目录
    filename:'bundle.js'  //指定输出的文件
  },
  plugins:[
    new VueLoaderPlugin()
  ],
  module:{
    rules:[
      {test:/\.css/,use:['style-loader','css-loader']},
      {test: /\.scss/, use: ['style-loader', 'css-loader','sass-loader']},
      {test:/\.js/,use:'babel-loader',exclude:/node_modules/},
      {test:/\.(ttf|eot|svg|woff|woff2)/,use:['url-loader']},
      {test:/\.vue/,use:"vue-loader"},
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.js'  //设置导入vue的报的路径
    }
  },
  mode:'none'
}
