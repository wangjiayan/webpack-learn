#### 第二节课作业
1. 对 webpack 运行时代码进行调试与理解

2. webpack 的模块加载器是如何实现的
__webpack_require__
功能：根据传入的moduleId，返回具体的模块内容。
实现：
- 用一个闭包cachedModule缓存所有变量
  - 如果cachedModule能读到moduleId，直接返回。
  - 没有的话，则去__webpack_modules__去找到对应模块，赋值给cachedModule，并将找到的模块返回

3. webpack 的运行时代码做了那些事情

（1）构建出模块数组：__webpack_modules__
（2）实现了一个模块加载器：__webpack_require__
（3）执行模块代码