#### webpack

1、全局安装 npm install  webpack -g

​		       npm install webpack@^4.39.2 

​			npm install --save-dev webpack-cli@^3.3.7 

2、项目安装步骤

​	1）创建站点

​	2）、npm init 初始化项目文件

​	3) 、npm install webpack@^4.39.2 --save-dev

​		npm install webpack-cli@^3.3.7 --save-dev

​	4）、安装官网简历测试文件和目录https://www.webpackjs.com/guides/getting-started/

​		加载lodash

​		webpack.config.js

​		多文件输入和输出

​	5）、css加载（css-loader、style-loader）

​	6）、图片加载、字体加载、json加载（file-loader）

​	7）、下载插件

​	8）、安装服务器webpack-dev-server

​		如果遇到npm install出现"Unexpected end of JSON input while parsing near"错误解决方法

​		执行：npm cache clean --force （删除缓存）

#### react

1、安装babel-loader相关信息参照网址（webpack官网）：<https://www.webpackjs.com/loaders/babel-loader/#%E4%B8%AD%E6%96%87%E6%96%87%E6%A1%A3> 

​	npm install babel-loader @babel/core @babel/preset-env  --save-dev(--save-dev可以用-D来代替)

2、安装babel支持的react的API（babel/preset-react）

​	npm install --save-dev @babel/preset-react

3、新建系统文件.babelrc(让webpack和es6支持reactAPI)

{
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
    ],
    "plugins": []
}

4、安装react核心库：npm install react react-dom -D

5、配置webpack.config.js,把babel-loader加入rules，参照内容webpack官网（{test: /\.js|jsx$/,use: 'babel-loader',exclude: /node_modules/}）

6、在index.html里添加一个div（<div id="app"></div> ）

7、修改index.js（利用react写组件）

​import _ from 'lodash';
import React from 'react';  
import ReactDOM from 'react-dom' ;   
ReactDOM.render((
    <div>hello react</div>
), document.getElementById('app'));

8、运行 npm start测试