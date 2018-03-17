## blog
personal blog
## focus
### webpack4 
1. mode: 模式配置
- production模式
    - 默认提供所有可能的优化，如代码压缩/作用域提升等
    - 不支持watching
    - process.env.NODE_ENV的值不需要再定义，默认是production
```js
 /** webpack.production.config.js **/
   // webpack 2/3 
   module.exports = {
       plugins: [
        new UglifyJsPlugin(/* ... */),
        new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("production") }),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
       ]
     }
     
   // webpack 4  
   module.exports = {
   	mode: 'production'
   }
```
- development 模式：
    - 主要优化了增量构建速度和开发体验
    -  process.env.NODE_ENV的值不需要再定义，默认是development
    - 开发模式下支持注释和提示，并且支持eval下的source maps
```js
   /** webpack.development.config.js **/
   // webpack 2/3 
   module.exports = {
       plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("development") })
       ]
     }
     
   // webpack 4  
   module.exports = {
   	mode: 'development'
   }
```
- 此外, webpack 4 还提供一种隐藏(none)模式，这种模式下会禁用一切优化

  [Webpack 4 不完全迁移指北 #60
](https://github.com/dwqs/blog/issues/60)


