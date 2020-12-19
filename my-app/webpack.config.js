
  const path = require('path');

  module.exports = {
    entry: {
      app:'./src/index.js',
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist')
    },
    devServer:{//告诉开发服务器，在哪里查找文件
      contentBase:'./dist'
    },
    module: {
     rules: [
       {         
        test: /\.css$/,
         use: [
           'style-loader',
           'css-loader'
         ]
       },
       {
         test:/\.(png|svg|jpg|gif)$/,
         use:[
           'file-loader'
         ]
       },
       {
         test:/\.(woff|woff2|eot|ttf)$/,
         use:[
           'file-loader'
         ]
       },
       {
         test:/\.js|jsx$/,use:'babel-loader',exclude:/node_modules/
        }
    ],
    
    },

};