#### 第一节课作业

1. 使用 `webpack api` 打包一个最简的 js 资源
方式1：
通过cli的方式：
结果没有人与代码
   ```bash
   npx webpack ./sum.js
   ```


2. 你所使用含有 webpack 的项目中，`webpack` 是通过 `webpack-cli` 打包的吗？
   - 是的，执行webpack命令，会执行`webpack`包对应的`bin/webpack`文件，然后继续调用`webpack-cli`包。
   - 调用执行 [webpack-cli](https://github.com/webpack/webpack-cli/tree/master/packages/webpack-cli) 包对应的 `bin/cli.js` 文件，然后继续调用 `webpack` 包
   - 调用执行 `webpack` 包的 API 进行打包
   
3. 如何计算每次 webpack 构建时间

4. 断点调试 webpack 源码，了解其编译时间（startTime/endTime）是如何计算的

问题：webpack