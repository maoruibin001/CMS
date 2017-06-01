# CMS前后端工程

## 简介
*本项目使用nodejs + angular + bootstrap + jquery，搭建一个本地前后端继承CMS系统，可用于评论，新闻等网站。
准备加入webpack构建之后作为自己个人网站的评论模块，如果喜欢，请持续关注。
## 目录结构
```
+app    后端(nodejs)项目目录
+bin    node服务器目录
+config 项目配置目录
+public 前端代码目录
+test   单元测试目录
```

## 注意事项
* JS使用ES6/ES5语法(后续集成webpack之后会统一使用ES6)
* 第三方库，例如jquery、bootstrap、angularjs等需要配置在package.json中

## 第三方库参考文档
* webpack https://webpack.js.org/
* moment(时间处理库) http://momentjs.cn/

## 依赖安装
* 安装node
* 安装全局的npm
* 安装工程依赖
```
cd path/to/project
npm install(此处要安装两次，前后端依赖两个package.json都要安装)
```

## 打包
* 待完善
```
webpack dev
```

* 上线打包，代码将生成到dist目录，并且对代码进行压缩混淆、inline等(待完善)
```
webpack build
```
