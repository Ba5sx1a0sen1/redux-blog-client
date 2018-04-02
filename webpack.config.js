const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module:{
    rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env','@babel/react'],
              plugins: ["transform-class-properties"]//启用class properties语法，要结合此插件
            },
          }
        },{
            test:/\.css$/,
            use:ExtractTextPlugin.extract({
                fallback:'style-loader',
                use:'css-loader'
            })
        }
      ]
  },
  plugins:[new HtmlWebpackPlugin({
      template:'./src/index.html'
  }),new ExtractTextPlugin("style.css")],
  mode:'development',
  devServer:{
      contentBase:'./dist',
      historyApiFallback:true, //React-Router的关键点
      // publicPath:'/dist/'    坑点，会导致页面刷新
  }
};