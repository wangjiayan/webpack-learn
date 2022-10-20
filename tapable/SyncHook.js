const { SyncHook } = require("tapable");

// 1、创建钩子实例
const compiler = new SyncHook()

// 2、调用订阅接口注册回调
compiler.tap('plugin1',()=>{
  console.log('我是插件1')
  // callback()
})
compiler.tap('plugin2',()=>{
  console.log('我是插件2')
})
compiler.tap('plugin3',()=>{
  console.log('我是插件3')
})
// 3、调用之后，会按顺序执行回调
// compiler.call()

compiler.callAsync((err)=>{
  if (err) {
    // 错误处理逻辑
  }
})